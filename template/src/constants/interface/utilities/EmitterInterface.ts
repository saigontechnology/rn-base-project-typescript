interface IDataRefs {
  eventName: string
  callback: (param: any) => void
}

export type IRefs = {[key: string]: IDataRefs}

export type EmitterListener = {
  count: number
  refs: IRefs
}
