import * as THREE from 'three'
import { Size } from '@/types/size'

export const createRender = (size: Size) => {
  const renderer = new THREE.WebGLRenderer( { antialias: true, alpha: true } )
  renderer.setClearColor(0x000000, 0)
  renderer.autoClear = false
  renderer.setPixelRatio( size.w / size.h )
  renderer.setSize(size.w, size.h)
  return renderer
}