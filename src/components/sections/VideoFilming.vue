<template>
    <div class="video-filming">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <p class="my-head-text">
                        Видеосъемка присяги </p>
                </div>
                <div class="col-12 col-lg-7 col-xl-7">
                    <div class="player-container">
                        <vue-core-video-player :cover="cover" style="height: auto"
                                               src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"></vue-core-video-player>
                    </div>
                </div>
                <div class="col-12 col-lg-4 col-xl-4">
                    <div class="video-info">
                        <p>
                            Мы официально состоим в ассоциации военных фотографов. Поэтому фото или видео принятия
                            присяги
                            Вашего
                            солдата Вы можете посмотреть только у нас.
                            А на скринах ниже Вы можете посмотреть фрагмент видео присяги.
                        </p>
                        <p>
                            После оплаты Вам будет доступно полное видео
                        </p>
                        <viewer :options="options">
                            <img src="../../assets/images/Голиков АА 1.png" width="100%"
                                 style="margin-bottom: 70px"/>
                        </viewer>

                    </div>
                    <div class="row">
                        <div class="col-12">
                            <Button bgcolor="bg-red" @toggleModal='showModalFunc' class="mr-30" value="купить видео"/>
                            <Button bgcolor="bg-blue" value="отказаться"/>
                        </div>

                    </div>
                </div>
            </div>

        </div>

        <modal v-if="showModal" @close="closeModal">
            <span slot="header">внесите или отредактируйте данные</span>
            <div class="row edit-info-modal" slot="body">
                <div class="col-12">
                    <p class="modal-head text-blue">Адрес:</p>
                </div>
                <div class="col-sm-12 col-md-4 col-lg-4 col-xl-4">

                    <v-select :options="options111"></v-select>

                    <p class="content-text">(Отправка бандероли
                        с наложенным платежом Почтой России.
                        Придет через 7-10 дней.
                        После получения
                        электронный
                        вариант в подарок)
                    </p>
                    <p class="modal-price text-red">2296 ₽</p>
                    <p class="modal-old-price">2300 ₽</p>
                    <Button value="заказать диск" class="d-flex" bgcolor="bg-red"/>
                </div>
                <div class="col-sm-12 col-md-8 col-lg-8 col-xl-8">
                    <p class="modal-head text-blue">носитель на cd</p>
                    <p class="content-text">
                        (После внесения
                        100% предоплаты на карту
                        вы сможете сразу скачать здесь свой комплект.
                        После нажатия с вами свяжется наш менеджер)
                    </p>
                    <p class="modal-price text-blue">1996 ₽</p>
                    <p class="modal-old-price">2300 ₽</p>
                    <Button value="заказать  электронный" class="d-flex" bgcolor="bg-blue"/>
                </div>
                <div class="col-12">
                    <Timer deadline="05/01/2021"/>
                </div>

            </div>
        </modal>
    </div>
</template>

<script>
    import Button from "../button/Button";
    import img from '../../assets/images/img-video.png'
    import Modal from "./Modal";
    Vue.component('v-select', VueSelect.VueSelect);

    export default {
        name: "VideoFilming",
        components: {Button,Modal},
        data() {
            return {
                cover: img,
                title:"Видеосъемка присяги",
                options: {
                    "navbar": false,
                    "title": false
                },
                showModal: false,
                options111: [
                    'foo',
                    'bar',
                    'baz'
                ]
            }
        },
        methods: {
            showModalFunc(data) {
                this.showModal = data.toggleModal;
                if (window.innerWidth < 576) {
                    document.body.className = 'hidden';
                }
            },
            closeModal(){
                this.showModal = false;
                document.body.className = '';
            }
        },
    }
</script>

<style lang="scss">

</style>