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
    import ComplectPhotosMobile from "../components/sections/ComplectPhotosMobile";

    export default {
        name: 'Home',
        data() {
            return {
                some_variable: false,
                isMobileVersion: false,
                window: {
                    width: 0,
                }
            }
        },
        components: {
            ComplectPhotosMobile,
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
        methods: {
            handleResize() {
                this.window.width = window.innerWidth;
                if (this.window.width < 571) {
                    this.isMobileVersion =true;
                }else {
                    this.isMobileVersion =false;
                }
            }
        },
        mounted() {
            setTimeout(function () {
                this.some_variable = true;
            }.bind(this), 30000);
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
