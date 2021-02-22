<template>
    <div>
        <photos-carousel/>
        <video-filming/>
        <complect-photos v-if="!isMobileVersion"/>
        <complect-photos-mobile v-if="isMobileVersion"/>
        <about-convert/>
        <about-is-not-convert/>
        <about-company/>
        <f-a-q/>
        <news/>
        <!--        <Timer ref="countDown"-->
        <!--               :initial-value="360550"-->
        <!--               :stroke-width="5"-->
        <!--               :hourLabel="'часов'"-->
        <!--               :minuteLabel="'минут'"-->
        <!--               :secondLabel="'секунд'"-->
        <!--               :size="130"-->
        <!--               :padding="14"-->
        <!--               :hour-label="'hours'"-->
        <!--               :minute-label="'minutes'"-->
        <!--               :second-label="'seconds'"-->
        <!--               :show-second="true"-->
        <!--               :show-minute="true"-->
        <!--               :show-hour="true"-->
        <!--               :show-negatives="true"-->
        <!--               :paused="some_variable"-->
        <!--               :notify-every="'minute'"-->
        <!--        ></Timer>-->

        <Footer/>
    </div>
</template>

<script>


    import navbar from '@/components/navbar/Navbar.vue'
    import Header from "@/components/sections/Header";
    import PhotosCarousel from "@/components/sections/PhotosCarousel";
    import VideoFilming from "@/components/sections/VideoFilming";
    import ComplectPhotos from "@/components/sections/ComplectPhotos";
    import AboutConvert from "@/components/sections/AboutConvert";
    import AboutCompany from "@/components/sections/AboutCompany";
    import Footer from "@/components/sections/Footer";
    import AboutIsNotConvert from "@/components/sections/AboutIsNotConvert";
    import FAQ from "@/components/sections/FAQ";
    import News from "@/components/sections/News";
    import Timer from "@/components/sections/Timer";
    import ComplectPhotosMobile from "../components/sections/ComplectPhotosMobile";

    export default {
        name: 'Home',
        data() {
            return {
                some_variable: false,
                isMobileVersion: false
            }
        },
        components: {
            ComplectPhotosMobile,
            Timer,
            News,
            FAQ,
            AboutIsNotConvert,
            Footer,
            AboutCompany,
            AboutConvert,
            ComplectPhotos,
            VideoFilming,
            PhotosCarousel,
            Header,
            navbar,

        },
        mounted() {
            setTimeout(function () {
                this.some_variable = true;
            }.bind(this), 30000);
            if (screen.width <= 576) {
                this.isMobileVersion = true;
            } else {
                this.isMobileVersion = false;
            }
        },
    }
</script>
