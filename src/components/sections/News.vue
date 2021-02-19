<template>
    <div class="news">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <p class="my-head-text">последние военные новости</p>
                </div>
                <div v-for="item in news" class="col-3">
                    <div class="card-news">
                        <div class="card-news-header">
                            <img :src='item.imgUrl===null?notFoundImg:item.imgUrl' alt="img">
                        </div>
                        <div class="card-news-body">
                            <p class="news-title"> {{item.title}}</p>
                            <p class="news-text"> {{setLength(item.text)}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import img from '../../assets/images/img-news.png'
    import notFoundImg from '../../assets/images/not-found-img.png'

    export default {
        name: "News",
        data() {
            return {
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
        methods:{
            setLength(text) {
                if (!!text) {
                    if ((!!text) && text.length > 61) {
                        return text.substring(0, 61) + '...'
                    } else {
                        return text
                    }
                }
            },
        }
    }
</script>

<style scoped>

</style>