import * as THREE from 'three'
import { RoundedRectangle } from './rounded-rectangle'

export const createShape = (w: number, h: number) => {
  const geometry = RoundedRectangle(w, h, 2, 15)
  const material = new THREE.MeshBasicMaterial({ color: 0x222222, opacity: 0.2 })
  const mesh = new THREE.Mesh(geometry, material)
  return mesh
}