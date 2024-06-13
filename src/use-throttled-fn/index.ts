import { useCreation } from '../use-creation'
import { useLatest } from '../use-latest'
import { throttle as createThrottledFn } from '../utils'

import type { AnyFunc, ThrottleOptions } from '../utils'

export interface UseThrottledFnOptions extends ThrottleOptions {}

export function useThrottledFn<T extends AnyFunc, P extends Parameters<T>>(
  fn: T,
  options: UseThrottledFnOptions = {},
): T & { clear(): void } {
  const latestFn = useLatest(fn)

  return useCreation(() => {
    const fnWrapper = ((...args: P) => latestFn.current(...args)) as T
    return createThrottledFn(fnWrapper, options)
  }, [options])
}
