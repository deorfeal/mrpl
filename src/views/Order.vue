<template>
    <div class="wrapper-big">
        <MainHeaderVue :activeMenuOrder="0" />
        <MainBack :title="'Order'" />
        <main class="main main-order">
            <div class="main__order order">
                <div class="order__content order-content">
                    <h1 class="order-content__title">
                        Order
                    </h1>
                    <div class="order-content__buttons order-content-buttons">
                        <button class="order-content-buttons__btn" type="button" data-filter=".item-first" id="0"
                            @click="showCurrendAside">
                            Commercial offer
                        </button>
                        <button class="order-content-buttons__btn" type="button" data-filter=".item-second" id="1"
                            @click="showCurrendAside">
                            Documents
                        </button>
                    </div>
                    <div class="order-content__inner">
                        <div class="order-content__commercial order-commercial mix item-first">
                            <div class="order-commercial__item order-commercial-item">
                                <h2 class="order-commercial-item__title">
                                    Client and discount
                                </h2>
                                <div class="order-commercial-item__inner">
                                    <div class="order-commercial-item__box">
                                        <p class="order-commercial-item__box-text">
                                            Name
                                        </p>
                                        <input class="order-commercial-item__box-input" type="text"
                                            value="Darlene Robertson">
                                    </div>
                                    <div class="order-commercial-item__box">
                                        <p class="order-commercial-item__box-text">
                                            Discount
                                        </p>
                                        <input class="order-commercial-item__box-input" type="text" value="150">
                                    </div>
                                </div>
                            </div>
                            <div class="order-commercial__item order-commercial-item">
                                <h2 class="order-commercial-item__title">
                                    Artists
                                </h2>
                                <p class="order-commercial-item__text">
                                    Wedding presenter &amp; DJ
                                </p>
                                <div class="order-commercial-item__inner">
                                    <ArtistItemVue :isStar="true" :margin="'€ 195'" :name="'DJ Beat'" />
                                    <ArtistItemVue :isStar="false" :margin="'€ 27'" :name="'Mr. Gray'" />
                                    <ArtistItemVue :isStar="false" :margin="'€ 7'" :name="'Sara Briliant'" />
                                </div>
                                <p class="order-commercial-item__text">
                                    Photographer
                                </p>
                                <div class="order-commercial-item__inner">
                                    <ArtistItemVue :isStar="true" :margin="'€ 22'" :name="'Sara Briliant'" />
                                </div>
                            </div>
                            <div class="order-commercial__item order-commercial-item">
                                <h2 class="order-commercial-item__title">
                                    Prepayment
                                </h2>
                                <div class="order-commercial-item__inner">
                                    <div class="order-commercial-item__box">
                                        <p class="order-commercial-item__box-text">
                                            Name
                                        </p>
                                        <input class="order-commercial-item__box-input" type="text"
                                            value="Darlene Robertson">
                                    </div>
                                    <div class="order-commercial-item__box">
                                        <p class="order-commercial-item__box-text">
                                            Discount
                                        </p>
                                        <input class="order-commercial-item__box-input" type="text" value="150">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="order-content__documents order-documents mix item-second">
                            <div class="order-documents__item order-documents-item">
                                <div class="order-documents-item__top" @click="showContent">
                                    <h3 class="order-documents-item__top-title">
                                        Clients data
                                    </h3>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M9.29008 17.29C9.38259 17.3827 9.49248 17.4562 9.61345 17.5064C9.73442 17.5566 9.86411 17.5824 9.99508 17.5824C10.126 17.5824 10.2557 17.5566 10.3767 17.5064C10.4977 17.4562 10.6076 17.3827 10.7001 17.29L15.2901 12.7C15.3828 12.6075 15.4563 12.4976 15.5065 12.3766C15.5567 12.2556 15.5825 12.126 15.5825 11.995C15.5825 11.864 15.5567 11.7343 15.5065 11.6134C15.4563 11.4924 15.3828 11.3825 15.2901 11.29L10.7001 6.7C10.6075 6.60742 10.4976 6.53398 10.3766 6.48387C10.2557 6.43377 10.126 6.40798 9.99508 6.40798C9.86415 6.40798 9.7345 6.43377 9.61353 6.48387C9.49257 6.53398 9.38266 6.60742 9.29008 6.7C9.19749 6.79258 9.12405 6.90249 9.07395 7.02346C9.02384 7.14442 8.99806 7.27407 8.99806 7.405C8.99806 7.53593 9.02384 7.66558 9.07395 7.78654C9.12405 7.90751 9.19749 8.01742 9.29008 8.11L13.1701 12L9.29008 15.88C8.90008 16.27 8.91008 16.91 9.29008 17.29Z"
                                            fill="#677A45" />
                                    </svg>
                                </div>
                                <div class="order-documents-item__big-wrapper">
                                    <div class="order-documents-item__box order-documents-item-box">
                                        <div class="order-documents-item-box__column">
                                            <p class="order-documents-item-box__column-text">
                                                Client one name
                                            </p>
                                            <input class="order-documents-item-box__column-input" type="text"
                                                value="Darlene Robertson">
                                        </div>
                                        <div class="order-documents-item-box__column">
                                            <p class="order-documents-item-box__column-text">
                                                Phone number one
                                            </p>
                                            <input class="order-documents-item-box__column-input" type="text"
                                                value="+4 217 555 01 13">
                                        </div>
                                    </div>
                                    <div class="order-documents-item__box order-documents-item-box">
                                        <div class="order-documents-item-box__column">
                                            <p class="order-documents-item-box__column-text">
                                                Client two name
                                            </p>
                                            <input class="order-documents-item-box__column-input" type="text"
                                                value="Cameron Williamson">
                                        </div>
                                        <div class="order-documents-item-box__column">
                                            <p class="order-documents-item-box__column-text">
                                                Phone number two
                                            </p>
                                            <input class="order-documents-item-box__column-input" type="text"
                                                value="+4 217 555 01 13">
                                        </div>
                                    </div>
                                    <div
                                        class="order-documents-item__box order-documents-item-box order-documents-item-box--long">
                                        <div class="order-documents-item-box__column">
                                            <p class="order-documents-item-box__column-text">
                                                Location
                                            </p>
                                            <input class="order-documents-item-box__column-input" type="text"
                                                value="Gasthof Kloster Seligenporten, Klosterhof 9, 90602 Seligenporten">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="order-documents__item order-documents-item">
                                <div class="order-documents-item__top" @click="showContent">
                                    <h3 class="order-documents-item__top-title">
                                        Artists
                                    </h3>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M9.29008 17.29C9.38259 17.3827 9.49248 17.4562 9.61345 17.5064C9.73442 17.5566 9.86411 17.5824 9.99508 17.5824C10.126 17.5824 10.2557 17.5566 10.3767 17.5064C10.4977 17.4562 10.6076 17.3827 10.7001 17.29L15.2901 12.7C15.3828 12.6075 15.4563 12.4976 15.5065 12.3766C15.5567 12.2556 15.5825 12.126 15.5825 11.995C15.5825 11.864 15.5567 11.7343 15.5065 11.6134C15.4563 11.4924 15.3828 11.3825 15.2901 11.29L10.7001 6.7C10.6075 6.60742 10.4976 6.53398 10.3766 6.48387C10.2557 6.43377 10.126 6.40798 9.99508 6.40798C9.86415 6.40798 9.7345 6.43377 9.61353 6.48387C9.49257 6.53398 9.38266 6.60742 9.29008 6.7C9.19749 6.79258 9.12405 6.90249 9.07395 7.02346C9.02384 7.14442 8.99806 7.27407 8.99806 7.405C8.99806 7.53593 9.02384 7.66558 9.07395 7.78654C9.12405 7.90751 9.19749 8.01742 9.29008 8.11L13.1701 12L9.29008 15.88C8.90008 16.27 8.91008 16.91 9.29008 17.29Z"
                                            fill="#677A45" />
                                    </svg>
                                </div>
                                <div class="order-documents-item__big-wrapper">
                                    <div class="order-documents-item__wrapper">
                                        <div class="order-documents-item__categories">
                                            <div class="order-documents-item__categories-inner">
                                                <div class="order-documents-item__categories-item">
                                                    <label class="container">
                                                        Wedding presenter &amp; DJ
                                                        <input type="checkbox" checked="checked">
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                                <div class="order-documents-item__categories-item">
                                                    <label class="container">
                                                        Catering
                                                        <input type="checkbox" checked="checked">
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                                <div class="order-documents-item__categories-item">
                                                    <label class="container">
                                                        Photographer
                                                        <input type="checkbox" checked="checked">
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                                <div class="order-documents-item__categories-item">
                                                    <label class="container">
                                                        Videograph
                                                        <input type="checkbox" checked="checked">
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                                <div class="order-documents-item__categories-item">
                                                    <label class="container">
                                                        Additional Services
                                                        <input type="checkbox" checked="checked">
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                                <div class="order-documents-item__categories-item">
                                                    <label class="container">
                                                        Singer
                                                        <input type="checkbox" checked="checked">
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="order-documents-item__artists order-documents-item-artists">
                                            <div class="order-documents-item-artists__item">
                                                <p class="order-documents-item-artists__item-text">
                                                    Wedding presenter &amp; DJ

                                                </p>
                                                <div class="order-documents-item-artists__item-inner">
                                                    <ArtistItemVue :isStar="true" :margin="'€ 195'" :name="'DJ Beat'"
                                                        :link="'alexshow.de/angebote-dj-beat/'" />
                                                    <ArtistItemVue :isStar="false" :margin="'€ 27'" :name="'Mr. Gray'"
                                                        :link="'alexshow.de/angebote-dj-beat/'" />
                                                    <ArtistItemVue :isStar="false" :margin="'€ 7'" :name="'Sara Briliant'"
                                                        :link="'alexshow.de/angebote-dj-beat/'" />
                                                </div>
                                            </div>
                                            <div class="order-documents-item-artists__item">
                                                <p class="order-documents-item-artists__item-text">
                                                    Photographer
                                                </p>
                                                <div class="order-documents-item-artists__item-inner">
                                                    <ArtistItemVue :isStar="false" :margin="'€ 7'" :name="'Sara Briliant'"
                                                        :link="'alexshow.de/angebote-dj-beat/'" />
                                                    <ArtistItemVue :isStar="false" :margin="'€ 7'" :name="'Sara Briliant'"
                                                        :link="'alexshow.de/angebote-dj-beat/'" />
                                                </div>
                                            </div>
                                            <div class="order-documents-item-artists__item">
                                                <p class="order-documents-item-artists__item-text">
                                                    Wedding presenter &amp; DJ
                                                </p>
                                                <div class="order-documents-item-artists__item-inner">
                                                    <ArtistItemVue :isStar="true" :margin="'€ 195'" :name="'DJ Beat'"
                                                        :link="'alexshow.de/angebote-dj-beat/'" />
                                                    <ArtistItemVue :isStar="false" :margin="'€ 27'" :name="'Mr. Gray'"
                                                        :link="'alexshow.de/angebote-dj-beat/'" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="order-documents-item__categories">
                                        <p class="order-documents-item__categories-text">
                                            Photographer and videograph settings
                                        </p>
                                        <div class="order-documents-item__categories-inner">
                                            <div class="order-documents-item__categories-item">
                                                <label class="container">
                                                    Surcharges for presenter
                                                    <input type="checkbox" checked="checked">
                                                    <span class="checkmark"></span>
                                                </label>
                                            </div>
                                            <div class="order-documents-item__categories-item">
                                                <label class="container">
                                                    Transfer together
                                                    <input type="checkbox" checked="checked">
                                                    <span class="checkmark"></span>
                                                </label>
                                            </div>
                                            <div class="order-documents-item__categories-item">
                                                <label class="container">
                                                    Driver from agency
                                                    <input type="checkbox" checked="checked">
                                                    <span class="checkmark"></span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="order-documents-item__inputs order-documents-item-inputs">
                                        <div class="order-documents-item-inputs__column order-documents-item-inputs-column">
                                            <p class="order-documents-item-inputs-column__text">
                                                Driver
                                            </p>
                                            <div class="order-documents-item-inputs-column__box">
                                                <input class="order-documents-item-inputs-column__box-input" type="text">
                                                <p class="order-documents-item-inputs-column__box-text">€</p>
                                            </div>
                                        </div>
                                        <div class="order-documents-item-inputs__column order-documents-item-inputs-column">
                                            <p class="order-documents-item-inputs-column__text">
                                                Presenter
                                            </p>
                                            <div class="order-documents-item-inputs-column__box">
                                                <input class="order-documents-item-inputs-column__box-input" type="text">
                                                <p class="order-documents-item-inputs-column__box-text">€</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="order-documents-item__categories">
                                        <p class="order-documents-item__categories-text">
                                            Singer settings
                                        </p>
                                        <div class="order-documents-item__categories-inner">
                                            <div class="order-documents-item__categories-item">
                                                <label class="container">
                                                    Singing in chirch
                                                    <input type="checkbox" checked="checked">
                                                    <span class="checkmark"></span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="order-documents__item order-documents-item">
                                <div class="order-documents-item__top" @click="showContent">
                                    <h3 class="order-documents-item__top-title">
                                        Additional services
                                    </h3>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M9.29008 17.29C9.38259 17.3827 9.49248 17.4562 9.61345 17.5064C9.73442 17.5566 9.86411 17.5824 9.99508 17.5824C10.126 17.5824 10.2557 17.5566 10.3767 17.5064C10.4977 17.4562 10.6076 17.3827 10.7001 17.29L15.2901 12.7C15.3828 12.6075 15.4563 12.4976 15.5065 12.3766C15.5567 12.2556 15.5825 12.126 15.5825 11.995C15.5825 11.864 15.5567 11.7343 15.5065 11.6134C15.4563 11.4924 15.3828 11.3825 15.2901 11.29L10.7001 6.7C10.6075 6.60742 10.4976 6.53398 10.3766 6.48387C10.2557 6.43377 10.126 6.40798 9.99508 6.40798C9.86415 6.40798 9.7345 6.43377 9.61353 6.48387C9.49257 6.53398 9.38266 6.60742 9.29008 6.7C9.19749 6.79258 9.12405 6.90249 9.07395 7.02346C9.02384 7.14442 8.99806 7.27407 8.99806 7.405C8.99806 7.53593 9.02384 7.66558 9.07395 7.78654C9.12405 7.90751 9.19749 8.01742 9.29008 8.11L13.1701 12L9.29008 15.88C8.90008 16.27 8.91008 16.91 9.29008 17.29Z"
                                            fill="#677A45" />
                                    </svg>
                                </div>
                                <div class="order-documents-item__big-wrapper">
                                    <div class="order-documents-item__inner">
                                        <div class="order-documents-item__box">
                                            <p class="order-documents-item__box-text">
                                                Service
                                            </p>
                                            <CustomSelect
                                                :options="['Wedding presenter & DJ', 'Wedding presenter & DJ 2', 'Wedding presenter & DJ 3', 'Wedding presenter & DJ 4']"
                                                :default="''" class="select">
                                            </CustomSelect>
                                        </div>
                                        <button class="order-documents-item__add" type="button">
                                            Add
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div class="order-documents__item order-documents-item">
                                <div class="order-documents-item__top" @click="showContent">
                                    <h3 class="order-documents-item__top-title">
                                        Agency
                                    </h3>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M9.29008 17.29C9.38259 17.3827 9.49248 17.4562 9.61345 17.5064C9.73442 17.5566 9.86411 17.5824 9.99508 17.5824C10.126 17.5824 10.2557 17.5566 10.3767 17.5064C10.4977 17.4562 10.6076 17.3827 10.7001 17.29L15.2901 12.7C15.3828 12.6075 15.4563 12.4976 15.5065 12.3766C15.5567 12.2556 15.5825 12.126 15.5825 11.995C15.5825 11.864 15.5567 11.7343 15.5065 11.6134C15.4563 11.4924 15.3828 11.3825 15.2901 11.29L10.7001 6.7C10.6075 6.60742 10.4976 6.53398 10.3766 6.48387C10.2557 6.43377 10.126 6.40798 9.99508 6.40798C9.86415 6.40798 9.7345 6.43377 9.61353 6.48387C9.49257 6.53398 9.38266 6.60742 9.29008 6.7C9.19749 6.79258 9.12405 6.90249 9.07395 7.02346C9.02384 7.14442 8.99806 7.27407 8.99806 7.405C8.99806 7.53593 9.02384 7.66558 9.07395 7.78654C9.12405 7.90751 9.19749 8.01742 9.29008 8.11L13.1701 12L9.29008 15.88C8.90008 16.27 8.91008 16.91 9.29008 17.29Z"
                                            fill="#677A45" />
                                    </svg>
                                </div>
                                <div class="order-documents-item__big-wrapper">
                                    <div class="order-documents-item__inner">
                                        <div class="order-documents-item__box">
                                            <p class="order-documents-item__box-text">
                                                Who represents the agency
                                            </p>
                                            <CustomSelect
                                                :options="['Wedding presenter & DJ', 'Wedding presenter & DJ 2', 'Wedding presenter & DJ 3', 'Wedding presenter & DJ 4']"
                                                :default="''" class="select">
                                            </CustomSelect>
                                        </div>
                                        <div class="order-documents-item__box">
                                            <p class="order-documents-item__box-text">
                                                Moderator
                                            </p>
                                            <CustomSelect
                                                :options="['Wedding presenter & DJ', 'Wedding presenter & DJ 2', 'Wedding presenter & DJ 3', 'Wedding presenter & DJ 4']"
                                                :default="''" class="select">
                                            </CustomSelect>
                                        </div>
                                        <div class="order-documents-item__box">
                                            <p class="order-documents-item__box-text">
                                                Site manager
                                            </p>
                                            <CustomSelect
                                                :options="['Wedding presenter & DJ', 'Wedding presenter & DJ 2', 'Wedding presenter & DJ 3', 'Wedding presenter & DJ 4']"
                                                :default="''" class="select">
                                            </CustomSelect>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="order-documents-item__big-wrapper">
                                <div class="order-documents__bottom">
                                    <p class="order-documents__bottom-text">
                                        Prepayment:
                                        <span>
                                            0 €
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <OrderAside :activeState="this.activeState" @clickOnCrateButton="createDocument" @clickOnSendButton="sendDocument"/>
            </div>
        </main>
    </div>
