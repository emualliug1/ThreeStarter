import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js';
import {Texture} from 'three';

const loaderGlb = new GLTFLoader();

async function loadAssets(path) {
    const glb = await loaderGlb.loadAsync(path)
    const assets = [];

    glb.scene.traverse((child) => {
      if (child.isMesh && child.name) {
        assets.push(child);
        console.log(`Objet trouvé : ${child.name}`);
      }
    });

    return assets;
}

async function loadTextureAvif(path) {
  const response = await fetch(path);
  const blob = await response.blob();
  const imageBitmap = await createImageBitmap(blob);
  const texture = new Texture(imageBitmap);
  texture.needsUpdate = true;
  texture.flipY = false;
  return texture;
}



export {loadAssets,loadTextureAvif}