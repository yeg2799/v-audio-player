import { reactive } from 'vue-demi'

export default () => {
  const state = reactive({
    audioList: []
  })

  //Methods
  const setAudioList = (audioList: []) => {
    state.audioList = audioList

    console.log(audioList)
  }

  return {
    setAudioList
  }
}
