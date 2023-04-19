<template>
    <div class="wrapper-big">
        <MainHeaderVue :activeMenuOrder="0" />
        <MainBack :title="'Create artist'" />
        <main class="main main-calendar">
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
                            <button class="edit-artist-calendar-bottom__btn" type="button">
                                Create order
                            </button>
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
</style>