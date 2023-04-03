
//Задача полягає у збереженні часу, на якому користувач зупинив перегляд відео

import Player from '@vimeo/player'; //використовуємо відеоплеєр Vimeo
 import throttle from 'lodash.throttle';

const videoCurrentTime = 'videoplayer-current-time'; // ключем для сховища буде рядок

const iframe = document.querySelector('iframe');
    const player = new Player(iframe);

    const onPlay = function(data) { //функція onPlay зберігає час в локальному сховищі
        localStorage.setItem(videoCurrentTime, data.seconds);
    };
    

    player.on('play', throttle(onPlay, 1000)); 
    
    localStorage.getItem(videoCurrentTime);//Отримуємо збережений час
    // Якщо значення відсутнє, початковий час- 0
    player.setCurrentTime(JSON.parse(localStorage.getItem(videoCurrentTime)) || 0);
        
    
