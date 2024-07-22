import * as THREE from 'three'
import { Size } from '@/types/size'
      
export const createCameraPerspective = (size: Size) => {
  const camera = new THREE.PerspectiveCamera(45, size.w / size.h, 1, 10000)
  camera.aspect = size.w / size.h;
  camera.updateProjectionMatrix();
  camera.position.set( 0, 0, 0 )
  camera.lookAt(0, 0, 0)
  return camera
}