<template>
    <div class="my-slide">
       <div class="container">
           <div class="row">
               <div class="col-12">
                   <hooper :settings="hooperSettings" :infiniteScroll="true">
                       <slide class="slide-box">
                           <img src="../../assets/images/FA9A2035.png" height="384" width="261"/>
                       </slide>
                       <slide class="slide-box">
                           <img src="../../assets/images/FA9A2036.png" height="384" width="261"/>
                       </slide>
                       <slide class="slide-box">
                           <img src="../../assets/images/FA9A2039.png" height="382" width="261"/>
                       </slide>
                       <slide class="slide-box">
                           <img src="../../assets/images/FA9A2040.png" height="384" width="275"/>
                       </slide>
                   </hooper>
               </div>
           </div>
       </div>
    </div>
</template>

<script>
    import {Hooper, Slide} from 'hooper';
    import 'hooper/dist/hooper.css';

    export default {
        name: "PhotosCarousel",
        data() {
            return {
                hooperSettings: {
                    itemsToShow: 4,
                    centerMode: false
                }
            }
        },
        components: {
            Hooper,
            Slide
        }
    }
</script>

<style lang="scss">
    .my-slide {
        outline: none !important;
    }
    .slide-box{
        padding: 10px;
        img{
            width: 100%;
            height: auto;
        }
    }
</style>