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
                                <a @click='showModalFunc(item.id)' class="text-blue"
                                   style="cursor: pointer;">Подробнее</a>
                            </div>
                        </div>
                    </slide>
                </hooper>
            </div>
        </div>
        <modal v-if="showModal" @close="closeModal" class="slide-box modal-news">
            <span slot="header">{{news[clickCardId].title}}</span>
            <div slot="body">
                <p>{{news[clickCardId].title}}</p>
                <p class="create-date">{{news[clickCardId].create_date}}</p>
                <img :src='news[clickCardId].imgUrl===null?notFoundImg:news[clickCardId].imgUrl' alt="img"
                     draggable="false" width="100%" style="max-width: 100%;margin-bottom: 10px">
                <p class="news-text"> {{news[clickCardId].text}}</p>
            </div>
        </modal>
    </div>
</template>

<script>
    import img from '../../assets/images/img-news.png'
    import notFoundImg from '../../assets/images/not-found-img.png'
    import {Hooper, Slide} from 'hooper';
    import 'hooper/dist/hooper.css';
    import Button from "../button/Button";
    import Modal from "./Modal";
    import Timer from "./Timer";

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
                notFoundImg: notFoundImg,
                news: [
                    {
                        id: 0,
                        create_date: "19.01.2021",
                        imgUrl: null,
                        title: "Минобороны и РВИО будут вместе популяризировать военные музеи ",
                        text: "Заместитель Министра обороны Российской Федерации – начальник будут вместе популяризировать военные музеи будут вместе популяризировать"
                    },
                    {
                        id: 1,
                        create_date: "10.02.2021",
                        imgUrl: img,
                        title: "Минобороны и РВИО будут вместе популяризировать военные музеи ",
                        text: "Заместитель Министра обороны Российской Федерации – начальник будут вместе популяризировать военные музеи будут вместе популяризировать"
                    },
                    {
                        id: 2,
                        create_date: "13.01.2021",
                        imgUrl: img,
                        title: "Минобороны и РВИО будут вместе популяризировать военные музеи  ",
                        text: "В Абу-Даби открылась 15-ая Международная оборонная выставка «IDEX 2021». Международная выставка вооружений IDEX 2021 считается наиболее крупной и престижной не только в регионе Ближнего Востока и Северной Африки, но и во всём мире. Начиная с 1993 года, она проходит регулярно каждые два года в столице ОАЭ Абу-Даби. И каждый год её участником традиционно становится Россия – концерн «Рособоронэкспорт» как организатор российской экспозиции на выставке. Тематическая направленность выставки – техника и вооружения для сухопутных войск, военно-морских и военно-воздушных сил, а также для войск противовоздушной обороны.\n" +
                            "\n" +
                            "В этом году на российском стенде представлено более 400 видов военной продукции (на предыдущей выставке Россия показала более 200 перспективных разработок). В частности, будут продемонстрированы новинки экспортного каталога: бронетранспортёр и боевая машина пехоты «Бумеранг», ЗРС «Антей-4000», ЗРК «Викинг», ЗРК «Тор-Э2». Впервые пройдёт презентация танка «Армата», а также автомата «КОРД», пистолета Лебедева и новейшей модификации автомата Калашникова. Ещё одна новинка от Рособоронэкспорта – система противодействия беспилотным аппаратам «Купол-ПРО».\n" +
                            "\n" +
                            "Также посетители выставки увидят многоцелевой сверхманевренный истребитель Су-35 и вертолёт Ми-38Т. Представлены и популярные на Ближнем Востоке комплексы ПВО – «Триумф» и «Тор». Среди военно-морских новинок будут показаны модели патрульного корабля и малого ракетного корабля «Каракурт-Э».\n" +
                            "\n" +
                            "Как заявляют в Рособоронэкспорте, российская экспозиция продемонстрирует средства и решения по обеспечению безопасности в условиях развития средств нападения, в том числе ракетные и ударные беспилотники. Представленное российское вооружение предназначено для противостояния в первую очередь террористическим группировкам и обеспечивает безопасность государственных объектов, инфраструктуры, транспорта и энергетики.\n" +
                            "\n" +
                            "Как отмечают в Рособоронэкспорте, опыт локальных войн и военных конфликтов последних двух лет выявил новые вызовы и угрозы. Террористическим группам стали широко доступны беспилотные аппараты, с помощью которых наносятся удары по промышленным и военным объектам. В этой связи возрастает роль противовоздушной обороны именно против беспилотников. Новый российский комплекс противодействия беспилотным летательным аппаратам сочетает средства радиоэлектронной борьбы и комплексы ПВО различных классов. Подобные системы подавления БЛА наиболее эффективно противостоят дронам лёгкого и частично среднего класса. Они способны обеспечить надёжную защиту объекта во время массированного воздушного налёта путём подавления их командно-телеметрических каналов и каналов навигации.\n" +
                            "\n" +
                            "Российское оружие хорошо известно в регионе Ближнего Востока и Северной Африки и пользуется здесь высоким спросом. Поэтому для российского оружейного экспорта этот регион представляет особую важность: по итогам 2020 года именно на страны данного региона пришлось более 50% всех поставок оружия из России. Общий объём российских поставок оружия в зарубежные страны в 2020 году составил 13 млрд долларов."
                    },
                    {
                        id: 3,
                        create_date: "12.02.2021",
                        imgUrl: img,
                        title: "Минобороны и РВИО будут вместе популяризировать военные музеи ",
                        text: "Заместитель Министра обороны Российской Федерации – начальник будут вместе популяризировать военные музеи будут вместе популяризировать"
                    },
                ],
                showModal: false,
                clickCard: 0
            }
        },
        components: {
            Hooper,
            Slide,
            Timer, Button, Modal
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
            },
            showModalFunc(id) {
                this.showModal = true;
                document.body.className = 'hidden';
                this.clickCardId = id
            },
            closeModal() {
                this.showModal = false;
                document.body.className = ''

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

    .hidden {
        overflow: hidden;
    }

    .modal-news {
        .modal-container {
            width: 70%;
        }

        .modal-header {
            padding: 30px 130px 10px 130px;
            text-align: left;
            color: #344F82;
        }

        .modal-footer {
            padding-bottom: 30px;
            padding-top: 20px;
        }

        p {
            font-size: 16px;
            line-height: 148%;
            letter-spacing: 0.07em;
            color: #3B3B3C;
            margin-bottom: 10px;
        }
        .create-date{
            font-size: 16px;
            line-height: 130.19%;
            letter-spacing: 0.07em;
            color: #979B9D;
        }
        .modal-body {
            padding: 0 130px 0 130px;
        }
    }
</style>