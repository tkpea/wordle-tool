import {words} from "./data/words"


export type Conditions = {
  goodLetter: string
  badLetter: string
  placementWords:  (string | undefined)[]
}
export function getAllCandidates(conditions?: Conditions,): Array<string> {
  if(!conditions) return words
  const result = words.reduce((items: Array<string>, current: string) => {
    const goodItems = conditions.goodLetter.split("").reduce((res: Array<string>, cur: string) => {
      const good = res.filter((v) => {
        return v.includes(cur)
      })
      return [...good]
    },items)

    const badItems = conditions.badLetter.split("").reduce((res: Array<string>, cur: string) => {
      const bad = res.filter((v) => {
        return !v.includes(cur)
      })
      return [...bad]
    },goodItems)

    const placementItems = conditions.placementWords.reduce((res: Array<string>, cur: string | undefined, index) => {
      return res.filter((v) => {
        return !cur ||  v.split("")[index] === cur
      })
    },badItems)

    return [...placementItems]
  }, words)

  return result
}