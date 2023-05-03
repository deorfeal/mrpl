<template>
    <div class="big-wrapper">
        <HeaderVue>
        </HeaderVue>
        <main class="main">
            <section class="main__product-info product-info">
                <div class="product-info__view product-view">
                    <div class="product-view__inner">
                        <div class="product-view__images">
                            <img class="product-view__images-img mix item-first" src="../../public/images/product-img-1.png"
                                alt="img">
                            <img class="product-view__images-img mix item-second"
                                src="../../public/images/product-img-2.png" alt="img">
                            <img class="product-view__images-img mix item-third" src="../../public/images/product-img-3.png"
                                alt="img">
                            <img class="product-view__images-img mix item-fourth"
                                src="../../public/images/product-img-4.png" alt="img">
                            <img class="product-view__images-img mix item-fifth" src="../../public/images/product-img-5.png"
                                alt="img">
                            <!-- <div class="product-view__images-box">
                                <div class="swiper-button-prev">
    
                                </div>
                                <div class="swiper-button-next">
                                    
                                </div>
                            </div> -->
                        </div>
                        <swiper class="product-view__swiper product-view-swiper" :loop="true" :modules="modules"
                            :slides-per-view="5" :space-between="30" navigation @swiper="onSwiper"
                            @slideChange="onSlideChange"
                            :breakpoints="{ 301: { slidesPerView: 1 }, 901: { slidesPerView: 5 } }">
                            <swiper-slide class="product-view-swiper__slide product-view-swiper-slide"
                                data-filter=".item-first">
                                <div class="product-view-swiper-slide__box">
                                    <img class="product-view-swiper-slide__box-img"
                                        src="../../public/images/product-img-1.png" alt="img">
                                </div>
                            </swiper-slide>
                            <swiper-slide class="product-view-swiper__slide product-view-swiper-slide"
                                data-filter=".item-second">
                                <div class="product-view-swiper-slide__box">
                                    <img class="product-view-swiper-slide__box-img"
                                        src="../../public/images/product-img-2.png" alt="img">
                                </div>
                            </swiper-slide>
                            <swiper-slide class="product-view-swiper__slide product-view-swiper-slide"
                                data-filter=".item-third">
                                <div class="product-view-swiper-slide__box">
                                    <img class="product-view-swiper-slide__box-img"
                                        src="../../public/images/product-img-3.png" alt="img">
                                </div>
                            </swiper-slide>
                            <swiper-slide class="product-view-swiper__slide product-view-swiper-slide"
                                data-filter=".item-fourth">
                                <div class="product-view-swiper-slide__box">
                                    <img class="product-view-swiper-slide__box-img"
                                        src="../../public/images/product-img-4.png" alt="img">
                                </div>
                            </swiper-slide>
                            <swiper-slide class="product-view-swiper__slide product-view-swiper-slide"
                                data-filter=".item-fifth">
                                <div class="product-view-swiper-slide__box">
                                    <img class="product-view-swiper-slide__box-img"
                                        src="../../public/images/product-img-5.png" alt="img">
                                </div>
                            </swiper-slide>
                            <swiper-slide class="product-view-swiper__slide product-view-swiper-slide"
                                data-filter=".item-first">
                                <div class="product-view-swiper-slide__box">
                                    <img class="product-view-swiper-slide__box-img"
                                        src="../../public/images/product-img-1.png" alt="img">
                                </div>
                            </swiper-slide>
                            <swiper-slide class="product-view-swiper__slide product-view-swiper-slide"
                                data-filter=".item-second">
                                <div class="product-view-swiper-slide__box">
                                    <img class="product-view-swiper-slide__box-img"
                                        src="../../public/images/product-img-2.png" alt="img">
                                </div>
                            </swiper-slide>
                            <swiper-slide class="product-view-swiper__slide product-view-swiper-slide"
                                data-filter=".item-third">
                                <div class="product-view-swiper-slide__box">
                                    <img class="product-view-swiper-slide__box-img"
                                        src="../../public/images/product-img-3.png" alt="img">
                                </div>
                            </swiper-slide>
                            <swiper-slide class="product-view-swiper__slide product-view-swiper-slide"
                                data-filter=".item-fourth">
                                <div class="product-view-swiper-slide__box">
                                    <img class="product-view-swiper-slide__box-img"
                                        src="../../public/images/product-img-4.png" alt="img">
                                </div>
                            </swiper-slide>
                            <swiper-slide class="product-view-swiper__slide product-view-swiper-slide"
                                data-filter=".item-fifth">
                                <div class="product-view-swiper-slide__box">
                                    <img class="product-view-swiper-slide__box-img"
                                        src="../../public/images/product-img-5.png" alt="img">
                                </div>
                            </swiper-slide>
                        </swiper>
                    </div>
                </div>
                <div class="product-info__content product-content">
                    <div class="product-content__top">
                        <h2 class="product-content__top-title">
                            Moonbird
                        </h2>
                        <a class="product-content__top-link" href="#">
                            Free delivery
                        </a>
                    </div>
                    <div class="product-content__subscribe product-content-subscribe" >
                        <p class="product-content-subscribe__text">
                            Starting at
                            <span>
                                €14,91/mo
                            </span>
                            with
                        </p>
                        <a class="product-content-subscribe__link" href="#payment-popup" data-fancybox>
                            <img src="../../public/images/alma-icon.png" alt="img">
                        </a>
                        <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg"
                            @click="showAlmaInfo">
                            <path
                                d="M8.5 4.83333V9.83333M8.5 13.1667H8.50749M16 9C16 13.1421 12.6421 16.5 8.5 16.5C4.35786 16.5 1 13.1421 1 9C1 4.85786 4.35786 1.5 8.5 1.5C12.6421 1.5 16 4.85786 16 9Z"
                                stroke="#192636" stroke-opacity="1" stroke-width="1.5" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>
                        <ul class="product-content-subscribe__list" v-if="almaInfoIsActive">
                            <li class="product-content-subscribe__lits-item">
                                <p class="product-content-subscribe__list-text">
                                    Select <span>Alma</span> as your payment method
                                </p>
                            </li>
                            <li class="product-content-subscribe__lits-item">
                                <p class="product-content-subscribe__list-text">
                                    Choose your payment plan
                                </p>
                            </li>
                            <li class="product-content-subscribe__lits-item">
                                <p class="product-content-subscribe__list-text">
                                    Complete your checkout
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div class="product-content__rait product-content-rait">
                        <div class="product-content-rait__stars">
                            <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M8.34566 0.455517C8.28941 0.480126 8.21558 0.532861 8.18394 0.568017C8.1523 0.606688 7.63902 1.62271 7.04488 2.83208C6.45074 4.04146 5.95503 5.03989 5.94097 5.05396C5.93042 5.0645 4.81245 5.23677 3.45894 5.43364C1.70464 5.68677 0.96636 5.8063 0.892532 5.852C0.656985 5.98911 0.551517 6.34419 0.678079 6.58677C0.706204 6.6395 1.43745 7.37427 2.30581 8.21802C3.17066 9.06177 3.97222 9.84575 4.08472 9.95825L4.28511 10.1657L3.86324 12.6266C3.42027 15.2141 3.42378 15.1895 3.56441 15.404C3.6523 15.5375 3.88433 15.6395 4.06011 15.6184C4.16558 15.6079 4.81597 15.2844 6.39097 14.4547C7.59331 13.8254 8.59175 13.3086 8.61284 13.3086C8.63042 13.3086 9.62534 13.8219 10.8207 14.4512C12.016 15.0805 13.0425 15.6043 13.1023 15.6149C13.2781 15.65 13.4503 15.6008 13.5804 15.4778C13.816 15.2563 13.823 15.3583 13.3554 12.6231L12.9335 10.1657L13.0988 9.99341C13.1937 9.89849 13.9918 9.1145 14.8812 8.25317C15.7671 7.38833 16.5125 6.6395 16.5406 6.58677C16.6671 6.34419 16.5617 5.98911 16.3261 5.84849C16.2488 5.8063 15.5386 5.69028 13.7597 5.43013C12.4062 5.23677 11.2882 5.0645 11.2777 5.05044C11.2636 5.03989 10.7679 4.04146 10.1738 2.83208C9.57964 1.62271 9.06636 0.606688 9.03472 0.568017C8.90464 0.416845 8.56363 0.360595 8.34566 0.455517Z"
                                    fill="#F79E1B" />
                            </svg>
                            <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M8.34566 0.455517C8.28941 0.480126 8.21558 0.532861 8.18394 0.568017C8.1523 0.606688 7.63902 1.62271 7.04488 2.83208C6.45074 4.04146 5.95503 5.03989 5.94097 5.05396C5.93042 5.0645 4.81245 5.23677 3.45894 5.43364C1.70464 5.68677 0.96636 5.8063 0.892532 5.852C0.656985 5.98911 0.551517 6.34419 0.678079 6.58677C0.706204 6.6395 1.43745 7.37427 2.30581 8.21802C3.17066 9.06177 3.97222 9.84575 4.08472 9.95825L4.28511 10.1657L3.86324 12.6266C3.42027 15.2141 3.42378 15.1895 3.56441 15.404C3.6523 15.5375 3.88433 15.6395 4.06011 15.6184C4.16558 15.6079 4.81597 15.2844 6.39097 14.4547C7.59331 13.8254 8.59175 13.3086 8.61284 13.3086C8.63042 13.3086 9.62534 13.8219 10.8207 14.4512C12.016 15.0805 13.0425 15.6043 13.1023 15.6149C13.2781 15.65 13.4503 15.6008 13.5804 15.4778C13.816 15.2563 13.823 15.3583 13.3554 12.6231L12.9335 10.1657L13.0988 9.99341C13.1937 9.89849 13.9918 9.1145 14.8812 8.25317C15.7671 7.38833 16.5125 6.6395 16.5406 6.58677C16.6671 6.34419 16.5617 5.98911 16.3261 5.84849C16.2488 5.8063 15.5386 5.69028 13.7597 5.43013C12.4062 5.23677 11.2882 5.0645 11.2777 5.05044C11.2636 5.03989 10.7679 4.04146 10.1738 2.83208C9.57964 1.62271 9.06636 0.606688 9.03472 0.568017C8.90464 0.416845 8.56363 0.360595 8.34566 0.455517Z"
                                    fill="#F79E1B" />
                            </svg>
                            <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M8.34566 0.455517C8.28941 0.480126 8.21558 0.532861 8.18394 0.568017C8.1523 0.606688 7.63902 1.62271 7.04488 2.83208C6.45074 4.04146 5.95503 5.03989 5.94097 5.05396C5.93042 5.0645 4.81245 5.23677 3.45894 5.43364C1.70464 5.68677 0.96636 5.8063 0.892532 5.852C0.656985 5.98911 0.551517 6.34419 0.678079 6.58677C0.706204 6.6395 1.43745 7.37427 2.30581 8.21802C3.17066 9.06177 3.97222 9.84575 4.08472 9.95825L4.28511 10.1657L3.86324 12.6266C3.42027 15.2141 3.42378 15.1895 3.56441 15.404C3.6523 15.5375 3.88433 15.6395 4.06011 15.6184C4.16558 15.6079 4.81597 15.2844 6.39097 14.4547C7.59331 13.8254 8.59175 13.3086 8.61284 13.3086C8.63042 13.3086 9.62534 13.8219 10.8207 14.4512C12.016 15.0805 13.0425 15.6043 13.1023 15.6149C13.2781 15.65 13.4503 15.6008 13.5804 15.4778C13.816 15.2563 13.823 15.3583 13.3554 12.6231L12.9335 10.1657L13.0988 9.99341C13.1937 9.89849 13.9918 9.1145 14.8812 8.25317C15.7671 7.38833 16.5125 6.6395 16.5406 6.58677C16.6671 6.34419 16.5617 5.98911 16.3261 5.84849C16.2488 5.8063 15.5386 5.69028 13.7597 5.43013C12.4062 5.23677 11.2882 5.0645 11.2777 5.05044C11.2636 5.03989 10.7679 4.04146 10.1738 2.83208C9.57964 1.62271 9.06636 0.606688 9.03472 0.568017C8.90464 0.416845 8.56363 0.360595 8.34566 0.455517Z"
                                    fill="#F79E1B" />
                            </svg>
                            <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M8.34566 0.455517C8.28941 0.480126 8.21558 0.532861 8.18394 0.568017C8.1523 0.606688 7.63902 1.62271 7.04488 2.83208C6.45074 4.04146 5.95503 5.03989 5.94097 5.05396C5.93042 5.0645 4.81245 5.23677 3.45894 5.43364C1.70464 5.68677 0.96636 5.8063 0.892532 5.852C0.656985 5.98911 0.551517 6.34419 0.678079 6.58677C0.706204 6.6395 1.43745 7.37427 2.30581 8.21802C3.17066 9.06177 3.97222 9.84575 4.08472 9.95825L4.28511 10.1657L3.86324 12.6266C3.42027 15.2141 3.42378 15.1895 3.56441 15.404C3.6523 15.5375 3.88433 15.6395 4.06011 15.6184C4.16558 15.6079 4.81597 15.2844 6.39097 14.4547C7.59331 13.8254 8.59175 13.3086 8.61284 13.3086C8.63042 13.3086 9.62534 13.8219 10.8207 14.4512C12.016 15.0805 13.0425 15.6043 13.1023 15.6149C13.2781 15.65 13.4503 15.6008 13.5804 15.4778C13.816 15.2563 13.823 15.3583 13.3554 12.6231L12.9335 10.1657L13.0988 9.99341C13.1937 9.89849 13.9918 9.1145 14.8812 8.25317C15.7671 7.38833 16.5125 6.6395 16.5406 6.58677C16.6671 6.34419 16.5617 5.98911 16.3261 5.84849C16.2488 5.8063 15.5386 5.69028 13.7597 5.43013C12.4062 5.23677 11.2882 5.0645 11.2777 5.05044C11.2636 5.03989 10.7679 4.04146 10.1738 2.83208C9.57964 1.62271 9.06636 0.606688 9.03472 0.568017C8.90464 0.416845 8.56363 0.360595 8.34566 0.455517Z"
                                    fill="#F79E1B" />
                            </svg>
                            <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M9.58058 0.492197C9.5173 0.530869 9.42941 0.622274 9.38371 0.696102C9.33449 0.766415 8.75441 1.92657 8.09347 3.26954C7.42902 4.61251 6.87003 5.73048 6.84543 5.75157C6.82433 5.77267 5.58332 5.96954 4.08917 6.18399C2.59503 6.40196 1.29425 6.60235 1.19582 6.63399C0.788003 6.76759 0.707144 7.11915 0.995425 7.47774C1.05871 7.55509 1.99035 8.47618 3.06964 9.52384C4.47238 10.8879 5.02082 11.4434 5.01027 11.4856C4.93996 11.7774 4.08214 16.9066 4.08214 17.0297C4.08214 17.4797 4.37746 17.6836 4.7923 17.5184C4.87668 17.4867 6.04035 16.882 7.3798 16.1789L9.81261 14.8992L12.2489 16.1789C13.5849 16.882 14.7486 17.4867 14.8329 17.5184C15.2513 17.6871 15.5466 17.4832 15.5396 17.0262C15.5396 16.9137 15.3286 15.6129 15.072 14.1328L14.6009 11.4434L15.9263 10.1461C18.5208 7.59727 18.7318 7.37931 18.7775 7.21759C18.8583 6.9504 18.7247 6.72892 18.4294 6.63399C18.331 6.60235 17.0302 6.40196 15.5361 6.18399C14.0419 5.96954 12.8009 5.77267 12.7763 5.75157C12.7552 5.73048 12.1962 4.61251 11.5353 3.26954C10.8743 1.92657 10.2802 0.759384 10.2204 0.678524C10.0236 0.418369 9.79855 0.351572 9.58058 0.492197ZM11.8939 7.04884C11.9466 7.06641 16.2603 7.69923 16.3376 7.69923C16.3657 7.69923 16.3868 7.71329 16.3868 7.72735C16.3868 7.74142 15.9333 8.19493 15.3778 8.73634C14.8189 9.27423 14.0841 9.99142 13.7431 10.3254L13.1173 10.9336L13.4021 12.593C13.5568 13.507 13.729 14.5231 13.7853 14.85C13.8415 15.177 13.8837 15.4512 13.8767 15.4582C13.8696 15.4652 13.04 15.0363 12.031 14.502C11.0255 13.9711 10.1114 13.493 10.006 13.4402L9.81261 13.3453L9.81613 8.13868V2.93556L10.8321 4.98517C11.3911 6.11017 11.8657 7.03829 11.8939 7.04884Z"
                                    fill="#F79E1B" />
                            </svg>
                        </div>
                        <p class="product-content-rait__text">
                            62 reviews
                        </p>
                    </div>
                    <p class="product-content__text">
                        Moonbird is your guide in doing slow-paced breathing exercises. Place it in the palm of your hand
                        and simply breathe along to its calming pace. You can track the effects on your body via the app.
                        Finding inner peace was never that easy.
                    </p>
                    <p class="product-content__price">
                        €179
                    </p>
                    <ul class="product-content__list product-list">
                        <li class="product-list__item">
                            <div class="product-list__icon">

                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M19.4912 10.7904C19.2861 10.6736 18.2517 10.1248 16.7486 10.0861C16.7164 8.49636 16.1231 7.43871 16.0957 7.39146C16.0327 7.2819 15.9252 7.21993 15.781 7.21958C15.5037 7.2278 14.5775 7.30073 13.4959 7.80987C12.6574 5.96335 11.3423 5.13853 11.2834 5.10258C11.1731 5.03547 11.0351 5.03547 10.9249 5.10258C10.8663 5.13887 9.54778 5.9654 8.70892 7.81671C7.61635 7.30141 6.67889 7.2278 6.39333 7.21958C6.26288 7.21479 6.14133 7.28738 6.0797 7.40208C5.93555 7.6712 5.45621 8.67064 5.42984 10.0871C3.87162 10.1398 2.83349 10.7243 2.71571 10.7935C2.60957 10.8561 2.5452 10.9715 2.54794 11.0951C2.55067 11.2126 2.64072 13.9941 5.37985 15.9345C6.65595 16.8421 8.46309 17.3794 10.1185 17.3794C10.3959 17.3794 10.6674 17.3609 10.9331 17.3301C11.1046 17.3777 11.3488 17.3301 11.4357 17.3068C11.748 17.3527 12.0657 17.3773 12.3876 17.3773C13.9211 17.3773 15.5229 16.8665 16.8318 15.9352C19.5716 13.9969 19.6617 11.2129 19.6641 11.0951C19.6668 10.9695 19.6 10.8524 19.4912 10.7904ZM5.776 15.376C3.697 13.9034 3.31695 11.9278 3.24778 11.2872C3.58915 11.1235 4.3876 10.8089 5.45689 10.7726C5.51544 11.4536 5.68253 12.2041 6.03519 13.0029C6.72134 14.555 7.93923 15.8704 9.33687 16.6419C8.05153 16.5049 6.7299 16.0546 5.776 15.376ZM6.66177 12.7266C5.65137 10.4374 6.31219 8.53916 6.59021 7.91703C6.96307 7.95127 7.66292 8.0694 8.45864 8.45322C8.26724 9.0055 8.13405 9.59338 8.069 10.21C7.8485 12.3243 8.41173 14.4492 9.51594 15.9567C8.31141 15.249 7.26438 14.0897 6.66177 12.7266ZM11.1053 16.6145C11.0981 16.61 11.0909 16.6059 11.0838 16.6018C9.44952 15.362 8.49116 12.7711 8.75035 10.2816C8.82089 9.61667 8.97222 8.98701 9.20094 8.40905C9.77787 6.93985 10.7147 6.11058 11.1046 5.8127C11.4943 6.10989 12.4287 6.93745 13.0049 8.4022C13.237 8.99146 13.3898 9.62386 13.4589 10.2812C13.7208 12.7893 12.7546 15.3812 11.1053 16.6145ZM14.1392 10.2097C14.0749 9.59818 13.9403 9.00789 13.7462 8.44671C14.5299 8.0694 15.2192 7.95196 15.5927 7.91738C15.7615 8.2923 16.1022 9.20682 16.0625 10.4158C16.0368 11.1889 15.8539 11.9665 15.5194 12.7259C14.8932 14.1366 13.8195 15.3466 12.6067 16.0697C13.7691 14.5594 14.3669 12.3856 14.1392 10.2097ZM16.4353 15.3764C15.3979 16.1146 14.1625 16.5563 12.9443 16.6617C14.2827 15.8646 15.4622 14.5423 16.1457 13.0026C16.4679 12.2709 16.6548 11.5224 16.7185 10.7729C17.8015 10.8017 18.5986 11.1122 18.9635 11.2875C18.8947 11.9292 18.5147 13.9055 16.4353 15.3764Z"
                                        fill="#192636" />
                                </svg>
                            </div>
                            <div class="product-list__box">
                                <h3 class="product-list__box-title">
                                    Reduce stress
                                </h3>
                                <p class="product-list__box-text">
                                    Research shows that just 10 minutes of slow-paced breathing already makes you more
                                    relaxed.
                                </p>
                            </div>
                        </li>
                        <li class="product-list__item">
                            <div class="product-list__icon">

                                <svg width="23" height="23" viewBox="0 0 23 23" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M17.9782 13.3899C17.6676 14.3335 17.1375 15.2206 16.3872 15.971C13.8269 18.5312 9.67596 18.5312 7.11573 15.971C4.5555 13.4108 4.5555 9.25983 7.11573 6.6996C7.86613 5.94919 8.75324 5.41908 9.69685 5.10858L9.93906 5.35082C9.24604 7.45677 9.80338 9.93384 11.4781 11.6086C13.1529 13.2834 15.63 13.8407 17.7359 13.1477L17.9782 13.3899Z"
                                        stroke="#192636" stroke-width="0.8" stroke-miterlimit="10" />
                                </svg>
                            </div>
                            <div class="product-list__box">
                                <h3 class="product-list__box-title">
                                    Better sleep
                                </h3>
                                <p class="product-list__box-text">
                                    Slow breathing is the easiest way to combat insomnia
                                </p>
                            </div>
                        </li>
                        <li class="product-list__item">
                            <div class="product-list__icon">

                                <svg width="22" height="23" viewBox="0 0 22 23" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <mask id="mask0_6_938" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="3"
                                        y="4" width="16" height="15">
                                        <path d="M3.69556 4.19563H18.3043V18.8043H3.69556V4.19563Z" fill="white" />
                                    </mask>
                                    <g mask="url(#mask0_6_938)">
                                        <path
                                            d="M11.8834 8.42648C12.2074 10.5395 15.2798 9.98519 15.2798 14.0394C14.2406 14.1005 13.225 13.7144 12.489 12.9783C11.7529 12.2423 10.9387 11.2266 10.9999 10.1875C11.061 11.2266 10.2469 12.2423 9.5108 12.9783C8.77478 13.7144 7.7591 14.1005 6.71997 14.0394C6.71997 9.98519 9.79233 10.5395 10.1163 8.42648"
                                            stroke="#192636" stroke-width="0.8" stroke-miterlimit="10" />
                                        <path
                                            d="M12.7118 6.33557C12.7118 7.28105 11.9453 8.9035 10.9998 8.9035C10.0543 8.9035 9.28784 7.28105 9.28784 6.33557C9.28784 5.39008 10.0543 4.62361 10.9998 4.62361C11.9453 4.62361 12.7118 5.39008 12.7118 6.33557Z"
                                            stroke="#192636" stroke-width="0.8" stroke-miterlimit="10" />
                                        <path d="M9.49073 12.9822C9.72909 14.1878 9.67963 14.8575 8.71729 15.6086"
                                            stroke="#192636" stroke-width="0.8" stroke-miterlimit="10" />
                                        <path
                                            d="M14.4666 18.3763H10.9999H7.57599C6.24446 18.1861 5.19828 17.1399 5.00806 15.8084C7.3263 15.4923 9.63003 15.0815 10.9999 16.9782C12.3698 15.0815 14.6735 15.4923 16.9918 15.8084C16.8015 17.1399 15.7553 18.1861 14.4238 18.3763"
                                            stroke="#192636" stroke-width="0.8" stroke-miterlimit="10" />
                                        <path d="M12.5089 12.9822C12.2705 14.1878 12.3204 14.8575 13.2828 15.6086"
                                            stroke="#192636" stroke-width="0.8" stroke-miterlimit="10" />
                                    </g>
                                </svg>
                            </div>
                            <div class="product-list__box">
                                <h3 class="product-list__box-title">
                                    Reduce anxiety
                                </h3>
                                <p class="product-list__box-text">
                                    Five mins of slow breathing decreases anxiety
                                </p>
                            </div>
                        </li>
                        <li class="product-list__item">
                            <div class="product-list__icon">

                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_41_5735)">
                                        <path d="M19.2188 10L16 10" stroke="#192636" stroke-width="0.8"
                                            stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M12 10L0.78125 10" stroke="#192636" stroke-width="0.8"
                                            stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M0.78125 4.75L5 4.75" stroke="#192636" stroke-width="0.8"
                                            stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M9.5 4.75L19.2187 4.75" stroke="#192636" stroke-width="0.8"
                                            stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                        <path
                                            d="M7.35937 6.40625C8.46394 6.40625 9.35938 5.51082 9.35938 4.40625C9.35938 3.30168 8.46394 2.40625 7.35938 2.40625C6.25481 2.40625 5.35937 3.30168 5.35937 4.40625C5.35937 5.51082 6.25481 6.40625 7.35937 6.40625Z"
                                            stroke="#192636" stroke-width="0.8" stroke-miterlimit="10"
                                            stroke-linecap="round" stroke-linejoin="round" />
                                        <path
                                            d="M14 12C15.1046 12 16 11.1046 16 10C16 8.89543 15.1046 8 14 8C12.8954 8 12 8.89543 12 10C12 11.1046 12.8954 12 14 12Z"
                                            stroke="#192636" stroke-width="0.8" stroke-miterlimit="10"
                                            stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M0.78125 15.25L6 15.25" stroke="#192636" stroke-width="0.8"
                                            stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M10 15.25L19.2187 15.25" stroke="#192636" stroke-width="0.8"
                                            stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                        <path
                                            d="M8 17C9.10457 17 10 16.1046 10 15C10 13.8954 9.10457 13 8 13C6.89543 13 6 13.8954 6 15C6 16.1046 6.89543 17 8 17Z"
                                            stroke="#192636" stroke-width="0.8" stroke-miterlimit="10"
                                            stroke-linecap="round" stroke-linejoin="round" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_41_5735">
                                            <rect width="20" height="20" fill="white"
                                                transform="translate(20) rotate(90)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                            <div class="product-list__box">
                                <h3 class="product-list__box-title">
                                    Personalized settings
                                </h3>
                                <p class="product-list__box-text">
                                    Moonbird allows users to customize the pace of the breathing exercises to their own
                                    preferences
                                </p>
                            </div>
                        </li>
                    </ul>
                    <div class="product-content__color product-color">
                        <p class="product-color__text">
                            Colour:
                        </p>
                        <div class="product-color__box">
                            <input class="product-color__box-btn" type="radio">
                            <input class="product-color__box-btn" type="radio">
                            <input class="product-color__box-btn" type="radio">
                            <input class="product-color__box-btn" type="radio">
                        </div>
                    </div>
                    <div class="product-content__quantity product-quantity">
                        <p class="product-quantity__text">
                            Quantity:
                        </p>
                        <div class="product-quantity__box">
                            <button class="product-quantity__box-btn" type="button" @click="minusCount">
                                <svg width="12" height="2" viewBox="0 0 12 2" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.27808 1H10.9031" stroke="black" stroke-width="0.6875"
                                        stroke-linecap="square" />
                                </svg>
                            </button>
                            <input class="product-quantity__box-count" disabled type="text" :value="countValue">
                            <button class="product-quantity__box-btn" type="button" @click="plusCount">
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_6_822)">
                                        <path d="M6.09058 1.1875V10.8125" stroke="black" stroke-width="0.6875"
                                            stroke-linecap="square" />
                                        <path d="M1.27808 6H10.9031" stroke="black" stroke-width="0.6875"
                                            stroke-linecap="square" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_6_822">
                                            <rect width="11" height="11" fill="white" transform="translate(0.590576 0.5)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div class="product-content__add product-add">
                        <button class="product-add__btn" type="button">
                            Add to cart
                        </button>
                        <div class="product-add__inner">
                            <button class="product-add__button" type="button">
                                <img src="../../public/images/add-button-icon-1.png" alt="img">
                            </button>
                            <button class="product-add__button" type="button">
                                <img src="../../public/images/add-button-icon-2.png" alt="img">
                            </button>
                            <button class="product-add__button" type="button">
                                <img src="../../public/images/add-button-icon-3.png" alt="img">
                            </button>
                            <button class="product-add__button" type="button">
                                <img src="../../public/images/add-button-icon-4.png" alt="img">
                            </button>
                            <button class="product-add__button" type="button">
                                <img src="../../public/images/add-button-icon-5.png" alt="img">
                            </button>
                            <button class="product-add__button" type="button">
                                <img src="../../public/images/add-button-icon-6.png" alt="img">
                            </button>
                        </div>
                    </div>
                    <div class="product-content__faq product-faq">
                        <div class="product-faq__item product-faq-item" @click="showFaqItem">
                            <div class="product-faq-item__top">
                                <p class="product-faq-item__top-text">
                                    What you get?
                                </p>
                            </div>
                            <div class="product-faq-item__get product-faq-item-get">
                                <img class="product-faq-item-get__img" src="../../public/images/product-faq-img-1.png"
                                    alt="img">
                                <ul class="product-faq-item-get__list">
                                    <li class="product-faq-item-get__item">
                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M13.6 9C13.6 11.4608 13.2785 13.646 12.582 15.2004C11.8911 16.7423 10.8689 17.6 9.45447 17.6C8.62449 17.6 7.97318 17.372 7.45282 16.9748C6.92732 16.5736 6.50952 15.9799 6.18701 15.2095C5.53739 13.6578 5.30894 11.4748 5.30894 9C5.30894 6.52521 5.53739 4.34225 6.18701 2.79051C6.50952 2.02014 6.92732 1.42636 7.45282 1.02521C7.97318 0.627993 8.62449 0.4 9.45447 0.4C10.824 0.4 11.8477 1.2548 12.5509 2.80158C13.2579 4.35673 13.6 6.54214 13.6 9Z"
                                                stroke="#192636" stroke-width="0.8" />
                                            <path
                                                d="M10.8163 5.27188C10.8163 6.09356 10.8125 6.93456 10.6109 7.57191C10.5126 7.88256 10.3767 8.11109 10.2002 8.2619C10.0307 8.40676 9.79084 8.50825 9.42377 8.50825C9.05671 8.50825 8.81685 8.40676 8.64734 8.2619C8.47087 8.11111 8.33502 7.88258 8.23676 7.57193C8.03517 6.93457 8.03142 6.09357 8.03142 5.27188C8.03142 4.5145 8.18412 3.86256 8.44288 3.41508C8.69609 2.97719 9.02828 2.76279 9.42377 2.76279C9.81928 2.76279 10.1515 2.97721 10.4048 3.4151C10.6636 3.86258 10.8163 4.51452 10.8163 5.27188Z"
                                                stroke="#192636" stroke-width="0.8" />
                                        </svg>
                                        <p class="product-faq-item-get__text">
                                            Your moonbird
                                        </p>
                                    </li>
                                    <li class="product-faq-item-get__item">
                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_41_3814)">
                                                <path
                                                    d="M9 18C5.27775 18 2.25 14.9715 2.25 11.25V5.625C2.25 5.418 2.418 5.25 2.625 5.25C2.832 5.25 3 5.418 3 5.625V11.25C3 14.5583 5.69175 17.25 9 17.25C12.3082 17.25 15 14.5583 15 11.25V6.375C15 6.168 15.168 6 15.375 6C15.582 6 15.75 6.168 15.75 6.375V11.25C15.75 14.9715 12.7222 18 9 18Z"
                                                    fill="#192636" />
                                                <path
                                                    d="M9 18C6.10575 18 3.75 15.645 3.75 12.75C3.75 9.855 6.10575 7.5 9 7.5C11.8943 7.5 14.25 9.855 14.25 12.75C14.25 15.645 11.8943 18 9 18ZM9 8.25C6.51825 8.25 4.5 10.2683 4.5 12.75C4.5 15.2318 6.51825 17.25 9 17.25C11.4818 17.25 13.5 15.2318 13.5 12.75C13.5 10.2683 11.4818 8.25 9 8.25Z"
                                                    fill="#192636" />
                                                <path
                                                    d="M16.125 6.75H14.625C13.5908 6.75 12.75 5.9085 12.75 4.875V3.375C12.75 3.168 12.918 3 13.125 3H17.625C17.832 3 18 3.168 18 3.375V4.875C18 5.9085 17.1593 6.75 16.125 6.75ZM13.5 3.75V4.875C13.5 5.49525 14.0048 6 14.625 6H16.125C16.7453 6 17.25 5.49525 17.25 4.875V3.75H13.5Z"
                                                    fill="#192636" />
                                                <path
                                                    d="M4.125 6H1.125C0.918 6 0.75 5.832 0.75 5.625V2.625C0.75 2.418 0.918 2.25 1.125 2.25H4.125C4.332 2.25 4.5 2.418 4.5 2.625V5.625C4.5 5.832 4.332 6 4.125 6ZM1.5 5.25H3.75V3H1.5V5.25Z"
                                                    fill="#192636" />
                                                <path
                                                    d="M16.875 3.75C16.668 3.75 16.5 3.582 16.5 3.375V1.5H14.25V3.375C14.25 3.582 14.082 3.75 13.875 3.75C13.668 3.75 13.5 3.582 13.5 3.375V1.125C13.5 0.918 13.668 0.75 13.875 0.75H16.875C17.082 0.75 17.25 0.918 17.25 1.125V3.375C17.25 3.582 17.082 3.75 16.875 3.75Z"
                                                    fill="#192636" />
                                                <path
                                                    d="M3.375 3C3.168 3 3 2.832 3 2.625V0.75H2.25V2.625C2.25 2.832 2.082 3 1.875 3C1.668 3 1.5 2.832 1.5 2.625V0.375C1.5 0.168 1.668 0 1.875 0H3.375C3.582 0 3.75 0.168 3.75 0.375V2.625C3.75 2.832 3.582 3 3.375 3Z"
                                                    fill="#192636" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_41_3814">
                                                    <rect width="18" height="18" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        <p class="product-faq-item-get__text">
                                            A charging cable
                                        </p>
                                    </li>
                                    <li class="product-faq-item-get__item">
                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M15.375 1.9395C15.375 0.869249 14.5058 0 13.4355 0H4.56451C3.49426 0 2.62502 0.869249 2.62502 1.9395V16.0605C2.62502 17.1308 3.49426 18 4.56451 18H13.4355C14.5058 18 15.375 17.1308 15.375 16.0605V1.9395ZM14.625 3.999C13.1235 4.7655 8.85002 6.75 4.81802 6.75C4.26377 6.75 3.75977 6.55875 3.37502 6.2445V16.0605C3.37502 16.7168 3.90826 17.25 4.56451 17.25H13.4355C14.0918 17.25 14.625 16.7168 14.625 16.0605V3.999ZM14.625 3.153V1.9395C14.625 1.28325 14.0918 0.75 13.4355 0.75H4.56451C3.90826 0.75 3.37502 1.28325 3.37502 1.9395V4.7085C3.37502 5.43075 4.03052 6 4.81802 6C9.09452 6 13.6515 3.67725 14.625 3.153ZM4.87502 3.375C4.25402 3.375 3.75002 3.879 3.75002 4.5C3.75002 5.121 4.25402 5.625 4.87502 5.625C5.49602 5.625 6.00002 5.121 6.00002 4.5C6.00002 3.879 5.49602 3.375 4.87502 3.375ZM4.87502 4.125C5.08202 4.125 5.25002 4.293 5.25002 4.5C5.25002 4.707 5.08202 4.875 4.87502 4.875C4.66802 4.875 4.50002 4.707 4.50002 4.5C4.50002 4.293 4.66802 4.125 4.87502 4.125Z"
                                                fill="#192636" />
                                        </svg>

                                        <p class="product-faq-item-get__text">
                                            A protective pouch
                                        </p>
                                    </li>
                                    <li class="product-faq-item-get__item">
                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M4 2.12798C4 0.952729 4.95273 0 6.12798 0H12.9375C14.1127 0 15.0655 0.952729 15.0655 2.12798V15.747C15.0655 16.9223 14.1127 17.875 12.9375 17.875H6.12798C4.95273 17.875 4 16.9223 4 15.747V2.12798ZM6.12798 0.85119C5.42282 0.85119 4.85119 1.42282 4.85119 2.12798V15.747C4.85119 16.4522 5.42282 17.0238 6.12798 17.0238H12.9375C13.6426 17.0238 14.2143 16.4522 14.2143 15.747V2.12798C14.2143 1.42282 13.6426 0.85119 12.9375 0.85119H6.12798Z"
                                                fill="#192636" />
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M6.55357 0.425595C6.55357 0.190547 6.74412 0 6.97917 0H12.0863C12.3213 0 12.5119 0.190547 12.5119 0.425595V1.27679C12.5119 1.98194 11.9402 2.55357 11.2351 2.55357H7.83036C7.12521 2.55357 6.55357 1.98194 6.55357 1.27679V0.425595ZM7.40476 0.851191V1.27679C7.40476 1.51183 7.59531 1.70238 7.83036 1.70238H11.2351C11.4701 1.70238 11.6607 1.51183 11.6607 1.27679V0.851191H7.40476Z"
                                                fill="#192636" />
                                        </svg>
                                        <p class="product-faq-item-get__text">
                                            Access to the moonbird app
                                        </p>
                                    </li>
                                    <li class="product-faq-item-get__item">
                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_41_3839)">
                                                <path
                                                    d="M14.0078 17.9954C13.2773 17.9954 12.4313 17.7644 11.4593 17.3032C10.3741 16.7887 9.85056 16.8097 9.50631 16.8232C9.22581 16.8352 8.93781 16.8457 8.65131 16.5592C8.55081 16.4587 8.09406 15.9112 8.99181 15.0134C9.43956 14.5657 10.0538 14.4367 10.5871 14.4292L7.47756 11.3197C7.05231 10.8944 7.05306 10.2014 7.47981 9.77469C7.90581 9.34869 8.59881 9.34644 9.02481 9.77244L10.3178 11.0647C10.3688 10.9627 10.4371 10.8674 10.5218 10.7827C10.8181 10.4857 11.2426 10.3949 11.6183 10.5104C11.6708 10.3619 11.7571 10.2224 11.8756 10.1039C12.0818 9.89769 12.3563 9.78369 12.6473 9.78294H12.6496C12.9143 9.78294 13.1641 9.87594 13.3613 10.0477C13.4123 9.94494 13.4813 9.84819 13.5668 9.76269C13.9928 9.33669 14.6858 9.33594 15.1118 9.76044L17.1368 11.7862C18.4073 13.0567 18.2671 14.8972 16.7933 16.3724L15.9443 17.2214C15.4208 17.7382 14.7788 17.9954 14.0078 17.9954ZM9.70956 16.0679C10.1191 16.0679 10.7491 16.1354 11.7811 16.6259C14.0198 17.6879 14.9273 17.1712 15.4163 16.6897L16.2608 15.8452L16.2616 15.8444C17.1556 14.9489 17.7811 13.4917 16.6126 12.3232L14.5816 10.2922C14.4488 10.1594 14.2313 10.1609 14.0978 10.2944C13.9643 10.4279 13.9628 10.6439 14.0948 10.7774L14.6018 11.2844C14.6753 11.3579 14.7113 11.4539 14.7113 11.5499C14.7113 11.6459 14.6746 11.7419 14.6018 11.8154C14.4556 11.9617 14.2178 11.9617 14.0716 11.8154L12.8903 10.6342C12.8266 10.5704 12.7411 10.5352 12.6503 10.5352C12.6503 10.5352 12.6503 10.5352 12.6496 10.5352C12.5581 10.5352 12.4718 10.5712 12.4066 10.6364C12.2723 10.7707 12.2716 10.9874 12.4043 11.1209L13.2481 11.9647C13.3216 12.0382 13.3576 12.1342 13.3576 12.2302C13.3576 12.3262 13.3208 12.4222 13.2481 12.4957C13.1018 12.6419 12.8641 12.6419 12.7178 12.4957L11.5366 11.3144C11.4038 11.1817 11.1871 11.1824 11.0521 11.3159C10.9178 11.4502 10.9171 11.6669 11.0498 11.8004L11.8936 12.6442C11.9671 12.7177 12.0031 12.8137 12.0031 12.9097C12.0031 13.0057 11.9663 13.1017 11.8936 13.1752C11.7473 13.3214 11.5096 13.3214 11.3633 13.1752L8.49456 10.3064C8.36181 10.1737 8.14431 10.1759 8.01006 10.3087C7.87581 10.4429 7.87506 10.6597 8.00781 10.7932L11.8891 14.6744C12.0106 14.7959 12.0338 14.9834 11.9461 15.1304C11.8583 15.2774 11.6813 15.3472 11.5178 15.2992C11.5036 15.2954 10.1596 14.9092 9.52131 15.5474C9.23106 15.8377 9.18831 16.0162 9.19581 16.0567C9.22731 16.0784 9.23406 16.0859 9.47556 16.0769C9.54606 16.0717 9.62331 16.0679 9.70956 16.0679Z"
                                                    fill="#192636" />
                                                <path
                                                    d="M1.125 15.543C0.87 15.543 0.624 15.4575 0.42225 15.2955C0.15375 15.0803 0 14.7593 0 14.415V2.33252C0 1.91177 0.243 1.51802 0.6195 1.32977C4.20225 -0.474732 6.87675 -0.464982 9 1.36877C11.124 -0.464982 13.7977 -0.473982 17.3812 1.33052C17.757 1.51802 18 1.91177 18 2.33252V9.37502C18 9.58202 17.832 9.75002 17.625 9.75002C17.418 9.75002 17.25 9.58202 17.25 9.37502V2.33252C17.25 2.19302 17.1698 2.06327 17.0452 2.00102C13.6357 0.283518 11.1622 0.329268 9.2595 2.14652C9.11475 2.28527 8.88675 2.28527 8.742 2.14652C6.83775 0.329268 4.36425 0.283518 0.95625 2.00027C0.83025 2.06252 0.75 2.19302 0.75 2.33252V14.415C0.75 14.5305 0.80175 14.6378 0.891 14.7105C0.9435 14.7525 1.05525 14.8178 1.209 14.784C3.453 14.2538 5.33175 14.1173 6.9495 14.367C7.15425 14.3985 7.2945 14.5898 7.263 14.7945C7.2315 14.9993 7.03875 15.1388 6.8355 15.108C5.316 14.8748 3.53025 15.0075 1.37625 15.5153C1.29225 15.5333 1.20825 15.543 1.125 15.543Z"
                                                    fill="#192636" />
                                                <path
                                                    d="M9 8.25C8.793 8.25 8.625 8.082 8.625 7.875V1.875C8.625 1.668 8.793 1.5 9 1.5C9.207 1.5 9.375 1.668 9.375 1.875V7.875C9.375 8.082 9.207 8.25 9 8.25Z"
                                                    fill="#192636" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_41_3839">
                                                    <rect width="18" height="18" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        <p class="product-faq-item-get__text">
                                            Guided breathing exercises and audioguides
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="product-faq__item product-faq-item" @click="showFaqItem">
                            <div class="product-faq-item__top">
                                <p class="product-faq-item__top-text">
                                    How to use
                                </p>
                            </div>
                            <ul class="product-faq-item__list product-list">
                                <li class="product-list__item">
                                    <div class="product-list__icon">

                                        <svg width="19" height="18" viewBox="0 0 19 18" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_41_2189)">
                                                <path
                                                    d="M13.6 9.00006C13.6 11.4612 13.2817 13.6469 12.5919 15.2018C11.9073 16.7452 10.8959 17.6001 9.5 17.6001C8.68009 17.6001 8.03673 17.3726 7.52238 16.976C7.00265 16.5753 6.58896 15.9816 6.26952 15.2109C5.62618 13.6586 5.4 11.475 5.4 9.00006C5.4 6.5251 5.62618 4.34155 6.26952 2.78925C6.58896 2.01848 7.00265 1.42485 7.52238 1.02409C8.03673 0.627482 8.68009 0.400061 9.5 0.400061C10.8514 0.400061 11.8644 1.25206 12.5612 2.80027C13.2613 4.35589 13.6 6.54186 13.6 9.00006Z"
                                                    stroke="#192636" stroke-width="0.8" />
                                                <path
                                                    d="M10.8443 5.27194C10.8443 6.09347 10.8406 6.93512 10.6408 7.57307C10.5433 7.88425 10.4086 8.11277 10.2343 8.26325C10.0672 8.40746 9.83124 8.50831 9.46971 8.50831C9.10817 8.50831 8.87222 8.40746 8.70516 8.26326C8.53083 8.11279 8.39619 7.88427 8.29876 7.57309C8.099 6.93513 8.09531 6.09349 8.09531 5.27194C8.09531 4.51399 8.2466 3.86146 8.50297 3.41364C8.75408 2.97501 9.082 2.76285 9.46971 2.76285C9.85743 2.76285 10.1854 2.97502 10.4365 3.41366C10.6929 3.86149 10.8443 4.514 10.8443 5.27194Z"
                                                    stroke="#192636" stroke-width="0.8" />
                                                <path d="M3 6.00006C2.24538 7.16673 1.1889 10.6001 3 15.0001"
                                                    stroke="#192636" stroke-width="0.8" stroke-linecap="round" />
                                                <path d="M16 6.00006C16.7546 7.16673 17.8111 10.6001 16 15.0001"
                                                    stroke="#192636" stroke-width="0.8" stroke-linecap="round" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_41_2189">
                                                    <rect width="19" height="18" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </div>
                                    <div class="product-list__box">
                                        <h3 class="product-list__box-title">
                                            Step 1
                                        </h3>
                                        <p class="product-list__box-text">
                                            Place thumb on the sensor. Breathe in and feel the moonbird expand in your hand.
                                            Moonbird contracts and becomes smaller. Breathe out. Feel the stress and anxiety
                                            fade away with each breath.
                                        </p>
                                    </div>
                                </li>
                                <li class="product-list__item">
                                    <div class="product-list__icon">

                                        <svg width="17" height="18" viewBox="0 0 17 18" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_41_2208)">
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                    d="M3 2.12804C3 0.95279 3.95273 6.10352e-05 5.12798 6.10352e-05H11.9375C13.1127 6.10352e-05 14.0655 0.95279 14.0655 2.12804V15.7471C14.0655 16.9223 13.1127 17.8751 11.9375 17.8751H5.12798C3.95273 17.8751 3 16.9223 3 15.7471V2.12804ZM5.12798 0.851251C4.42282 0.851251 3.85119 1.42289 3.85119 2.12804V15.7471C3.85119 16.4522 4.42282 17.0239 5.12798 17.0239H11.9375C12.6426 17.0239 13.2143 16.4522 13.2143 15.7471V2.12804C13.2143 1.42289 12.6426 0.851251 11.9375 0.851251H5.12798Z"
                                                    fill="#192636" />
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                    d="M5.55347 0.425656C5.55347 0.190609 5.74401 6.10352e-05 5.97906 6.10352e-05H11.0862C11.3212 6.10352e-05 11.5118 0.190609 11.5118 0.425656V1.27685C11.5118 1.982 10.9401 2.55363 10.235 2.55363H6.83025C6.1251 2.55363 5.55347 1.982 5.55347 1.27685V0.425656ZM6.40466 0.851252V1.27685C6.40466 1.51189 6.5952 1.70244 6.83025 1.70244H10.235C10.47 1.70244 10.6606 1.51189 10.6606 1.27685V0.851252H6.40466Z"
                                                    fill="#192636" />
                                                <mask id="mask0_41_2208" style="mask-type:luminance"
                                                    maskUnits="userSpaceOnUse" x="3" y="4" width="11" height="11">
                                                    <path d="M3 4.00006H14V15.0001H3V4.00006Z" fill="white" />
                                                </mask>
                                                <g mask="url(#mask0_41_2208)">
                                                    <path
                                                        d="M10.7624 9.7209C10.1254 9.08037 9.31503 8.74809 8.49254 8.74811C7.67008 8.74813 6.85952 9.08041 6.22266 9.7209"
                                                        stroke="#192636" stroke-width="0.8" stroke-miterlimit="10"
                                                        stroke-linecap="round" stroke-linejoin="round" />
                                                    <path
                                                        d="M9.65808 10.8814C9.34553 10.5692 8.89887 10.3809 8.49986 10.3809H8.47973C8.08074 10.3809 7.62847 10.5692 7.31592 10.8814"
                                                        stroke="#192636" stroke-width="0.8" stroke-miterlimit="10"
                                                        stroke-linecap="round" stroke-linejoin="round" />
                                                    <path
                                                        d="M8.5 11.627C8.79663 11.627 9.03711 11.8675 9.03711 12.1641C9.03711 12.4608 8.79663 12.7012 8.5 12.7012C8.20337 12.7012 7.96289 12.4608 7.96289 12.1641C7.96289 11.8675 8.20337 11.627 8.5 11.627Z"
                                                        fill="#192636" />
                                                    <path
                                                        d="M11.7819 8.56914C10.869 7.58973 9.68445 7.13675 8.49988 7.13677C7.31537 7.1368 6.13082 7.58975 5.21802 8.56914"
                                                        stroke="#192636" stroke-width="0.8" stroke-miterlimit="10"
                                                        stroke-linecap="round" stroke-linejoin="round" />
                                                </g>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_41_2208">
                                                    <rect width="17" height="18" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </div>
                                    <div class="product-list__box">
                                        <h3 class="product-list__box-title">
                                            Step 2
                                        </h3>
                                        <p class="product-list__box-text">
                                            Open an app on your phone. Allow moonbird to guide your breathing during your
                                            exercise. Feel calmer and happier, one breath at a time.
                                        </p>
                                    </div>
                                </li>
                                <li class="product-list__item">
                                    <div class="product-list__icon">
                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_41_2233)">
                                                <mask id="mask0_41_2233" style="mask-type:luminance"
                                                    maskUnits="userSpaceOnUse" x="0" y="0" width="18" height="18">
                                                    <path d="M0 6.29425e-05H18V18.0001H0V6.29425e-05Z" fill="white" />
                                                </mask>
                                                <g mask="url(#mask0_41_2233)">
                                                    <path
                                                        d="M3.96149 12.5233L2.93764 9.88048C2.89848 9.77948 2.87566 9.6757 2.8688 9.5729L2.8687 9.57111M2.8687 9.57111C2.86388 9.50445 2.86599 9.43783 2.87425 9.37258M2.8687 9.57111L2.87425 9.37258M2.87425 9.37258V9.3711M2.87425 9.3711C2.88698 9.26802 2.91496 9.1679 2.95694 9.07364C3.06948 8.82003 3.28147 8.61025 3.56556 8.50795C4.10985 8.31202 4.71032 8.60188 4.91876 9.14012L5.4897 10.6134C5.64572 11.0162 5.97046 11.3322 6.37954 11.4744C7.30517 11.797 8.04226 12.5866 8.2836 13.598L8.88928 15.9449L8.99998 16.3739L4.71894 17.4725C4.50406 16.6725 4.04489 15.9582 3.40462 15.4295L1.90957 14.1953C0.920444 13.1513 0.42446 11.7372 0.545186 10.3064L1.00011 4.58032C1.03424 4.17807 1.29746 3.85642 1.64484 3.72297C1.82199 3.65463 2.02003 3.63504 2.22154 3.67804C2.69622 3.7795 3.03144 4.20239 3.02128 4.68639L2.87425 9.3711Z"
                                                        stroke="#192636" stroke-width="0.8" stroke-miterlimit="10"
                                                        stroke-linecap="round" stroke-linejoin="round" />
                                                    <path
                                                        d="M15.1313 9.57127L15.1312 9.57307C15.1243 9.67586 15.1015 9.77964 15.0623 9.88065L14.0385 12.5235M15.1313 9.57127L15.1257 9.37275M15.1313 9.57127C15.1361 9.50462 15.134 9.438 15.1257 9.37275M15.1257 9.37275V9.37127M15.1257 9.37127L14.9787 4.68656C14.9685 4.20256 15.3038 3.77967 15.7784 3.67821C15.98 3.63521 16.178 3.65479 16.3551 3.72314C16.7025 3.85655 16.9657 4.17823 16.9999 4.58049L17.4548 10.3066C17.5755 11.7374 17.0795 13.1515 16.0904 14.1954L14.5954 15.4297C13.9551 15.9584 13.4959 16.6726 13.281 17.4727L9 16.374L9.11071 15.9451L9.71638 13.5982C9.95773 12.5867 10.6948 11.7972 11.6204 11.4746C12.0295 11.3324 12.3543 11.0164 12.5103 10.6135L13.0812 9.14026C13.2897 8.60205 13.8901 8.31219 14.4344 8.50811C14.7185 8.61042 14.9305 8.82019 15.043 9.07381C15.085 9.16803 15.113 9.26819 15.1257 9.37127Z"
                                                        stroke="#192636" stroke-width="0.8" stroke-miterlimit="10"
                                                        stroke-linecap="round" stroke-linejoin="round" />
                                                    <path
                                                        d="M11.8089 0.966205C12.3938 1.5512 12.3937 2.49954 11.8086 3.08444L11.1182 3.77473L9.00006 5.89286L6.88193 3.77473L6.19153 3.08444C5.6065 2.49954 5.60639 1.5512 6.19129 0.966205C6.77622 0.38117 7.72463 0.381134 8.30963 0.966099L9.00006 1.65657L9.69053 0.966099C10.2755 0.381134 11.2239 0.38117 11.8089 0.966205Z"
                                                        stroke="#192636" stroke-width="0.8" stroke-miterlimit="10"
                                                        stroke-linecap="round" stroke-linejoin="round" />
                                                </g>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_41_2233">
                                                    <rect width="18" height="18" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </div>
                                    <div class="product-list__box">
                                        <h3 class="product-list__box-title">
                                            Step 3
                                        </h3>
                                        <p class="product-list__box-text">
                                            Feel instant relief. You are refreshed, calmed and relaxed.
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="product-faq__item product-faq-item" @click="showFaqItem">
                            <div class="product-faq-item__top">
                                <p class="product-faq-item__top-text">
                                    When &amp; where to use
                                </p>
                            </div>
                            <ul class="product-faq-item__list product-list">
                                <li class="product-list__item">
                                    <div class="product-list__icon">

                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9 3.02353V2.3204" stroke="#192636" stroke-width="0.8"
                                                stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M6.01172 3.82422L5.66016 3.21531" stroke="#192636" stroke-width="0.8"
                                                stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M3.82427 6.01181L3.21533 5.66025" stroke="#192636" stroke-width="0.8"
                                                stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M3.02344 9.00009H2.32031" stroke="#192636" stroke-width="0.8"
                                                stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M14.9766 9.00009H15.6797" stroke="#192636" stroke-width="0.8"
                                                stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M14.1758 6.01181L14.7847 5.66025" stroke="#192636" stroke-width="0.8"
                                                stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M11.9883 3.82422L12.3398 3.21531" stroke="#192636" stroke-width="0.8"
                                                stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                            <mask id="mask0_41_3069" style="mask-type:luminance" maskUnits="userSpaceOnUse"
                                                x="0" y="0" width="18" height="18">
                                                <path d="M0 9.34601e-05H18V18.0001H0V9.34601e-05Z" fill="white" />
                                            </mask>
                                            <g mask="url(#mask0_41_3069)">
                                                <path
                                                    d="M12.0674 11.3486C12.567 10.6971 12.8672 9.88454 12.8672 9.00008C12.8672 6.8643 11.1358 5.13289 9 5.13289C6.86422 5.13289 5.13281 6.8643 5.13281 9.00008C5.13281 9.45722 5.21603 9.89393 5.36193 10.3009"
                                                    stroke="#192636" stroke-width="0.8" stroke-miterlimit="10"
                                                    stroke-linecap="round" stroke-linejoin="round" />
                                                <path
                                                    d="M9.03516 15.6798C9.03516 13.7948 10.8154 12.2564 13.0512 12.1683C11.7627 10.8801 9.78128 10.0548 7.55859 10.0548C3.67534 10.0548 0.527344 12.5732 0.527344 15.6798H9.03516Z"
                                                    stroke="#192636" stroke-width="0.8" stroke-miterlimit="10"
                                                    stroke-linecap="round" stroke-linejoin="round" />
                                                <path
                                                    d="M9.03516 15.6798C9.03516 13.7381 10.924 12.1642 13.2539 12.1642C15.5839 12.1642 17.4727 13.7381 17.4727 15.6798H9.03516Z"
                                                    stroke="#192636" stroke-width="0.8" stroke-miterlimit="10"
                                                    stroke-linecap="round" stroke-linejoin="round" />
                                            </g>
                                        </svg>
                                    </div>
                                    <div class="product-list__box">
                                        <h3 class="product-list__box-title">
                                            In the morning
                                        </h3>
                                        <p class="product-list__box-text">
                                            Start your day with a calm and focused mind, setting clear intentions for what
                                            you wish to achieve.
                                        </p>
                                    </div>
                                </li>
                                <li class="product-list__item">
                                    <div class="product-list__icon">

                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_41_3102)">
                                                <mask id="mask0_41_3102" style="mask-type:luminance"
                                                    maskUnits="userSpaceOnUse" x="0" y="0" width="18" height="18">
                                                    <path d="M0 9.34601e-05H18V18.0001H0V9.34601e-05Z" fill="white" />
                                                </mask>
                                                <g mask="url(#mask0_41_3102)">
                                                    <path
                                                        d="M3.62211 3.62221L3.1332 3.13333M14.3779 14.378L14.8668 14.8669M3.62211 14.378L3.1332 14.8669M14.8668 3.13333L14.3779 3.62221M1.39451 9.0001H0.703125M17.2969 9.0001H16.6055M9 16.6056V17.297M9 0.703226V1.39464M13.8398 9.0001C13.8398 11.6731 11.673 13.84 9 13.84C6.327 13.84 4.16014 11.6731 4.16014 9.0001C4.16014 6.3271 6.327 4.16024 9 4.16024C11.673 4.16024 13.8398 6.3271 13.8398 9.0001Z"
                                                        stroke="#192636" stroke-miterlimit="10" stroke-linecap="round"
                                                        stroke-linejoin="round" />
                                                </g>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_41_3102">
                                                    <rect width="18" height="18" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </div>
                                    <div class="product-list__box">
                                        <h3 class="product-list__box-title">
                                            In the afternoon
                                        </h3>
                                        <p class="product-list__box-text">
                                            Recharge yourself when you may be feeling drained or distracted. Take a few
                                            moments to pause, breathe deeply, and refocus your energy and attention on your
                                            intentions and priorities.
                                        </p>
                                    </div>
                                </li>
                                <li class="product-list__item">
                                    <div class="product-list__icon">

                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_41_3117)">
                                                <mask id="mask0_41_3117" style="mask-type:luminance"
                                                    maskUnits="userSpaceOnUse" x="0" y="0" width="18" height="18">
                                                    <path d="M0 9.34601e-05H18V18.0001H0V9.34601e-05Z" fill="white" />
                                                </mask>
                                                <g mask="url(#mask0_41_3117)">
                                                    <path
                                                        d="M12.7266 13.2188C8.94041 13.2188 5.83594 10.1495 5.83594 6.36337C5.83594 3.91861 7.15489 1.74339 9.081 0.529758C9.06553 0.529687 9.05059 0.527437 9.03516 0.527437C4.37527 0.527437 0.527344 4.3402 0.527344 9.00009C0.527344 13.66 4.37527 17.4727 9.03516 17.4727C12.7491 17.4727 15.8957 15.0348 17.0229 11.7014C15.8472 12.649 14.3542 13.2188 12.7266 13.2188Z"
                                                        stroke="#192636" stroke-width="0.8" stroke-miterlimit="10"
                                                        stroke-linecap="round" stroke-linejoin="round" />
                                                    <path d="M12.1992 1.58212C12.1992 2.7471 11.2548 3.6915 10.0898 3.6915"
                                                        stroke="#192636" stroke-width="0.8" stroke-miterlimit="10"
                                                        stroke-linecap="round" stroke-linejoin="round" />
                                                    <path d="M12.1992 1.58212C12.1992 2.7471 13.1436 3.6915 14.3086 3.6915"
                                                        stroke="#192636" stroke-width="0.8" stroke-miterlimit="10"
                                                        stroke-linecap="round" stroke-linejoin="round" />
                                                    <path d="M12.1992 5.83603C12.1992 4.67106 11.2548 3.6915 10.0898 3.6915"
                                                        stroke="#192636" stroke-width="0.8" stroke-miterlimit="10"
                                                        stroke-linecap="round" stroke-linejoin="round" />
                                                    <path d="M12.1992 5.83603C12.1992 4.67106 13.1436 3.6915 14.3086 3.6915"
                                                        stroke="#192636" stroke-width="0.8" stroke-miterlimit="10"
                                                        stroke-linecap="round" stroke-linejoin="round" />
                                                </g>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_41_3117">
                                                    <rect width="18" height="18" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </div>
                                    <div class="product-list__box">
                                        <h3 class="product-list__box-title">
                                            At night
                                        </h3>
                                        <p class="product-list__box-text">
                                            Incorporate this meditative practice into your evening ritual to honor your
                                            mind's need for deep rest and rejuvenation, supporting your well-being and
                                            promoting a peaceful night's sleep
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="product-faq__item product-faq-item" @click="showFaqItem">
                            <div class="product-faq-item__top">
                                <p class="product-faq-item__top-text">
                                    Free Shipping
                                </p>
                            </div>
                        </div>
                        <div class="product-faq__item product-faq-item" @click="showFaqItem">
                            <div class="product-faq-item__top">
                                <p class="product-faq-item__top-text">
                                    Guarantee
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="main__moonbird-advantages moonbird-advantages">
                <h2 class="moonbird-advantages__title">
                    <span>
                        Moonbird
                    </span>
                    is recommended by therapists and doctors as a supportive treatment tool for stress, anxiety and sleeping
                    problems
                </h2>
                <div class="moonbird-advantages__inner">
                    <table class="moonbird-advantages__table moonbird-advantages-table">
                        <tr>
                            <th>
                            </th>
                            <th>
                                Medication
                            </th>
                            <th>
                                Therapy
                            </th>
                            <th>
                                Moonbird
                            </th>
                        </tr>
                        <tr>
                            <td>
                                <p>
                                    <span>

                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M8.37817 0.156212C8.27788 0.0561915 8.14185 0 8.00002 0C7.85819 0 7.72217 0.0561899 7.62187 0.15621C7.5755 0.202457 7.48099 0.282778 7.31839 0.419195L7.30093 0.433836C7.15064 0.559909 6.96216 0.718027 6.75167 0.903669C6.314 1.28967 5.77525 1.79974 5.25123 2.42061C4.20896 3.6555 3.18701 5.37429 3.18701 7.46667C3.18701 9.55904 4.20896 11.2778 5.25123 12.5127C5.77525 13.1336 6.314 13.6437 6.75167 14.0297C6.96214 14.2153 7.15059 14.3734 7.30088 14.4995L7.31839 14.5141C7.37543 14.562 7.4241 14.6029 7.46524 14.638V15.4667C7.46524 15.7612 7.70467 16 8.00002 16C8.29537 16 8.5348 15.7612 8.5348 15.4667V14.638C8.57592 14.6029 8.62459 14.562 8.68165 14.5141L8.69914 14.4995C8.84946 14.3734 9.03792 14.2153 9.24835 14.0297C9.68607 13.6437 10.2248 13.1336 10.7488 12.5127C11.7911 11.2778 12.813 9.55904 12.813 7.46667C12.813 5.37429 11.7911 3.6555 10.7488 2.42061C10.2248 1.79975 9.68607 1.28968 9.24835 0.903675C9.03787 0.718027 8.84941 0.559925 8.69914 0.433847L8.68165 0.419197C8.51906 0.28278 8.42454 0.202459 8.37817 0.156212ZM8.5348 13.235L8.53983 13.2306C8.95444 12.865 9.45184 12.393 9.93057 11.8258C10.8937 10.6847 11.7435 9.20347 11.7435 7.46667C11.7435 5.72987 10.8937 4.24866 9.93057 3.10751C9.45184 2.54036 8.95444 2.06839 8.53983 1.70271C8.33945 1.52598 8.15976 1.37523 8.00891 1.24868L8.00002 1.24123L7.99115 1.24867C7.8403 1.37522 7.6606 1.52597 7.4602 1.70271C7.04557 2.06839 6.54819 2.54035 6.0695 3.10751C5.10635 4.24866 4.25657 5.72987 4.25657 7.46667C4.25657 9.20347 5.10635 10.6847 6.0695 11.8258C6.54819 12.393 7.04557 12.865 7.4602 13.2306L7.46524 13.235V11.4209L6.01754 9.97712C5.80869 9.76885 5.80869 9.43115 6.01754 9.22288C6.22638 9.01461 6.56498 9.01461 6.77383 9.22288L7.46524 9.91243V8.75424L6.01754 7.31045C5.80869 7.10219 5.80869 6.76448 6.01754 6.55621C6.22638 6.34795 6.56498 6.34795 6.77383 6.55621L7.46524 7.24576V4.26667C7.46524 3.97212 7.70467 3.73333 8.00002 3.73333C8.29537 3.73333 8.5348 3.97212 8.5348 4.26667V6.17909L9.22621 5.48955C9.43505 5.28126 9.77367 5.28126 9.9825 5.48955C10.1913 5.69781 10.1913 6.03552 9.9825 6.24379L8.5348 7.68757V8.84576L9.22621 8.15621C9.43505 7.94795 9.77367 7.94795 9.9825 8.15621C10.1913 8.36448 10.1913 8.70219 9.9825 8.91045L8.5348 10.3542V11.1995V11.2005V13.235Z"
                                                fill="#192636" />
                                        </svg>
                                    </span>

                                    Natural
                                </p>
                            </td>
                            <td>
                                <svg width="25" height="25" viewBox="0 0 25 25" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_126_1281)">
                                        <path d="M5.48706 19.5079L19.5109 5.53198" stroke="#C3C3C3" stroke-width="2.24299"
                                            stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M19.8423 19.5079L5.81843 5.53198" stroke="#C3C3C3" stroke-width="2.24299"
                                            stroke-linecap="round" stroke-linejoin="round" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_126_1281">
                                            <rect width="24" height="24" fill="white" transform="translate(0.580078 0.5)" />
                                        </clipPath>
                                    </defs>
                                </svg>

                            </td>
                            <td>
                                <svg width="25" height="24" viewBox="0 0 25 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_126_1249)">
                                        <path
                                            d="M24.0801 12C24.0801 18.3513 18.9314 23.5 12.5801 23.5C6.2288 23.5 1.08008 18.3513 1.08008 12C1.08008 5.64873 6.2288 0.5 12.5801 0.5C18.9314 0.5 24.0801 5.64873 24.0801 12Z"
                                            stroke="#192636" />
                                        <path d="M7.53345 12.1825L11.6982 15.9252L18.2998 8.29907" stroke="#192636"
                                            stroke-width="1.42574" stroke-linecap="round" stroke-linejoin="round" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_126_1249">
                                            <rect width="24" height="24" fill="white" transform="translate(0.580078)" />
                                        </clipPath>
                                    </defs>
                                </svg>

                            </td>
                            <td>
                                <svg width="25" height="24" viewBox="0 0 25 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_126_1163)">
                                        <path
                                            d="M12.4797 24C19.1072 24 24.4797 18.6274 24.4797 12C24.4797 5.37258 19.1072 0 12.4797 0C5.85232 0 0.479736 5.37258 0.479736 12C0.479736 18.6274 5.85232 24 12.4797 24Z"
                                            fill="#004FFF" />
                                        <path d="M7.43311 12.1825L11.5978 15.9252L18.1995 8.29907" stroke="white"
                                            stroke-width="1.42574" stroke-linecap="round" stroke-linejoin="round" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_126_1163">
                                            <rect width="24" height="24" fill="white" transform="translate(0.479736)" />
                                        </clipPath>
                                    </defs>
                                </svg>

                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>
                                    <span>

                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M8 0C3.6 0 0 3.6 0 8C0 12.4 3.6 16 8 16C12.4 16 16 12.4 16 8C16 3.6 12.4 0 8 0ZM8 1.6C9.44 1.6 10.8 2.08 11.92 2.96L2.96 11.92C2.08 10.8 1.6 9.44 1.6 8C1.6 4.48 4.48 1.6 8 1.6ZM8 14.4C6.56 14.4 5.2 13.92 4.08 13.04L13.04 4.08C13.92 5.2 14.4 6.56 14.4 8C14.4 11.52 11.52 14.4 8 14.4Z"
                                                fill="#192636" />
                                        </svg>
                                    </span>

                                    No addiction
                                </p>
                            </td>
                            <td>
                                <svg width="25" height="25" viewBox="0 0 25 25" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_126_1281)">
                                        <path d="M5.48706 19.5079L19.5109 5.53198" stroke="#C3C3C3" stroke-width="2.24299"
                                            stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M19.8423 19.5079L5.81843 5.53198" stroke="#C3C3C3" stroke-width="2.24299"
                                            stroke-linecap="round" stroke-linejoin="round" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_126_1281">
                                            <rect width="24" height="24" fill="white" transform="translate(0.580078 0.5)" />
                                        </clipPath>
                                    </defs>
                                </svg>

                            </td>
                            <td>
                                <svg width="25" height="24" viewBox="0 0 25 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_126_1249)">
                                        <path
                                            d="M24.0801 12C24.0801 18.3513 18.9314 23.5 12.5801 23.5C6.2288 23.5 1.08008 18.3513 1.08008 12C1.08008 5.64873 6.2288 0.5 12.5801 0.5C18.9314 0.5 24.0801 5.64873 24.0801 12Z"
                                            stroke="#192636" />
                                        <path d="M7.53345 12.1825L11.6982 15.9252L18.2998 8.29907" stroke="#192636"
                                            stroke-width="1.42574" stroke-linecap="round" stroke-linejoin="round" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_126_1249">
                                            <rect width="24" height="24" fill="white" transform="translate(0.580078)" />
                                        </clipPath>
                                    </defs>
                                </svg>

                            </td>
                            <td>
                                <svg width="25" height="24" viewBox="0 0 25 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_126_1163)">
                                        <path
                                            d="M12.4797 24C19.1072 24 24.4797 18.6274 24.4797 12C24.4797 5.37258 19.1072 0 12.4797 0C5.85232 0 0.479736 5.37258 0.479736 12C0.479736 18.6274 5.85232 24 12.4797 24Z"
                                            fill="#004FFF" />
                                        <path d="M7.43311 12.1825L11.5978 15.9252L18.1995 8.29907" stroke="white"
                                            stroke-width="1.42574" stroke-linecap="round" stroke-linejoin="round" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_126_1163">
                                            <rect width="24" height="24" fill="white" transform="translate(0.479736)" />
                                        </clipPath>
                                    </defs>
                                </svg>

                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>
                                    <span>

                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M8.71533 11.3683C8.71533 12.0573 9.2759 12.6179 9.96493 12.6179H11.4332C12.1222 12.6179 12.6828 12.0573 12.6828 11.3683V9.90002C12.6828 9.21099 12.1222 8.65042 11.4332 8.65042H9.96493C9.2759 8.65042 8.71533 9.21099 8.71533 9.90002V11.3683ZM9.96493 9.90002H11.4332L11.434 11.3683C11.434 11.3683 11.4338 11.3683 11.4332 11.3683H9.96493V9.90002Z"
                                                fill="#192636" />
                                            <path
                                                d="M12.0652 7.15447C12.4064 7.15447 12.683 6.87784 12.683 6.53659C12.683 6.19534 12.4064 5.9187 12.0652 5.9187C11.7239 5.9187 11.4473 6.19534 11.4473 6.53659C11.4473 6.87784 11.7239 7.15447 12.0652 7.15447Z"
                                                fill="#192636" />
                                            <path
                                                d="M9.33322 7.15447C9.67447 7.15447 9.9511 6.87784 9.9511 6.53659C9.9511 6.19534 9.67447 5.9187 9.33322 5.9187C8.99197 5.9187 8.71533 6.19534 8.71533 6.53659C8.71533 6.87784 8.99197 7.15447 9.33322 7.15447Z"
                                                fill="#192636" />
                                            <path
                                                d="M15.375 11C15.7202 11 16 10.7202 16 10.375V3.75C16 2.3715 14.8785 1.25 13.5 1.25H12.6875V0.625C12.6875 0.279813 12.4077 0 12.0625 0C11.7173 0 11.4375 0.279813 11.4375 0.625V1.25H8.59375V0.625C8.59375 0.279813 8.31394 0 7.96875 0C7.62356 0 7.34375 0.279813 7.34375 0.625V1.25H4.53125V0.625C4.53125 0.279813 4.25144 0 3.90625 0C3.56106 0 3.28125 0.279813 3.28125 0.625V1.25H2.5C1.1215 1.25 0 2.3715 0 3.75V13.5C0 14.8785 1.1215 16 2.5 16H13.5C14.8785 16 16 14.8785 16 13.5C16 13.1548 15.7202 12.875 15.375 12.875C15.0298 12.875 14.75 13.1548 14.75 13.5C14.75 14.1892 14.1892 14.75 13.5 14.75H2.5C1.81075 14.75 1.25 14.1892 1.25 13.5V3.75C1.25 3.06075 1.81075 2.5 2.5 2.5H3.28125V3.125C3.28125 3.47019 3.56106 3.75 3.90625 3.75C4.25144 3.75 4.53125 3.47019 4.53125 3.125V2.5H7.34375V3.125C7.34375 3.47019 7.62356 3.75 7.96875 3.75C8.31394 3.75 8.59375 3.47019 8.59375 3.125V2.5H11.4375V3.125C11.4375 3.47019 11.7173 3.75 12.0625 3.75C12.4077 3.75 12.6875 3.47019 12.6875 3.125V2.5H13.5C14.1892 2.5 14.75 3.06075 14.75 3.75V10.375C14.75 10.7202 15.0298 11 15.375 11Z"
                                                fill="#192636" />
                                            <path
                                                d="M3.93502 12.6179C4.27627 12.6179 4.55291 12.3412 4.55291 12C4.55291 11.6587 4.27627 11.3821 3.93502 11.3821C3.59378 11.3821 3.31714 11.6587 3.31714 12C3.31714 12.3412 3.59378 12.6179 3.93502 12.6179Z"
                                                fill="#192636" />
                                            <path
                                                d="M3.93502 7.15447C4.27627 7.15447 4.55291 6.87784 4.55291 6.53659C4.55291 6.19534 4.27627 5.9187 3.93502 5.9187C3.59378 5.9187 3.31714 6.19534 3.31714 6.53659C3.31714 6.87784 3.59378 7.15447 3.93502 7.15447Z"
                                                fill="#192636" />
                                            <path
                                                d="M3.93502 9.88619C4.27627 9.88619 4.55291 9.60956 4.55291 9.26831C4.55291 8.92706 4.27627 8.65042 3.93502 8.65042C3.59378 8.65042 3.31714 8.92706 3.31714 9.26831C3.31714 9.60956 3.59378 9.88619 3.93502 9.88619Z"
                                                fill="#192636" />
                                            <path
                                                d="M6.60153 9.88619C6.94278 9.88619 7.21941 9.60956 7.21941 9.26831C7.21941 8.92706 6.94278 8.65042 6.60153 8.65042C6.26028 8.65042 5.98364 8.92706 5.98364 9.26831C5.98364 9.60956 6.26028 9.88619 6.60153 9.88619Z"
                                                fill="#192636" />
                                            <path
                                                d="M6.60153 7.15447C6.94278 7.15447 7.21941 6.87784 7.21941 6.53659C7.21941 6.19534 6.94278 5.9187 6.60153 5.9187C6.26028 5.9187 5.98364 6.19534 5.98364 6.53659C5.98364 6.87784 6.26028 7.15447 6.60153 7.15447Z"
                                                fill="#192636" />
                                            <path
                                                d="M6.60153 12.6179C6.94278 12.6179 7.21941 12.3412 7.21941 12C7.21941 11.6587 6.94278 11.3821 6.60153 11.3821C6.26028 11.3821 5.98364 11.6587 5.98364 12C5.98364 12.3412 6.26028 12.6179 6.60153 12.6179Z"
                                                fill="#192636" />
                                        </svg>
                                    </span>

                                    Long-term effect
                                </p>
                            </td>
                            <td>
                                <svg width="25" height="25" viewBox="0 0 25 25" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_126_1281)">
                                        <path d="M5.48706 19.5079L19.5109 5.53198" stroke="#C3C3C3" stroke-width="2.24299"
                                            stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M19.8423 19.5079L5.81843 5.53198" stroke="#C3C3C3" stroke-width="2.24299"
                                            stroke-linecap="round" stroke-linejoin="round" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_126_1281">
                                            <rect width="24" height="24" fill="white" transform="translate(0.580078 0.5)" />
                                        </clipPath>
                                    </defs>
                                </svg>

                            </td>
                            <td>
                                <svg width="25" height="24" viewBox="0 0 25 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_126_1249)">
                                        <path
                                            d="M24.0801 12C24.0801 18.3513 18.9314 23.5 12.5801 23.5C6.2288 23.5 1.08008 18.3513 1.08008 12C1.08008 5.64873 6.2288 0.5 12.5801 0.5C18.9314 0.5 24.0801 5.64873 24.0801 12Z"
                                            stroke="#192636" />
                                        <path d="M7.53345 12.1825L11.6982 15.9252L18.2998 8.29907" stroke="#192636"
                                            stroke-width="1.42574" stroke-linecap="round" stroke-linejoin="round" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_126_1249">
                                            <rect width="24" height="24" fill="white" transform="translate(0.580078)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </td>
                            <td>
                                <svg width="25" height="24" viewBox="0 0 25 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_126_1163)">
                                        <path
                                            d="M12.4797 24C19.1072 24 24.4797 18.6274 24.4797 12C24.4797 5.37258 19.1072 0 12.4797 0C5.85232 0 0.479736 5.37258 0.479736 12C0.479736 18.6274 5.85232 24 12.4797 24Z"
                                            fill="#004FFF" />
                                        <path d="M7.43311 12.1825L11.5978 15.9252L18.1995 8.29907" stroke="white"
                                            stroke-width="1.42574" stroke-linecap="round" stroke-linejoin="round" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_126_1163">
                                            <rect width="24" height="24" fill="white" transform="translate(0.479736)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>
                                    <span>

                                        <svg width="17" height="17" viewBox="0 0 17 17" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M16.2657 2.85924C15.9533 2.5468 15.4468 2.5468 15.1343 2.85924L5.54983 12.4438L1.8657 8.75971C1.5533 8.44727 1.0468 8.4473 0.734328 8.75971C0.421891 9.07211 0.421891 9.57861 0.734328 9.89105L4.98414 14.1408C5.29645 14.4532 5.80333 14.453 6.11552 14.1408L16.2657 3.99061C16.5781 3.67821 16.5781 3.17167 16.2657 2.85924Z"
                                                fill="#192636" />
                                        </svg>
                                    </span>

                                    Always available
                                </p>
                            </td>
                            <td>
                                <svg width="25" height="24" viewBox="0 0 25 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_126_1249)">
                                        <path
                                            d="M24.0801 12C24.0801 18.3513 18.9314 23.5 12.5801 23.5C6.2288 23.5 1.08008 18.3513 1.08008 12C1.08008 5.64873 6.2288 0.5 12.5801 0.5C18.9314 0.5 24.0801 5.64873 24.0801 12Z"
                                            stroke="#192636" />
                                        <path d="M7.53345 12.1825L11.6982 15.9252L18.2998 8.29907" stroke="#192636"
                                            stroke-width="1.42574" stroke-linecap="round" stroke-linejoin="round" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_126_1249">
                                            <rect width="24" height="24" fill="white" transform="translate(0.580078)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </td>
                            <td>
                                <svg width="25" height="25" viewBox="0 0 25 25" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_126_1281)">
                                        <path d="M5.48706 19.5079L19.5109 5.53198" stroke="#C3C3C3" stroke-width="2.24299"
                                            stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M19.8423 19.5079L5.81843 5.53198" stroke="#C3C3C3" stroke-width="2.24299"
                                            stroke-linecap="round" stroke-linejoin="round" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_126_1281">
                                            <rect width="24" height="24" fill="white" transform="translate(0.580078 0.5)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </td>
                            <td>
                                <svg width="25" height="24" viewBox="0 0 25 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_126_1163)">
                                        <path
                                            d="M12.4797 24C19.1072 24 24.4797 18.6274 24.4797 12C24.4797 5.37258 19.1072 0 12.4797 0C5.85232 0 0.479736 5.37258 0.479736 12C0.479736 18.6274 5.85232 24 12.4797 24Z"
                                            fill="#004FFF" />
                                        <path d="M7.43311 12.1825L11.5978 15.9252L18.1995 8.29907" stroke="white"
                                            stroke-width="1.42574" stroke-linecap="round" stroke-linejoin="round" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_126_1163">
                                            <rect width="24" height="24" fill="white" transform="translate(0.479736)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>
                                    <span>

                                        <svg width="17" height="16" viewBox="0 0 17 16" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M8.5 0C4.0888 0 0.5 3.5888 0.5 8C0.5 12.4112 4.0888 16 8.5 16C12.9112 16 16.5 12.4112 16.5 8C16.5 3.5888 12.9112 0 8.5 0ZM8.5 14.7692C4.76745 14.7692 1.73077 11.7326 1.73077 8C1.73077 4.26745 4.76745 1.23077 8.5 1.23077C12.2326 1.23077 15.2692 4.26745 15.2692 8C15.2692 11.7326 12.2326 14.7692 8.5 14.7692Z"
                                                fill="#192636" />
                                            <path
                                                d="M10.2815 6.10863C10.2815 6.45028 10.557 6.72726 10.8969 6.72726C11.2367 6.72726 11.5122 6.45028 11.5122 6.10863C11.5122 5.42351 11.1598 4.76479 10.5451 4.30139C10.1253 3.98486 9.60874 3.77341 9.05071 3.68346V3.01542C9.05071 2.67377 8.77518 2.39679 8.43532 2.39679C8.09546 2.39679 7.81994 2.67377 7.81994 3.01542V3.68346C7.26186 3.77341 6.74531 3.98486 6.32554 4.30139C5.71089 4.76479 5.3584 5.42351 5.3584 6.10863C5.3584 6.79374 5.71089 7.45242 6.32554 7.91586C6.74535 8.23239 7.26191 8.44384 7.81994 8.53379V10.9839C7.11101 10.8098 6.58917 10.3473 6.58917 9.82042C6.58917 9.47877 6.31364 9.20179 5.97378 9.20179C5.63393 9.20179 5.3584 9.47877 5.3584 9.82042C5.3584 10.5055 5.71089 11.1642 6.32554 11.6277C6.74535 11.9442 7.26191 12.1556 7.81994 12.2456V12.9199C7.81994 13.2615 8.09546 13.5385 8.43532 13.5385C8.77518 13.5385 9.05071 13.2615 9.05071 12.9199V12.2456C9.60878 12.1556 10.1253 11.9442 10.5451 11.6277C11.1598 11.1643 11.5122 10.5055 11.5122 9.82042C11.5122 9.13531 11.1598 8.47659 10.5451 8.01319C10.1253 7.69666 9.60874 7.48521 9.05071 7.39526V4.9451C9.75963 5.11931 10.2815 5.58176 10.2815 6.10863ZM6.58917 6.10863C6.58917 5.58176 7.11101 5.11927 7.81994 4.9451V7.27211C7.11101 7.09799 6.58917 6.6355 6.58917 6.10863ZM10.2815 9.82042C10.2815 10.3473 9.75963 10.8098 9.05071 10.9839V8.65694C9.75963 8.83111 10.2815 9.29355 10.2815 9.82042Z"
                                                fill="#192636" />
                                        </svg>
                                    </span>
                                    One-time purchase
                                </p>
                            </td>
                            <td>
                                <svg width="25" height="25" viewBox="0 0 25 25" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_126_1281)">
                                        <path d="M5.48706 19.5079L19.5109 5.53198" stroke="#C3C3C3" stroke-width="2.24299"
                                            stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M19.8423 19.5079L5.81843 5.53198" stroke="#C3C3C3" stroke-width="2.24299"
                                            stroke-linecap="round" stroke-linejoin="round" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_126_1281">
                                            <rect width="24" height="24" fill="white" transform="translate(0.580078 0.5)" />
                                        </clipPath>
                                    </defs>
                                </svg>

                            </td>
                            <td>
                                <svg width="25" height="25" viewBox="0 0 25 25" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_126_1281)">
                                        <path d="M5.48706 19.5079L19.5109 5.53198" stroke="#C3C3C3" stroke-width="2.24299"
                                            stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M19.8423 19.5079L5.81843 5.53198" stroke="#C3C3C3" stroke-width="2.24299"
                                            stroke-linecap="round" stroke-linejoin="round" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_126_1281">
                                            <rect width="24" height="24" fill="white" transform="translate(0.580078 0.5)" />
                                        </clipPath>
                                    </defs>
                                </svg>

                            </td>
                            <td>
                                <svg width="25" height="24" viewBox="0 0 25 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_126_1163)">
                                        <path
                                            d="M12.4797 24C19.1072 24 24.4797 18.6274 24.4797 12C24.4797 5.37258 19.1072 0 12.4797 0C5.85232 0 0.479736 5.37258 0.479736 12C0.479736 18.6274 5.85232 24 12.4797 24Z"
                                            fill="#004FFF" />
                                        <path d="M7.43311 12.1825L11.5978 15.9252L18.1995 8.29907" stroke="white"
                                            stroke-width="1.42574" stroke-linecap="round" stroke-linejoin="round" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_126_1163">
                                            <rect width="24" height="24" fill="white" transform="translate(0.479736)" />
                                        </clipPath>
                                    </defs>
                                </svg>

                            </td>
                        </tr>
                        <tr>
                            <td>
                                Price
                            </td>
                            <td>
                                79 USD
                            </td>
                            <td>
                                799 USD
                            </td>
                            <td>
                                199 USD
                            </td>
                        </tr>
                    </table>
                </div>
            </section>
            <div class="main__payment-popup payment-popup" id="payment-popup">
                <div class="payment-popup__img">
                    <img class="payment-popup__img-image" src="../../../public/images/alma-popup-icon.png" alt="alma">
                </div>
                <h2 class="payment-popup__title">
                    Make easy monthly payments over
                    <span>
                        3
                    </span>
                    months
                </h2>
                <p class="payment-popup__text">
                    Checking your eligibility won’t affect your credit.
                </p>
                <div class="payment-popup__box payment-popup-box">
                    <div class="payment-popup-box__top">
                        <p class="payment-popup-box__top-text">
                            € 59,66
                            <span>
                                /monthly
                            </span>
                        </p>
                        <p class="payment-popup-box__top-time">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_41_9039)">
                                    <mask id="mask0_41_9039" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0"
                                        y="0" width="16" height="16">
                                        <path d="M0 9.53674e-07H16V16H0V9.53674e-07Z" fill="white" />
                                    </mask>
                                    <g mask="url(#mask0_41_9039)">
                                        <path
                                            d="M15.5312 8C15.5312 12.1421 12.1421 15.5312 8 15.5312C3.85787 15.5312 0.46875 12.1421 0.46875 8C0.46875 3.85788 3.85787 0.468751 8 0.468751C12.1421 0.468751 15.5312 3.85788 15.5312 8Z"
                                            stroke="#004FFF" stroke-miterlimit="10" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                        <path d="M8 5.1875V8L10.8125 10.8125" stroke="#004FFF" stroke-miterlimit="10"
                                            stroke-linecap="round" stroke-linejoin="round" />
                                    </g>
                                </g>
                                <defs>
                                    <clipPath id="clip0_41_9039">
                                        <rect width="16" height="16" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            3 months
                        </p>
                    </div>
                    <div class="payment-popup-box__bottom payment-popup-box-bottom">
                        <div class="payment-popup-box-bottom__box">
                            <p class="payment-popup-box-bottom__box-text">
                                APR
                            </p>
                            <p class="payment-popup-box-bottom__box-subtext">
                                0,00%
                            </p>
                        </div>
                        <div class="payment-popup-box-bottom__box">
                            <p class="payment-popup-box-bottom__box-text">
                                Interest
                            </p>
                            <p class="payment-popup-box-bottom__box-subtext">
                                €0,00
                            </p>
                        </div>
                        <div class="payment-popup-box-bottom__box">
                            <p class="payment-popup-box-bottom__box-text">
                                Total
                            </p>
                            <p class="payment-popup-box-bottom__box-subtext">
                                €179
                            </p>
                        </div>
                    </div>
                </div>
                <button class="payment-popup__btn" type="button">
                    See if you qualify
                </button>
                <p class="payment-popup__subtext">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                </p>
                <p class="payment-popup__info">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                    <a href="#">
                        invidunt
                    </a>
                    ut
                    labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et
                    ea rebum.
                </p>
            </div>
        </main>
    </div>
