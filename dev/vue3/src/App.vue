<template lang="pug">
VAudioPlayer(:audioList="audioList")
</template>

<script setup lang="ts">
import { ref } from 'vue-demi'
// @ts-ignore
import { VAudioPlayer } from '../../../src/components'

const audioList = ref([
  {
    poster:
      'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a75a958c-cc34-4101-8337-a0796d7ccbd8/d714j5q-d6d042a4-94d4-49a4-a5fc-c384362342c9.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2E3NWE5NThjLWNjMzQtNDEwMS04MzM3LWEwNzk2ZDdjY2JkOFwvZDcxNGo1cS1kNmQwNDJhNC05NGQ0LTQ5YTQtYTVmYy1jMzg0MzYyMzQyYzkuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.ovSu8G2bukNO7Q9-fOkjCrZWpCRldQlLzj88xKDzcMs',
    artist: 'No1 ft Melis Karaduman',
    musicName: 'Kör',
    source: 'https://dinlehome.files.wordpress.com/2021/03/kor-official-music-video-kron1k.mp3'
  },
  {
    poster:
      'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a75a958c-cc34-4101-8337-a0796d7ccbd8/d714j5q-d6d042a4-94d4-49a4-a5fc-c384362342c9.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2E3NWE5NThjLWNjMzQtNDEwMS04MzM3LWEwNzk2ZDdjY2JkOFwvZDcxNGo1cS1kNmQwNDJhNC05NGQ0LTQ5YTQtYTVmYy1jMzg0MzYyMzQyYzkuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.ovSu8G2bukNO7Q9-fOkjCrZWpCRldQlLzj88xKDzcMs',
    artist: 'Ezhel',
    musicName: 'Allahından Bul',
    source: 'https://dinlehome.files.wordpress.com/2020/10/allahindan-bul.mp3'
  },
  {
    poster: 'https://radyonet.net/cdn/sarkilar/717bb54911a7c4f7114be5461b809274.jpg',
    artist: 'The Marías',
    musicName: 'Baby One More Time',
    source: 'https://radyonet.net/cdn/muzik/the-marias-baby-one-more-time-1693394472-12723.m4a'
  }
])
</script>

<style lang="scss">
@import '../../../src/assets/style/scss/app.scss';
</style>
