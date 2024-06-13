import { useEffect } from 'react'
import { useEventListener } from '../use-event-listener'
import { useLatest } from '../use-latest'
import { useMutationObserver } from '../use-mutation-observer'
import { useResizeObserver } from '../use-resize-observer'
import { useSafeState } from '../use-safe-state'
import { useStableFn } from '../use-stable-fn'
import { ensureSSRSecurity } from '../utils'
import { normalizeElement, useTargetElement } from '../use-target-element'

import type { ElementTarget } from '../use-target-element'

export interface UseElementBoundingOptions {
  /**
   * Reset the bounding box when the element is not found
   *
   * @default true
   */
  reset?: boolean
  /**
   * Update the bounding box when the window is resized
   *
   * @default true
   */
  windowResize?: boolean
  /**
   * Update the bounding box when the window is scrolled
   *
   * @default true
   */
  windowScroll?: boolean
}

export type UseElementBoundingReturn = [
  {
    /**
     * The height of the element
     */
    height: number
    /**
     * The bottom position of the element
     */
    bottom: number
    /**
     * The left position of the element
     */
    left: number
    /**
     * The right position of the element
     */
    right: number
    /**
     * The top position of the element
     */
    top: number
    /**
     * The width of the element
     */
    width: number
    /**
     * The x position of the element
     */
    x: number
    /**
     * The y position of the element
     */
    y: number
  },
  /**
   * Update the bounding box of the element
   */
  update: () => void,
]

const defaultElBounding = { x: 0, y: 0, height: 0, width: 0, top: 0, right: 0, bottom: 0, left: 0 }

export function useElementBounding<T extends HTMLElement = HTMLElement>(
  target: ElementTarget<T>,
  options: UseElementBoundingOptions = {},
): UseElementBoundingReturn {
  const { reset = true, windowResize = true, windowScroll = true } = options
  const el = useTargetElement<T>(target)

  const [bounding, setBounding] = useSafeState(
    ensureSSRSecurity(() => getElBounding(target), { ...defaultElBounding }),
    { deep: true },
  )

  const latest = useLatest({ reset })

  const update = useStableFn(() => {
    if (!el.current) {
      latest.current.reset && setBounding({ ...defaultElBounding })
      return
    }

    const rect = getElBounding(el.current)
    const { height, bottom, left, right, top, width, x, y } = rect

    setBounding({ x, y, height, width, top, right, bottom, left })
  })

  // biome-ignore lint/correctness/useExhaustiveDependencies: effect need to re-run when reset, windowResize or windowScroll changes
  useEffect(() => void update(), [reset, windowScroll, windowResize])

  useResizeObserver(el, update)
  useMutationObserver(el, update, { attributeFilter: ['style', 'class'] })

  useEventListener(() => window, windowScroll ? 'scroll' : [], update, { capture: true, passive: true })
  useEventListener(() => window, windowResize ? 'resize' : [], update, { passive: true })

  return [bounding, update] as const
}

function getElBounding<T extends HTMLElement>(target: ElementTarget<T>): UseElementBoundingReturn[0] {
  const el = normalizeElement(target)

  if (!el) return defaultElBounding

  return el.getBoundingClientRect()
}
