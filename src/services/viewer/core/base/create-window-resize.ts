import * as THREE from 'three'

export const createOnWindowResize = (w: number, h: number, camera: THREE.PerspectiveCamera, renderer: THREE.Renderer, render: () => void) => {
  const onWindowResize = () => {
    camera.aspect = w / h
    camera.updateProjectionMatrix()
    renderer.setSize( w, h )
    render()
  }
  return onWindowResize
}