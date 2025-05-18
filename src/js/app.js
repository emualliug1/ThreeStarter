import '../css/style.css'
import { Scene} from 'three'
import Camera from './camera.js'
import Light from './light.js'
import Graphic from './graphic.js'
import {loadAssets} from './load.js'
import TweakPane from './tweakpane.js'
import Helper from './helper.js'

//Three.js
const meshes = await loadAssets('meshes/exemple.glb')
const camera = new Camera()
const scene = new Scene()
const light = new Light()
const graphic = new Graphic(scene, camera)
const helper = new Helper(camera,light,graphic.domElement)

graphic.onUpdate(dt => {

})

scene.add(light)
scene.add(...meshes)
scene.add(helper)

//TweakPane
const tweakPane = new TweakPane(camera,light)
tweakPane.createPaneLight()
tweakPane.createPaneCamera()
