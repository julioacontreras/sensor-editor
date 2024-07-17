import type { Camera } from './camera'

export type Scene = {
  name: string,
  size: {
    w: number,
    h: number
  },
  camera: Camera
}