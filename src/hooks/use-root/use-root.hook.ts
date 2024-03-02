import { reactive, computed } from 'vue-demi'

export default () => {
  const state = reactive({
    audioList: [],
    activeAudioIndex: 0
  })

  //Methods
  const setAudioList = (audioList: []) => {
    state.audioList = audioList
  }

  const increaseActiveAudioIndex = () => {
    if (state.audioList.length - 1 === state.activeAudioIndex) {
      state.activeAudioIndex = 0

      return
    }

    state.activeAudioIndex++
  }

  const decreaseActiveAudioIndex = () => {
    if (state.activeAudioIndex === 0) {
      return
    }

    state.activeAudioIndex--
  }

  const setActiveAudioIndex = index => {
    state.activeAudioIndex = index
  }

  //Readables
  const audioList = computed(() => state.audioList)
  const activeAudioIndex = computed(() => state.activeAudioIndex)
  const activeAudio = computed(() => state.audioList[state.activeAudioIndex])

  return {
    //Readables
    audioList,
    activeAudioIndex,
    activeAudio,

    //Methods
    setAudioList,
    increaseActiveAudioIndex,
    decreaseActiveAudioIndex,
    setActiveAudioIndex
  }
}
