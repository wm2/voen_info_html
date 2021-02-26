<template>
    <div class="home">
        <navbar/>
        <Header/>
        <router-view/>
    </div>
</template>

<script>
    import Navbar from "../navbar/Navbar";
    import Header from "../sections/Header";
    import Home from "../../../views/Home";
    export default {
        name: "BasePage",
        components: {Home, Header, Navbar}
    }
</script>

<style scoped>

</style>