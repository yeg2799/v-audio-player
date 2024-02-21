import { ref } from 'vue-demi'

export default () => {
  const audio = ref(null);
  const isPlayingAudio = ref(false);

  //Methods
  const playAudio = () => {
    if(audio.value) {
      audio.value.play()
      isPlayingAudio.value = true;
    }
  }

  const pauseAudio = () => {
    if(audio.value) {
      audio.value.pause()
      isPlayingAudio.value = false;
    }
  }



  return {
    audio,
    isPlayingAudio,

    //methods
    playAudio,
    pauseAudio
  }
}
