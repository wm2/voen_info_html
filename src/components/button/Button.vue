<template>
    <div style="display: inline-block">
        <a :class="bgcolor" class="my-btn" >
            {{value}}
        </a>
    </div>
</template>

<script>
    export default {
        name: "button",
        props: {
            value: {
                type: String,
            }, bgcolor: {
                type: String
            }
        }
    }
</script>

<style scoped>

</style>