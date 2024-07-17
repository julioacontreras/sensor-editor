import type { Asset } from './asset'

export const BOUND_NULL = 0
export const BOUND_INTERFACE = 1
export const BOUND_3D = 2
export const BOUND_SPRITE = 3

export type SymbolCanvas = {
  name: string
  typeBound: number
  assets: Asset[]
  position: {
    x: number
    y: number
    z: number
  }  
}
