<template>
    <div class="complex-photos">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <p class="my-head-text">комплект ваших фотографий </p>
                </div>
                <div class="col-12 col-lg-5 col-xl-5">
                    <div class="complex-photos-texts">
                        <p>
                            Мы планируем отправить наложенным платежом этот комплект на ваш домашний адрес, который
                            указал ваш
                            солдат. Оплатив его в почтовом отделении вы потом сможете скачать здесь бесплатно
                            электронный
                            вариант.
                            Если вам ничего не нужно, пожалуйста нажмите на кнопку внизу.
                        </p>
                        <p>
                            Мы планируем отправить наложенным платежом этот комплект на ваш домашний адрес, который
                            указал ваш
                            солдат. Оплатив его в почтовом отделении вы потом сможете скачать здесь бесплатно
                            электронный
                            вариант.
                            Если вам ничего не нужно, пожалуйста нажмите на кнопку внизу.
                        </p>
                        <Button bgcolor="bg-red" @toggleModal='showModalFunc' class="mr-30" value="скачать"/>
                        <Button bgcolor="bg-blue" value="отказаться"/>
                    </div>
                </div>
                <div class="col-12 col-lg-2 col-xl-2">
                    <hooper ref="carousel" :settings="hooperSettings" :infiniteScroll="true"
                            style="outline: none !important;">
                        <slide class="photos">
                            <viewer :options="options" class="photos-card">
                                <img src="../../assets/images/complexPhotos/complect-1.png"/>
                            </viewer>
                        </slide>
                        <slide class="photos">
                            <viewer :options="options" class="photos-card">
                                <img src="../../assets/images/complexPhotos/complect-2.png"/>
                            </viewer>
                        </slide>
                        <slide class="photos">
                            <viewer :options="options" class="photos-card">
                                <img src="../../assets/images/complexPhotos/complect-3.png"/>
                            </viewer>
                        </slide>
                        <slide class="photos">
                            <viewer :options="options" class="photos-card">
                                <img src="../../assets/images/complexPhotos/complect-4.png"/>
                            </viewer>
                        </slide>
                    </hooper>
                </div>

                <div class="col-12 col-lg-3 col-xl-3">
                    <ul>
                        <li>
                            * так выглядит полный комплект фотографий.
                        </li>
                        <li>
                            4 листа А4
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <modal v-if="showModal" @close="closeModal">
            <span slot="header">Выберите нужный вариант</span>
            <div class="row" slot="body">
                <div class="col-sm-12 col-md-5 col-lg-5 col-xl-5">
                    <p class="modal-head text-red">Бумажный</p>
                    <p class="content-text">(Отправка бандероли
                        с наложенным платежом Почтой России.
                        Придет через 7-10 дней.
                        После получения
                        электронный
                        вариант в подарок)
                    </p>
                    <p class="modal-price text-red">2296 ₽</p>
                    <p class="modal-old-price">2300 ₽</p>
                    <Button value="заказать  бумажный" class="d-flex" bgcolor="bg-red"/>
                </div>
                <div class="col-sm-12 col-md-2 col-lg-2 col-xl-2 vertical-line">
                    <div class="line">
                    </div>
                </div>
                <div class="col-sm-12 col-md-5 col-lg-5 col-xl-5">
                    <p class="modal-head text-blue">электронный</p>
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
    import 'viewerjs/dist/viewer.css'
    import Viewer from 'v-viewer'
    import Vue from 'vue'
    import Button from "../button/Button";
    import Modal from "./Modal";
    import Timer from "./Timer";
    import {Hooper, Slide} from 'hooper';
    import 'hooper/dist/hooper.css';

    Vue.use(Viewer);

    export default {
        name: "ComplectPhotosMobile",
        data() {
            return {
                options: {
                    "navbar": false,
                    "title": false
                },
                hooperSettings: {
                    itemsToShow: 4,
                    centerMode: false,
                    mouseDrag: true,
                    autoPlay: true,
                    touchDrag: true,
                    wheelControl: false,
                    // keysControl:false,
                    // shortDrag:false
                    itemsToSlide: 1,
                    carouselData: 0,
                    hoverPause: false,
                    breakpoints: {
                        0: {
                            centerMode: false,
                            itemsToShow: 1
                        }, 576: {
                            centerMode: false,
                            itemsToShow: 2
                        },
                        1000: {
                            itemsToShow: 4,
                            pagination: 'fraction'
                        }
                    }
                },

                showModal: false
            }
        },
        methods: {
            showModalFunc(data) {
                this.showModal = data.toggleModal;
                document.body.className = 'hidden';
            },
            slidePrev() {
                this.$refs.carousel.slidePrev();
            },
            slideNext() {
                this.$refs.carousel.slideNext();
            },
            closeModal(){
                this.showModal = false;
                document.body.className = '';

            }
        },
        components: {
            Timer, Button, Modal, Hooper,
            Slide
        }
    }
</script>

<style scoped>

</style>