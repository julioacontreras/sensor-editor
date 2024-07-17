import * as THREE from 'three'

export const createCameraOrthographic = (w: number, h: number) => {
  const camera = new THREE.OrthographicCamera(- w / 2,  w / 2, h / 2, -h / 2, 0, 30);
  camera.position.set( 500, 800, 1300 )
  camera.lookAt(0, 0, 0)
  return camera
}