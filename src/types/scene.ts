import type { Camera } from './camera'
import { Object3D } from './object-3d'

export type Scene = {
  name: string,
  objects: Object3D[]
  size: {
    w: number
    h: number
  },
  cameras: Camera[]
  selectedCamera: number
}