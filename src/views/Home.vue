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
  props: {
    id: {
      required: true,
      type: String
    }
  },
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
        this.isMobileVersion = true;
      } else {
        this.isMobileVersion = false;
      }
    }
  },
  metaInfo () {
    return {
      // title will be injected into parent titleTemplate
      title: this.id,
      meta: [
        {property: "og:url", content: "https://voen.info/" + this.id},
        {property: "og:locale", content: "ru_RU"},
        {property: "og:type", content: "website"},
        {property: "og:title", content: "Title"},
        {property: "og:description", content: "adssfsd fsd fsd fs DEscription"},
        {property: "og:image", content: "https://voen.info/img/head-img.730e8ff5.png"},
        {name: "description", content: "adssfsd fsd fsd fs DEscription"}
        // {property: 'og:type', content: 'profile'},
        // {property: 'profile:first_name', content: 'Имя'},
        // {property: 'profile:last_name', content: 'Фамилия'},
        // {property: 'profile:username', content: 'Ник'},
        // {property: 'og:title', content: 'Название страницы'},
        // {property: 'og:description', content: 'Описание'},
        // {property: 'og:image', content: 'https://voen.info/img/head-img.730e8ff5.png'},
        // {property: 'og:url', content: 'https://voen.info'},
        // {property: 'og:site_name', content: 'Название сайта'},
        // {property: 'og:see_also', content: 'https://voen.info'},
        // {property: 'fb:admins', content: 'Facebook_ID'},
        // {itemprop: 'name', content: 'Название сайта'},
        // {itemprop: 'description', content: 'Описание сайта'},
        // {itemprop: 'image', content: 'https://voen.info/img/head-img.730e8ff5.png'},
        // {name: 'twitter:card', content: 'summary'},
        // {name: 'twitter:site', content: 'Название сайта'},
        // {name: 'twitter:title', content: 'Название страницы'},
        // {name: 'twitter:description', content: 'Описание'},
        // {name: 'twitter:creator', content: 'автор'},
        // {name: 'twitter:image:src', content: 'https://voen.info/img/head-img.730e8ff5.png'},
        // {name: 'twitter:domain', content: 'voen.info'}

      ]
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
