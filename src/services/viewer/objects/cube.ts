import * as THREE from 'three'

export const createCube = (scene: THREE.Scene) => {
  const geometry = new THREE.BoxGeometry( 20, 20, 20 )
  const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } )
  const mesh = new THREE.Mesh(geometry, material)
  mesh.position.x = 0
  mesh.position.y = 0
  mesh.position.z = 0
  scene.add(mesh)
  return mesh
}