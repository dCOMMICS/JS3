console.log('this')

alert('stop smoking weed derrick');

import * as THREE from 'three'

// canvas
const canvas = document.querySelector('canvas.webgl')
console.log(canvas)

console.log(THREE)
const scene = new THREE.Scene()

const myGeometry = new THREE.SphereGeometry(1.5, 32, 32)




// scene create

const PlayingArea = new THREE.Scene()

// geometry

const geometry = new THREE.BoxGeometry(1,1,1)
const material = new THREE.MeshBasicMaterial({color: 0xffff00})
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)


// sizes
const sizes = {
    width:800,
    height:600
}

// camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)

//  when the z position is higher the the image is seen froma far behind.

mesh.position.y=1
mesh.position.x= 4
mesh.position.z= 1
scene.add(camera)

// rendering

const renderer = new THREE.WebGLRenderer({
    canvas: canvas
}

)
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)

