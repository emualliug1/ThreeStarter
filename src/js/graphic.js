import { WebGLRenderer, Clock } from 'three'

export default class Graphic extends WebGLRenderer {
    scene = null
    camera = null
    clock = new Clock()
    cbLoop = null
    cbUpdate = null

    constructor(scene, camera) {
        super()
        this.scene = scene
        this.camera = camera
        this.cbLoop = this.loop.bind(this)
        this.shadowMap.enabled = true
        document.body.appendChild( this.domElement )
        this.setSize(innerWidth, innerHeight)
        this.loop()
        window.addEventListener('resize', this.resize.bind(this))
    }

    loop() {
        const dt  = this.clock.getDelta()
        if (this.cbUpdate) this.cbUpdate(dt)
        this.render(this.scene, this.camera)
        requestAnimationFrame(this.cbLoop)
    }

    onUpdate(callback) {
        this.cbUpdate = callback
    }

    resize() {
        const width = window.innerWidth;
        const height = window.innerHeight;
        this.setSize(width, height);
        this.camera.aspect = width / height;
        this.camera.updateProjectionMatrix();
    }


}