interface AudioPlayerControlConfig {
  prev?: Boolean
  next?: Boolean
}

export interface AudioPlayerConfig {
  muted?: Boolean
  autoplay?: Boolean
  volume?: Number
  controls?: AudioPlayerControlConfig
}
