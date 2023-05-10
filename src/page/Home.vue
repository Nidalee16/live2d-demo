<template lang="pug">
.home
	.response
	.cvs-container
		.operate-area
			Recorder
			AButton(shape="circle")
				template(#icon)
					AudioOutlined
		canvas#live2dCvs.cvs
		.history

</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import { AudioOutlined } from '@ant-design/icons-vue'
import Recorder from '@/component/Recorder.vue'
// import '@/assets/Live2DFramework.js'
// import live2d from 'vue-live2d'
// import modelJson from '@

export default defineComponent({
  name: "Home",
  components: { AudioOutlined, Recorder },
  setup: () => {
    const sceneDom = ref(null);

    const cubism4Model =
      "src/assets/greeter/haru_greeter_t03.model3.json";


    const init = async () => {
			const pixi = (window as any).PIXI;
    	const live2d = pixi.live2d;
      const app = new pixi.Application({
        view: document.getElementById("live2dCvs"),
        autoStart: true,
        resizeTo: window,
        backgroundColor: 0x333333,
				transparent: true
      });

      const model = await live2d.Live2DModel.from(cubism4Model)

			app.stage.addChild(model);

			const scaleX = (innerWidth * 0.4) / model.width;
			const scaleY = (innerHeight * 0.8) / model.height;

			// fit the window
			model.scale.set(Math.min(scaleX, scaleY));

			model.y = innerHeight * 0.1;
			(window as any).mm = model
      model.x = (innerWidth - model.width) / 2;
      model.on("hit", (hitAreas: any) => {
        if (hitAreas.includes("body")) {
          model.motion("tap_body");
        }

        if (hitAreas.includes("head")) {
          model.expression();
        }
      });
    };
    onMounted(async () => {
      // await init();
    });
    return { sceneDom };
  },
});
</script>

<style scoped lang="scss">
.home {
	width: 100%;
	height: 100%;
	.response {
		width: 100%;
		height: 20%;
		border: solid 1px green;
	}
	.cvs-container {
		height: 80%;
		position: relative;
		.operate-area, .history {
			position: absolute;
			height: 100%;
			width: 40%;
			border: solid 1px #1890ff;
		}
		.operate-area {

		}
		.history {
			top: 0;
			right: 0;
		}
		.cvs {
			height: 100%;
			width: 80%;
			margin: 0 10%;
			margin-top: 10vh;
		}
	}
}
</style>