</template>

<script>

import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';

import 'swiper/css';
import 'swiper/css/navigation';

import HeaderVue from './Header.vue';

export default {
    components: {
        Swiper,
        SwiperSlide,
        HeaderVue
    },
    setup() {
        const onSwiper = (swiper) => {
        };
        const onSlideChange = () => {
        };
        return {
            onSwiper,
            onSlideChange,
            modules: [Navigation],
        };
    },
    data() {
        return {
            countValue: 1,
            almaInfoIsActive: false,
        }
    },
    methods: {
        showFaqItem(event) {
            // for ( let item of document.querySelectorAll('.product-faq-item') ) {
            //     item.classList.remove('product-faq-item--active')
            // }
            event.currentTarget.classList.toggle('product-faq-item--active')
        },
        plusCount() {
            this.countValue++
        },
        minusCount() {
            if (this.countValue != 1) {
                this.countValue--
            }
        },
        showAlmaInfo() {
            if (this.almaInfoIsActive == false) {
                this.almaInfoIsActive = true
            } else {
                this.almaInfoIsActive = false
            }
        }
    },
    mounted() {
        var mixer = mixitup('.product-view__images', {
            load: {
                filter: '.item-first'
            },
            animation: {
                enable: false
            },
        });
        $('.swiper-button-prev').on('click', function (event) {
            for (let item of $('.product-view-swiper-slide')) {
                item.classList.remove('mixitup-control-active')
            }

            for (let item of $('.product-view-swiper-slide')) {
                if (item.classList.contains('swiper-slide-active')) {
                    $(item).click()
                }
            }
        });

        $('.swiper-button-next').on('click', function (event) {
            for (let item of $('.product-view-swiper-slide')) {
                item.classList.remove('mixitup-control-active')
            }
            for (let item of $('.product-view-swiper-slide')) {
                if (item.classList.contains('swiper-slide-active')) {
                    $(item).click()
                }
            }
        });
    },
};
</script>

