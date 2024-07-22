import * as THREE from 'three'
import { createCameraPerspective } from '../../core/base/create-camera-perspective'
import { createScene } from '../../core/base/create-scene'
import { createLights } from '../../core/base/create-ligths'
import { createRender } from '../../core/base/create-render'
import { createOnWindowResize } from '../../core/base/create-window-resize'
import { createFloor } from '../../objects/create-floor'
import { createBaseWall, createWallHelper } from '../../objects/create-wall'
import { createOnPointerMove } from '../../core/interaction/create-pointer-move'
import { createOnPointerDown } from '../../core/interaction/create-pointer-down'
import { createOnDocumentKeyDown } from '../../core/interaction/create-key-down'
import { createOnKeyUp } from '../../core/interaction/create-key.up'

export type FunctionEvent = (event: MouseEvent) => void

export const init = (width: number, height: number) => {
  
  // base
  const camera = createCameraPerspective(width, height)
  const scene = createScene()
  const renderer = createRender(width, height)
  createLights(scene)
  const render = () => {
    renderer.render( scene, camera )
  }
  const onWindowResize = createOnWindowResize(width, height, camera, renderer, render)
  window.addEventListener('resize', onWindowResize)
  
  // helpers
  const wallHelper = createWallHelper(scene)
  const {wallGeometry, wallMaterial} = createBaseWall()
  const raycaster = new THREE.Raycaster();
  const pointer = new THREE.Vector2();
  
  // interativity
  let mode = 'create'
  const getMode = () => {
    return mode
  }
  const setMode = (newMode: string) => {
    mode = newMode
  }
  const objects: THREE.Object3D[] = [];
  const floor = createFloor(scene, objects)
  const onPointerMove = createOnPointerMove(width, height, pointer, raycaster, camera, objects, wallHelper, render)
	const onPointerDown = createOnPointerDown(width, height, scene, pointer, raycaster, camera, objects, getMode, floor, wallGeometry, wallMaterial, render)
  const onDocumentKeyDown = createOnDocumentKeyDown(setMode)
  const onKeyUp = createOnKeyUp(setMode)
	document.addEventListener('pointermove', onPointerMove)
  document.addEventListener('pointerdown', onPointerDown)  
  document.addEventListener( 'keydown', onDocumentKeyDown)
  document.addEventListener('keyup', onKeyUp)
  
  // alwasy last line to render all
  render()

  return renderer.domElement
}