</template>

<script>
import MainBack from './Main-components/Main-back.vue';
import MainHeaderVue from './Main-components/Main-header.vue';
import OrderAside from './Main-components/Order-aside.vue';
import CustomSelect from './Main-components/CustomSelect.vue';
import ArtistItemVue from './Main-components/Artist-item.vue';

export default {
    components: {
        MainBack,
        MainHeaderVue,
        OrderAside,
        CustomSelect,
        ArtistItemVue
    },
    mounted() {
        document.querySelector('.wrapper-big').style.minHeight = +window.innerHeight + 'px';
        var mixer = mixitup('.order-content__inner', {
            load: {
                filter: '.item-first'
            },
            animation: {
                enable: false
            },
        })
    },
    data() {
        return {
            activeState: 'default',
        }
    },
    methods: {
        showContent(emit) {
            emit.currentTarget.parentNode.classList.toggle('order-documents-item--disabled')
        },
        showCurrendAside(emit) {
            if (emit.currentTarget.id == 0) {
                this.activeState = 'default'
                document.querySelector('.order').classList.remove('order--documents')
            } else if (emit.currentTarget.id == 1) {
                this.activeState = 'documents'
                document.querySelector('.order').classList.add('order--documents')
            }
        },
        createDocument() {
            this.activeState = 'create'
        },
        sendDocument() {
            this.activeState = 'send'
            setTimeout(()=>{
                this.activeState = 'finished'
            }, 3000)
        }
    },
}
</script>

