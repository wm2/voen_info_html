<template>
    <div class="about-is-not-convert">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <p class="my-head-text text-red">
                        Это Не наш конверт!
                    </p>
                </div>
                <div class="col-5">
                    <viewer :options="options">
                        <img src="../../assets/images/not-convert-img.png" height="400" width="100%"/>
                    </viewer>
                </div>
                <div class="col-5">
                    <div class="about-convert-body">
                        <ul>
                            <li>
                                Информация о чужом конверте:
                            </li>
                            <li>
                                <span class="item-number">1.</span>
                                <div class="list-item-red">
                                    <p>
                                        В нем будут фото сделанные в военкомате.
                                        Никакого отношения к месту службы Вашего сына они не имеют.
                                    </p>
                                </div>

                            </li>
                            <li>
                                <span class="item-number">2.</span>
                                <div class="list-item-red">

                                    <p class="text-red">
                                        Они также НЕ будут снимать Присягу вашего сына, стрельбы, день воинской части и
                                        другие мероприятия.
                                    </p>
                                </div>
                            </li>
                            <li>
                                <span class="item-number">3.</span>
                                <div class="list-item-red">
                                    <p>
                                        По этой ссылке: <a href="https://vk.com/topic-162800643_40714889" target="_blank" class="text-blue">https://vk.com/topic-162800643_40714889</a><br>
                                        Вы можете сами посмотреть и сравнить наши фото<br>
                                        с фотографиями от ПроСолдат.
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "AboutIsNotConvert",
        data() {
            return {
                options: {
                    "navbar": false,
                    "title": false
                }
            }
        },
    }
</script>

<style scoped>

</style>