
import lng from "wpe-lightning";


class BasicUsageExample extends lng.Application {
    static _template() {
        return {
            Text: {text: {text: "Hello World", textColor: 0xffff0000}, shader: {type: lng.shaders.Grayscale} }
        }
    }

}

const options = {stage: {w: 900, h: 900, clearColor: 0xFF000000, canvas2d: false, useImageWorker: false}, debug: true}

const app = new BasicUsageExample(options);

document.body.appendChild(app.stage.getCanvas());
