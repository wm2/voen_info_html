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

</style>