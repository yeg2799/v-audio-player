import { ref, computed, reactive } from 'vue-demi'
import { soundLevelTypeEnum } from '@/enums'

export default () => {
  //Refs
  const audioRef = ref(null);
  const soundRef = ref(null);

  //State
  const state = reactive({
    isPlayingAudio: false,
    soundLevel: 50,
  })

  //Methods
  const playAudio = () => {
    if(audioRef.value) {
      audioRef.value.volume = state.soundLevel / 100;
      audioRef.value.play()
      state.isPlayingAudio = true;
    }
  }

  const playSelectedItemAudio = (item) => {
    if(audioRef.value) {
      audioRef.value.src = item.source
      audioRef.value.play()
      state.isPlayingAudio = true
    }
  }

  const pauseAudio = () => {
    if(audioRef.value) {
      audioRef.value.pause()
      state.isPlayingAudio = false;
    }
  }

  const changeSoundLevel = (event) => {
    if(audioRef.value) {
      state.soundLevel = Number(event.target.value);
      audioRef.value.volume = event.target.value / 100;
    }
  }

  const resetSoundLevel = () => {
    state.soundLevel = 0;
  }

  //Readables
  const soundLevelType = computed(() => {
    if(state.soundLevel === 0) {
      return soundLevelTypeEnum.SILENT
    } else if(state.soundLevel <= 33) {
      return soundLevelTypeEnum.LOW
    } else if(state.soundLevel <= 66) {
      return soundLevelTypeEnum.MEDIUM
    } else if(state.soundLevel > 66) {
      return soundLevelTypeEnum.FULL
    }
  })

  const soundLevel = computed(() => state.soundLevel)
  const isPlayingAudio = computed(() => state.isPlayingAudio)

  return {
    //Readables
    soundLevelType,
    isPlayingAudio,
    soundLevel,

    //Refs
    audioRef,
    soundRef,

    //Methods
    playAudio,
    pauseAudio,
    changeSoundLevel,
    resetSoundLevel,
    playSelectedItemAudio,


  }
}
