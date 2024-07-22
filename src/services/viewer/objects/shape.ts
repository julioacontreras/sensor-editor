import * as THREE from 'three'
import { RoundedRectangle } from './rounded-rectangle'
import { RectAttributes } from '@/types/asset-rect-attributes'

export const createShape = (scene: THREE.Scene, attr: RectAttributes) => {
  const geometry = RoundedRectangle(attr.size.w, attr.size.h, attr.rounded || 2, attr.smooth || 15)
  const material = new THREE.MeshBasicMaterial({ color: attr.backgroundColor, opacity: attr.opacity || 1})
  const mesh = new THREE.Mesh(geometry, material)
  mesh.position.x = attr.position.x
  mesh.position.y = attr.position.y
  mesh.position.z = attr.position.z
  mesh.material.depthTest = !attr.renderOnTop
  mesh.renderOrder = attr.renderOrder
  mesh.visible = attr.visible
  mesh.name = attr.name
  scene.add(mesh)
  return mesh
}