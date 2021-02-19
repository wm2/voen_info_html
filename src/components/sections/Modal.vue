<template>
    <div>
        <transition name="modal">
            <div class="modal-mask">
                <div class="modal-wrapper">
                    <div class="modal-container">

                        <div class="modal-header">
                            <slot name="header">
                                default header
                            </slot>
                        </div>

                        <div class="modal-body">
                            <slot name="body">
                                default body
                            </slot>
                        </div>

                        <div class="modal-footer">
                            <slot name="footer">
                                <span class="modal-default-button" @click="$emit('close')">
                                <img src="../../assets/images/icons/back-left.png" height="31" width="31"/>Назад</span>
                            </slot>
                        </div>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
    export default {
        name: "Modal"
    }
</script>

<style lang="scss">
    .modal-mask {
        position: fixed;
        z-index: 9998;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(108, 118, 133, 0.33);
        display: table;
        transition: opacity 0.3s ease;
    }

    .modal-wrapper {
        display: table-cell;
        vertical-align: middle;
    }

    .modal-container {
        width: 50%;
        margin: 0 auto;
        background: #F6F7F8;
        box-shadow: 10px 9px 37px 4px #8F9DAB;
        transition: all 0.3s ease;
    }


    .modal-body {
        padding: 0;
    }

    .modal-default-button {
        float: right;
    }

    .modal-header {
        padding: 20px 0;
        text-align: center;
    }

    .modal-header, .modal-footer {
        border: none;
        display: block;
    }

    .modal-header {
        font-weight: 900;
        font-size: 25px;
        line-height: 130.19%;
        letter-spacing: 0.07em;
        text-transform: uppercase;
        padding: 40px 0 20px 0;
        color: #474747;
    }

    .modal-body {
        padding: 0 130px 40px 130px;
    }

    .modal-footer {
        padding: 0 130px 90px 130px;
        display: flex;
        justify-content: flex-start;

        .modal-default-button {
            font-size: 16px;
            line-height: 36px;
            color: #9FAABA;
            display: flex;
            align-items: center;
            cursor: pointer;

            img {
                width: 29px;
                height: 29px;
                margin-right: 10px;
            }
        }
    }

</style>