<template>
    <div class="wrapper-big">
        <MainHeaderVue :activeMenuOrder="0" />
        <MainBack :title="'Create artist'" />
        <main class="main main-add-artists">
            <form class="main__edit-artist edit-artist" action="#">
                <div class="edit-artist__top edit-artist-top">
                    <h1 class="edit-artist-top__title">
                        Create artist
                    </h1>
                    <div class="edit-artist-top__box">
                        <button class="edit-artist-top__box-btn" type="reset">
                            Cancel
                        </button>
                        <button class="edit-artist-top__box-btn" type="submit">
                            Add
                        </button>
                    </div>
                </div>
                <EditArtists :allInfoIsActive="false" :contentIsActive="true" :allInfo="valuesForEditArtists"/>
            </form>
        </main>
    </div>
</template>

<script>
import MainBack from './Main-components/Main-back.vue';
import MainHeaderVue from './Main-components/Main-header.vue';
import EditArtists from './Main-components/Edit-artists.vue';

export default {
    components: {
        MainBack,
        MainHeaderVue,
        EditArtists
    },
    mounted() {
        document.querySelector('.wrapper-big').style.minHeight = +window.innerHeight + 'px';
    },
    data() {
        return {
            valuesForEditArtists: {
                name: '',
                phone: '',
                adress: '',
                profile: '',
                contract: ['', '', '', '', ''],
                surcharges: ['', '', '', ''],
                additional: '',
            }
        }
    },
}
</script>

<style lang="scss">
@import '../assets/scss/_vars.scss';

.edit-artist {
    background: #FFFFFF;
    box-shadow: 0px 6px 18px rgba(0, 0, 0, 0.05);
    border-radius: 14px;
    padding: 20px 30px 30px 30px;

    &__inner {
        display: flex;
        gap: 15px;
        justify-content: space-between;
    }

    &__wrapper {
        width: 100%;
    }
}

.edit-artist-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 25px;
    padding-bottom: 15px;
    border-bottom: 1px solid #ECEEF0;

    &__title {
        font-weight: 600;
        font-size: 22px;
        line-height: 28px;
        letter-spacing: -0.3px;
        color: #BFA575;
    }

    &__box {
        display: flex;
        align-items: center;
        gap: 8px;
    }

    &__box-btn {
        padding: 13px;
        display: flex;
        justify-content: center;
        font-size: 17px;
        line-height: 21px;
        text-align: center;
        letter-spacing: -0.3px;
        align-items: center;
        color: #D4A5B4;
        width: 160px;
        max-width: 160px;
        border: 1px solid #D4A5B4;
        border-radius: 14px;
        transition: background 0.3s, color 0.3s;

        &:hover {
            background: #D4A5B4;
            color: #fff;
        }

        &:last-child {
            color: #677A45;
            border: 1px solid #677A45;

            &:hover {
                background: #677A45;
                color: #fff;
            }
        }
    }
}

@media (max-width: 1300px) {
    .main-add-artists {
        .edit-artist-all-info {
            border-top: 1px solid #ECEEF0;
            padding-top: 25px;
            justify-content: flex-start;
            align-items: flex-start;
        }
    }
}

@media (max-width: 750px) {
    .edit-artist {
        display: flex;
        flex-direction: column;
    }

    .edit-artist-top {
        order: 2;
        justify-content: center;
        width: 100%;
        padding-bottom: 0;
        border: unset;
        margin-bottom: 0;
    }

    .edit-artist-top__title {
        display: none;
    }

    .edit-artist-top__box {
        display: flex;
        align-items: center;
        border-top: 1px solid #ECEEF0;
        position: relative;
        width: 100%;

        &::after {
            content: '';
            height: 100%;
            width: 1px;
            background: #ECEEF0;
            position: absolute;
            top: 0;
            left: 50%;
            transform: translateX(-50%);
        }
    }

    .edit-artist-top__box-btn {
        width: 50%;
        max-width: 50%;
        border: unset !important;
        padding: 17px;
        font-size: 17px;
        line-height: 21px;

        &:hover {
            background: unset !important;
            color: #D4A5B4;
        }

        &:nth-child(2) {
            color: #677A45 !important;
        }
    }

    .edit-artist {
        padding-bottom: 0;
        margin-bottom: 75px;
        padding: 25px 10px 0 !important;
    }
    .main-add-artists {
        .edit-artist-all-info { 
            border: unset;
            padding-top: 30px;
        }
        .edit-artist__inner {
            gap: 0;
        }
        .edit-artist-all-info-top {
            margin-bottom: 40px;
        }
    }
    .edit-artist__inner:nth-child(2) {
        .edit-artist-item-row:last-child {
            margin-bottom: 0;
        }
        .edit-artist-item-row__surcharges:last-child {
            margin-bottom: 0;
        }
    }
}
</style>