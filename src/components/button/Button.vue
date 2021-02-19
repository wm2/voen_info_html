<template>
    <div class="inline-block">
        <a :class="bgcolor" class="my-btn" @click="showModal">
            {{value}}
        </a>
    </div>
</template>

<script>
    export default {
        name: "button",
        data() {
            return {
                toggleModal: false
            }
        },
        props: {
            value: {
                type: String,
            },
            bgcolor: {
                type: String
            }
        },
        methods: {
            showModal() {
                this.$emit('toggleModal', {
                    toggleModal: true
                })
            }
        }
    }
</script>

<style scoped>
    .inline-block {
        display: inline-block
    }
</style>