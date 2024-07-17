export enum TypeIcon {
  IMAGE = 0,
  SVG
}

export type IconAttributes = {
  source: string,
  typeIcon: TypeIcon,
  size: {
    w: number
    h: number
  },
  position: {
    x: number
    y: number
  },
  backgroundColor: string
  behaviorId: number
}