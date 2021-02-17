<template>
    <div class="complex-photos">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <p class="my-head-text">комплект ваших фотографий </p>
                </div>
                <div class="col-5">
                    <div class="complex-photos-texts">
                        <p>
                            Мы планируем отправить наложенным платежом этот комплект на ваш домашний адрес, который указал ваш
                            солдат. Оплатив его в почтовом отделении вы потом сможете скачать здесь бесплатно электронный
                            вариант.
                            Если вам ничего не нужно, пожалуйста нажмите на кнопку внизу.
                        </p>
                        <p>
                            Мы планируем отправить наложенным платежом этот комплект на ваш домашний адрес, который указал ваш
                            солдат. Оплатив его в почтовом отделении вы потом сможете скачать здесь бесплатно электронный
                            вариант.
                            Если вам ничего не нужно, пожалуйста нажмите на кнопку внизу.
                        </p>
                        <Button bgcolor="bg-red" class="mr-30" value="скачать"/>
                        <Button bgcolor="bg-blue" value="отказаться"/>
                    </div>


                </div>
                <div class="col-4">
                    <!--                <div class="images" v-viewer >-->

                    <!--                    <img src="../../assets/images/complexPhotos/image 5.png" height="159" width="224"/><img-->
                    <!--                        src="../../assets/images/complexPhotos/image 3-1.png" height="151" width="105"/></div>-->
                    <!--                 component -->
                    <viewer :options="options">
                        <img src="../../assets/images/complexPhotos/image 5.png" height="159" width="224"/>
                        <img src="../../assets/images/complexPhotos/image 3-1.png" height="151" width="105"/>
                    </viewer>
                </div>
                <div class="col-3">
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
    </div>
</template>

<script>
    import 'viewerjs/dist/viewer.css'
    import Viewer from 'v-viewer'
    import Vue from 'vue'
    import Button from "../button/Button";

    Vue.use(Viewer);

    export default {
        name: "ComplectPhotos",
        data() {
            return {
                options: {
                    "navbar": false,
                    "title": false
                }
            }
        },
        components: {Button}
    }
</script>

<style scoped>

</style>