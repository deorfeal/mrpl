<template>
    <div class="wrapper-big">
        <MainHeaderVue :activeMenuOrder="0" />
        <MainBack :title="'Create artist'" />
        <main class="main main-calendar main-edit-artists">
            <form class="main__edit-artist edit-artist" action="#">
                <div class="edit-artist__top edit-artist-top">
                    <h1 class="edit-artist-top__title">
                        Artist calendar
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
                <div class="edit-artist__big-wrapper">
                    <div class="edit-artist__calendar edit-artist-calendar">
                        <CalendarView />
                        <div class="edit-artist-calendar__bottom edit-artist-calendar-bottom">
                            <a class="edit-artist-calendar-bottom__btn" data-fancybox href="#new-order">
                                Create order
                            </a>
                            <div class="edit-artist-calendar-bottom__row">
                                <p class="edit-artist-calendar-bottom__row-text">
                                    Client:
                                    <span>
                                        Darlene Robertson
                                    </span>
                                </p>
                                <p class="edit-artist-calendar-bottom__row-text">
                                    Phone number:
                                    <span>
                                        +4 217 555 01 13
                                    </span>
                                </p>
                                <p class="edit-artist-calendar-bottom__row-text">
                                    Date:
                                    <span>
                                        07.12.2024
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <EditArtists :allInfoIsActive="true" :contentIsActive="false" :allInfo="valuesForEditArtists" />
                </div>
            </form>
            <form class="main__new-order new-order" id="new-order" action="#">
                <div class="new-order__inner">
                    <h2 class="new-order__title">
                        New order
                    </h2>
                    <div class="new-order__row">
                        <p class="new-order__row-text">
                            Name
                        </p>
                        <input class="new-order__row-input" type="text">
                    </div>
                    <div class="new-order__row">
                        <p class="new-order__row-text">
                            Phone number
                        </p>
                        <input class="new-order__row-input" type="text" placeholder="+4 XXX XXX XX XX">
                    </div>
                    <div class="new-order__row">
                        <p class="new-order__row-text">
                            Date
                        </p>
                        <input class="new-order__row-input" type="text" placeholder="MM/DD/YY">
                    </div>
                    <div class="new-order__row">
                        <p class="new-order__row-text">
                            PLZ
                        </p>
                        <input class="new-order__row-input" type="text" placeholder="+-50">
                    </div>
                    <div class="new-order__bottom new-order-bottom">
                        <p class="new-order-bottom__text">
                            I am interested in:
                        </p>
                        <div class="new-order-bottom__inner">
                            <label class="container">
                                Wedding presenter &amp; DJ
                                <input type="checkbox" checked="checked">
                                <span class="checkmark"></span>
                            </label>
                            <label class="container">
                                Singer
                                <input type="checkbox" checked="checked">
                                <span class="checkmark"></span>
                            </label>
                            <label class="container">
                                Photographer
                                <input type="checkbox" checked="checked">
                                <span class="checkmark"></span>
                            </label>
                            <label class="container">
                                Additional Services
                                <input type="checkbox" checked="checked">
                                <span class="checkmark"></span>
                            </label>
                            <label class="container">
                                Catering
                                <input type="checkbox" checked="checked">
                                <span class="checkmark"></span>
                            </label>
                            <label class="container">
                                Videograph
                                <input type="checkbox" checked="checked">
                                <span class="checkmark"></span>
                            </label>
                        </div>
                    </div>
                </div>
                <div class="new-order__buttons">
                    <button class="new-order__buttons-btn is-close" tabindex="0">
                        Cancel
                    </button>
                    <button class="new-order__buttons-btn" type="submit">
                        Create
                    </button>
                </div>
            </form>
        </main>
    </div>
</template>

<script>
import MainBack from './Main-components/Main-back.vue';
import MainHeaderVue from './Main-components/Main-header.vue';
import EditArtists from './Main-components/Edit-artists.vue';
import CalendarView from './CalendarView.vue'
export default {
    components: {
        MainBack,
        MainHeaderVue,
        EditArtists,
        CalendarView
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
            },
        }
    },
}
</script>

