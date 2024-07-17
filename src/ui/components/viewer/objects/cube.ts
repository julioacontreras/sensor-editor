import * as THREE from 'three'

export const createCube = () => {
  const geometry = new THREE.BoxGeometry( 20, 20, 20 );
  const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
  return new THREE.Mesh( geometry, material );
}