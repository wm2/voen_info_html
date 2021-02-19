import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "./assets/styles/app.scss";
import VueCoreVideoPlayer from 'vue-core-video-player'


const kr = {
    "dashboard": {
        "btn": {
            "play": "Смотреть",
            "pause": "Пауза",
            "fullscreen": "Весь экран",
            "exitFullscreen": "Выйти из полноэкранного режима",
            "mute": "Отключение звука",
            "unmute": "Включить звук",
            "back": "Назад",
            "pip": "Мини-проигрователь"
        },
        "settings" : {
            "autoplay": "Автоплей",
            "loop": "Повторять",
            "speed": "Скорость",
            "resolution": "Разрешение"
        }
    },
    "layers": {
        "error": {
            "title": "Ошибка !",
            "2404": "Источник видео не найден",
            "2502": "Ошибка медиа сети",
            "2503": "Видео не может декодироваться",
            "2504": "Видео не воспроизводится!"
        },
        "loading": {
            "msg": "Загрузка ..."
        }
    }
};


Vue.use(VueCoreVideoPlayer, {
    lang: kr
});

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
