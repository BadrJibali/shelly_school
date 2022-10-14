<template>
  <div id="app">
    <Header />
    <router-view />
    <ContactForm class="pt-1" />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import ContactForm from "./components/Contacts/ContactForm.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    ContactForm,
    Footer
  },
};
</script>

<style lang="scss">
/* Start Font Family import */
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;600;700;800&display=swap");
/* End Font Family import */

:root {
  --gradient-background: linear-gradient(180deg,#fdc830,#f37335);
  --gradient-background90: linear-gradient(90deg,#fdc830,#f37335);
  --gradient-background0: linear-gradient(0deg,#fdc830,#f37335);
  --first-gradient-color: #fdc830;
  --second-gradient-color: #f37335;
  --third-gradient-color: #f58733;
  --background-color: #fdfdfd;
  --main-color: #f37335;
  --alt-color: #fff;
  --black-text-color: #000;
  --gray-text-color: #888;
  --heavy-gray-text-color: #555;
  --active-color: #ff0000;
  --hover-color: #ff5500;
  --overlay-color: #ff550012;
  --focus-color: #fff;
  --background-options-color: #fff;
  --main-transition: 0.3s all ease-in-out;
}
* {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
html {
  scroll-behavior: smooth;
}
body {
  overflow-x: hidden;
  /* Start Font Family */
  font-family: "Poppins", sans-serif;
  /* End Font Family */
  background-color: var(--background-color);
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
}

.color {
  color: var(--main-color);
}

.black-text-color {
  color: var(--black-text-color);
}

.gray-text-color {
  color: var(--gray-text-color);
}

.heavy-gray-text-color {
  color: var(--heavy-gray-text-color);
}

.color-trans {
  color: var(--background-color);
}

.overlay-color {
  color: var(--overlay-color);
}

.no-color {
  background-color: transparent;
}

.bg-color {
  background-color: var(--main-color);
}

.bg-gradient-color {
  background: var(--gradient-background);
}

.bg-gradient-color-90 {
  background: var(--gradient-background90);
}

.transference {
  color: var(--alt-color);
}

.fs-7 {
  font-size: 15px;
}
.fs-8 {
  font-size: 14px;

  @media (max-width: 575.98px) {
    font-size: 12px;
  }
}

.fs-9 {
  font-size: 13px;

  @media (max-width: 575.98px) {
    font-size: 12px;
  }
}

.w-80 {
  width: 80%;

  @media (max-width: 991px) {
    width: 100%;
  }
  @media (max-width: 767px) {
    width: 100%;
  }
}

.w-90 {
  width: 90%;

  @media (max-width: 991px) {
    width: 100%;
  }
  @media (max-width: 767px) {
    width: 100%;
  }
}

// Font Weight
.fw-300 {
  font-weight: 300;
}
.fw-400 {
  font-weight: 400;
}
.fw-500 {
  font-weight: 500;
}
.fw-600 {
  font-weight: 600;
}
.fw-700 {
  font-weight: 700;
}
.fw-800 {
  font-weight: 800;
}

// Address Section Position
.address-start {
  
  h1 {
    width: 100%;
  }

  p {
    max-width: 35rem;

    @media (max-width: 991px) {
    width: 25rem;
    }
    @media (max-width: 767px) {
    width: 20rem;
    }
  }
  
}

.address-center {
  text-align: center;
  margin: auto;

  h1, p {
    margin: auto;
  }

  h1 {
    width: 100%;
  }

  p {
    max-width: 33rem;

    @media (max-width: 991px) {
    width: 28rem;
    }
    @media (max-width: 767px) {
    width: 26rem;
    }
  }
}

.w-fit {
  width: fit-content;
}

</style>
