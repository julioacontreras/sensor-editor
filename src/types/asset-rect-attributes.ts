export type RectAttributes = {
  name: string
  rounded?: number,
  smooth?: number,
  size: {
    w: number
    h: number
  },
  position: {
    x: number
    y: number
    z: number
  },
  backgroundColor: number
  behaviorId?: number
  renderOrder: number
  renderOnTop: boolean
  opacity?: number
  visible: boolean  
}