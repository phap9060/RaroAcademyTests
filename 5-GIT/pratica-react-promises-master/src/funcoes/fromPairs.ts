import { KeyAndValue } from "../../types/keyAndValue";

/**
 * Deve criar um objeto a partir da lista de arrays chave/valor
 * 
 * Ex.: fromPairs(['a', 'a'], ['b': 1], ['c': false]) === { a: 'a', b: 1, c: false }
 * 
 * @param args 
 * @returns 
 */
export const fromPairs = (args: KeyAndValue[]): Record<string, unknown> => {
  let result: Record<string, unknown> = {}
  args.map(arr=>{
    result[arr[0]] = arr[1]
  })
  return result
};