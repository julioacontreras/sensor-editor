import * as THREE from 'three'
      
export const createCameraPerspective = (w: number, h: number) => {
  const camera = new THREE.PerspectiveCamera( 45, w / h, 1, 10000 )
  camera.position.set( 500, 800, 1300 )
  camera.lookAt(0, 0, 0)
  return camera
}