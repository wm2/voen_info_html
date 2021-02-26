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


    import navbar from '@/components/site/navbar/Navbar.vue'
    import Header from "@/components/site/sections/Header";
    import PhotosCarousel from "@/components/site/sections/PhotosCarousel";
    import VideoFilming from "@/components/site/sections/VideoFilming";
    import ComplectPhotos from "@/components/site/sections/ComplectPhotos";
    import AboutConvert from "@/components/site/sections/AboutConvert";
    import AboutCompany from "@/components/site/sections/AboutCompany";
    import Footer from "@/components/site/sections/Footer";
    import AboutIsNotConvert from "@/components/site/sections/AboutIsNotConvert";
    import FAQ from "@/components/site/sections/FAQ";
    import News from "@/components/site/sections/News";
    import ComplectPhotosMobile from "@/components/site/sections/ComplectPhotosMobile";

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