<style lang="scss">
$black: #192636;

.product-info {
    display: flex;
    gap: 130px;
    max-width: 100%;
}

.product-view {
    &__inner {
        position: relative;
    }

    max-width: 960px;
}

.product-content {
    margin-top: 100px;
    max-width: 570px;
    max-height: 980px;
    overflow: auto;

    /* width */
    &::-webkit-scrollbar {
        width: 0;
    }

    /* Track */
    &::-webkit-scrollbar-track {
        background: #f1f1f1;
    }

    /* Handle */
    &::-webkit-scrollbar-thumb {
        background: #888;
    }

    /* Handle on hover */
    &::-webkit-scrollbar-thumb:hover {
        background: #555;
    }

    &__top {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 20px;
        margin-bottom: 10px;
    }

    &__top-title {
        font-weight: 300;
        color: $black;
        font-size: 36px;
        line-height: 49px;
        text-transform: lowercase;
    }

    &__top-link {
        font-weight: 500;
        font-size: 12px;
        line-height: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        padding: 0 10px;
        color: $black;
        background: rgba(25, 38, 54, 0.06);
        border-radius: 34px;
    }

    &__text {
        margin-bottom: 35px;
        font-weight: 300;
        font-size: 16px;
        line-height: 24px;
        color: $black;
    }

    &__price {
        font-size: 32px;
        line-height: 44px;
        margin-bottom: 35px;
        color: $black;
    }

    &__list {
        margin-bottom: 30px;
    }
}

