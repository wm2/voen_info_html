<template>
    <div class="timer">
        <p class="timer-head">
            Предложение действительно еще:
        </p>

        <p class="text-3xl text-black" v-if="currentTime">
            <span>
                {{currentTime ? `${("0" + currentTime.hours).slice(-2)}`:""}}
            </span>:
            <span>
                {{currentTime ? `${("0" + currentTime.minutes).slice(-2)}`:""}}
            </span>:
            <span>
                {{currentTime ? `${("0" + currentTime.seconds).slice(-2)}`:""}}
            </span>
        </p>
    </div>
</template>

<script>
    export default {
        props: {
            deadline: {
                type: String,
                required: true
            },
            speed: {
                type: Number,
                default: 1000
            }
        },
        data() {
            return {
                currentTime: null
            };
        },
        mounted() {
            setTimeout(this.countdown, 1);
        },
        methods: {
            countdown() {
                let t = Date.parse(this.deadline) - Date.parse(new Date());
                let seconds = Math.floor((t / 1000) % 60);
                let minutes = Math.floor((t / 1000 / 60) % 60);
                let hours = Math.floor((t / (1000 * 60 * 60)) % 24);
                let days = Math.floor(t / (1000 * 60 * 60 * 24));
                if (t > 0) {
                    this.currentTime = {
                        total: t,
                        days: days,
                        hours: hours,
                        minutes: minutes,
                        seconds: seconds
                    };
                    setTimeout(this.countdown, this.speed);
                } else {
                    this.currentTime = null;
                }
            }
        }
    }
</script>

<style scoped>
    .timer{
        text-align: center;
    }
    .timer-head {
        font-size: 20px;
        line-height: 36px;
        color: #9FAABA;
        margin: 30px 0;
    }
    .text-3xl{
        font-weight: 600;
        margin-bottom: 0;
        font-size: 32px;
        line-height: 25px;
        color: #9FAABA;

    }
</style>