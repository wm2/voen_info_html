import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "./assets/styles/app.scss";
import VueCoreVideoPlayer from 'vue-core-video-player'
import vuetify from './plugins/vuetify';
import VueAxios from 'vue-axios'
import './filtres/filters'
import axios from 'axios'



Vue.config.productionTip = false;
Vue.use(VueAxios, axios);

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
    vuetify,
    render: h => h(App)
}).$mount('#app');
