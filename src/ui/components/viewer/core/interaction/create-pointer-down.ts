import * as THREE from 'three'
import { sizeWall } from '../../objects/create-wall'

export const createOnPointerDown = (
  w:number, h: number,
  scene: THREE.Scene,
  pointer: THREE.Vector2,
  raycaster: THREE.Raycaster,
  camera: THREE.PerspectiveCamera,
  objects: THREE.Object3D[],
  getMode: () => string,
  floor: THREE.Mesh,
  wallGeometry: THREE.BoxGeometry,
  wallMaterial: THREE.Material,
  render: () => void
) => {
  const onPointerDown = (event: MouseEvent) => {
    pointer.set((event.clientX / w) * 2 - 1, - (event.clientY / h) * 2 + 1)
    raycaster.setFromCamera(pointer, camera)
    const intersects = raycaster.intersectObjects(objects, false)
    if (intersects.length > 0) {
      const intersect = intersects[0];
      
      if (getMode() === 'delete') {
        if (intersect?.object !== floor) {
          scene.remove(intersect.object)
          objects.splice(objects.indexOf(intersect.object), 1)
        }
        // create cube
      } else {
        const voxel = new THREE.Mesh(wallGeometry, wallMaterial)
        voxel.position.copy(intersect.point).add(intersect?.face?.normal as THREE.Vector3Like)
        voxel.position.divideScalar(sizeWall.x).floor().multiplyScalar(sizeWall.y).addScalar(sizeWall.x / 2)
        scene.add(voxel)
        objects.push(voxel)
      }
      render()
    }
  }

  return onPointerDown
}