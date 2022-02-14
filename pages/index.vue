<template lang="pug">
  .main-IndexPage
    v-audio-player(source="https://dinlehome.files.wordpress.com/2021/01/benfero.mp3" soundName="Ben Fero X Cash Flow - Üçe Beşe Bakamam")
    v-audio-player(source="https://dinlehome.files.wordpress.com/2021/01/benfero.mp3" soundName="Ben Fero X Cash Flow - Üçe Beşe Bakamam" isMultiple :soundList="soundList")
    v-audio-player(source="https://dinlehome.files.wordpress.com/2021/01/benfero.mp3" soundName="Ben Fero X Cash Flow - Üçe Beşe Bakamam")
    v-audio-player(source="https://dinlehome.files.wordpress.com/2021/01/benfero.mp3" soundName="Ben Fero X Cash Flow - Üçe Beşe Bakamam" isMultiple :soundList="soundList")
    v-audio-player(source="https://dinlehome.files.wordpress.com/2021/01/benfero.mp3" soundName="Ben Fero X Cash Flow - Üçe Beşe Bakamam")
    v-audio-player(source="https://dinlehome.files.wordpress.com/2021/01/benfero.mp3" soundName="Ben Fero X Cash Flow - Üçe Beşe Bakamam" isMultiple :soundList="soundList")
</template>

<script>
import VueAudioPlayer from '@/components/v-audio-player.vue';
export default {
  name: 'IndexPage',
  component: {
    VueAudioPlayer,
  },
  setup() {
    const soundList = [
      {
        title: 'No1 ft Melis Karaduman - Kör',
        source: 'https://dinlehome.files.wordpress.com/2021/03/kor-official-music-video-kron1k.mp3',
      },
      {
        title: 'Murda ft. MERO - Gece Gündüz',
        source: 'https://dinlehome.files.wordpress.com/2021/03/gece-gunduz-ft-mero-prod-spanker.mp3',
      },
      {
        title: 'Ben Fero X Cash Flow - Üçe Beşe Bakamam',
        source: 'https://dinlehome.files.wordpress.com/2021/01/benfero.mp3',
      },
      {
        title: 'Bege - B.S.G',
        source: 'https://dinlehome.files.wordpress.com/2021/03/b-s-g-ft-emir-taha-official-video.mp3',
      },
      {
        title: 'Ezhel - Allahından Bul',
        source: 'https://dinlehome.files.wordpress.com/2020/10/allahindan-bul.mp3',
      },
    ];
    return {
      soundList,
    }
  }
}
</script>
<style lang="scss" scoped>
  .main-IndexPage {
    padding-top: 20px;
    display: flex;
    flex-wrap: wrap;
  }
</style>
