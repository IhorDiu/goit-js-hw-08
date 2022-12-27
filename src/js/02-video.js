
import Player from '@vimeo/player';
import Throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const setTime = function (e) {localStorage.setItem("videoplayer-current-time", e.seconds)};
const getTime = localStorage.getItem("videoplayer-current-time");

player.on('timeupdate', Throttle(setTime), 1000);
player.setCurrentTime(getTime);