<style lang="scss">
@import '../assets/scss/_vars.scss';
.edit-artist-all-info__btn {
    svg:nth-child(1) {
        display: none;
    }
    svg:nth-child(2) {
        display: block;
    }
}
.main-calendar {
    .edit-artist__wrapper {
        display: none;
    }
}

.edit-artist__big-wrapper {
    display: flex;
    gap: 15px;
    justify-content: space-between;
}

.edit-artist-calendar {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 80px;

    &__bottom {}
}

.edit-artist-calendar-bottom {
    &__btn {
        padding: 13px;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        background: #FFFFFF;
        border: 1px solid #677A45;
        border-radius: 14px;

        font-size: 17px;
        line-height: 21px;
        letter-spacing: -0.3px;
        color: #677A45;
        margin-bottom: 10px;
        transition: background 0.3s, color 0.3s;

        &:hover {
            background: #677A45;
            color: #fff;
        }
    }

    &__row {
        background: #FFFFFF;
        border: 1px solid #ECEEF0;
        border-radius: 14px;
        display: flex;
        gap: 25px;
        padding: 13px 30px;
        position: relative;

        &::before {
            content: '';
            width: 16px;
            height: 100%;
            background: #bfa575;
            background: #BFA575;
            border-radius: 13px 0px 0px 13px;
            position: absolute;
            left: 0;
            top: 0;
            bottom: 0;
        }
    }

    &__row-text {
        font-size: 17px;
        line-height: 21px;
        letter-spacing: -0.3px;
        display: flex;
        align-items: center;
        color: #82B8E9;
        gap: 5px;

        span {
            color: #413F3F;
        }
    }
}

@media (max-width: 1300px) {
    .edit-artist__big-wrapper {
        flex-direction: column;
        gap: 25px;
    }

    .edit-artist__inner {
        order: -1;
    }

    .edit-artist-calendar {
        gap: 30px;
    }
}

@media (max-width: 750px) {
    .edit-artist-calendar-bottom__row {
        flex-direction: column;
    }
    .main-calendar {
        .edit-artist-all-info {
            position: relative;
        }
        .edit-artist-all-info__btn {
            left: 50%;
            top: 0;
            transform: translateX(300%);
            right: unset;
        }
    }
}

@media (max-width: 550px) {
    .edit-artist-calendar-bottom__btn {
        display: none;
    }
    .edit-artist-top__box {
        display: none;
    }
    .main-calendar .edit-artist {
        background: unset;
    }
    .edit-artist-calendar-bottom__row {
       padding: 30px 15px 15px 15px;
    }
    .edit-artist-calendar-bottom__row::before {
        bottom: unset;
        right: 0;
        height: 16px;
        border-radius: 14px 14px 0 0;
        width: 100%;
    }
    .edit-artist {
        box-shadow: unset;
    }
    .main-calendar {
        .edit-artist-all-info__button {
            display: none;
            box-shadow: unset;
        }
        .edit-artist-all-info__inner {
            border: unset;
        }
        .edit-artist-all-info {
            border: unset;
        }
        .edit-artist-all-info {
            background: #FFFFFF;
            border: 1px solid #ECEEF0;
            box-shadow: 0px 6px 18px rgba(0, 0, 0, 0.05);
            border-radius: 14px;
        }
        .edit-artist-all-info {
            padding: 25px 15px 25px 15px;
        }
        .edit-artist-all-info__inner {
            padding-bottom: 0;
            margin-bottom: 0;
        }
        .edit-artist {
            padding: 0 !important;
        }
        .edit-artist__big-wrapper {
            gap: 10px;
        }
    }
    .edit-artist-calendar {
        gap: 10px;
    }
    .edit-artist-calendar-bottom__row {
        gap: 5px;
    }
    .main-calendar {
        .edit-artist-all-info__btn {
            top: 25px;
        }
    }
}
</style>