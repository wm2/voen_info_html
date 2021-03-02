<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script>
    export default {
        name: 'App',
        // metaInfo() {
        //     return {
        //         title: "this.post.name",
        //         meta: [
        //             {
        //                 vmid: "keyword",
        //                 name: "keyword",
        //                 content: "this.post.metas[0].tags",
        //             },
        //             {
        //                 vmid: "description",
        //                 name: "description",
        //                 content: "this.post.metas[0].description",
        //             },
        //             // Open Graph / Facebook
        //             { vmid: "og:type", name: "og:type", content: "website" },
        //             {
        //                 vmid: "og:url",
        //                 name: "og:url",
        //                 // content: process.env.MIX_APP_URL + this.$router.currentRoute.fullPath,
        //             },
        //             {
        //                 vmid: "og:site_name",
        //                 name: "og:site_name",
        //                 // content: `"${process.env.MIX_APP_NAME}"`,
        //             },
        //             {
        //                 vmid: "og:title",
        //                 name: "og:title",
        //                 content: "this.post.name",
        //             },
        //             {
        //                 vmid: "og:description",
        //                 name: "og:description",
        //                 content: "this.post.metas[0].description",
        //             },
        //             {
        //                 vmid: "og:image",
        //                 name: "og:image",
        //                 content: "this.post.imagebig",
        //             },
        //             //   Twitter
        //             {
        //                 vmid: "twitter:card",
        //                 name: "twitter:card",
        //                 content: "summary",
        //             },
        //
        //             {
        //                 vmid: "twitter:author",
        //                 name: "twitter:author",
        //                 content: "@xxxxxx",
        //             },
        //             {
        //                 vmid: "twitter:site",
        //                 name: "twitter:site",
        //                 content: "@xxxxxx",
        //             },
        //             {
        //                 vmid: "twitter:creator",
        //                 name: "twitter:creator",
        //                 content: "@xxxxxx",
        //             },
        //             {
        //                 vmid: "twitter:url",
        //                 name: "twitter:url",
        //                 content: "process.env.MIX_APP_URL + this.$router.currentRoute.fullPath",
        //             },
        //             {
        //                 vmid: "twitter:title",
        //                 name: "twitter:title",
        //                 content: "this.post.name",
        //             },
        //             {
        //                 vmid: "twitter:description",
        //                 name: "twitter:description",
        //                 content: "this.post.metas[0].description",
        //             },
        //             {
        //                 vmid: "twitter:image",
        //                 name: "twitter:image",
        //                 content: "this.post.imagebig",
        //             },
        //         ],
        //     };
        // },
        metaInfo: {
            title: 'Default App Title',
            titleTemplate: '%s | vue-meta Example App',
            htmlAttrs: {
                lang: 'en-US'
            },
            meta: [
                { charset: 'utf-8' },
                { name: 'description', content: 'An example Vue application with vue-meta.' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' }
            ]
        },
    }
</script>
