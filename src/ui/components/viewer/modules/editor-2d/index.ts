import * as THREE from 'three'

import { createCameraPerspective } from '../../core/base/create-camera-perspective'
import { createScene } from '../../core/base/create-scene'
import { createLights } from '../../core/base/create-ligths'
import { createRender } from '../../core/base/create-render'
//import { createOnWindowResize } from '../../core/base/create-window-resize'

import { createCube } from '../../objects/cube'
import { createShape } from '../../objects/shape'
import { createText } from '../../objects/text'
import { createSVG } from '../../objects/svg'

export const init = async (width: number, height: number) => {
  // base
  const camera = createCameraPerspective(width, height)
  const scene = createScene()
  const renderer = createRender(width, height)
  createLights(scene)
  const render = () => {
    renderer.clear()
    renderer.render(scene, camera)
  }
  //const onWindowResize = createOnWindowResize(width, height, camera, renderer, render)
  //window.addEventListener('resize', onWindowResize)

  const cube = createCube()
  cube.position.x = camera.position.x
  cube.position.y = camera.position.y 
  cube.position.z = camera.position.z - 200
  scene.add(cube)
  cube.position.y = camera.position.y + 16

  const shape = createShape(30, 17)
  shape.position.x = camera.position.x
  shape.position.y = camera.position.y 
  shape.position.z = camera.position.z - 200
  shape.material.depthTest = false
  shape.renderOrder = 10
  camera.lookAt(shape.position)
  scene.add(shape)

  const text = await createText('Hola')
  text.position.x = camera.position.x
  text.position.y = camera.position.y 
  text.position.z = - 200
  if (text.material) {
    (text.material as THREE.Material).depthTest = false
  }
  text.renderOrder = 20
  scene.add(text)

  
  const energyIcon = await createSVG('src/assets/energy.svg')
  energyIcon.position.x = camera.position.x
  energyIcon.position.y = camera.position.y 
  energyIcon.position.z = - 200
  scene.add(energyIcon)

  const animate = () => { 
    cube.rotation.x += 0.01;
    cube.rotation.y -= 0.01;
    cube.rotation.z += 0.03;
    render()
    requestAnimationFrame(animate)
  }


  // alwasy last line to render all
  animate()

  return renderer.domElement
}
