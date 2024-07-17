import * as THREE from 'three'

export const createRender = (w: number, h: number) => {
  const renderer = new THREE.WebGLRenderer( { antialias: true, alpha: true } )
  renderer.setClearColor(0x000000, 0)
  renderer.autoClear = false
  renderer.setSize(w, h)
  renderer.setPixelRatio( window.devicePixelRatio )
  return renderer
}