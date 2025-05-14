import {PerspectiveCamera} from 'three'


export default class Camera extends PerspectiveCamera{

    constructor(){
        super(60, innerWidth / innerHeight)
        this.position.set(100, 100, 100)
        this.lookAt(0, 0, 0)
    }

}