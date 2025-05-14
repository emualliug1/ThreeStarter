import '../css/style.css'
import { Scene, AxesHelper, Color} from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import Camera from './camera.js'
import Light from './light.js'
import Graphic from './graphic.js'
import {loadAssets} from './load.js'


const meshes = await loadAssets('')
const camera = new Camera()
const scene = new Scene()
scene.background = new Color('#77b5fe')
const light = new Light()
const graphic = new Graphic(scene, camera)

//loop
graphic.onUpdate(dt => {

})



scene.add(light)
scene.add(...meshes)


// ==========DEV=============
const size = 10
const axesHelper = new AxesHelper(size)
scene.add(axesHelper)
const controls = new OrbitControls(camera, graphic.domElement);
controls.enableDamping = true
// =========================

