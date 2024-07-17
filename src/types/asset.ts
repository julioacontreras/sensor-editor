export enum TypeSymbolCanvas {
  NULL = 0,
  LINE,
  RECT,
  TEXT,
  ICON
}

export type Asset = {
  typeAsset: TypeSymbolCanvas
  attributes: unknown
  order: number
}
