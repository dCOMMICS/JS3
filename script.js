console.log('this')

alert('stop smoking weed derrick');

import * as THREE from 'three'

console.log(THREE)
const scene = new THREE.Scene()

const myGeometry = new THREE.SphereGeometry(1.5, 32, 32)


// scene create

const PlayingArea = new THREE.Scene()

// geometry

const geometry = new THREE.BoxGeometry(1,1,1)
const material = new THREE.MeshBasicMaterial({color: 0xff0000})
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

// camera