<style lang="scss">
@import '../assets/scss/_vars.scss';

.main-order {}

.order {
    display: flex;
    justify-content: space-between;
    gap: 15px;

    .container {
        display: block;
        position: relative;

        cursor: pointer;
        font-size: 14px;
        line-height: 18px;
        /* identical to box height */

        letter-spacing: -0.3px;

        /* kBlackMainColor */

        color: #413F3F;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        margin: unset;
        padding: 0;
        padding-left: 32px;

    }

    .container input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;


    }

    .checkmark {
        position: absolute;
        top: -2px;
        left: 0;
        height: 24px;
        width: 24px;
        background-color: #fff;

        border: 1px solid #ECEEF0;
        border-radius: 6px;
    }

    .container:hover input~.checkmark {
        background-color: #fff;
    }

    .container input:checked~.checkmark {
        background-color: #fff;
    }

    .checkmark:after {
        content: "";
        position: absolute;
        display: none;
    }

    .container input:checked~.checkmark:after {
        display: block;
    }

    .container .checkmark:after {
        left: 50%;
        top: 50%;
        transform: translateY(-50%) translateX(-50%);
        background-image: url(../../public/images/tick-icon.svg);
        width: 11px;
        background-repeat: no-repeat;
        background-size: contain;
        height: 9px;
    }
}

