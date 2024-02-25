<template lang="pug">
.v-audio-player-control-panel
  // Prev Button
  svg(xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewbox='0 0 24 24' fill='none' @click="clickedEvent(processEnum.PREV)")
    path(d='M18 17L10 12L18 7V17Z' fill='#000000')
    path(d='M6 7H9V17H6V7Z' fill='#000000')


  // Play Button
  template(v-if="!isPlayingAudio")
   svg(xmlns='http://www.w3.org/2000/svg' width='24px' height='24px' viewbox='0 0 24 24' fill='none' @click="clickedEvent(processEnum.PLAY)")
    rect(width='24' height='24' fill='white')
    path(fill-rule='evenodd' clip-rule='evenodd' d='M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM15.5963 10.3318C16.8872 11.0694 16.8872 12.9307 15.5963 13.6683L11.154 16.2068C9.9715 16.8825 8.5002 16.0287 8.5002 14.6667L8.5002 9.33339C8.5002 7.97146 9.9715 7.11762 11.154 7.79333L15.5963 10.3318Z' fill='#323232')

  //Pause Button
  template(v-else)
    svg(xmlns='http://www.w3.org/2000/svg' width='24px' height='24px' viewbox='0 0 24 24' fill='none' @click="clickedEvent(processEnum.PAUSE)")
      rect(width='24' height='24' fill='white')
      path(fill-rule='evenodd' clip-rule='evenodd' d='M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM14 8C14.5523 8 15 8.44772 15 9L15 15C15 15.5523 14.5523 16 14 16C13.4477 16 13 15.5523 13 15L13 9C13 8.44772 13.4477 8 14 8ZM10 8C10.5523 8 11 8.44772 11 9L11 15C11 15.5523 10.5523 16 10 16C9.44771 16 9 15.5523 9 15L9 9C9 8.44772 9.44772 8 10 8Z' fill='#323232')

  //Next Button
  svg(xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewbox='0 0 24 24' fill='none' @click="clickedEvent(processEnum.NEXT)")
    path(d='M6 17L14 12L6 7V17Z' fill='#000000')
    path(d='M18 7H15V12V17H18V7Z' fill='#000000')


  //Sound Silent
  template(v-if="soundLevelType === soundLevelTypeEnum.SILENT")
    svg(xmlns='http://www.w3.org/2000/svg' width='24' height='24' clip-rule='evenodd' fill-rule='evenodd' image-rendering='optimizeQuality' text-rendering='geometricPrecision' shape-rendering='geometricPrecision')
      g
        path(stroke='null' d='m3.25413,5.41105l6.36393,0l5.2637,-5.12657c0.39013,-0.37707 1.02139,-0.38011 1.41123,-0.00304c0.19851,0.1858 0.29589,0.43333 0.29589,0.68387l0.00315,0l0,3.15702l-14.2129,13.92739a1.37583,1.32992 0 0 0 -0.31236,0.47631a3.20359,3.09668 0 0 1 -1.06565,-0.68204c-0.57915,-0.55706 -0.93863,-1.32898 -0.93863,-2.17758l0,-7.17046c0,-0.8486 0.35948,-1.62052 0.93577,-2.17735c0.59983,-0.58004 1.40649,-0.90754 2.25586,-0.90754zm18.6173,-2.63793c0.47052,-0.45758 1.23612,-0.45964 1.7095,-0.00482c0.47333,0.45477 0.47546,1.19482 0.00494,1.6524l-6.99383,6.82878l0,10.90757c0,0.53328 -0.448,0.96933 -1.00308,0.96933c-0.2804,0 -0.53333,-0.11188 -0.71634,-0.29182l-5.20273,-4.08604l-0.75823,0l-4.98147,4.86382c-0.47052,0.45758 -1.23607,0.4596 -1.70945,0.00482c-0.47338,-0.45482 -0.47546,-1.19487 -0.00499,-1.65245l13.68847,-13.36527l0.68782,-0.67399l0,0.00253l5.27939,-5.15485z' fill-rule='nonzero')

  //Sound Low
  template(v-else-if="soundLevelType === soundLevelTypeEnum.LOW")
    svg(xmlns='http://www.w3.org/2000/svg' width='24' height='24' clip-rule='evenodd' fill-rule='evenodd' image-rendering='optimizeQuality' text-rendering='geometricPrecision' shape-rendering='geometricPrecision' @click="resetSoundLevel")
      g
        path(stroke='null' d='m3.33418,5.64745l6.52346,0l5.39575,-5.29154c0.39987,-0.38926 1.04698,-0.39239 1.44662,-0.00313c0.20341,0.19174 0.30327,0.44721 0.30327,0.70586l0.00321,0l0,21.87388c0,0.55043 -0.45923,1.00049 -1.02819,1.00049c-0.28745,0 -0.54672,-0.11544 -0.73431,-0.30116l-5.33318,-4.21764l-6.57663,0c-0.89995,0 -1.71878,-0.35865 -2.3095,-0.93362c-0.5937,-0.57502 -0.96217,-1.37174 -0.96217,-2.24769l0,-7.40125c0,-0.87595 0.36847,-1.67271 0.9592,-2.24741c0.61489,-0.59873 1.44182,-0.9368 2.31248,-0.9368zm18.32027,3.3088c-0.16775,-0.48823 0.10283,-1.01696 0.60444,-1.18024c0.50161,-0.16327 1.04482,0.10004 1.21257,0.58828c0.33012,0.95402 0.48928,2.43499 0.46273,3.84327c-0.02579,1.38009 -0.23299,2.73615 -0.63392,3.53712c-0.23194,0.46397 -0.80708,0.65701 -1.28371,0.4313c-0.47668,-0.22571 -0.67501,-0.78552 -0.44312,-1.24948c0.27858,-0.55668 0.42485,-1.61966 0.44604,-2.74819c0.02311,-1.21785 -0.10226,-2.46318 -0.36502,-3.22205z' fill-rule='nonzero')

  //Sound Medium
  template(v-else-if="soundLevelType === soundLevelTypeEnum.MEDIUM")
    svg(xmlns='http://www.w3.org/2000/svg' width='24' height='24' clip-rule='evenodd' fill-rule='evenodd' image-rendering='optimizeQuality' text-rendering='geometricPrecision' shape-rendering='geometricPrecision' @click="resetSoundLevel")
      g
        path(stroke='null' style='vector-effect: non-scaling-stroke;' d='m2.68926,5.71643l5.23757,0l4.33213,-5.29767c0.32104,-0.38971 0.84058,-0.39282 1.16144,-0.00311c0.16334,0.19197 0.2435,0.44772 0.2435,0.70664l0.00261,0l0,21.89919c0,0.55106 -0.3687,1.00166 -0.82552,1.00166c-0.23081,0 -0.43897,-0.11557 -0.58958,-0.30153l-4.28191,-4.2225l-5.28024,0c-0.72252,0 -1.37994,-0.35909 -1.85425,-0.93471c-0.47664,-0.57562 -0.7725,-1.37332 -0.7725,-2.25024l0,-7.40983c0,-0.87693 0.29586,-1.67462 0.77017,-2.25002c0.49366,-0.59945 1.15757,-0.93788 1.85659,-0.93788zm14.70897,3.31263c-0.13466,-0.4888 0.08253,-1.01819 0.48527,-1.18163c0.40278,-0.16344 0.8389,0.10017 0.97357,0.58898c0.26504,0.95514 0.39285,2.4378 0.37149,3.84773c-0.02066,1.38169 -0.18703,2.73933 -0.50896,3.54121c-0.18619,0.46447 -0.64796,0.65774 -1.03069,0.43176c-0.38269,-0.22592 -0.54192,-0.78643 -0.35573,-1.2509c0.22368,-0.55734 0.34109,-1.62154 0.35811,-2.75139c0.01856,-1.21927 -0.08207,-2.46604 -0.29306,-3.22576zm3.97765,-3.49232c-0.16311,-0.47675 0.02308,-1.0239 0.41589,-1.22187c0.39285,-0.19802 0.84361,0.02801 1.00672,0.50476c0.71674,2.08261 1.10353,4.70609 1.13584,7.31356c0.03213,2.56859 -0.28033,5.14074 -0.95995,7.18441c-0.15798,0.47862 -0.60641,0.71111 -1.00075,0.51942c-0.3943,-0.19168 -0.5859,-0.73595 -0.42796,-1.21457c0.60361,-1.81481 0.88073,-4.132 0.8514,-6.46731c-0.02952,-2.37209 -0.37709,-4.74712 -1.02118,-6.61841z' fill-rule='nonzero')

  //Sound Full
  template(v-else-if="soundLevelType === soundLevelTypeEnum.FULL")
    svg(xmlns='http://www.w3.org/2000/svg' width='24' height='24' clip-rule='evenodd' fill-rule='evenodd' image-rendering='optimizeQuality' text-rendering='geometricPrecision' shape-rendering='geometricPrecision' @click="resetSoundLevel")
      g
        path(stroke='null' style='vector-effect: non-scaling-stroke;' d='m2.26382,5.60508l4.38945,0l3.63063,-5.31049c0.26905,-0.39066 0.70444,-0.39385 0.97336,-0.00318c0.13688,0.19242 0.20409,0.44886 0.20409,0.70836l0.00215,0l0,21.95235c0,0.55232 -0.309,1.0041 -0.69184,1.0041c-0.1934,0 -0.36786,-0.11593 -0.4941,-0.30231l-3.58853,-4.23274l-4.4252,0c-0.6055,0 -1.15649,-0.35997 -1.55398,-0.93696c-0.39945,-0.57705 -0.64741,-1.37668 -0.64741,-2.2557l0,-7.42784c0,-0.87903 0.24796,-1.67865 0.64545,-2.25543c0.41373,-0.6009 0.97014,-0.94014 1.55594,-0.94014zm12.32715,3.32065c-0.1129,-0.48999 0.06917,-1.02063 0.40669,-1.18446c0.33752,-0.16389 0.70304,0.10034 0.81589,0.5904c0.22215,0.95742 0.32921,2.44365 0.31134,3.85705c-0.01731,1.38501 -0.15677,2.7459 -0.42652,3.54972c-0.15607,0.46567 -0.54306,0.65937 -0.86378,0.43287c-0.32077,-0.2265 -0.4542,-0.78838 -0.29818,-1.25397c0.18748,-0.55869 0.2859,-1.62546 0.30014,-2.75803c0.01554,-1.2222 -0.06879,-2.47197 -0.24558,-3.23358zm3.33353,-3.50074c-0.1367,-0.478 0.01932,-1.02639 0.34853,-1.22491c0.32921,-0.19845 0.70701,0.02805 0.84371,0.50598c0.60065,2.08768 0.92482,4.71751 0.95189,7.33136c0.02693,2.57475 -0.23494,5.15323 -0.8045,7.20182c-0.1324,0.47976 -0.50819,0.71283 -0.83867,0.52061c-0.33047,-0.19215 -0.49102,-0.7377 -0.35866,-1.21746c0.50581,-1.81924 0.73805,-4.14202 0.7135,-6.48296c-0.02474,-2.37786 -0.31601,-4.75864 -0.8558,-6.63445zm3.22175,-2.97409c-0.15476,-0.4656 -0.02007,-1.02558 0.30065,-1.25025c0.32077,-0.22467 0.7065,-0.02913 0.86126,0.43647c1.05302,3.17173 1.62875,6.89611 1.64896,10.59428c0.01913,3.55345 -0.47384,7.09301 -1.54838,10.10985c-0.16307,0.45957 -0.55225,0.6402 -0.86882,0.40347c-0.31657,-0.2368 -0.44099,-0.80172 -0.27792,-1.26129c0.97644,-2.74156 1.42433,-5.9767 1.40679,-9.23732c-0.01857,-3.42343 -0.55043,-6.86678 -1.52253,-9.7952z' fill-rule='nonzero')



  input(ref="soundRef" type="range" min="0" max="100" :value="soundLevel" @input="changeSoundLevel")
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue-demi'
import { processEnum, soundLevelTypeEnum } from '@/enums'

export default defineComponent({
  name: 'VAudioPlayerControlPanel',
  setup() {
    const { increaseActiveAudioIndex, decreaseActiveAudioIndex } = inject('root');
    const { soundRef, playAudio, pauseAudio, changeSoundLevel, resetSoundLevel, isPlayingAudio, soundLevel, soundLevelType } = inject('operations');

    const clickedEvent = async event => {
      if(event === processEnum.PLAY) {
        playAudio()
      }

      if(event === processEnum.PAUSE) {
        pauseAudio()
      }

      if(event === processEnum.NEXT) {
        await increaseActiveAudioIndex();
        playAudio();
      }

      if(event === processEnum.PREV) {
        await decreaseActiveAudioIndex();
        playAudio();
      }
    }

    return {
      soundRef,

      clickedEvent,
      changeSoundLevel,
      resetSoundLevel,

      processEnum,
      soundLevelTypeEnum,
      isPlayingAudio,
      soundLevel,
      soundLevelType
    }
  }
})
</script>
