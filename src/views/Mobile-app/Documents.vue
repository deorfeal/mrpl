<template>
  <div class="wrapper-big">
    <MainHeaderVue :activeMenuOrder="2" />
    <MainBack :title="'Documents'" />
    <main class="main main-app-documents">
      <section class="main__app-documents app-documents">
        <div class="app-documents__top">
          <button
            class="app-documents__top-btn"
            type="button"
            data-filter=".item-first"
          >
            For signature
          </button>
          <button
            class="app-documents__top-btn"
            type="button"
            data-filter=".item-second"
          >
            Signed
          </button>
        </div>
        <div class="app-documents__inner">
          <div class="app-documents__item app-documents-item mix item-first">
            <div
              class="app-documents-item__box app-documents-item-box app-documents-item-box--new"
            >
              <div class="app-documents-item-box__top">
                <p class="app-documents-item-box__top-text">3 January 2023</p>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.28995 17.29C9.38247 17.3827 9.49236 17.4563 9.61333 17.5064C9.7343 17.5566 9.86398 17.5825 9.99495 17.5825C10.1259 17.5825 10.2556 17.5566 10.3766 17.5064C10.4976 17.4563 10.6074 17.3827 10.7 17.29L15.29 12.7C15.3827 12.6075 15.4562 12.4976 15.5064 12.3766C15.5566 12.2557 15.5824 12.126 15.5824 11.995C15.5824 11.864 15.5566 11.7344 15.5064 11.6134C15.4562 11.4924 15.3827 11.3825 15.29 11.29L10.7 6.70002C10.6074 6.60743 10.4975 6.53399 10.3765 6.48389C10.2555 6.43378 10.1259 6.40799 9.99495 6.40799C9.86402 6.40799 9.73437 6.43378 9.61341 6.48389C9.49244 6.53399 9.38253 6.60743 9.28995 6.70002C9.19737 6.7926 9.12393 6.90251 9.07383 7.02347C9.02372 7.14444 8.99793 7.27408 8.99793 7.40502C8.99793 7.53595 9.02372 7.66559 9.07383 7.78656C9.12393 7.90752 9.19737 8.01743 9.28995 8.11001L13.17 12L9.28995 15.88C8.89995 16.27 8.90995 16.91 9.28995 17.29Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div class="app-documents-item-box__row">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 12C12.55 12 13.021 11.804 13.413 11.412C13.805 11.02 14.0007 10.5493 14 10C14 9.45 13.804 8.979 13.412 8.587C13.02 8.195 12.5493 7.99933 12 8C11.45 8 10.979 8.196 10.587 8.588C10.195 8.98 9.99933 9.45067 10 10C10 10.55 10.196 11.021 10.588 11.413C10.98 11.805 11.4507 12.0007 12 12ZM12 19.35C14.0333 17.4833 15.5417 15.7873 16.525 14.262C17.5083 12.7367 18 11.3827 18 10.2C18 8.38333 17.4207 6.896 16.262 5.738C15.1033 4.58 13.6827 4.00067 12 4C10.3167 4 8.89567 4.57933 7.737 5.738C6.57833 6.89667 5.99933 8.384 6 10.2C6 11.3833 6.49167 12.7377 7.475 14.263C8.45833 15.7883 9.96667 17.484 12 19.35ZM12 22C9.31667 19.7167 7.31267 17.596 5.988 15.638C4.66333 13.68 4.00067 11.8673 4 10.2C4 7.7 4.80433 5.70833 6.413 4.225C8.02167 2.74167 9.884 2 12 2C14.1167 2 15.9793 2.74167 17.588 4.225C19.1967 5.70833 20.0007 7.7 20 10.2C20 11.8667 19.3373 13.6793 18.012 15.638C16.6867 17.5967 14.6827 19.7173 12 22Z"
                    fill="#82B8E9"
                  />
                </svg>

                <p class="app-documents-item-box__row-text">
                  Gasthof Kloster Seligenporten, Klosterhof 9, 90602
                  Seligenporten
                </p>
              </div>
              <div
                class="app-documents-item-box__info app-documents-item-box-info"
              >
                <div class="app-documents-item-box-info__row">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM12 20C14.1217 20 16.1566 19.1571 17.6569 17.6569C19.1571 16.1566 20 14.1217 20 12C20 9.87827 19.1571 7.84344 17.6569 6.34315C16.1566 4.84285 14.1217 4 12 4C9.87827 4 7.84344 4.84285 6.34315 6.34315C4.84285 7.84344 4 9.87827 4 12C4 14.1217 4.84285 16.1566 6.34315 17.6569C7.84344 19.1571 9.87827 20 12 20ZM10.05 11H15V13H10.05C10.1366 13.4253 10.3325 13.8208 10.6184 14.1474C10.9042 14.4741 11.2702 14.7207 11.6803 14.8629C12.0903 15.0052 12.5304 15.0383 12.9571 14.9589C13.3839 14.8794 13.7826 14.6903 14.114 14.41L15.814 15.543C15.2298 16.1789 14.475 16.6333 13.6397 16.852C12.8043 17.0707 11.9237 17.0445 11.1029 16.7764C10.282 16.5083 9.55568 16.0097 9.01045 15.3401C8.46523 14.6705 8.12418 13.8581 8.028 13H7V11H8.027C8.12285 10.1414 8.46382 9.32861 9.00916 8.6586C9.55451 7.98859 10.2812 7.48972 11.1024 7.22157C11.9236 6.95342 12.8047 6.92732 13.6404 7.14639C14.476 7.36546 15.2309 7.82045 15.815 8.457L14.114 9.59C13.7826 9.30972 13.3839 9.12056 12.9571 9.04114C12.5304 8.96172 12.0903 8.99478 11.6803 9.13706C11.2702 9.27933 10.9042 9.52593 10.6184 9.85258C10.3325 10.1792 10.1366 10.5747 10.05 11Z"
                      fill="#82B8E9"
                    />
                  </svg>

                  <p class="app-documents-item-box-info__row-text">€ 1 920</p>
                </div>
                <div class="app-documents-item-box-info__row">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.5 12L11.1 14.7L15.6 8.4M12 21C16.9707 21 21 16.9707 21 12C21 7.0293 16.9707 3 12 3C7.0293 3 3 7.0293 3 12C3 16.9707 7.0293 21 12 21Z"
                      stroke="#82B8E9"
                      stroke-width="2"
                    />
                  </svg>

                  <p class="app-documents-item-box-info__row-text">New</p>
                </div>
              </div>
            </div>
            <div
              class="app-documents-item__box app-documents-item-box app-documents-item-box--canceled"
            >
              <div class="app-documents-item-box__top">
                <p class="app-documents-item-box__top-text">3 January 2023</p>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.28995 17.29C9.38247 17.3827 9.49236 17.4563 9.61333 17.5064C9.7343 17.5566 9.86398 17.5825 9.99495 17.5825C10.1259 17.5825 10.2556 17.5566 10.3766 17.5064C10.4976 17.4563 10.6074 17.3827 10.7 17.29L15.29 12.7C15.3827 12.6075 15.4562 12.4976 15.5064 12.3766C15.5566 12.2557 15.5824 12.126 15.5824 11.995C15.5824 11.864 15.5566 11.7344 15.5064 11.6134C15.4562 11.4924 15.3827 11.3825 15.29 11.29L10.7 6.70002C10.6074 6.60743 10.4975 6.53399 10.3765 6.48389C10.2555 6.43378 10.1259 6.40799 9.99495 6.40799C9.86402 6.40799 9.73437 6.43378 9.61341 6.48389C9.49244 6.53399 9.38253 6.60743 9.28995 6.70002C9.19737 6.7926 9.12393 6.90251 9.07383 7.02347C9.02372 7.14444 8.99793 7.27408 8.99793 7.40502C8.99793 7.53595 9.02372 7.66559 9.07383 7.78656C9.12393 7.90752 9.19737 8.01743 9.28995 8.11001L13.17 12L9.28995 15.88C8.89995 16.27 8.90995 16.91 9.28995 17.29Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div class="app-documents-item-box__row">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 12C12.55 12 13.021 11.804 13.413 11.412C13.805 11.02 14.0007 10.5493 14 10C14 9.45 13.804 8.979 13.412 8.587C13.02 8.195 12.5493 7.99933 12 8C11.45 8 10.979 8.196 10.587 8.588C10.195 8.98 9.99933 9.45067 10 10C10 10.55 10.196 11.021 10.588 11.413C10.98 11.805 11.4507 12.0007 12 12ZM12 19.35C14.0333 17.4833 15.5417 15.7873 16.525 14.262C17.5083 12.7367 18 11.3827 18 10.2C18 8.38333 17.4207 6.896 16.262 5.738C15.1033 4.58 13.6827 4.00067 12 4C10.3167 4 8.89567 4.57933 7.737 5.738C6.57833 6.89667 5.99933 8.384 6 10.2C6 11.3833 6.49167 12.7377 7.475 14.263C8.45833 15.7883 9.96667 17.484 12 19.35ZM12 22C9.31667 19.7167 7.31267 17.596 5.988 15.638C4.66333 13.68 4.00067 11.8673 4 10.2C4 7.7 4.80433 5.70833 6.413 4.225C8.02167 2.74167 9.884 2 12 2C14.1167 2 15.9793 2.74167 17.588 4.225C19.1967 5.70833 20.0007 7.7 20 10.2C20 11.8667 19.3373 13.6793 18.012 15.638C16.6867 17.5967 14.6827 19.7173 12 22Z"
                    fill="#82B8E9"
                  />
                </svg>

                <p class="app-documents-item-box__row-text">
                  Gasthof Kloster Seligenporten, Klosterhof 9, 90602
                  Seligenporten
                </p>
              </div>
              <div
                class="app-documents-item-box__info app-documents-item-box-info"
              >
                <div class="app-documents-item-box-info__row">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM12 20C14.1217 20 16.1566 19.1571 17.6569 17.6569C19.1571 16.1566 20 14.1217 20 12C20 9.87827 19.1571 7.84344 17.6569 6.34315C16.1566 4.84285 14.1217 4 12 4C9.87827 4 7.84344 4.84285 6.34315 6.34315C4.84285 7.84344 4 9.87827 4 12C4 14.1217 4.84285 16.1566 6.34315 17.6569C7.84344 19.1571 9.87827 20 12 20ZM10.05 11H15V13H10.05C10.1366 13.4253 10.3325 13.8208 10.6184 14.1474C10.9042 14.4741 11.2702 14.7207 11.6803 14.8629C12.0903 15.0052 12.5304 15.0383 12.9571 14.9589C13.3839 14.8794 13.7826 14.6903 14.114 14.41L15.814 15.543C15.2298 16.1789 14.475 16.6333 13.6397 16.852C12.8043 17.0707 11.9237 17.0445 11.1029 16.7764C10.282 16.5083 9.55568 16.0097 9.01045 15.3401C8.46523 14.6705 8.12418 13.8581 8.028 13H7V11H8.027C8.12285 10.1414 8.46382 9.32861 9.00916 8.6586C9.55451 7.98859 10.2812 7.48972 11.1024 7.22157C11.9236 6.95342 12.8047 6.92732 13.6404 7.14639C14.476 7.36546 15.2309 7.82045 15.815 8.457L14.114 9.59C13.7826 9.30972 13.3839 9.12056 12.9571 9.04114C12.5304 8.96172 12.0903 8.99478 11.6803 9.13706C11.2702 9.27933 10.9042 9.52593 10.6184 9.85258C10.3325 10.1792 10.1366 10.5747 10.05 11Z"
                      fill="#82B8E9"
                    />
                  </svg>

                  <p class="app-documents-item-box-info__row-text">€ 1 920</p>
                </div>
                <div class="app-documents-item-box-info__row">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.5 12L11.1 14.7L15.6 8.4M12 21C16.9707 21 21 16.9707 21 12C21 7.0293 16.9707 3 12 3C7.0293 3 3 7.0293 3 12C3 16.9707 7.0293 21 12 21Z"
                      stroke="#82B8E9"
                      stroke-width="2"
                    />
                  </svg>

                  <p class="app-documents-item-box-info__row-text">Canceled</p>
                </div>
              </div>
            </div>
          </div>
          <div class="app-documents__item app-documents-item mix item-second">
            <div
              class="app-documents-item__box app-documents-item-box app-documents-item-box--signed"
            >
              <div class="app-documents-item-box__top">
                <p class="app-documents-item-box__top-text">3 January 2023</p>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.28995 17.29C9.38247 17.3827 9.49236 17.4563 9.61333 17.5064C9.7343 17.5566 9.86398 17.5825 9.99495 17.5825C10.1259 17.5825 10.2556 17.5566 10.3766 17.5064C10.4976 17.4563 10.6074 17.3827 10.7 17.29L15.29 12.7C15.3827 12.6075 15.4562 12.4976 15.5064 12.3766C15.5566 12.2557 15.5824 12.126 15.5824 11.995C15.5824 11.864 15.5566 11.7344 15.5064 11.6134C15.4562 11.4924 15.3827 11.3825 15.29 11.29L10.7 6.70002C10.6074 6.60743 10.4975 6.53399 10.3765 6.48389C10.2555 6.43378 10.1259 6.40799 9.99495 6.40799C9.86402 6.40799 9.73437 6.43378 9.61341 6.48389C9.49244 6.53399 9.38253 6.60743 9.28995 6.70002C9.19737 6.7926 9.12393 6.90251 9.07383 7.02347C9.02372 7.14444 8.99793 7.27408 8.99793 7.40502C8.99793 7.53595 9.02372 7.66559 9.07383 7.78656C9.12393 7.90752 9.19737 8.01743 9.28995 8.11001L13.17 12L9.28995 15.88C8.89995 16.27 8.90995 16.91 9.28995 17.29Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div class="app-documents-item-box__row">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 12C12.55 12 13.021 11.804 13.413 11.412C13.805 11.02 14.0007 10.5493 14 10C14 9.45 13.804 8.979 13.412 8.587C13.02 8.195 12.5493 7.99933 12 8C11.45 8 10.979 8.196 10.587 8.588C10.195 8.98 9.99933 9.45067 10 10C10 10.55 10.196 11.021 10.588 11.413C10.98 11.805 11.4507 12.0007 12 12ZM12 19.35C14.0333 17.4833 15.5417 15.7873 16.525 14.262C17.5083 12.7367 18 11.3827 18 10.2C18 8.38333 17.4207 6.896 16.262 5.738C15.1033 4.58 13.6827 4.00067 12 4C10.3167 4 8.89567 4.57933 7.737 5.738C6.57833 6.89667 5.99933 8.384 6 10.2C6 11.3833 6.49167 12.7377 7.475 14.263C8.45833 15.7883 9.96667 17.484 12 19.35ZM12 22C9.31667 19.7167 7.31267 17.596 5.988 15.638C4.66333 13.68 4.00067 11.8673 4 10.2C4 7.7 4.80433 5.70833 6.413 4.225C8.02167 2.74167 9.884 2 12 2C14.1167 2 15.9793 2.74167 17.588 4.225C19.1967 5.70833 20.0007 7.7 20 10.2C20 11.8667 19.3373 13.6793 18.012 15.638C16.6867 17.5967 14.6827 19.7173 12 22Z"
                    fill="#82B8E9"
                  />
                </svg>

                <p class="app-documents-item-box__row-text">
                  Gasthof Kloster Seligenporten, Klosterhof 9, 90602
                  Seligenporten
                </p>
              </div>
              <div
                class="app-documents-item-box__info app-documents-item-box-info"
              >
                <div class="app-documents-item-box-info__row">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM12 20C14.1217 20 16.1566 19.1571 17.6569 17.6569C19.1571 16.1566 20 14.1217 20 12C20 9.87827 19.1571 7.84344 17.6569 6.34315C16.1566 4.84285 14.1217 4 12 4C9.87827 4 7.84344 4.84285 6.34315 6.34315C4.84285 7.84344 4 9.87827 4 12C4 14.1217 4.84285 16.1566 6.34315 17.6569C7.84344 19.1571 9.87827 20 12 20ZM10.05 11H15V13H10.05C10.1366 13.4253 10.3325 13.8208 10.6184 14.1474C10.9042 14.4741 11.2702 14.7207 11.6803 14.8629C12.0903 15.0052 12.5304 15.0383 12.9571 14.9589C13.3839 14.8794 13.7826 14.6903 14.114 14.41L15.814 15.543C15.2298 16.1789 14.475 16.6333 13.6397 16.852C12.8043 17.0707 11.9237 17.0445 11.1029 16.7764C10.282 16.5083 9.55568 16.0097 9.01045 15.3401C8.46523 14.6705 8.12418 13.8581 8.028 13H7V11H8.027C8.12285 10.1414 8.46382 9.32861 9.00916 8.6586C9.55451 7.98859 10.2812 7.48972 11.1024 7.22157C11.9236 6.95342 12.8047 6.92732 13.6404 7.14639C14.476 7.36546 15.2309 7.82045 15.815 8.457L14.114 9.59C13.7826 9.30972 13.3839 9.12056 12.9571 9.04114C12.5304 8.96172 12.0903 8.99478 11.6803 9.13706C11.2702 9.27933 10.9042 9.52593 10.6184 9.85258C10.3325 10.1792 10.1366 10.5747 10.05 11Z"
                      fill="#82B8E9"
                    />
                  </svg>

                  <p class="app-documents-item-box-info__row-text">€ 1 920</p>
                </div>
                <div class="app-documents-item-box-info__row">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.5 12L11.1 14.7L15.6 8.4M12 21C16.9707 21 21 16.9707 21 12C21 7.0293 16.9707 3 12 3C7.0293 3 3 7.0293 3 12C3 16.9707 7.0293 21 12 21Z"
                      stroke="#82B8E9"
                      stroke-width="2"
                    />
                  </svg>

                  <p class="app-documents-item-box-info__row-text">Signed</p>
                </div>
              </div>
              <button class="app-documents-item-box__button" type="button">
                Contract
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>
  