.product-content-subscribe {
    margin-bottom: 30px;
    display: flex;
    align-items: center;
    gap: 10px;
    position: relative;
    svg {
        &:nth-last-child(2) {
            cursor: pointer;
        }
        &:nth-last-child(1) {
            cursor: pointer;
        }
    }
    &__text {
        font-size: 16px;
        line-height: 22px;
        color: $black;

        span {
            font-weight: 500;
        }
    }

    img {
        max-width: 35px;
        max-height: 21px;
    }

    &__list {
        position: absolute;
        left: 210px;
        top: 40px;
        background: #FFFFFF;
        border: 1px solid #EEEEEE;
        box-shadow: 0px 0px 17px rgba(0, 0, 0, 0.06);
        border-radius: 10px;
        padding: 16px 16px 16px 40px;
        display: flex;
        flex-direction: column;
        gap: 5px;
        z-index: 1;

        &::after {
            content: '';
            width: 24px;
            height: 11px;
            top: -11px;
            left: 35px;
            position: absolute;
            z-index: -1;
            background-repeat: no-repeat;
            background-image: url(../../../../public/images/treangle.svg);
        }

        &::before {
            content: '';
            position: absolute;
            left: 21px;
            top: 50%;
            transform: translateY(-50%);
            width: 1px;
            height: 62px;
            background: rgba(25, 38, 54, 0.2);
        }
    }

    &__lits-item {
        position: relative;

        &::before {
            content: '';
            width: 8px;
            height: 8px;
            position: absolute;
            left: -23px;
            top: 50%;
            transform: translateY(-50%);
            border-radius: 100%;
            background: #FFFFFF;
            border: 1px solid rgba(25, 38, 54, 0.2);
        }

        &:last-child {
            &::before {
                left: -25.5px;
                background: #004FFF;
                width: 14px;
                height: 14px;
                border: unset;
                border-radius: 100%;
                background-repeat: no-repeat;
                background-size: 7px 7px;
                background-position: center center;
                background-image: url(../../../../public/images/tick-icon.svg);
            }
        }
    }

    &__list-text {
        font-size: 14px;
        line-height: 32px;
        color: $black;

        span {
            font-weight: 600;
        }
    }
}

