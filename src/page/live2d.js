import "@/assets/live2dcubismcore.min";
import "@/assets/live2d.min";
import * as PIXI from "pixi.js";
console.log('pixi', PIXI)
// window.PIXI = PIXI  // 全局

// const { Live2DModel, Cubism2ModelSettings } = require('pixi-live2d-display')

import { Live2DModel, Cubism2ModelSettings } from "pixi-live2d-display";

export async function main() {
  const app = new PIXI.Application({
    view: document.getElementById("live2dCvs"),
    autoStart: true,

    width: 280,

    height: 300,

    transparent: true, // 画布透明
  });

  const model = await Live2DModel.from(
    "/src/assets/greeter/haru_greeter_t03.model3.json"
    // "/src/assets/Mao/Mao.model3.json"
  );
  app.stage.addChild(model);

  app.renderer.backgroundColor = 0x061639;
  // model.x = -10 // 方位（单位像素）
  // model.y = 100
  // model.rotation = Math.PI
  // model.skew.x = Math.PI

  // transforms 模型方位

  model.scale.set(0.07); // model.scale.set(0.3, 0.3) // 缩放

  model.anchor.set(-0.05, 0); // 锚点，以画布中心下方为中心点,x，y（单位：倍） // interaction

  model.on("hit", (hitAreas) => {
    if (hitAreas.includes("body")) {
      model.motion("tap_body");
    }
  });
}
