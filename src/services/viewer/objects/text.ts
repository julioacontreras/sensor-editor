import * as THREE from 'three'
import { FontLoader } from 'three/addons/loaders/FontLoader.js'

export const createText = (message: string): Promise<THREE.Mesh> => {
  return new Promise(resolve => {
    const loader = new FontLoader()
    loader.load( 'src/assets/helvetiker_regular.typeface.json', (font) => {
      const color = 0xffffff
      const material = new THREE.LineBasicMaterial( {
        color: color,
        side: THREE.DoubleSide
      } )
      const shapes = font.generateShapes(message, 20)
      const geometry = new THREE.ShapeGeometry(shapes)
      geometry.computeBoundingBox()
      const text = new THREE.Mesh(geometry, material)
      resolve(text)
    })
  })
}
