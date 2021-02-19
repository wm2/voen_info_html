<template>
    <div class="news">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="my-head-text">последние военные новости
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
                <hooper ref="carousel" :settings="hooperSettings" :infiniteScroll="true"
                        style="outline: none !important;">
                    <slide class="slide-box" v-for="item in news">
                        <div class="card-news">
                            <div class="card-news-header">
                                <img :src='item.imgUrl===null?notFoundImg:item.imgUrl' alt="img" draggable="false">
                            </div>
                            <div class="card-news-body">
                                <p class="news-title"> {{item.title}}</p>
                                <p class="news-text"> {{setLength(item.text)}}</p>
                            </div>
                        </div>
                    </slide>
                </hooper>
            </div>
        </div>
    </div>
</template>

<script>
    import img from '../../assets/images/img-news.png'
    import notFoundImg from '../../assets/images/not-found-img.png'
    import {Hooper, Slide} from 'hooper';
    import 'hooper/dist/hooper.css';

    export default {
        name: "News",
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
                    hoverPause: false
                },
                notFoundImg: notFoundImg,
                news: [
                    {
                        imgUrl: null,
                        title: "Минобороны и РВИО будут вместе популяризировать военные музеи",
                        text: "Заместитель Министра обороны Российской Федерации – начальник будут вместе популяризировать военные музеи будут вместе популяризировать"
                    },
                    {
                        imgUrl: img,
                        title: "Минобороны и РВИО будут вместе популяризировать военные музеи",
                        text: "Заместитель Министра обороны Российской Федерации – начальник будут вместе популяризировать военные музеи будут вместе популяризировать"
                    },
                    {
                        imgUrl: img,
                        title: "Минобороны и РВИО будут вместе популяризировать военные музеи",
                        text: "Заместитель Министра обороны Российской Федерации – начальник будут вместе популяризировать военные музеи будут вместе популяризировать"
                    },
                    {
                        imgUrl: img,
                        title: "Минобороны и РВИО будут вместе популяризировать военные музеи",
                        text: "Заместитель Министра обороны Российской Федерации – начальник будут вместе популяризировать военные музеи будут вместе популяризировать"
                    },
                ]
            }
        },
        components: {
            Hooper,
            Slide
        },
        methods: {
            setLength(text) {
                if (!!text) {
                    if ((!!text) && text.length > 61) {
                        return text.substring(0, 61) + '...'
                    } else {
                        return text
                    }
                }
            },
            slidePrev() {
                this.$refs.carousel.slidePrev();
            },
            slideNext() {
                this.$refs.carousel.slideNext();
            }
        }
    }
</script>

<style lang="scss">
    .news {
        outline: none !important;
        margin-bottom: 90px;

        .my-head-text {
            display: flex;
            justify-content: space-between;
        }
    }
</style>