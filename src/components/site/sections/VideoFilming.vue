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
                            <img src="../../../assets/images/golikov.png" width="100%"
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

        <modal v-if="showModal" @close="closeModal" class="address-modal">
            <span slot="header">внесите или отредактируйте данные</span>
            <div slot="body">
                <form id="modal-address" action="/" @submit="checkForm" method="post">
                    <div class="row edit-info-modal">
                        <div class="col-12">
                            <p class="modal-head text-blue">Адрес:</p>
                        </div>
                        <div class="col-sm-12 col-md-5 col-lg-5 col-xl-5 address-form">
                            <div>
                                <label for="index">Индекс</label>
                                <input type="text" aria-label="346821" class="form-control" id="index" v-model="index">
                            </div>
                            <div>
                                <label for="rayon">Район</label>
                                <select class="custom-select" id="rayon">
                                    <option selected>Таганрогская</option>
                                    <option value="1">Таганрогская1</option>
                                    <option value="2">Таганрогская2</option>
                                </select>
                            </div>
                            <div>
                                <label for="street">Улица</label>
                                <select class="custom-select" id="street">
                                    <option selected>Таганрогская</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>

                        </div>
                        <div class="col-sm-12 col-md-7 col-lg-7 col-xl-7 address-form">
                            <div>
                                <label for="region">Регион</label>
                                <select class="custom-select" id="region">
                                    <option selected>Ростовская область</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                            <div>
                                <label for="town">Город</label>
                                <select class="custom-select" id="town">
                                    <option selected>ст. Егорлыкская</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                            <div class="row">
                                <div class="col">
                                    <div>
                                        <label for="number_home">Номер дома</label>
                                        <input type="text" aria-label="Last name" class="form-control" id="number_home"
                                               placeholder="143">
                                    </div>
                                </div>
                                <div class="col">
                                    <div>
                                        <label for="structure">Строение</label>
                                        <input type="text" aria-label="Last name" class="form-control" id="structure"
                                               placeholder="3">
                                    </div>
                                </div>
                                <div class="col">
                                    <div>
                                        <label for="home">Квартира</label>
                                        <input type="text" aria-label="Last name" class="form-control" id="home"
                                               placeholder="79">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12">
                            <p class="modal-head text-blue">Данные получателя:</p>
                        </div>
                        <div class="col-sm-12 col-md-5 col-lg-5 col-xl-5 address-form">
                            <div>
                                <label for="relation_degree">Степень родства:</label>
                                <input type="text" aria-label="Родитель" class="form-control" id="relation_degree"
                                       placeholder="Родитель">
                            </div>
                            <div>
                                <label for="name">Имя</label>
                                <input type="text" aria-label="Ирина" class="form-control" id="name"
                                       placeholder="Ирина">
                            </div>
                            <div>
                                <label for="phone">Район</label>
                                <input type="tel" aria-label="8 (908) - 932 - 65 - 47" class="form-control" id="phone"
                                       placeholder="8 (908) - 932 - 65 - 47">
                            </div>
                        </div>
                        <div class="col-sm-12 col-md-7 col-lg-7 col-xl-7 address-form">
                            <div>
                                <label for="surname">Фамилия</label>
                                <input type="text" aria-label="Иванова" class="form-control" id="surname"
                                       placeholder="Иванова">
                            </div>
                            <div>
                                <label for="middle_name">Отчество</label>
                                <input type="tel" aria-label="Игоревна" class="form-control" id="middle_name"
                                       placeholder="Игоревна">
                            </div>
                        </div>

                        <div class="col-12">
                            <a href="" class="add-btn bg-blue">
                                <img src="../../../assets/images/icons/add-icon.png" height="13" width="13"/>
                            </a>
                            <Button value="Сохранить и оптравить" class="d-flex" bgcolor="bg-red"/>
                            <input type="submit" value="Сохранить и оптравит">
                        </div>
                    </div>
                </form>
            </div>


        </modal>
    </div>
</template>

<script>
    import Button from "../button/Button";
    import img from '../../../assets/images/img-video.png'

    import Modal from "./Modal";

    export default {
        name: "VideoFilming",
        components: {Button, Modal},
        data() {
            return {
                cover: img,
                title: "Видеосъемка присяги",
                options: {
                    "navbar": false,
                    "title": false
                },
                showModal: false,
                errors: null,
                index: null
            }
        },
        methods: {
            showModalFunc(data) {
                this.showModal = data.toggleModal;
                if (window.innerWidth < 576) {
                    document.body.className = 'hidden';
                }
            },
            closeModal() {
                this.showModal = false;
                document.body.className = '';
            },
            checkForm: function (e) {
                if (this.index) return true;
                this.errors = null;
                if (!this.index) this.errors = "Name required.";
                console.log(e);
                e.preventDefault();
            }
        },
    }
</script>

<style lang="scss">


</style>