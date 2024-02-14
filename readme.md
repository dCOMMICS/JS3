# Welcome to THREE.JS Learning Curve.....
# Prerequisites:

 * ` HTML `
 * ` CSS `
  * ` Computer  and Internet `
* ` Eager to Learn`

# linking file 

```HTML
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>javascript </title>
</head>
<body>
    
    <script src="/script.js"></script>
</body>
</html>

```

# Sample three.js scene
```javascript
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

camera.position.z = 4
// camera.position.y = -2
scene.add(camera)

// rendering

const renderer = new THREE.WebGLRenderer({
    canvas: canvas
}

)
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)


```
# how to set-up on VSCODE
<!-- writting a GOOD README -->

<!-- # Heading 1
## Heading 2
### Heading 3

Emphasis, aka italics, with *asterisks* or _underscores_.

Strong emphasis, aka bold, with **asterisks** or __underscores__.

Combined emphasis with **asterisks and _underscores_**.
1. First ordered list item
2. Another item
⋅⋅* Unordered sub-list. 
1. Actual numbers don't matter, just that it's a number
⋅⋅1. Ordered sub-list
4. And another item.

[I'm an inline-style link](https://www.google.com)

[I'm an inline-style link with title](https://www.google.com "Google's Homepage")

![descriptive alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 1") -->


<!-- https://learn.microsoft.com/en-us/office/vba/language/reference/user-interface-help/color-constants -->