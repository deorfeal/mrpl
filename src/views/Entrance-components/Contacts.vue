<template>
    <div class="entrance__contacts contacts">
        <OpenGuestMenuTop :closeButtonIsActive="true" :backArrowIsActive="true" :backPage="'EntranceMenu'"
            @clickOnBackArrow="clickOnBackArrow" @clickOnCloseButton="$emit('clickOnCloseButton')" />
            <h1 class="contacts__title">
                Contacts
            </h1>
    </div>
</template>

<script>
import OpenGuestMenuTop from './OpenGuestMenuTop.vue';
export default {
    components: {
        OpenGuestMenuTop
    },
    methods: {
        clickOnBackArrow(backPageName) {
            this.$emit('clickOnBackArrow', backPageName)
        }
    }
}
</script>

<style lang="scss">
@import '../../assets/scss/_vars.scss';
.contacts {
    padding-top: 30px;
    &__title {
        font-weight: 600;
font-size: 17px;
line-height: 21px;
letter-spacing: -0.3px;
color: #BFA575;
    }
 }
</style>