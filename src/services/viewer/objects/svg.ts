import * as THREE from 'three'
import { SVGLoader, SVGResult } from 'three/addons/loaders/SVGLoader.js'

export const createSVG = async (url: string): Promise<THREE.Object3D> => {
  return new Promise(resolve => {
    const loader = new SVGLoader();
    loader.load(url, (data: SVGResult) => { 
      const group = new THREE.Group()
      group.scale.multiplyScalar( 0.05 )
      group.position.x = - 70
      group.position.y = 70
      group.scale.y *= - 1
      for (const path of data.paths) {
        if (!path.userData) {
          return
        }
        const fillColor = path.userData.style.fill;
        const material = new THREE.MeshBasicMaterial({
          color: new THREE.Color().setStyle(fillColor),
          opacity: path.userData.style.fillOpacity,
          side: THREE.DoubleSide,
          depthTest: false,
        })
        const shapes = SVGLoader.createShapes(path);
        for (const shape of shapes) {
          const geometry = new THREE.ShapeGeometry(shape);
          const mesh = new THREE.Mesh(geometry, material);
          mesh.renderOrder = 30

          group.add(mesh);
        }
      }
      resolve(group)
    })
  })
}
