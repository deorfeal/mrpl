<template>
    <header class="header">
        <div class="header__inner">
            <a class="header__logo logo" href="#">
                <img class="logo-img" src="../../../public/images/logo.svg" alt="logo">
            </a>
            <div class="header__user-nav user-nav">
                <div class="user-nav__lang user-nav-lang">
                    <div class="user-nav-lang__icons" @click="showLangs">
                        <svg width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg"
                            v-if="idOfActiveLang == 0">
                            <g clip-path="url(#clip0_1_8)">
                                <path
                                    d="M14 28.5C21.732 28.5 28 22.232 28 14.5C28 6.76801 21.732 0.5 14 0.5C6.26801 0.5 0 6.76801 0 14.5C0 22.232 6.26801 28.5 14 28.5Z"
                                    fill="#F0F0F0" />
                                <path
                                    d="M2.89395 5.97656C1.79424 7.40735 0.965014 9.05645 0.482178 10.848H7.76535L2.89395 5.97656Z"
                                    fill="#0052B4" />
                                <path
                                    d="M27.5177 10.8479C27.0348 9.05645 26.2056 7.40735 25.1059 5.97656L20.2346 10.8479H27.5177Z"
                                    fill="#0052B4" />
                                <path
                                    d="M0.482178 18.1522C0.965068 19.9437 1.79429 21.5928 2.89395 23.0235L7.76519 18.1522H0.482178Z"
                                    fill="#0052B4" />
                                <path
                                    d="M22.5234 3.39413C21.0927 2.29442 19.4436 1.46519 17.6521 0.9823V8.26542L22.5234 3.39413Z"
                                    fill="#0052B4" />
                                <path
                                    d="M5.47632 25.6059C6.90711 26.7056 8.55621 27.5348 10.3477 28.0177V20.7346L5.47632 25.6059Z"
                                    fill="#0052B4" />
                                <path
                                    d="M10.3476 0.9823C8.55615 1.46519 6.90705 2.29442 5.47632 3.39407L10.3476 8.26536V0.9823Z"
                                    fill="#0052B4" />
                                <path
                                    d="M17.6521 28.0177C19.4436 27.5348 21.0927 26.7056 22.5234 25.6059L17.6521 20.7346V28.0177Z"
                                    fill="#0052B4" />
                                <path
                                    d="M20.2346 18.1522L25.1059 23.0236C26.2056 21.5928 27.0348 19.9437 27.5177 18.1522H20.2346Z"
                                    fill="#0052B4" />
                                <path
                                    d="M27.8815 12.6739H15.8262H15.8261V0.618508C15.2283 0.540688 14.6189 0.5 14 0.5C13.381 0.5 12.7717 0.540688 12.1739 0.618508V12.6738V12.6739H0.118508C0.0406875 13.2717 0 13.8811 0 14.5C0 15.119 0.0406875 15.7283 0.118508 16.3261H12.1738H12.1739V28.3815C12.7717 28.4593 13.381 28.5 14 28.5C14.6189 28.5 15.2283 28.4594 15.8261 28.3815V16.3262V16.3261H27.8815C27.9593 15.7283 28 15.119 28 14.5C28 13.8811 27.9593 13.2717 27.8815 12.6739Z"
                                    fill="#D80027" />
                                <path
                                    d="M17.6521 18.1523L23.8994 24.3996C24.1867 24.1123 24.4608 23.812 24.7223 23.5008L19.3738 18.1522H17.6521V18.1523Z"
                                    fill="#D80027" />
                                <path
                                    d="M10.3479 18.1522H10.3478L4.10059 24.3994C4.3878 24.6868 4.68809 24.9609 4.99937 25.2224L10.3479 19.8737V18.1522Z"
                                    fill="#D80027" />
                                <path
                                    d="M10.3478 10.8479V10.8478L4.10053 4.60046C3.8132 4.88768 3.5391 5.18797 3.27759 5.49925L8.62619 10.8479L10.3478 10.8479Z"
                                    fill="#D80027" />
                                <path
                                    d="M17.6521 10.8479L23.8994 4.60047C23.6122 4.31314 23.3119 4.03905 23.0006 3.77759L17.6521 9.12619V10.8479Z"
                                    fill="#D80027" />
                            </g>
                            <defs>
                                <clipPath id="clip0_1_8">
                                    <rect width="28" height="28" fill="white" transform="translate(0 0.5)" />
                                </clipPath>
                            </defs>
                        </svg>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"
                            v-if="idOfActiveLang == 1">
                            <g clip-path="url(#clip0_114_5096)">
                                <path
                                    d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
                                    fill="#F0F0F0" />
                                <path
                                    d="M10.0001 0C5.70043 0 2.035 2.71375 0.62207 6.52176H19.3781C17.9652 2.71375 14.2997 0 10.0001 0Z"
                                    fill="#A2001D" />
                                <path
                                    d="M10.0001 20C14.2997 20 17.9652 17.2863 19.3781 13.4783H0.62207C2.035 17.2863 5.70043 20 10.0001 20Z"
                                    fill="#0052B4" />
                            </g>
                            <defs>
                                <clipPath id="clip0_114_5096">
                                    <rect width="20" height="20" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"
                            v-if="idOfActiveLang == 2">
                            <g clip-path="url(#clip0_114_5154)">
                                <path
                                    d="M0.62207 13.4783C2.035 17.2863 5.70043 20.0001 10.0001 20.0001C14.2997 20.0001 17.9652 17.2863 19.3781 13.4783L10.0001 12.6088L0.62207 13.4783Z"
                                    fill="#FFDA44" />
                                <path
                                    d="M10.0001 0C5.70043 0 2.035 2.71375 0.62207 6.52176L10.0001 7.39129L19.3781 6.52172C17.9652 2.71375 14.2997 0 10.0001 0Z"
                                    fill="black" />
                                <path
                                    d="M0.621992 6.52173C0.220039 7.60505 0 8.77677 0 9.99997C0 11.2232 0.220039 12.3949 0.621992 13.4782H19.378C19.78 12.3949 20 11.2232 20 9.99997C20 8.77677 19.78 7.60505 19.378 6.52173H0.621992Z"
                                    fill="#D80027" />
                            </g>
                            <defs>
                                <clipPath id="clip0_114_5154">
                                    <rect width="20" height="20" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"
                            v-if="idOfActiveLang == 3">
                            <g clip-path="url(#clip0_114_5125)">
                                <path
                                    d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
                                    fill="#F0F0F0" />
                                <path
                                    d="M19.9998 9.99996C19.9998 5.70031 17.286 2.03488 13.478 0.621948V19.378C17.286 17.965 19.9998 14.2996 19.9998 9.99996Z"
                                    fill="#D80027" />
                                <path
                                    d="M0 9.99996C0 14.2996 2.71379 17.965 6.52176 19.378V0.621948C2.71379 2.03488 0 5.70031 0 9.99996Z"
                                    fill="#0052B4" />
                            </g>
                            <defs>
                                <clipPath id="clip0_114_5125">
                                    <rect width="20" height="20" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                    <ul class="user-nav-lang__list" v-show="langsMenuIsActive">
                        <li class="user-nav-lang__list-item user-nav-lang__list-item--active" id="0" @click="changeActiveLang">
                            <svg width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_1_8)">
                                    <path
                                        d="M14 28.5C21.732 28.5 28 22.232 28 14.5C28 6.76801 21.732 0.5 14 0.5C6.26801 0.5 0 6.76801 0 14.5C0 22.232 6.26801 28.5 14 28.5Z"
                                        fill="#F0F0F0" />
                                    <path
                                        d="M2.89395 5.97656C1.79424 7.40735 0.965014 9.05645 0.482178 10.848H7.76535L2.89395 5.97656Z"
                                        fill="#0052B4" />
                                    <path
                                        d="M27.5177 10.8479C27.0348 9.05645 26.2056 7.40735 25.1059 5.97656L20.2346 10.8479H27.5177Z"
                                        fill="#0052B4" />
                                    <path
                                        d="M0.482178 18.1522C0.965068 19.9437 1.79429 21.5928 2.89395 23.0235L7.76519 18.1522H0.482178Z"
                                        fill="#0052B4" />
                                    <path
                                        d="M22.5234 3.39413C21.0927 2.29442 19.4436 1.46519 17.6521 0.9823V8.26542L22.5234 3.39413Z"
                                        fill="#0052B4" />
                                    <path
                                        d="M5.47632 25.6059C6.90711 26.7056 8.55621 27.5348 10.3477 28.0177V20.7346L5.47632 25.6059Z"
                                        fill="#0052B4" />
                                    <path
                                        d="M10.3476 0.9823C8.55615 1.46519 6.90705 2.29442 5.47632 3.39407L10.3476 8.26536V0.9823Z"
                                        fill="#0052B4" />
                                    <path
                                        d="M17.6521 28.0177C19.4436 27.5348 21.0927 26.7056 22.5234 25.6059L17.6521 20.7346V28.0177Z"
                                        fill="#0052B4" />
                                    <path
                                        d="M20.2346 18.1522L25.1059 23.0236C26.2056 21.5928 27.0348 19.9437 27.5177 18.1522H20.2346Z"
                                        fill="#0052B4" />
                                    <path
                                        d="M27.8815 12.6739H15.8262H15.8261V0.618508C15.2283 0.540688 14.6189 0.5 14 0.5C13.381 0.5 12.7717 0.540688 12.1739 0.618508V12.6738V12.6739H0.118508C0.0406875 13.2717 0 13.8811 0 14.5C0 15.119 0.0406875 15.7283 0.118508 16.3261H12.1738H12.1739V28.3815C12.7717 28.4593 13.381 28.5 14 28.5C14.6189 28.5 15.2283 28.4594 15.8261 28.3815V16.3262V16.3261H27.8815C27.9593 15.7283 28 15.119 28 14.5C28 13.8811 27.9593 13.2717 27.8815 12.6739Z"
                                        fill="#D80027" />
                                    <path
                                        d="M17.6521 18.1523L23.8994 24.3996C24.1867 24.1123 24.4608 23.812 24.7223 23.5008L19.3738 18.1522H17.6521V18.1523Z"
                                        fill="#D80027" />
                                    <path
                                        d="M10.3479 18.1522H10.3478L4.10059 24.3994C4.3878 24.6868 4.68809 24.9609 4.99937 25.2224L10.3479 19.8737V18.1522Z"
                                        fill="#D80027" />
                                    <path
                                        d="M10.3478 10.8479V10.8478L4.10053 4.60046C3.8132 4.88768 3.5391 5.18797 3.27759 5.49925L8.62619 10.8479L10.3478 10.8479Z"
                                        fill="#D80027" />
                                    <path
                                        d="M17.6521 10.8479L23.8994 4.60047C23.6122 4.31314 23.3119 4.03905 23.0006 3.77759L17.6521 9.12619V10.8479Z"
                                        fill="#D80027" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_1_8">
                                        <rect width="28" height="28" fill="white" transform="translate(0 0.5)" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <p class="user-nav-lang__list-text">
                                United Kingdom (GBP)
                            </p>
                        </li>
                        <li class="user-nav-lang__list-item" id="1" @click="changeActiveLang">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_114_5096)">
                                    <path
                                        d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
                                        fill="#F0F0F0" />
                                    <path
                                        d="M10.0001 0C5.70043 0 2.035 2.71375 0.62207 6.52176H19.3781C17.9652 2.71375 14.2997 0 10.0001 0Z"
                                        fill="#A2001D" />
                                    <path
                                        d="M10.0001 20C14.2997 20 17.9652 17.2863 19.3781 13.4783H0.62207C2.035 17.2863 5.70043 20 10.0001 20Z"
                                        fill="#0052B4" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_114_5096">
                                        <rect width="20" height="20" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <p class="user-nav-lang__list-text">
                                Netherlands (EUR)
                            </p>
                        </li>
                        <li class="user-nav-lang__list-item" id="2" @click="changeActiveLang">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_114_5154)">
                                    <path
                                        d="M0.62207 13.4783C2.035 17.2863 5.70043 20.0001 10.0001 20.0001C14.2997 20.0001 17.9652 17.2863 19.3781 13.4783L10.0001 12.6088L0.62207 13.4783Z"
                                        fill="#FFDA44" />
                                    <path
                                        d="M10.0001 0C5.70043 0 2.035 2.71375 0.62207 6.52176L10.0001 7.39129L19.3781 6.52172C17.9652 2.71375 14.2997 0 10.0001 0Z"
                                        fill="black" />
                                    <path
                                        d="M0.621992 6.52173C0.220039 7.60505 0 8.77677 0 9.99997C0 11.2232 0.220039 12.3949 0.621992 13.4782H19.378C19.78 12.3949 20 11.2232 20 9.99997C20 8.77677 19.78 7.60505 19.378 6.52173H0.621992Z"
                                        fill="#D80027" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_114_5154">
                                        <rect width="20" height="20" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <p class="user-nav-lang__list-text">
                                Germany (EUR)
                            </p>
                        </li>
                        <li class="user-nav-lang__list-item" id="3" @click="changeActiveLang">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_114_5125)">
                                    <path
                                        d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
                                        fill="#F0F0F0" />
                                    <path
                                        d="M19.9998 9.99996C19.9998 5.70031 17.286 2.03488 13.478 0.621948V19.378C17.286 17.965 19.9998 14.2996 19.9998 9.99996Z"
                                        fill="#D80027" />
                                    <path
                                        d="M0 9.99996C0 14.2996 2.71379 17.965 6.52176 19.378V0.621948C2.71379 2.03488 0 5.70031 0 9.99996Z"
                                        fill="#0052B4" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_114_5125">
                                        <rect width="20" height="20" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <p class="user-nav-lang__list-text">
                                France (EUR)
                            </p>
                        </li>
                    </ul>
                </div>
                <a class="user-nav__bag" href="#">
                    <svg width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_1_25)">
                            <mask id="mask0_1_25" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0"
                                width="28" height="29">
                                <path d="M0 0H28V29H0V0Z" fill="white" />
                            </mask>
                            <g mask="url(#mask0_1_25)">
                                <path d="M25 10H3V28H25V10Z" stroke="#192636" stroke-miterlimit="10" stroke-linecap="round"
                                    stroke-linejoin="round" />
                                <path
                                    d="M20.3437 7.34375C20.3437 3.8402 17.5036 1 14 1C10.4964 1 7.65625 3.8402 7.65625 7.34375"
                                    stroke="#192636" stroke-miterlimit="10" stroke-linecap="round"
                                    stroke-linejoin="round" />
                            </g>
                        </g>
                        <defs>
                            <clipPath id="clip0_1_25">
                                <rect width="28" height="29" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </a>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    data() {
        return {
            langsMenuIsActive: false,
            idOfActiveLang: 0,
        }
    },
    methods: {
        showLangs() {
            if (this.langsMenuIsActive == false) {
                this.langsMenuIsActive = true
            } else {
                this.langsMenuIsActive = false
            }
        },
        changeActiveLang(event) {
            if (event.currentTarget.id == 0) {
                this.idOfActiveLang = 0
                for ( let item of document.querySelectorAll('.user-nav-lang__list-item') ) {
                    item.classList.remove('user-nav-lang__list-item--active')
                }
                event.currentTarget.classList.add('user-nav-lang__list-item--active')
            } else if (event.currentTarget.id == 1) {
                this.idOfActiveLang = 1
                for ( let item of document.querySelectorAll('.user-nav-lang__list-item') ) {
                    item.classList.remove('user-nav-lang__list-item--active')
                }
                console.log(event.currentTarget)
                event.currentTarget.classList.add('user-nav-lang__list-item--active')
            } else if (event.currentTarget.id == 2) {
                this.idOfActiveLang = 2
                for ( let item of document.querySelectorAll('.user-nav-lang__list-item') ) {
                    item.classList.remove('user-nav-lang__list-item--active')
                }
                event.currentTarget.classList.add('user-nav-lang__list-item--active')
            } else if (event.currentTarget.id == 3) {
                this.idOfActiveLang = 3
                for ( let item of document.querySelectorAll('.user-nav-lang__list-item') ) {
                    item.classList.remove('user-nav-lang__list-item--active')
                }
                event.currentTarget.classList.add('user-nav-lang__list-item--active')
            }
            this.langsMenuIsActive = false
        },
    },
}
</script>

