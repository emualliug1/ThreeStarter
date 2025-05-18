import {PerspectiveCamera} from 'three'


export default class Camera extends PerspectiveCamera{

    constructor(){
        super(60, innerWidth / innerHeight)
        this.position.set(3, 3, 3)
        this.lookAt(0, 0, 0)
    }

}