import * as THREE from 'three'

export const createFloor = (scene: THREE.Scene) => {
  const gridHelper = new THREE.GridHelper( 1000, 20 )
  scene.add( gridHelper );
  const geometry = new THREE.PlaneGeometry( 1000, 1000 )
  geometry.rotateX( - Math.PI / 2 )
  const plane = new THREE.Mesh( geometry, new THREE.MeshBasicMaterial( { visible: false } ) )
  scene.add(plane)
  return plane
}