<style lang="scss">

$black: #192636;

.header {
    z-index: 10;
    padding: 40px 15px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    max-width: 1920px;
    margin-left: auto;
    margin-right: auto;

    &__inner {
        display: flex;
        justify-content: space-between;
        align-items: center;
        max-width: 1720px;
        margin-left: auto;
        margin-right: auto;
    }
}

.user-nav {
    display: flex;
    align-items: center;
    gap: 25px;

    &__bag {
        width: 28px;
        height: 28px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
}

.user-nav-lang {
    cursor: pointer;
    position: relative;

    &__icons {
        width: 28px;
        height: 28px;
        display: flex;
        justify-content: center;
        align-items: center;
        svg {
            width: 28px;
            height: 28px;
        }
    }

    &__list {
        top: 43px;
        right: 0;
        width: 220px;
        position: absolute;
        background: #FFFFFF;
        border-radius: 8px;
        padding: 20px;
        flex-direction: column;
        gap: 15px;
        filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.1));
    }

    &__list-item {
        display: flex;
        align-items: center;
        gap: 10px;
        &:hover {
            .user-nav-lang__list-text {
                color: $black;
            }
        }
        svg {
            width: 20px;
            height: 20px;
        }
    }
    &__list-item--active {
        .user-nav-lang__list-text {
            color: $black;
            font-weight: 500;
        }
    }
    &__list-text {
        font-size: 14px;
        line-height: 32px;
        color: rgba(25, 38, 54, 0.6);
        transition: color 0.3s;
    }
}
</style>