.order--documents {
    align-items: flex-start;
    position: relative;
    .order-aside {
        top: 15px;
        position: sticky;
    }
}

.order-content {
    background: #FFFFFF;
    box-shadow: 0px 6px 18px rgba(0, 0, 0, 0.05);
    border-radius: 14px;
    width: 100%;
    padding: 30px;

    &__title {
        font-weight: 600;
        font-size: 22px;
        line-height: 28px;
        letter-spacing: -0.3px;
        color: #BFA575;
        padding-bottom: 25px;
        margin-bottom: 25px;
        border-bottom: 1px solid #ECEEF0;
    }

    &__inner {}
}

.order-content-buttons {
    display: flex;
    align-items: center;
    gap: 80px;
    padding-left: 25px;
    margin-bottom: 25px;

    .mixitup-control-active {
        color: #677A45;

        &::before {
            opacity: 1;
        }
    }

    &__btn {
        font-size: 17px;
        line-height: 21px;
        letter-spacing: -0.3px;
        color: #7C7C7C;
        padding-bottom: 15px;
        position: relative;
        transition: color 0.3s;

        &::before {
            content: '';
            width: 100%;
            height: 2px;
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            background: #677A45;
            opacity: 0;
            transition: opacity 0.3s;
        }

        &:hover {
            color: #677A45;

            &::before {
                opacity: 1;
            }
        }
    }
}

