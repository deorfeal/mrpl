<template>
    <div class="entrance__menu-top menu-top">
        <button class="menu-top__btn" type="button" @click="$emit('clickOnCloseButton')" v-if="closeButtonIsActive">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.5 0.516673C21.3458 0.362167 21.1627 0.239588 20.961 0.155952C20.7594 0.0723165 20.5433 0.0292662 20.325 0.0292662C20.1067 0.0292662 19.8906 0.0723165 19.689 0.155952C19.4873 0.239588 19.3042 0.362167 19.15 0.516673L11 8.65001L2.85001 0.500006C2.6957 0.345703 2.51252 0.223303 2.31091 0.139795C2.10931 0.0562864 1.89322 0.0133057 1.67501 0.0133057C1.45679 0.0133057 1.24071 0.0562864 1.0391 0.139795C0.837494 0.223303 0.654309 0.345703 0.500006 0.500006C0.345703 0.654309 0.223303 0.837494 0.139795 1.0391C0.0562864 1.24071 0.0133057 1.45679 0.0133057 1.67501C0.0133057 1.89322 0.0562864 2.10931 0.139795 2.31091C0.223303 2.51252 0.345703 2.6957 0.500006 2.85001L8.65001 11L0.500006 19.15C0.345703 19.3043 0.223303 19.4875 0.139795 19.6891C0.0562864 19.8907 0.0133057 20.1068 0.0133057 20.325C0.0133057 20.5432 0.0562864 20.7593 0.139795 20.9609C0.223303 21.1625 0.345703 21.3457 0.500006 21.5C0.654309 21.6543 0.837494 21.7767 1.0391 21.8602C1.24071 21.9437 1.45679 21.9867 1.67501 21.9867C1.89322 21.9867 2.10931 21.9437 2.31091 21.8602C2.51252 21.7767 2.6957 21.6543 2.85001 21.5L11 13.35L19.15 21.5C19.3043 21.6543 19.4875 21.7767 19.6891 21.8602C19.8907 21.9437 20.1068 21.9867 20.325 21.9867C20.5432 21.9867 20.7593 21.9437 20.9609 21.8602C21.1625 21.7767 21.3457 21.6543 21.5 21.5C21.6543 21.3457 21.7767 21.1625 21.8602 20.9609C21.9437 20.7593 21.9867 20.5432 21.9867 20.325C21.9867 20.1068 21.9437 19.8907 21.8602 19.6891C21.7767 19.4875 21.6543 19.3043 21.5 19.15L13.35 11L21.5 2.85001C22.1333 2.21667 22.1333 1.15001 21.5 0.516673Z" fill="#677A45"/>
                </svg>
                
            Close guest menu
        </button>
        <button class="menu-top__back" type="button" v-if="backArrowIsActive" @click="$emit('clickOnBackArrow', this.backPage)">
            <svg width="27" height="26" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.1251 25.1667L1.12508 14.1667C0.958415 14 0.840081 13.8194 0.770081 13.625C0.701192 13.4306 0.666748 13.2222 0.666748 13C0.666748 12.7778 0.701192 12.5694 0.770081 12.375C0.840081 12.1806 0.958415 12 1.12508 11.8333L12.1251 0.833338C12.4306 0.527783 12.8123 0.367783 13.2701 0.353339C13.729 0.340005 14.1251 0.500005 14.4584 0.833338C14.7917 1.13889 14.9656 1.52056 14.9801 1.97834C14.9934 2.43723 14.8334 2.83334 14.5001 3.16667L6.33341 11.3333H24.9584C25.4306 11.3333 25.8267 11.4928 26.1467 11.8117C26.4656 12.1317 26.6251 12.5278 26.6251 13C26.6251 13.4722 26.4656 13.8678 26.1467 14.1867C25.8267 14.5067 25.4306 14.6667 24.9584 14.6667H6.33341L14.5001 22.8333C14.8056 23.1389 14.9656 23.5278 14.9801 24C14.9934 24.4722 14.8334 24.8611 14.5001 25.1667C14.1945 25.5 13.8056 25.6667 13.3334 25.6667C12.8612 25.6667 12.4584 25.5 12.1251 25.1667Z" fill="#677A45"/>
                </svg>
                
        </button>
    </div>
</template>

<script>
export default {
    props: ['backArrowIsActive', 'backPage', 'closeButtonIsActive']
}
</script>

<style lang="scss">
@import '../../assets/scss/_vars.scss';
.menu-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    left: 45px;
    right: 40px;
    @include adaptiv-value('top', 50, 90, 1);
    height: 25px;
    max-height: 25px;
    &__btn {
        display: flex;
        gap: 15px;
        align-items: center;

        font-size: 17px;
        line-height: 21px;
        letter-spacing: -0.3px;
        color: #677A45;
    }
    &__back {
        width: 25px;
        height: 25px;
        margin-left: auto;
        max-height: 40px;
        svg {
            width: 100%;
            height: 100%;
        }
    }
}
@media (max-width: 1025px) {
    .menu-top {
       top: 90px;
    }
    .menu-top__btn {
        @include adaptiv-phone-value('font-size', 17, 14, 1);
        @include adaptiv-phone-value('line-height', 21, 17, 1);
        svg {
            @include adaptiv-phone-value('width', 22, 13, 1);
            @include adaptiv-phone-value('height', 22, 13, 1);
        }
    }
    .menu-top__back {
        @include adaptiv-phone-value('width', 25, 15, 1);
        @include adaptiv-phone-value('height', 25, 15, 1);
    }
}
@media (max-width: 850px) {
    .menu-top {
        top: 30px;
        left: 20px;
        right: 20px;
    }
}
@media (max-width: 400px) {
    .registration-form {
        margin-top: 40px;
    }
}
</style>