import { ref, computed, reactive } from 'vue-demi'
import type { ComputedRef } from 'vue-demi'
import { soundLevelTypeEnum } from '@/enums/index.ts'
import { timeParser } from '@/helpers/index.ts'
import { StateTypes, SetAudioPlayerConfig } from './use-audio-operations.hook.types'
import { AUDIO_PLAYER_CONFIG_DEFAULT } from '../../../system/default.ts'
import type { AudioPlayerConfig } from '@/types'

export default () => {
  const { parseTimeMinAndSec } = timeParser()
  //Refs
  const audioRef = ref(null)
  const soundRef = ref(null)

  //State
  const state = reactive(<StateTypes>{
    isPlayingAudio: false,
    totalTime: 0,
    currentTime: 0,

    //default
    config: AUDIO_PLAYER_CONFIG_DEFAULT
  })

  //Methods
  const setAudioConfig: SetAudioPlayerConfig = config => {
    state.config = config
    console.log(state.config, 'state')
  }

  const playAudio = () => {
    if (audioRef.value) {
      audioRef.value.volume = state.config.volume / 100
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
      state.config.volume = Number(event.target.value)
      audioRef.value.volume = event.target.value / 100
    }
  }

  const resetSoundLevel = () => {
    state.config.volume = 0
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
    if (state.config.volume === 0) {
      return soundLevelTypeEnum.SILENT
    } else if (state.config.volume <= 33) {
      return soundLevelTypeEnum.LOW
    } else if (state.config.volume <= 66) {
      return soundLevelTypeEnum.MEDIUM
    } else if (state.config.volume > 66) {
      return soundLevelTypeEnum.FULL
    }
  })

  const config: ComputedRef<AudioPlayerConfig> = computed(() => state.config)
  const soundLevel: ComputedRef<AudioPlayerConfig['volume']> = computed(() => state.config.volume)
  const isPlayingAudio: ComputedRef<StateTypes['isPlayingAudio']> = computed(() => state.isPlayingAudio)
  const totalTime = computed(() => (state.totalTime === 0 ? '00:00' : state.totalTime))
  const currentTime = computed(() => (state.currentTime === 0 ? '00:00' : state.currentTime))

  return {
    //Readables
    config,
    soundLevelType,
    isPlayingAudio,
    soundLevel,
    totalTime,
    currentTime,

    //Refs
    audioRef,
    soundRef,

    //Methods
    setAudioConfig,
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
