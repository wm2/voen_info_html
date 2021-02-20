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
                    <div class="photos">
                        <viewer :options="options" class="photos-card-first">
                            <div>
                                <img src="../../assets/images/complexPhotos/image_12_1.png"/>
                                <img src="../../assets/images/complexPhotos/image_17_1.png"/>
                            </div>
                            <div>
                                <img src="../../assets/images/complexPhotos/image_10_1.png"/>
                                <img src="../../assets/images/complexPhotos/image_17_1.png"/>
                            </div>
                        </viewer>
                    </div>
                    <div class="photos">
                        <viewer :options="options" class="photos-card-second">
                            <img src="../../assets/images/complexPhotos/image_6.png"/>
                        </viewer>
                    </div>
                </div>
                <div class="col-12 col-lg-2 col-xl-2">
                    <div class="photos">
                        <viewer :options="options" class="photos-card-third">
                            <img src="../../assets/images/complexPhotos/image_5.png" width="100%"/>
                            <div>
                                <div>
                                    <img src="../../assets/images/complexPhotos/image_17.png"/>
                                    <img src="../../assets/images/complexPhotos/image_5.png"/>

                                </div>
                                <div>
                                    <img src="../../assets/images/complexPhotos/image_17.png"/>
                                    <img src="../../assets/images/complexPhotos/image_10.png"/>
                                </div>
                            </div>
                        </viewer>
                    </div>
                    <div class="photos">
                        <viewer :options="options" class="photos-card-fourth">
                            <div>
                                <img src="../../assets/images/complexPhotos/image_12_1.png"/>
                                <img src="../../assets/images/complexPhotos/image_10_1.png"/>
                            </div>
                            <img src="../../assets/images/complexPhotos/image_5.png" width="100%"/>
                        </viewer>
                    </div>
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


            <modal v-if="showModal" @close="showModal = false">
                <span slot="header">Выберите нужный вариант</span>
                <div class="row" slot="body">
                    <div class="col-5">
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
                        <Button value="заказать  бумажный" class="d-flex"  bgcolor="bg-red" />
                    </div>
                    <div class="col-2 vertical-line">
                        <div class="line">
                        </div>
                    </div>
                    <div class="col-5">
                        <p class="modal-head text-blue">электронный</p>
                        <p class="content-text">
                            (После внесения
                            100% предоплаты на карту
                            вы сможете сразу скачать здесь свой комплект.
                            После нажатия с вами свяжется наш менеджер)
                        </p>
                        <p class="modal-price text-blue">1996 ₽</p>
                        <p class="modal-old-price">2300 ₽</p>
                        <Button value="заказать  электронный" class="d-flex" bgcolor="bg-blue" />
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

    Vue.use(Viewer);

    export default {
        name: "ComplectPhotos",
        data() {
            return {
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
        components: {Timer, Button,    Modal}
    }
</script>

<style scoped>

</style>