<template>
    <div>
        <nav class="nav">
            <div class="container">
                <div class="row">
                    <div class="col-3">
                        <div class="logo">
                            <ul>
                                <li>
                                    <a href="">
                                        <img src="../../assets/images/logo-app.png" height="55" width="165"/>
                                    </a>
                                </li>

                            </ul>
                        </div>
                    </div>
                    <div class="col-9">
                        <div class="nav-items">
                            <ul>
                                <li>
                                    <a href="#about-company">
                                        о компании
                                    </a>
                                </li>
                                <li>
                                    <a href="#faq">
                                        вопрос-ответ
                                    </a>
                                </li>
                                <li>
                                    <a href="#contact">
                                        контакты
                                    </a>
                                </li>
                                <li>
                                    <a href="#news">военные новости</a>
                                </li>

                            </ul>

                        </div>
                        <div class="icon-mobile-ver">
                            <a @click="show = !show"><img src="../../assets/images/icons/List.png" height="33"
                                                          width="33"/></a>
                        </div>
                    </div>
                </div>
            </div>
            <transition name="fade">
                <div v-if="show" class="nawMobile">
                    <ul>
                        <li>
                            <a href="#">
                                <img src="../../assets/images/logo-app-white.png" height="55" width="165"/>

                            </a>
                        </li>
                        <li>
                            <a href="#about-company" @click="show = !show">
                                о компании
                            </a>
                        </li>
                        <li>
                            <a href="#faq" @click="show = !show">
                                вопрос-ответ
                            </a>
                        </li>
                        <li>
                            <a href="#news" @click="show = !show">военные новости</a>
                        </li>
                    </ul>
                    <ul class="contacts-mobile">
                        <li><a @click="show = !show" href="tel:+7 (928) 774-49-03"><img src="../../assets/images/icons/icon-phone.png"
                                                                  alt="phone icon">+7 (928) 774-49-03</a></li>
                        <li><a @click="show = !show" href="mailto: pochta@yandex.ru"><img src="../../assets/images/icons/icon-email.png"
                                                                    alt="email icon">pochta@yandex.ru</a></li>
                        <li><a href=""><img src="../../assets/images/icons/icon-watch.png" alt="watch icon">С Пн. по
                            Пт. (с 9.00 до 19.00)</a></li>
                    </ul>
                    <div class="nav-back" @click="show = !show">
                        <span>
                            <img  src="../../assets/images/icons/icon-back.png" height="21" width="29"/> Назад
                        </span>
                    </div>
                </div>
            </transition>
        </nav>
    </div>
</template>

<style lang="scss">
    .nawMobile {
        background-color: #0650BF;
        position: absolute;
        top: -33px;
        padding: 15px 15px 30px 15px;
        width: 100%;
        z-index: 999;

        ul {
            display: block !important;

            li:first-child {
                img {
                    height: 41px;
                    width: auto;
                }

                margin-bottom: 40px;
            }

            li {
                display: block !important;
                margin-bottom: 20px;

                a {

                    font-weight: 500;
                    font-size: 14px;
                    line-height: 16px;
                    text-transform: uppercase;
                    color: #FFFFFF;
                }

                img {
                    height: 14px;
                    width: auto;
                    margin-right: 6px;
                }
            }
        }

        ul.contacts-mobile {
            li:first-child {
                margin-top: 30px;

                img {
                    height: 14px;
                    width: auto;

                }

                margin-bottom: 10px;
            }

            li {
                a {
                    display: flex;
                    align-items: center;
                }

                margin-bottom: 10px;
            }

            li:last-child {
                margin-bottom: 0;

            }
        }
    }

    .nav-back {
      span{
          cursor: pointer;
          font-size: 16px;
          line-height: 36px;
          display: flex;
          align-items: center;
          color: #FFFFFF;
          margin-top: 80px;
          width: 120px;
      }

        img {
            margin-right: 17px;
        }
    }

    .fade-enter-active, .fade-leave-active {
        transition: all .3s ease;
    }

    .fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */
    {
        transform: translateY(10px);
        opacity: 0;
    }
</style>
<script>
    export default {
        name: "navbar",
        data() {
            return {
                show: false
            }
        }
    }
</script>