.order-commercial {}

.order-commercial-item {
    margin-bottom: 30px;

    &:first-child {
        .order-commercial-item__box {
            &:nth-child(2) {
                max-width: 160px;
            }

            .order-commercial-item__box-input {
                width: 100%;
            }
        }
    }

    &:last-child {
        .order-commercial-item__box {
            &:nth-child(2) {
                max-width: 160px;
            }

            .order-commercial-item__box-input {
                width: 100%;
            }
        }
    }

    &__title {
        margin-bottom: 15px;
        font-weight: 600;
        font-size: 17px;
        line-height: 21px;
        letter-spacing: -0.3px;
        color: #413F3F;
    }

    &__inner {
        display: flex;
        gap: 10px;
        flex-wrap: wrap;
        justify-content: flex-start;
        width: 100%;
        margin-bottom: 15px;
    }

    &__box {}

    &__box-text {
        margin-bottom: 10px;
        font-size: 14px;
        line-height: 18px;
        letter-spacing: -0.3px;
        color: #7C7C7C;
    }

    &__box-input {
        padding: 13px 16px;
        background: #FFFFFF;
        border: 1px solid #ECEEF0;
        border-radius: 14px;
        font-size: 17px;
        line-height: 21px;
        letter-spacing: -0.3px;
        color: #413F3F;

        &::placeholder {
            font-size: 17px;
            line-height: 21px;
            letter-spacing: -0.3px;
            color: #413F3F;
        }
    }

    &__text {
        font-size: 14px;
        line-height: 18px;
        letter-spacing: -0.3px;
        color: #7C7C7C;
        margin-bottom: 10px;
    }
}

