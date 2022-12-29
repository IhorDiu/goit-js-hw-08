
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const LOCALSTORAGE_KEY = 'videoplayer-current-time';
const setTime = function (e) {localStorage.setItem(LOCALSTORAGE_KEY, e.seconds)};
const getTime = localStorage.getItem(LOCALSTORAGE_KEY);

player.on('timeupdate', throttle(setTime), 1000);
player.setCurrentTime(getTime);


