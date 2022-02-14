<template lang="pug">
  .main-page
    .audio-card
      //- h2 with not list
      v-audio-player(source="https://dinlehome.files.wordpress.com/2021/01/benfero.mp3" soundName="Ben Fero X Cash Flow - Üçe Beşe Bakamam")
    .audio-card
      //- h2 with soundList
      v-audio-player(:source="soundList[0].source" isMultiple :soundList="soundList")
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
  .main-page {
    display: flex;
    flex-wrap: wrap;
    .audio-card {
      width: 50%;
      padding-top: 20px;
      background-color: #fafafa;
      border: 1px solid #e0e0e0;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
</style>