.order-documents {
    &__bottom {
        padding-top: 15px;
        border-top: 1px solid #ECEEF0;
        padding-bottom: 10px;
    }

    &__bottom-text {
        font-size: 17px;
        line-height: 21px;
        letter-spacing: -0.3px;
        color: #413F3F;

        span {
            color: #82B8E9;
        }
    }
}

.order-documents-item {
    margin-bottom: 25px;

    &:nth-child(3) {
        .order-documents-item__box {
            max-width: 33%;
        }
    }

    .select {
        width: 100%;
        max-width: 100%;
    }

    &__box {
        width: 100%;
    }

    &__big-wrapper {
        padding: 0 15px;
    }

    &__top {
        cursor: pointer;
        margin-bottom: 25px;
        background: #F6F8FA;
        border-radius: 14px;
        padding: 5px 15px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 30px;

        svg {
            transform: rotate(-90deg);
        }
    }

    &__top-title {
        font-weight: 600;
        font-size: 17px;
        line-height: 21px;
        letter-spacing: -0.3px;
        color: #413F3F;
    }

    &__wrapper {}

    &__categories {
        margin-bottom: 20px;
    }

    &__categories-inner {
        display: flex;
        align-items: center;
        gap: 25px;
        justify-content: flex-start;
        flex-wrap: wrap;
    }

    &__categories-item {}

    &__inner {
        display: flex;
        gap: 10px;
        align-items: flex-end;
    }

    &__box-text {
        font-size: 14px;
        line-height: 18px;
        letter-spacing: -0.3px;
        color: #7C7C7C;
        margin-bottom: 10px;
    }

    &__add {
        font-size: 17px;
        line-height: 21px;
        text-align: center;
        letter-spacing: -0.3px;
        color: #82B8E9;
        padding: 13px;
        width: 120px;
        max-width: 120px;
        display: flex;
        justify-content: center;
        align-items: center;

        border: 1px solid #82B8E9;
        border-radius: 14px;

        transition: color 0.3s, background 0.3s;
        &:hover {
            color: #fff;
            background: #82B8E9;
        }
    }

    &__categories-text {
        margin-bottom: 10px;
        font-weight: 500;
        font-size: 14px;
        line-height: 18px;
        letter-spacing: -0.3px;
        color: #413F3F;
    }
}

