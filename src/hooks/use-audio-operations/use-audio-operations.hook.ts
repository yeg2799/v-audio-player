import { ref } from 'vue-demi'
// import { useRoot } from '@/hooks/index.ts'

export default () => {
  // const { increaseActiveAudioIndex  } = inject('root')

  const audioRef = ref(null);
  const isPlayingAudio = ref(false);

  //Methods
  const playAudio = () => {
    console.log(audioRef.value)
    if(audioRef.value) {
      audioRef.value.play()
      isPlayingAudio.value = true;
    }
  }

  const pauseAudio = () => {
    if(audioRef.value) {
      audioRef.value.pause()
      isPlayingAudio.value = false;
    }
  }

  return {
    audioRef,
    isPlayingAudio,

    //methods
    playAudio,
    pauseAudio,
  }
}
