import {AmbientLight , PointLight,Object3D} from 'three';

export default class Light extends Object3D{
    pointLight = null;
    ambientLight = null;
    constructor(){
        super();
        this.ambientLight = new AmbientLight(0xffffff, 2);
        this.pointLight = new PointLight(0xffffff, 50);
        this.pointLight.position.set(0, 10, 0);
        this.add(this.ambientLight);
        this.add(this.pointLight);
    }

    get intensity(){
        return this.pointLight.intensity;
    }


}
