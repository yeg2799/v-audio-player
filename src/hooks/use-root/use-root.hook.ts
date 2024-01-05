import { reactive, computed } from 'vue-demi'

export default () => {
  const state = reactive({
    audioList: []
  })

  //Methods
  const setAudioList = (audioList: []) => {
    state.audioList = audioList
  }

  //Readables
  const audioList = computed(() => state.audioList)

  return {
    //Readables
    audioList,

    //Methods
    setAudioList
  }
}
