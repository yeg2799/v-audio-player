import type { AudioPlayerConfig } from '@/types'

export type StateTypes = {
  isPlayingAudio: Boolean
  config: AudioPlayerConfig
  totalTime: Number
  currentTime: Number
}

export type SetAudioPlayerConfig = (config: AudioPlayerConfig) => void
