<template>
    <div class="my-slide">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="my-head-text">Фотографии присяги
                        <div class="slider-buttons">
                            <div @click.prevent="slidePrev" class="back-left">
                                <img src="../../assets/images/icons/back-left.png" height="31" width="31"/>
                            </div>
                            <div @click.prevent="slideNext" class="back-right">
                                <img src="../../assets/images/icons/back-right.png" height="31" width="31"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12">

                    <hooper ref="carousel" :settings="hooperSettings" :infiniteScroll="true"
                            style="outline: none !important;">
                        <slide class="slide-box">
                            <div>
                                <viewer :options="options">
                                    <div class="slide-img">
                                        <div class="img-bg">

                                            <img src="../../assets/images/FA9A2035.png" height="384" width="261"/></div>
                                    </div>
                                </viewer>
                            </div>
                        </slide>
                        <slide class="slide-box">
                            <viewer :options="options">
                                <div class="slide-img">
                                    <div class="img-bg">

                                        <img src="../../assets/images/FA9A2035.png" height="384" width="261"/></div>
                                </div>

                            </viewer>
                        </slide>
                        <slide class="slide-box">
                            <viewer :options="options">
                                <div class="slide-img">
                                    <div class="img-bg">

                                        <img src="../../assets/images/FA9A2035.png" height="384" width="261"/></div>
                                </div>
                            </viewer>
                        </slide>
                        <slide class="slide-box">
                            <viewer :options="options">
                                <div class="slide-img">
                                    <div class="img-bg">

                                        <img src="../../assets/images/FA9A2035.png" height="384" width="261"/></div>
                                </div>
                            </viewer>
                        </slide>
                    </hooper>

                </div>
                <div class="col-12">
                    <Button bgcolor="bg-red" @toggleModal='showModalFunc' class="mr-30" value="скачать фотографии"/>
                    <Button bgcolor="bg-blue" value="отказаться"/>
                </div>
            </div>
        </div>

        <modal v-if="showModal" @close="showModal = false">
            <span slot="header">Выберите нужный вариант</span>
            <div class="row" slot="body">
                <div class="col-5">
                    <p class="modal-head text-red">носитель на cd</p>
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
                <div class="col-2 vertical-line">
                    <div class="line">
                    </div>
                </div>
                <div class="col-5">
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

    import {Hooper, Slide} from 'hooper';
    import 'hooper/dist/hooper.css';
    import Button from "../button/Button";
    import Modal from "./Modal";
    import Timer from "./Timer";


    export default {
        name: "PhotosCarousel",
        data() {
            return {
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
                options: {
                    "navbar": false,
                    "title": false
                },
                showModal: false
            }
        },
        methods: {
            showModalFunc(data) {
                this.showModal = data.toggleModal;
            },
            slidePrev() {
                this.$refs.carousel.slidePrev();
            },
            slideNext() {
                this.$refs.carousel.slideNext();
            }
        },
        components: {
            Timer,
            Modal,
            Button,
            Hooper,
            Slide,

        }
    }
</script>
