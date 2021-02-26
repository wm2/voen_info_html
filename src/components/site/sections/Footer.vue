<template>
    <div class="footer" id="contact" ref="contact">
        <footer>
            <div class="container" style="position: relative;">
                <div class="row">
                    <div class="col-12 col-lg-3 col-xl-3">
                        <ul class="left-links">
                            <li>
                                <a href="">
                                    Политика конфиденциальности
                                </a>
                            </li>
                            <li>
                                <a href="">Соглашение по использованию сервиса</a>
                            </li>
                            <li>
                                <a href="">Передача данных</a>
                            </li>
                            <li>
                                <a href="">Публичная оферта</a>
                            </li>
                        </ul>
                    </div>
                    <div class="col-12 col-lg-4 col-xl-4">
                        <ul class="left-links">
                            <li>
                                <a href="">Политика возврата</a>
                            </li>
                            <li>
                                <a href="">Способы оплаты</a>
                            </li>
                        </ul>
                    </div>
                    <div class="col-6 col-lg-2 col-xl-2">
                        <ul class="right-links-about">
                            <li>
                                <a href="#about-company">О компании</a>
                            </li>
                            <li>
                                <a href="#faq">Вопрос-ответ</a>
                            </li>
                            <li>
                                <a href="#news">военные новости</a>
                            </li>
                        </ul>
                    </div>
                    <div class="col-6 col-lg-3 col-xl-3">
                        <ul class="right-links">
                            <li>Связаться с нами</li>
                            <li><a href="tel:+7 (928) 774-49-03"><img src="../../../assets/images/icons/icon-phone.png"
                                                                      alt="phone icon">+7 (928) 774-49-03</a></li>
                            <li><a href="mailto: pochta@yandex.ru"><img src="../../../assets/images/icons/icon-email.png"
                                                                        alt="email icon">pochta@yandex.ru</a></li>
                            <li><a href=""><img src="../../../assets/images/icons/icon-watch.png" alt="watch icon">С Пн. по
                                Пт. (с 9.00 до 19.00)</a></li>
                        </ul>
                    </div>
                    <span class="scroll-to-top"><img @click="scrollToTop" src="../../../assets/images/toTop.png" height="59" width="59"/></span>
                    <div class="col-12 all-rights">
                        <p>2021 Все права защищены</p>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>

<script>
    export default {
        name: "Footer",
        methods: {
            scrollToTop() {
                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });
            },
        }
    }
</script>

<style scoped>

</style>