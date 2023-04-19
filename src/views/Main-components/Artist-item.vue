<template>
    <div class="order-commercial-item__artist-item artist-item" v-if="showed">
        <div class="artist-item__box artist-item-box">
            <img class="artist-item-box__img" src="../../../public/images/artists-img-1.png" alt="img">
            <div class="artist-item-box__column">
                <p class="artist-item-box__column-name">
                    <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg"
                        v-if="isStar">
                        <path
                            d="M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z"
                            fill="#BFA575" />
                    </svg>

                    <span>
                        {{ name }}
                    </span>
                </p>
                <p class="artist-item-box__column-text">
                    <span v-if="link == undefined">margin:</span>
                    <a v-if="link" href="#">
                        {{ link }}
                    </a>
                    <span v-if="link == undefined">
                        {{ margin }}
                    </span>
                </p>
            </div>
        </div>
        <button class="artist-item__delete" type="button" @click="deleteItem">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M9 3V4H4V6H5V19C5 19.5304 5.21071 20.0391 5.58579 20.4142C5.96086 20.7893 6.46957 21 7 21H17C17.5304 21 18.0391 20.7893 18.4142 20.4142C18.7893 20.0391 19 19.5304 19 19V6H20V4H15V3H9ZM7 6H17V19H7V6ZM9 8V17H11V8H9ZM13 8V17H15V8H13Z"
                    fill="#D4A5B4" />
            </svg>
        </button>
    </div>
</template>

<script>

export default {
    props: ['isStar', 'name', 'margin', 'link'],
    mounted() {
    },
    data() {
        return {
            showed: true,
        }
    },
    methods: {
        deleteItem() {
            this.showed = false
        }
    },
}
</script>

<style lang="scss">
.artist-item {
    padding: 15px;
    background: #FFFFFF;
    border: 1px solid #ECEEF0;
    border-radius: 14px;
    position: relative;
    display: flex;
    min-width: 320px;
    padding-right: 50px;
    &__delete {
        position: absolute;
        top: 15px;
        right: 15px;
    }
}

.artist-item-box {
    display: flex;
    align-items: center;
    gap: 10px;

    &__img {
        width: 48px;
        height: 48px;
        border-radius: 100%;
        border: 1px solid rgba(124, 124, 124, 0.3);
    }

    &__column {}

    &__column-name {
        display: flex;
        align-items: center;
        gap: 5px;
        margin-bottom: 5px;

        font-weight: 500;
        font-size: 14px;
        line-height: 18px;
        letter-spacing: -0.3px;
        color: #413F3F;
    }

    &__column-text {
        font-size: 14px;
        line-height: 18px;
        letter-spacing: -0.3px;
        color: #7C7C7C;
        span:last-child {
            color: #82B8E9; 
        }
        a {
            color: #7C7C7C;
        }
    }
}
@media (max-width: 750px) {
    .artist-item {
        width: 100%;
    }
    .artist-item {
        min-width: unset;
    }
}
</style>