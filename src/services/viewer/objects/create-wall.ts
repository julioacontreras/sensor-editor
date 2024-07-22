import * as THREE from 'three'

export const sizeWall = {
  x: 20,
  y: 20,
  z: 20
}

export const createWallHelper = (scene: THREE.Scene) => {
  const wallHelperGeometry = new THREE.BoxGeometry( sizeWall.x, sizeWall.y, sizeWall.z )
  const wallHelperMaterial = new THREE.MeshBasicMaterial( { color: 0x000, opacity: 0.5, transparent: true } )
  const wallHelperMesh = new THREE.Mesh( wallHelperGeometry, wallHelperMaterial )
  scene.add(wallHelperMesh)
  return wallHelperMesh
}

export const createBaseWall = () => {
  const wallGeometry = new THREE.BoxGeometry( sizeWall.x, sizeWall.y, sizeWall.z )
  const wallMaterial = new THREE.MeshLambertMaterial( { color: 0xfff } )
  return {
    wallGeometry,
    wallMaterial
  }
}