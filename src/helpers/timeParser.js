const timeParser = () => {
  // Saniyeyi MM:SS formatına çevirir
  const parseTimeMinAndSec = ({ sec }) => {
    const minutes = Math.floor(sec / 60);
    const seconds = Math.round(sec % 60);

    const formattedMinutes = minutes.toString().padStart(2, '0');
    const formattedSeconds = seconds.toString().padStart(2, '0');

    return  `${formattedMinutes}:${formattedSeconds}`;
  };

  // MM:SS formatını saniyeye çevirir
  const parseTimeToSeconds = ({ time }) => {
    const [minutes, seconds] = time.split(':').map(Number);
    return (minutes * 60) + seconds;
  }

  return {
    parseTimeMinAndSec,
    parseTimeToSeconds
  }
}

export default timeParser
