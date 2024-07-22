import * as THREE from 'three'

import { createCameraPerspective } from './core/base/create-camera-perspective'
import { createScene } from './core/base/create-scene'
import { createLights } from './core/base/create-ligths'
import { createRender } from './core/base/create-render'
//import { createOnWindowResize } from '../../core/base/create-window-resize'

import { createCube } from './objects/cube'
import { createShape } from './objects/shape'
import { createText } from './objects/text'
import { createSVG } from './objects/svg'
import { createFloor } from './objects/create-floor'
import { RectAttributes } from '@/types/asset-rect-attributes'
import { Size } from '@/types/size'
import { pointerMove } from './core/base/pointer-move'
import { Offset } from '@/types/offset'

export class Viewer {
  renderer
  camera
  scene
  objects: THREE.Object3D[] = []
  raycaster = new THREE.Raycaster()
  pointer = new THREE.Vector2()
  size: Size = { w: 0, h: 0 }
  offset: Offset = { left: 0, right: 0, top: 0, bottom: 0  }

  constructor(width: number, height: number) {
    this.size.w = width
    this.size.h = height
    this.camera = createCameraPerspective(this.size)
    this.scene = createScene()
    this.renderer = createRender(this.size)
    createLights(this.scene)
    const plane = createFloor(this.scene)
    this.camera.position.x = plane.position.x - 500
    this.camera.position.y = plane.position.y + 900
    this.camera.position.x = plane.position.z - 500
    this.camera.lookAt(plane.position)
    this.camera.updateMatrixWorld()

    this.createCube()
  
    this.start()
  }

  updateOffset(offset: Offset) {
    this.offset = offset
  }
  
  render() {
    this.raycaster.setFromCamera(this.pointer, this.camera)
    const intersects = this.raycaster.intersectObjects(this.scene.children)
    
    if (intersects.length > 0) {
      console.log('pointer', this.pointer)
      console.log('intersects', intersects)
    }

    this.renderer.clear()
    this.renderer.render(this.scene, this.camera)
  }

  createCube(): THREE.Mesh {
    return createCube(this.scene)
  }

  createShape(attr: RectAttributes) {
    const shape = createShape(this.scene, attr)
    shape.lookAt(this.camera.position)
  }

  async createText3D(text: string) {
    const text3D = await createText(text)
    text3D.position.x = this.camera.position.x
    text3D.position.y = this.camera.position.y 
    text3D.position.z = - 200
    if (text3D.material) {
      (text3D.material as THREE.Material).depthTest = false
    }
    text3D.renderOrder = 20
    this.scene.add(text3D)
  }

  // 'src/assets/energy.svg'
  async createSVG(path: string) {
    const svg = await createSVG(path)
    svg.position.x = this.camera.position.x
    svg.position.y = this.camera.position.y 
    svg.position.z = - 200
    this.scene.add(svg)
    return svg
  }

  animate() {
    this.render()
    requestAnimationFrame(this.animate.bind(this))
  }

  start() {
    requestAnimationFrame(this.animate.bind(this))
  }

  getDOM() {
    return this.renderer.domElement
  }

  pointerMouse(event: MouseEvent) {
    return pointerMove(this.pointer, event, this.size, this.offset)
  }

}

export let viewer: Viewer

export const useViewer = (): Viewer => {
  return viewer
}


export const createViewer = (w: number, h: number): void => {
  viewer = new Viewer(w, h)
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  window.viewer = viewer
}

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
if (!viewer) {
  createViewer(900, 725)
}
