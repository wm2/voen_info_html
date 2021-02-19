<template>
    <div class="home">
        <navbar/>
        <Header/>

        <photos-carousel/>
        <video-filming/>
        <complect-photos/>
        <about-convert/>
        <about-is-not-convert/>
        <about-company/>
        <f-a-q/>
        <news/>
        <Footer/>
    </div>
</template>

<script>
    // @ is an alias to /src
    import navbar from '@/components/navbar/Navbar.vue'
    import Header from "../components/sections/Header";
    import PhotosCarousel from "../components/sections/PhotosCarousel";
    import VideoFilming from "../components/sections/VideoFilming";
    import ComplectPhotos from "../components/sections/ComplectPhotos";
    import AboutConvert from "../components/sections/AboutConvert";
    import AboutCompany from "../components/sections/AboutCompany";
    import Footer from "../components/sections/Footer";
    import AboutIsNotConvert from "../components/sections/AboutIsNotConvert";
    import FAQ from "../components/sections/FAQ";
    import News from "../components/sections/News";

    export default {
        name: 'Home',
        components: {
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
        }
    }
</script>
