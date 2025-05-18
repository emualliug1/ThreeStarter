import { Pane } from 'tweakpane'

export default class TweakPane extends Pane {
    pane = null

    constructor(camera, light) {
        super()
        this.camera = camera
        this.light = light
        this.pane = new Pane()
    }

    createPaneLight() {
        const lightConfigs = [
            { name: 'spotLight', label: 'Spot Light' },
        ];

        const axes = [
            { axis: 'x', min: -100, max: 100 },
            { axis: 'y', min: 0,    max: 100 },
            { axis: 'z', min: -100, max: 100 },
        ];

        lightConfigs.forEach(({ name, label }) => {
            const light = this.light[name];
            if (!light) return;

            axes.forEach(({ axis, min, max }) => {
                this.pane.addBlade({
                    view: 'slider',
                    label: `${label} ${axis.toUpperCase()}`,
                    min,
                    max,
                    step: 1,
                    value: light.position[axis],
                }).on('change', (ev) => {
                    const val = Math.round(ev.value);
                    ev.target.value = val;
                    light.position[axis] = val;
                });
            });
        });
    }

    createPaneCamera() {
        const cameraAxes = [
            { label: 'Camera X', axis: 'x', min: -100, max: 100 },
            { label: 'Camera Y', axis: 'y', min: 1,    max: 100 },
            { label: 'Camera Z', axis: 'z', min: -100, max: 100 },
        ];

        cameraAxes.forEach(({ label, axis, min, max }) => {
            this.pane.addBlade({
                view: 'slider',
                label,
                min,
                max,
                step: 1,
                value: this.camera.position[axis],
            }).on('change', (ev) => {
                const val = Math.round(ev.value);
                ev.target.value = val;
                this.camera.position[axis] = val;
            });
        });
    }
}
