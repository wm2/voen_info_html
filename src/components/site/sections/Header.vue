<template>
    <div class="header">
        <div class="container header-text">
            <div class="row">
                <div class="col-12">
                    <span class="my-head-text">
                Фотографии <br>
                вашей службы
                </span>
                </div>
            </div>
        </div>
        <img class="img" :style="isMobileTo?'width:'+(window.width+130)+'px;max-width:'+(window.width+130)+'px;':''" src="../../../assets/images/head-img.png" height="900" width="1454"/>
    </div>
</template>

<script>
    export default {
        name: "Header",
        data() {
            return {
                window: {
                    width: 0,
                },
                isMobileTo:false
            }
        }, methods: {
            handleResize() {
                this.window.width = window.innerWidth;
                if (this.window.width < 577) {
                    console.log(this.window.width);
                    this.isMobileTo=true
                } else {
                    this.isMobileTo=false
                }
            }
        },
        created() {
            window.addEventListener('resize', this.handleResize);
            this.handleResize();
        },
        destroyed() {
            window.removeEventListener('resize', this.handleResize);
        },
    }
</script>

<style scoped>

</style>