<template lang="pug">
.recorder
  VueVoiceRecording(@getAsMp3="saveAsMp3")
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { VueVoiceRecording } from "vue-voice-recording";
import "vue-voice-recording/dist/style.css";
// import { useRecorder } from "vue-voice-recording";

export default defineComponent({
  name: "Recorder",
  components: { VueVoiceRecording },
  setup: () => {
    // const router = useRouter()
    // const {
    //   isRecording,
    //   recordingTime,
    //   isPaused,
    //   recordingState,
    //   toggleStartAndStop,
    //   togglePauseAndResume,
    //   startRecording,
    //   stopRecording,
    //   pauseRecording,
    //   resumeRecording,
    // } = useRecorder({
    //   afterStartRecording: () =>
    //     console.log("After microphone starts recording"),
    //   afterStopRecording: (blob) =>
    //     console.log("After microphone stops recording"),
    //   afterPauseRecording: () =>
    //     console.log("After microphone pauses recording"),
    //   afterResumeRecording: () =>
    //     console.log("After microphone resumes recording"),
    //   getAsMp3: ({ data, url }) =>
    //     console.log(
    //       "After microphone stops recording and audio encoded to mp3"
    //     ),
    // });

    const saveAsMp3 = (data: any) => {
      console.log('save', data)
    }
    return {
      saveAsMp3,
    };
  },
});
</script>

<style>
html,
body {
  overflow-y: hidden;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  /* text-align: center; */
  /* color: #2c3e50; */
}

#app .clear-all-notification-btn {
  position: fixed;
  top: 24px;
  right: 24px;
  z-index: 3000;
}
</style>
