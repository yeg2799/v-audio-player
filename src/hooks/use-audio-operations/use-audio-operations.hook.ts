import { ref, computed } from 'vue-demi'
import { soundLevelTypeEnum } from '@/enums'

export default () => {
  const audioRef = ref(null);
  const soundRef = ref(null);
  const isPlayingAudio = ref(false);
  const soundLevel = ref(50);

  //Methods
  const playAudio = () => {
    if(audioRef.value) {
      audioRef.value.volume = soundLevel.value / 100;
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

  const changeSoundLevel = (event) => {
    if(audioRef.value) {
      soundLevel.value = Number(event.target.value);
      audioRef.value.volume = event.target.value / 100;
    }
  }

  const resetSoundLevel = () => {
    soundLevel.value = 0;
  }

  //Readebles
  const soundLevelType = computed(() => {
    if(soundLevel.value === 0) {
      return soundLevelTypeEnum.SILENT
    } else if(soundLevel.value <= 33) {
      return soundLevelTypeEnum.LOW
    } else if(soundLevel.value <= 66) {
      return soundLevelTypeEnum.MEDIUM
    } else if(soundLevel.value > 66) {
      return soundLevelTypeEnum.FULL
    }
  })

  return {
    audioRef,
    soundRef,
    isPlayingAudio,
    soundLevel,
    soundLevelType,

    //methods
    playAudio,
    pauseAudio,
    changeSoundLevel,
    resetSoundLevel,
  }
}
