import {AmbientLight ,SpotLight,Object3D} from 'three';

export default class Light extends Object3D{
    pointLight = null;
    ambientLight = null;
    constructor(){
        super();
        this.ambientLight = new AmbientLight(0xffffff, 1);
        this.spotLight = new SpotLight(0xffffff, 20);
        this.spotLight.position.set(0, 3, 0);
        this.add(this.ambientLight);
        this.add(this.spotLight);
    }

}
