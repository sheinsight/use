import { useCreation } from '../use-creation'
import { isNumber, isObject } from '../utils/basic'

import { generateLoremIpsum } from './generate-lorem-ipsum'
export { generateLoremIpsum } from './generate-lorem-ipsum'

export interface UseLoremIpsumOptions {
  /**
   * The length of the generated text sentence.
   *
   * @defaultValue 1
   */
  length?: number
  /**
   * The minimum number of words in a sentence.
   *
   * @defaultValue ['.', '!', '?']
   */
  sentenceEnds?: string[]
  /**
   * Whether to keep the same value between renders.
   *
   * @defaultValue true
   */
  stable?: boolean
}

/**
 * A React Hook that helps to generate [Lorem Ipsum](https://www.lipsum.com/) text. Useful for testing and placeholder text.
 */
export function useLoremIpsum(n?: number): string
export function useLoremIpsum(options?: UseLoremIpsumOptions): string
export function useLoremIpsum(arg?: number | UseLoremIpsumOptions): string {
  const stable = isObject(arg) ? arg.stable : true
  const stableState = useCreation(() => getUseLoremIpsumReturn(arg), [arg])
  return stable ? stableState : getUseLoremIpsumReturn(arg)
}

export function getUseLoremIpsumReturn(arg?: number | UseLoremIpsumOptions): string {
  if (isNumber(arg)) return generateLoremIpsum(arg)
  if (isObject(arg)) return generateLoremIpsum(arg.length)
  return generateLoremIpsum(arg)
}