.order-documents-item--disabled {
    .order-documents-item__big-wrapper {
        display: none;
    }

    .order-documents-item__top {
        svg {
            transform: rotate(90deg);
        }
    }
}

.order-documents-item-box {
    max-width: 650px;
    display: flex;
    gap: 10px;
    margin-bottom: 10px;

    &__column {
        width: 100%;
    }

    &__column-text {
        margin-bottom: 10px;
        font-size: 14px;
        line-height: 18px;
        letter-spacing: -0.3px;
        color: #7C7C7C;
    }

    &__column-input {
        width: 100%;
        padding: 13px 16px;
        background: #FFFFFF;
        border: 1px solid #ECEEF0;
        border-radius: 14px;
        font-size: 17px;
        line-height: 21px;
        letter-spacing: -0.3px;
        color: #413F3F;

        &::placeholder {
            font-size: 17px;
            line-height: 21px;
            letter-spacing: -0.3px;
            color: #413F3F;
        }
    }
}

.order-documents-item-box--long {}

.order-documents-item-artists {
    padding-bottom: 15px;
    margin-bottom: 25px;
    border-bottom: 1px solid #ECEEF0;

    &__item {}

    &__item-text {
        font-size: 14px;
        line-height: 18px;
        letter-spacing: -0.3px;
        color: #7C7C7C;
        margin-bottom: 10px;
    }

    &__item-inner {
        display: flex;
        gap: 10px;
        margin-bottom: 10px;
        flex-wrap: wrap;
        align-items: flex-start;
    }
}

.order-documents-item-inputs {
    margin-bottom: 25px;
    display: flex;
    align-items: center;
    gap: 20px;
}

.order-documents-item-inputs-column {
    &__text {
        font-size: 14px;
        line-height: 18px;
        letter-spacing: -0.3px;
        color: #7C7C7C;
        margin-bottom: 10px;
    }

    &__box {
        display: flex;
        align-items: center;
        gap: 10px;
    }

    &__box-input {
        width: 100%;
        padding: 13px 16px;
        background: #FFFFFF;
        border: 1px solid #ECEEF0;
        border-radius: 14px;
        font-size: 17px;
        line-height: 21px;
        letter-spacing: -0.3px;
        color: #413F3F;
        max-width: 110px;

        &::placeholder {
            font-size: 17px;
            line-height: 21px;
            letter-spacing: -0.3px;
            color: #413F3F;
        }
    }

    &__box-text {
        font-size: 17px;
        line-height: 21px;
        letter-spacing: -0.3px;
        color: #413F3F;
    }
}</style>