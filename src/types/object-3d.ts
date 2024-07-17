
export enum TypeObject3D {
  SYMBOL = 0,
  MESH
}

export type Object3D = {
  position: {
    x: number,
    y: number,
    z: number,
  },
  typeObject: TypeObject3D,
  attributes: unknown
  objects: Object3D[]
}