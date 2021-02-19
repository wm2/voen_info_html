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
                            <img src="../../assets/images/Голиков АА 1.png" height="332" width="100%"
                                 style="margin-bottom: 70px"/>
                        </viewer>

                    </div>
                    <div class="row">
                        <div class="col-6">
                            <Button bgcolor="bg-red" value="скачать видео"/>
                        </div>
                        <div class="col-6">
                            <Button bgcolor="bg-blue" value="отказаться"/>
                        </div>

                    </div>
                </div>
            </div>

        </div>

    </div>
</template>

<script>
    import Button from "../button/Button";
    import img from '../../assets/images/img-video.png'


    export default {
        name: "VideoFilming",
        components: {Button},
        data() {
            return {
                cover: img,
                title:"Видеосъемка присяги",
                options: {
                    "navbar": false,
                    "title": false
                }
            }
        }
    }
</script>

<style lang="scss">

</style>