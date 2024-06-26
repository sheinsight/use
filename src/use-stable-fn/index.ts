import { useRef } from 'react'
import { useLatest } from '../use-latest'

import type { AnyFunc, WithThis } from '../utils/basic'

/**
 * A React Hook that returns a function whose memory address will never change.
 */
export function useStableFn<T extends AnyFunc>(fn: T): T {
  const latest = useLatest({ fn })

  const stableFnRef = useRef<WithThis<T>>(function (this, ...args) {
    return latest.current.fn.apply(this, args)
  })

  return stableFnRef.current as T
}
