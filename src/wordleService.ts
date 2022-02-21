import {words} from "./data/words"


export type Conditions = {
  goodLetter: string
  badLetter: string
  placementWords:  (string | undefined)[]
}
export function getAllCandidates(conditions?: Conditions,): Array<string> {
  if(!conditions) return words
  const goodItems = conditions.goodLetter.split("").reduce((res: Array<string>, cur: string) => {
    return res.filter((v) => {
      return v.includes(cur.toLowerCase())
    })
  },words)

  const badItems = conditions.badLetter.split("").reduce((res: Array<string>, cur: string) => {
    return res.filter((v) => {
      return !v.includes(cur.toLowerCase())
    })
  },goodItems)

  const placementItems = conditions.placementWords.reduce((res: Array<string>, cur: string | undefined, index) => {
    return res.filter((v) => {
      return !cur ||  v.split("")[index] === cur.toLowerCase()
    })
  },badItems)

  return placementItems
}