import type { AudioPlayerConfig } from '@/types'

export const AUDIO_PLAYER_CONFIG_DEFAULT: AudioPlayerConfig = {
  muted: false,
  autoplay: false,
  volume: 50, // min 0 max 100
  controls: {
    prev: true,
    next: true
  }
}
