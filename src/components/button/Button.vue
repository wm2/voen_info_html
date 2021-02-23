<template>
    <div class="inline-flex">
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
    .inline-flex{
        display: inline-flex;
    }
</style>