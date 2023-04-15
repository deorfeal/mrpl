<template>
    <div class="wrapper-big">
        <MainHeaderVue :activeMenuOrder="0" />
        <MainBack :title="'Edit artist'" />
        <main class="main main-edit-artists">
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
                            Save
                        </button>
                    </div>
                </div>
                <EditArtists :allInfoIsActive="true" :allInfo="valuesForEditArtists" />
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
                name: 'DJ Beat',
                phone: '+43 258 500 50 05',
                adress: 'Gasthof Kloster Seligenporten, Klosterhof 9, 90602 Seligenporten',
                profile: 'alexshow.de/angebote-dj-beat/',
                contract: ['1200', '1300', '1500', '1800', '2000'],
                surcharges: ['5', '5', '50', '75'],
                additional: '250',
            }
        }
    },
}
</script>

<style lang="scss">
@import '../assets/scss/_vars.scss';

.main-edit-artists {
    .edit-artist-all-info-top__img:nth-child(1) {
        display: none;
    }

    .edit-artist-all-info-top__img:nth-child(2) {
        display: block;
    }
}

@media (max-width: 1300px) {
    .main-edit-artists {
        .edit-artist-all-info {
            flex-direction: row;
            order: -1;
            justify-content: space-between;

        }

        .edit-artist-all-info-top {
            order: 2;
        }

        .edit-artist-all-info__button {
            position: absolute;
            right: 0;
            bottom: 0;
            padding: 0;
            line-height: 1px;
            border: unset;
            font-size: 1px;
            width: 24px;
            height: 24px;

            &::after {
                content: '';
                width: 24px;
                height: 24px;
                background-image: url(../../public/images/trash-icon.svg);
                background-repeat: no-repeat;
            }
        }

        .edit-artist-all-info__inner {
            display: grid;
            grid-template-columns: 60px 140px 380px;
            grid-template-rows: repeat(2, 1fr);
            grid-column-gap: 0px;
            grid-row-gap: 0px;
            border: unset;
            gap: 15px 40px;
            margin-bottom: 0;

            .edit-artist-all-info__box:nth-child(1) {
                grid-area: 1 / 1 / 2 / 2;
            }

            .edit-artist-all-info__box:nth-child(2) {
                grid-area: 1 / 2 / 2 / 3;
            }

            .edit-artist-all-info__box:nth-child(3) {
                grid-area: 1 / 3 / 2 / 4;
            }

            .edit-artist-all-info__box:nth-child(4) {
                grid-area: 2 / 1 / 3 / 3;
            }

            .edit-artist-all-info__box:nth-child(5) {
                grid-area: 2 / 3 / 3 / 4;
            }
        }

        .edit-artist-all-info__box-info {
            max-width: unset;
        }

        .edit-artist-all-info__box {
            align-items: flex-start;
            text-align: left;
        }

        .edit-artist-all-info__box-info {
            text-align: left;
        }

        .edit-artist-all-info-top {
            margin-bottom: 0;
            padding-right: 50px;
        }

        .edit-artist__inner {
            gap: 25px;
        }

        .edit-artist-all-info__btn {
            right: 15px;
        }

        .edit-artist-all-info__button {
            right: 17px;
            bottom: 25px;
        }
    }
}

@media (max-width: 1000px) {
    .main-edit-artists {
        .edit-artist-all-info__inner {
            grid-template-columns: 60px 140px 250px;
        }
    }
}

@media (max-width: 850px) {
    .main-edit-artists {
        .edit-artist-all-info__inner {
            display: flex;
            flex-direction: column;
        }

        .edit-artist-all-info {
            gap: 30px;
            align-items: flex-start;
        }

        .edit-artist-all-info__button {
            bottom: unset;
            top: 100px;
        }
    }
}

@media (max-width: 750px) {
    .main-edit-artists {
        .edit-artist-all-info {
            flex-direction: column;
            position: unset;
            gap: 25px;
        }

        .edit-artist-all-info-top {
            order: -1;
            padding-right: 0;
        }

        .edit-artist-all-info__btn {
            top: 20px;
            right: 15px;
        }

        .edit-artist-all-info__button {
            position: unset;
            font-size: 17px;
            line-height: 21px;
            padding: 13px;
            width: 310px;
            max-width: 310px;
            border: 1px solid #D4A5B4;
            border-radius: 14px;
            height: unset;
            &::after {
                content: unset;
            }
        }

        .edit-artist-all-info__inner {
            justify-content: center;
            text-align: center;
            align-items: center;
            margin-bottom: 15px;
            width: 100%;
            max-width: 100%;
            padding-bottom: 10px;
            border-bottom: 1px solid #ECEEF0;
        }

        .edit-artist-all-info__box {
            text-align: center;
            justify-content: center;
            align-items: center;
            margin-bottom: 0;
        }

        .edit-artist-all-info__box-info {
            text-align: center;
        }

        .edit-artist-all-info__box-text {
            text-align: center;
        }

        .edit-artist-all-info__wrapper {
            align-items: center;
            width: 100%;
        }
        .edit-artist-all-info {
            padding-bottom: 15px;
            border-bottom: 1px solid #ECEEF0;
        }
        .edit-artist-all-info__inner {
            gap: 10px;
        }
        .edit-artist-top__box {
            margin-top: 30px;
        }
    }
}</style>