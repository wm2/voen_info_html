<template>
    <div class="about-convert">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <p class="my-head-text text-red">
                        Важно!
                    </p>
                </div>
                <div class="col-5 ">
                    <div class="about-convert-body">
                        <p class="body-text">
                            Вам обязательно придет еще бандероль от компании “ПроСолдат”. В ней будут фото сделанные в
                            военкомате. И никакого отношения к месту службы Вашего солдата они не имеют.
                        </p>
                        <p class="body-text">
                            Поэтому пожалуйста внимательно ознакомьтесь с образцом нашего конверта
                        </p>
                        <ul>
                            <li>
                                Информация о нашем конверте:
                            </li>
                            <li>
                                <span class="item-number">1.</span>
                                <div class="list-item-red">
                                    <p>
                                        ОТПРАВИТЕЛЬ должен быть только - ЛАППА А.И. или КУЛИШ В.В.
                                    </p>
                                    (всегда перед оплатой обязательно проверяйте отправителя).
                                </div>

                            </li>
                            <li>
                                <span class="item-number">2.</span>
                                <div class="list-item-red">
                                    <p>
                                        ОБЯЗАТЕЛЬНО ДОЛЖНА СТОЯТЬ СИНЯЯ ПЕЧАТЬ
                                    </p>
                                    с голубем (именно синяя).
                                </div>
                            </li>
                            <li>
                                <span class="item-number">3.</span>
                                <div class="list-item-red">
                                    <p>
                                        Город отправки - РОСТОВ-НА-ДОНУ
                                    </p>
                                    (именно здесь находится наш производственный отдел).
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-6">
                    <viewer :options="options">
                        <img src="../../assets/images/convert-img.png" height="533" width="100%"/>
                    </viewer>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "AboutConvert",
        data() {
            return {
                options: {
                    "navbar": false,
                    "title": false
                }
            }
        }
    }
</script>

<style scoped>

</style>