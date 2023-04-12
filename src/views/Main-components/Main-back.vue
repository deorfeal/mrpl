<template>
    <div class="back-block">
        <a href="#" class="back-block__arrow">
            <svg width="15" height="15" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M12.1251 25.1667L1.12508 14.1667C0.958415 14 0.840081 13.8194 0.770081 13.625C0.701192 13.4306 0.666748 13.2222 0.666748 13C0.666748 12.7778 0.701192 12.5694 0.770081 12.375C0.840081 12.1806 0.958415 12 1.12508 11.8333L12.1251 0.833338C12.4306 0.527783 12.8123 0.367783 13.2701 0.353339C13.729 0.340005 14.1251 0.500005 14.4584 0.833338C14.7917 1.13889 14.9656 1.52056 14.9801 1.97834C14.9934 2.43723 14.8334 2.83334 14.5001 3.16667L6.33341 11.3333H24.9584C25.4306 11.3333 25.8267 11.4928 26.1467 11.8117C26.4656 12.1317 26.6251 12.5278 26.6251 13C26.6251 13.4722 26.4656 13.8678 26.1467 14.1867C25.8267 14.5067 25.4306 14.6667 24.9584 14.6667H6.33341L14.5001 22.8333C14.8056 23.1389 14.9656 23.5278 14.9801 24C14.9934 24.4722 14.8334 24.8611 14.5001 25.1667C14.1945 25.5 13.8056 25.6667 13.3334 25.6667C12.8612 25.6667 12.4584 25.5 12.1251 25.1667Z"
                    fill="#677A45" />
            </svg>
        </a>
        <h1 class="back-block__title">
            {{ this.title }}
        </h1>
    </div>
</template>

<script>
export default {
    props: ['title']
}
</script>

<style lang="scss">
.back-block {
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 20px;
    padding-top: 20px;
    display: none;
    align-items: center;
    justify-content: center;
    position: relative;
    background: #FFFFFF;
    box-shadow: 0px 6px 18px rgba(0, 0, 0, 0.05);
    &__arrow {
        position: absolute;
        left: 20px;
        top: 50%;
        transform: translateY(-50%);
    }

    &__title {
        font-size: 17px;
        line-height: 21px;
        text-align: center;
        letter-spacing: -0.3px;
        color: #413F3F;
    }
}
@media (max-width: 750px) {
    .back-block {
        display: flex;
    }
}
</style>