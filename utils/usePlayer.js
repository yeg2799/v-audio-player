const usePlayer = (props, audio, isPlay, volumeRange) => {
  const play = () => {
    audio.value.play();
    isPlay.value = true;
  }

  const pause = () => {
    audio.value.pause();
    isPlay.value = false;
  }

  const playList = (sound) => {
    audio.value.src = sound.source;
    play();
  }

  const forwardSound = () => {
    let index = props.soundList.findIndex(sound => sound.source === audio.value.src);
    if (index < props.soundList.length - 1) {
      index++;
      playList(props.soundList[index]);
    } else {
      playList(props.soundList[0]);
    }
  }

  const backwardSound = () => {
    let index = props.soundList.findIndex(sound => sound.source === audio.value.src);
    if (index > 0) {
      index--;
      playList(props.soundList[index]);
    } else {
      playList(props.soundList[props.soundList.length - 1]);
    }
  }

  const mutedVolume = () => {
    audio.value.muted = !audio.value.muted;
  }

  const handleVolumeChange = (e) => {
    audio.value.muted = false;
    audio.value.volume = e.target.value / 100;
    volumeRange.value = e.target.value;
  }

  return {
    play,
    playList,
    pause,
    forwardSound,
    backwardSound,
    mutedVolume,
    handleVolumeChange,
  };
};

export default usePlayer;
