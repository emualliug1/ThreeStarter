import {AxesHelper,Object3D} from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import {SpotLightHelper} from 'three'

export default class Helper extends Object3D{
    constructor(camera,light,domElement){
        super()
        this.createAxesHelper(2)
        this.createOrbitControls(camera, domElement)
        this.createSpotLightHelper(light.spotLight)
    }

    createOrbitControls(camera, domElement){
        this.orbitControls = new OrbitControls(camera, domElement)
        this.orbitControls.enableDamping = true
    }

    createAxesHelper(size){
        this.axesHelper = new AxesHelper(size)
        this.add(this.axesHelper)
    }

    createSpotLightHelper(light){
        this.spotLightHelper = new SpotLightHelper(light)
        this.add(this.spotLightHelper)
    }

}