<script>
import MainBack from "../Main-components/Main-back.vue";
import MainHeaderVue from "../Main-components/Main-header.vue";

export default {
  components: {
    MainBack,
    MainHeaderVue,
  },
  mounted() {
    document.querySelector(".wrapper-big").style.minHeight =
      +window.innerHeight + "px";
    var mixer = mixitup(".app-documents__inner", {
      load: {
        filter: ".item-first",
      },
      animation: {
        enable: false,
      },
    });
  },
  data() {
    return {
      sendedDataIsActive: false,
    };
  },
  methods: {
    sendData() {
      this.sendedDataIsActive = true;
    },
  },
};
</script>
  
<style lang="scss">
.main-app-documents {
  padding: 0;
}
.app-documents {
  &__top {
    padding: 15px 15px 0 15px;
    background: #fff;
    z-index: 100;
    display: flex;
    position: relative;
    justify-content: center;
    gap: 100px;
  }

  .mixitup-control-active {
    color: #677a45;
    &::before {
      opacity: 1;
    }
  }

  &__top-btn {
    font-size: 17px;
    line-height: 21px;
    text-align: center;
    letter-spacing: -0.3px;
    color: #7c7c7c;
    position: relative;
    padding-bottom: 13px;
    &::before {
      content: "";
      width: 100%;
      bottom: 0;
      left: 0;
      right: 0;
      height: 1px;
      background: #677a45;
      position: absolute;
      opacity: 0;
    }
  }

  &__inner {
    padding: 15px;
  }
}
.app-documents-item {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.app-documents-item-box {
  background: #ffffff;
  box-shadow: 0px 6px 18px rgba(0, 0, 0, 0.05);
  border-radius: 14px;
  &__button {
    font-size: 17px;
    line-height: 21px;
    letter-spacing: -0.3px;

    /* kBlueMainColor */

    color: #82b8e9;
    padding: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;
    border-top: 1px solid #eceef0;
  }
  &__top {
    padding: 4px 12px 4px 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #82b8e9;
    border-radius: 14px 14px 0px 0px;
  }

  &__top-text {
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    letter-spacing: -0.3px;
    color: #ffffff;
  }

  &__row {
    display: flex;
    gap: 8px;
    padding: 15px;
    svg {
      min-width: 24px;
      min-height: 24px;
    }
  }

  &__row-text {
    max-width: 280px;
  }
}
.app-documents-item-box-info {
  padding: 15px;
  padding-top: 5px;
  display: flex;
  gap: 40px;
  align-items: center;
  &__row {
    display: flex;
    align-items: center;
    gap: 8px;
    &:nth-child(2) {
      .app-documents-item-box-info__row-text {
        color: #82b8e9;
      }
    }
  }

  &__row-text {
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    letter-spacing: -0.3px;
    color: #413f3f;
  }
}
.app-documents-item-box--new {
}
.app-documents-item-box--canceled {
  .app-documents-item-box__top {
    background: #d4a5b4;
  }
  .app-documents-item-box__row {
    svg {
      path {
        fill: #d4a5b4;
      }
    }
  }
  .app-documents-item-box-info {
    .app-documents-item-box-info__row {
      &:nth-child(1) {
        svg {
          path {
            fill: #d4a5b4;
          }
        }
      }
      &:nth-child(2) {
        svg {
          path {
            stroke: #d4a5b4;
          }
        }
        .app-documents-item-box-info__row-text {
          color: #d4a5b4;
        }
      }
    }
  }
}
.app-documents-item-box--signed {
  .app-documents-item-box__top {
    background: #bfa575;
  }
  .app-documents-item-box__row {
    svg {
      path {
        fill: #bfa575;
      }
    }
  }
  .app-documents-item-box-info {
    .app-documents-item-box-info__row {
      &:nth-child(1) {
        svg {
          path {
            fill: #bfa575;
          }
        }
      }
      &:nth-child(2) {
        svg {
          path {
            stroke: #bfa575;
          }
        }
        .app-documents-item-box-info__row-text {
          color: #bfa575;
        }
      }
    }
  }
}
</style>