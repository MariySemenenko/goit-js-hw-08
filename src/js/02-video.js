
//Задача полягає у збереженні часу, на якому користувач зупинив перегляд відео

import Player from '@vimeo/player'; //використовуємо відеоплеєр Vimeo
 import throttle from 'lodash.throttle';

const VIMEO_CURRENT_TIME = 'videoplayer-current-time'; // ключем для сховища буде рядок

const iframe = document.querySelector('iframe');
    const player = new Player(iframe);

    const onPlay = function(data) { //функція onPlay зберігає час в локальному сховищі
        localStorage.setItem(VIMEO_CURRENT_TIME, data.seconds);
    };
    

    player.on('play', throttle(onPlay, 1000)); 
    

    // Якщо значення відсутнє, початковий час- 0
    player.setCurrentTime(JSON.parse(localStorage.getItem(VIMEO_CURRENT_TIME)) || 0);
        
    
