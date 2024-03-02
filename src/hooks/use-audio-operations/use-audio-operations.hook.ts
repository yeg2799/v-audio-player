import { ref, computed, reactive } from 'vue-demi'
import { soundLevelTypeEnum } from '@/enums/index.ts'
import { timeParser } from '@/helpers/index.ts'

export default () => {
  const { parseTimeMinAndSec } = timeParser()
  //Refs
  const audioRef = ref(null)
  const soundRef = ref(null)

  //State
  const state = reactive({
    isPlayingAudio: false,
    soundLevel: 50,
    totalTime: 0,
    currentTime: 0
  })

  //Methods
  const playAudio = () => {
    if (audioRef.value) {
      audioRef.value.volume = state.soundLevel / 100
      audioRef.value.play()
      state.isPlayingAudio = true
    }
  }

  const playSelectedItemAudio = item => {
    if (audioRef.value) {
      audioRef.value.src = item.source
      audioRef.value.play()
      state.isPlayingAudio = true
    }
  }

  const pauseAudio = () => {
    if (audioRef.value) {
      audioRef.value.pause()
      state.isPlayingAudio = false
    }
  }

  const changeSoundLevel = event => {
    if (audioRef.value) {
      state.soundLevel = Number(event.target.value)
      audioRef.value.volume = event.target.value / 100
    }
  }

  const resetSoundLevel = () => {
    state.soundLevel = 0
  }

  const calculateTotalAudioTime = ({ durationSec }) => {
    state.totalTime = parseTimeMinAndSec({ sec: durationSec })
  }

  const calculateCurrentAudioTime = ({ currentSec }) => {
    state.currentTime = parseTimeMinAndSec({ sec: currentSec })
  }

  const updateAudioTime = ({ currentTime }) => {
    audioRef.value.currentTime = currentTime
  }

  //Readables
  const soundLevelType = computed(() => {
    if (state.soundLevel === 0) {
      return soundLevelTypeEnum.SILENT
    } else if (state.soundLevel <= 33) {
      return soundLevelTypeEnum.LOW
    } else if (state.soundLevel <= 66) {
      return soundLevelTypeEnum.MEDIUM
    } else if (state.soundLevel > 66) {
      return soundLevelTypeEnum.FULL
    }
  })

  const soundLevel = computed(() => state.soundLevel)
  const isPlayingAudio = computed(() => state.isPlayingAudio)
  const totalTime = computed(() => (state.totalTime === 0 ? '00:00' : state.totalTime))
  const currentTime = computed(() => (state.currentTime === 0 ? '00:00' : state.currentTime))

  return {
    //Readables
    soundLevelType,
    isPlayingAudio,
    soundLevel,
    totalTime,
    currentTime,

    //Refs
    audioRef,
    soundRef,

    //Methods
    playAudio,
    pauseAudio,
    changeSoundLevel,
    resetSoundLevel,
    playSelectedItemAudio,
    calculateTotalAudioTime,
    calculateCurrentAudioTime,
    updateAudioTime
  }
}
