import * as THREE from 'three'
import { sizeWall } from '../../objects/create-wall'

export const createOnPointerMove = (
  w:number, h: number,
  pointer: THREE.Vector2,
  raycaster: THREE.Raycaster,
  camera: THREE.PerspectiveCamera,
  objects: THREE.Object3D[],
  wallHelperMesh: THREE.Object3D,
  render: () => void
) => {
  const onPointerMove = (event: MouseEvent) => {
    pointer.set(( event.clientX / w ) * 2 - 1, - ( event.clientY / h ) * 2 + 1 )
    raycaster.setFromCamera( pointer, camera )
    const intersects = raycaster.intersectObjects( objects, false )
    if ( intersects.length > 0 ) {
      const intersect = intersects[0]
      wallHelperMesh.position.copy( intersect.point ).add( intersect?.face?.normal as THREE.Vector3Like )
      wallHelperMesh.position.divideScalar( sizeWall.x ).floor().multiplyScalar( sizeWall.y ).addScalar( sizeWall.x / 2 )
      render()
    }
  }

  return onPointerMove
}