.product-content-rait {
    margin-bottom: 15px;
    display: flex;
    align-items: center;
    gap: 20px;

    &__stars {
        display: flex;
        align-items: center;
        gap: 1px;

        svg {
            width: 18px;
            height: 18px;
        }
    }

    &__text {
        font-size: 14px;
        line-height: 20px;
        color: $black;
    }
}

.product-list {
    display: flex;
    flex-direction: column;
    gap: 20px;

    &__item {
        display: flex;
        gap: 20px;
    }

    &__icon {
        min-width: 35px;
        min-height: 35px;
        width: 35px;
        height: 35px;
        background: rgba(25, 38, 54, 0.05);
        border-radius: 34px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    &__box {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    &__box-title {
        font-size: 14px;
        line-height: 19px;
        color: $black;
    }

    &__box-text {
        font-weight: 200;
        font-size: 12px;
        color: $black;
        line-height: 16px;
    }
}

.product-color {
    margin-bottom: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 30px;

    &__text {
        font-size: 14px;
        line-height: 19px;
        color: $black;
    }

    &__box {
        display: flex;
        align-items: center;
        gap: 10px;
    }

    &__box-btn {
        background: #396B77;
        border: 3px solid #FFFFFF;
        border-radius: 30px;
        width: 32px;
        height: 32px;
    }
}

.product-quantity {
    margin-bottom: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 30px;
    margin-right: 15px;

    &__text {
        font-size: 14px;
        line-height: 19px;
        color: $black;
    }

    &__box {
        display: flex;
        align-items: center;
        gap: 5px;
    }

    &__box-btn {
        width: 30px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    &__box-count {
        background: transparent;
        width: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        font-size: 16px;
        line-height: 22px;
        color: $black;
    }
}

.product-add {
    margin-bottom: 20px;

    &__btn {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        font-size: 16px;
        line-height: 22px;
        color: #FFFFFF;
        background: #004FFF;
        border-radius: 64px;
        padding: 10px 0;
        width: 100%;
        margin-bottom: 25px;
        border: 1px solid transparent;
        transition: color 0.3s, background 0.3s, border 0.3s;

        &:hover {
            background: transparent;
            color: #004FFF;
            border: 1px solid #004FFF;
        }
    }

    &__inner {
        justify-content: center;
        display: flex;
        align-items: center;
        gap: 10px;
    }

    &__button {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 28px;

        img {
            width: 100%;
        }
    }
}

.product-faq-item {
    padding: 20px 0;
    border-bottom: 1px solid rgba(25, 38, 54, 0.19);
    cursor: pointer;

    &__top {
        padding-right: 30px;
        position: relative;

        &::after {
            content: '';
            background-repeat: no-repeat;
            background-size: cover;
            position: absolute;
            right: 0;
            top: 50%;
            transform: translateY(-50%);
            width: 11px;
            height: 5px;
            background-image: url(../../public/images/faq-arrow.svg);
        }
    }

    &__top-text {
        font-size: 16px;
        line-height: 22px;
        color: $black;
    }

    &__list {
        display: none;
        padding-top: 22px;
    }
}

.product-faq-item-get {
    display: none;
    padding-top: 22px;
    gap: 30px;

    &__img {
        width: 148px;
        height: 180px;
        max-width: 148px;
        max-height: 180px;
    }

    &__list {
        display: flex;
        flex-direction: column;
        gap: 15px;
    }

    &__item {
        display: flex;
        align-items: center;
        gap: 10px;
    }

    &__text {
        font-weight: 300;
        font-size: 14px;
        line-height: 24px;
        color: $black;
    }
}

.product-faq-item--active {
    .product-faq-item-get {
        display: flex;
    }

    .product-faq-item__list {
        display: flex;
    }

    .product-faq-item__top::after {
        transform: translateY(-50%) rotate(180deg);
    }
}

.moonbird-advantages {
    padding-bottom: 100px;
    padding-top: 100px;
    max-width: 1150px;
    margin-left: auto;
    margin-right: auto;

    &__title {
        margin-bottom: 55px;
        font-size: 36px;
        line-height: 49px;
        color: $black;
        text-align: center;
        font-weight: 300;

        span {
            font-weight: 500;
        }
    }

    &__inner {}
}

.moonbird-advantages-table {
    width: 100%;
    border-collapse: collapse;

    p {
        gap: 10px;
        display: flex;
        align-items: center;
        font-size: 16px;
        line-height: 22px;
        color: $black;

        span {
            background: rgba(25, 38, 54, 0.05);
            border-radius: 34px;
            width: 29px;
            height: 29px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }

    tr {
        &:first-child {
            width: 385px;

            th {
                &:last-child {
                    border-radius: 18px 18px 0px 0px;
                }
            }
        }

        &:last-child {
            td {
                font-weight: 600;
                font-size: 16px;
                line-height: 22px;
                color: $black;
                border: unset;

                &:first-child {
                    text-align: left;
                }

                &:last-child {
                    border-radius: 0 0 18px 18px;
                }
            }
        }
    }

    th {
        padding: 16.5px;
        font-weight: 500;
        font-size: 16px;
        line-height: 22px;
        color: $black;

        &:last-child {
            background: rgba(235, 230, 220, 0.5);

        }
    }

    td {
        border-bottom: 1px solid #E0E0E0;
        text-align: center;
        padding: 16.5px;

        &:first-child {
            width: 385px;
        }

        &:last-child {
            background: rgba(235, 230, 220, 0.5);
        }
    }
}

.main {

    &__product-info {}
}

.product-info {

    &__view {}

    &__content {}
}

.product-view {
    &__images {
        margin-bottom: 30px;
    }

    &__images-img {
        max-width: 960px;
        max-height: 890px;
        width: 100%;
        height: 890px;
    }
}

.product-view-swiper {
    position: unset;

    .swiper-button-prev:after,
    .swiper-rtl .swiper-button-next:after {
        content: unset;
    }

    .swiper-button-next:after,
    .swiper-rtl .swiper-button-prev:after {
        content: unset;
    }

    .swiper-button-prev {
        background: rgba(255, 255, 255, 0.6);
        width: 43px;
        height: 43px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 100%;
        position: absolute;
        bottom: 210px !important;
        right: 80px !important;
        top: unset !important;
        left: unset !important;

        &::before {
            content: '';
            width: 11px;
            height: 15px;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translateY(-50%) translateX(-50%);
            background-repeat: no-repeat;
            background-size: contain;
            background-image: url(../../../public/images/view-swiper-arrow.svg);
        }
    }

    .swiper-button-next {
        background: rgba(255, 255, 255, 0.6);
        width: 43px;
        height: 43px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 100%;
        position: absolute;
        bottom: 210px !important;
        right: 20px !important;
        top: unset !important;
        left: unset !important;

        &::before {
            content: '';
            width: 11px;
            height: 15px;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translateY(-50%) translateX(-50%) rotate(180deg);
            background-repeat: no-repeat;
            background-size: contain;
            background-image: url(../../../public/images/view-swiper-arrow.svg);
        }
    }
}

.product-view-swiper-slide {
    cursor: pointer;

    &__box {
        width: 165px;
        height: 160px;
        max-width: 165px;
        max-height: 160px;
    }

    &__box-img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}


.payment-popup {
    padding: 42px;
    max-width: 580px;
    background: #FFFFFF;
    border-radius: 11px;
    display: none;

    &__img {
        margin-bottom: 15px;
        width: 59px;
        height: 32px;
        margin-left: auto;
        margin-right: auto;
    }

    &__img-image {
        max-width: 59px;
        max-height: 32px;
    }

    &__title {
        margin-bottom: 20px;
        font-weight: 300;
        font-size: 30px;
        line-height: 41px;
        max-width: 410px;
        text-align: center;
        margin-left: auto;
        color: $black;
        margin-right: auto;

        span {
            font-weight: 500;
        }
    }

    &__text {
        font-weight: 300;
        font-size: 16px;
        line-height: 24px;
        text-align: center;
        margin-bottom: 30px;
        color: $black;
    }

    &__btn {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        font-size: 16px;
        line-height: 22px;
        color: #FFFFFF;
        background: #004FFF;
        border-radius: 64px;
        padding: 12px 0;
        width: 100%;
        margin-bottom: 20px;
        border: 1px solid transparent;
        transition: color 0.3s, background 0.3s, border 0.3s;

        &:hover {
            background: transparent;
            color: #004FFF;
            border: 1px solid #004FFF;
        }
    }

    &__subtext {
        font-weight: 300;
        font-size: 14px;
        line-height: 24px;
        padding-bottom: 20px;
        text-align: center;
        border-bottom: 1px solid rgba(25, 38, 54, 0.19);
        color: $black;
        margin-bottom: 20px;
    }

    &__info {
        font-weight: 300;
        font-size: 14px;
        text-align: center;
        line-height: 24px;
        a {
            font-weight: 500;
            color: #004FFF;
        }
    }
}

.payment-popup-box {
    margin-bottom: 30px;
    border: 1px solid rgba(25, 38, 54, 0.19);
    border-radius: 10px;

    &__top {
        border-bottom: 1px solid rgba(25, 38, 54, 0.19);
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 20px 15px 20px 20px;
    }

    &__top-text {
        color: $black;
        font-weight: 500;
        font-size: 20px;
        line-height: 27px;

        span {
            font-weight: 400;
            font-size: 14px;
            line-height: 19px;
        }
    }

    &__top-time {
        font-weight: 500;
        font-size: 16px;
        line-height: 22px;
        display: flex;
        align-items: center;
        text-align: center;
        color: #004FFF;
        display: flex;
        align-items: center;
        gap: 8px;
    }
}

.payment-popup-box-bottom {
    display: flex;
    padding: 20px;
    align-items: center;
    gap: 100px;

    &__box {
        display: flex;
        flex-direction: column;
        gap: 5px;

        &:last-child {
            .payment-popup-box-bottom__box-text {
                font-weight: 600;
            }

            .payment-popup-box-bottom__box-subtext {
                font-weight: 500;
            }
        }
    }

    &__box-text {
        font-weight: 500;
        font-size: 16px;
        line-height: 22px;
        color: $black;
    }

    &__box-subtext {
        color: $black;
        font-weight: 300;
        font-size: 14px;
        line-height: 19px;
    }
}
</style>