<template>
  <header>
    <div class="row">
      <div class="col-12 px-lg-0">
        <div
          class="
            container
            py-4
            px-lg-0
            
            border-bottom
            d-none d-lg-block d-xl-block d-xxl-block
          "
        >
          <div class="row align-items-center">
            <div class="col-3">
              <a class="navbar-brand" href="#">
                <img
                  class="navbar-brand img-fluid"
                  src="../assets/img/logo.png"
                  alt="Shelly School Center"
                />
              </a>
            </div>
            <div class="col-9">
              <div class="row justify-content-end">
                <!-- phone -->
                <div class="col-4">
                  <div class="contacts d-flex justify-content-end">
                    <div class="icon position-relative me-3">
                      <font-awesome-icon
                        class="
                          fs-5
                          position-absolute
                          top-50
                          start-50
                          translate-middle
                          color
                        "
                        icon="phone-flip"
                      />
                    </div>
                    <div class="data">
                      <h6 class="fs-7 fw-normal">Call</h6>
                      <p class="m-0 fs-8 fw-light">+201156260918</p>
                    </div>
                  </div>
                </div>
                <!-- time -->
                <div class="col-4">
                  <div class="contacts d-flex justify-content-end">
                    <div class="icon position-relative me-3">
                      <font-awesome-icon
                        class="
                          fs-5
                          position-absolute
                          top-50
                          start-50
                          translate-middle
                          color
                        "
                        icon="clock"
                      />
                    </div>
                    <div class="data">
                      <h6 class="fs-7 fw-normal">Work Time</h6>
                      <p class="m-0 fs-8 fw-light">Mon - Fri 8 AM - 5 PM</p>
                    </div>
                  </div>
                </div>
                <!-- address -->
                <div class="col-4">
                  <div class="contacts d-flex justify-content-end">
                    <div class="icon position-relative me-3">
                      <font-awesome-icon
                        class="
                          fs-5
                          position-absolute
                          top-50
                          start-50
                          translate-middle
                          color
                        "
                        icon="location-dot"
                      />
                    </div>
                    <div class="data">
                      <h6 class="fs-7 fw-normal">Address</h6>
                      <p class="m-0 fs-8 fw-light">
                        Franklin St, Greenpoint Ave.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-12">
      <nav class="navbar navbar-expand-lg my-3 py-1">
        <div class="container px-lg-0">
          <a class="navbar-brand d-block d-md-block d-lg-none" href="#">
            <img
              class="img-fluid"
              src="@/assets/img/logo.png"
              alt="Shelly School Center"
            />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <font-awesome-icon class="color navbar-toggler-icon" icon="bars" />
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item me-5">
                <router-link
                  :to="{ name: 'home' }"
                  class="nav-link ps-0 color active fs-5"
                  aria-current="page"
                  href="#"
                  >Home</router-link
                >
              </li>
              <li class="nav-item me-5 dropdown">
                <router-link
                  :to="{ name: 'about' }"
                  class="nav-link ps-0 before black-text-color fs-5"
                  id="navbarDropdownMenuLink"
                  role="button"
                  aria-expanded="false"
                  >About</router-link
                >
                <ul
                  class="
                    dropdown-menu
                    border-0
                    rounded-3
                    p-2
                    shadow
                    m-0
                    animate
                    slideIn
                  "
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <router-link
                      :to="{ name: 'events' }"
                      class="dropdown-item black-text-color py-3 rounded-3"
                      >Events</router-link
                    >
                  </li>
                  <li>
                    <router-link

                      :to="{ path:`/events/event/${eventsCards[0].id}` }"

                      class="dropdown-item black-text-color py-3 rounded-3"
                      >Event Single</router-link
                    >
                  </li>
                  <li>
                    <router-link
                      :to="{ name: 'schedule' }"
                      class="dropdown-item black-text-color py-3 rounded-3"
                      >Schedule</router-link
                    >
                  </li>
                  <li>
                    <router-link
                      :to="{ name: 'notFound' }"
                      class="dropdown-item black-text-color py-3 rounded-3"
                      >404</router-link
                    >
                  </li>
                </ul>
              </li>
              <li class="nav-item me-5 dropdown">
                <router-link
                  :to="{ name: 'classes' }"
                  class="nav-link ps-0 before black-text-color fs-5"
                  id="navbarDropdownMenuLink"
                  role="button"
                  aria-expanded="false"
                  >Classes</router-link
                >
                <ul
                  class="
                    dropdown-menu
                    border-0
                    rounded-3
                    p-2
                    shadow
                    m-0
                    animate
                    slideIn
                  "
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <router-link

                      :to="{ path:`/classes/class/${classesCards[0].id}` }"

                      class="dropdown-item black-text-color py-3 rounded-3"
                      >Class Single</router-link
                    >
                  </li>
                </ul>
              </li>
              <li class="nav-item me-5 dropdown">
                <router-link
                  :to="{ name: 'teachers' }"
                  class="nav-link ps-0 before black-text-color fs-5"
                  id="navbarDropdownMenuLink"
                  role="button"
                  aria-expanded="false"
                  >Teachers</router-link
                >
                <ul
                  class="
                    dropdown-menu
                    border-0
                    rounded-3
                    p-2
                    shadow
                    m-0
                    animate
                    slideIn
                  "
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <router-link

                      :to="{ path:`/teachers/teacher/${teachersData[0].id}` }"

                      class="dropdown-item black-text-color py-3 rounded-3"
                      >Teacher Single</router-link
                    >
                  </li>
                </ul>
              </li>
              <li class="nav-item me-5 dropdown">
                <router-link
                  :to="{ name: 'blog' }"
                  class="nav-link ps-0 before black-text-color fs-5"
                  id="navbarDropdownMenuLink"
                  role="button"
                  aria-expanded="false"
                  >Blog</router-link
                >
                <ul
                  class="
                    dropdown-menu
                    border-0
                    rounded-3
                    p-2
                    shadow
                    m-0
                    animate
                    slideIn
                  "
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <router-link
                      :to="{ name: 'blog-single' }"
                      class="dropdown-item black-text-color py-3 rounded-3"
                      >Blog Single</router-link
                    >
                  </li>
                </ul>
              </li>
              <li class="nav-item me-5">
                <router-link
                  :to="{ name: 'contacts' }"
                  class="nav-link ps-0 before black-text-color fs-5"
                  >Contacts</router-link
                >
              </li>
            </ul>
          </div>
          <!-- Social Links -->
          <div
            class="social-links d-none d-sm-none d-md-none d-lg-block d-lg-flex"
          >
            <a
              class="
                social-link
                icon
                bg-color
                ms-3
                position-relative
                rounded-circle
              "
              href="#"
            >
              <font-awesome-icon
                class="
                  color-trans
                  position-absolute
                  top-50
                  start-50
                  translate-middle
                "
                :icon="['fab', 'facebook-f']"
              />
            </a>
            <a
              class="
                social-link
                icon
                bg-color
                ms-3
                position-relative
                rounded-circle
              "
              href="#"
            >
              <font-awesome-icon
                class="
                  color-trans
                  position-absolute
                  top-50
                  start-50
                  translate-middle
                "
                :icon="['fab', 'linkedin-in']"
              />
            </a>
            <a
              class="
                social-link
                icon
                bg-color
                ms-3
                position-relative
                rounded-circle
              "
              href="#"
            >
              <font-awesome-icon
                class="
                  color-trans
                  position-absolute
                  top-50
                  start-50
                  translate-middle
                "
                :icon="['fab', 'instagram']"
              />
            </a>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  props: ['event', 'class'],
  computed: {
    eventsCards() {
      return this.$store.state.events;
    },

    classesCards() {
      return this.$store.state.classSingleData;
    },

    classesCards() {
      return this.$store.state.classSingleData;
    },

    teachersData() {
      return this.$store.state.teachers;
    },
  },
};
</script>

<style lang="scss" scoped>
.icon {
  width: 2rem;
  height: 2rem;
}

.navbar-toggler {
  color: var(--hover-color);

  &:focus {
    box-shadow: none;
    box-shadow: 0 0 0.3rem 0.02rem;
  }
}

.social-link {
  cursor: pointer;
  transition: var(--main-transition);

  &:hover {
    background-color: var(--hover-color);
    transform: scale(1.15);
  }
}

.nav-link:focus {
  color: var(--hover-color);
}

.active {
  transition: var(--main-transition);

  &:hover {
    color: var(--hover-color);
  }
  @media (min-width: 991px) {
    &::before {
      content: "";
      width: 1.3rem;
      height: 0.23rem;
      background-color: var(--main-color);
      position: absolute;
      bottom: 0;
      border-radius: 100rem;
      transition: var(--main-transition);
    }
  }
}

.before {
  transition: var(--main-transition);

  &:hover {
    color: var(--hover-color);
  }

  @media (min-width: 991px) {
    &::before {
      content: "";
      width: 0;
      height: 0.23rem;
      background-color: var(--main-color);
      position: absolute;
      bottom: 0;
      border-radius: 100rem;
      transition: var(--main-transition);
    }

    &:hover::before {
      width: 1.3rem;
    }
  }
}

// Start Dropdown Hover No Click.
.dropdown-item {
  transition: var(--main-transition);

  &:hover {
    color: var(--hover-color);
    background-color: transparent;
  }
}

.dropdown:hover .dropdown-menu {
  display: block;
}

// Dropdown Animation.
@media (min-width: 768px) {
  .animate {
    animation-duration: 0.4s;
    -webkit-animation-duration: 0.4s;
    animation-fill-mode: both;
    -webkit-animation-fill-mode: both;
  }
}

@keyframes slideIn {
  0% {
    transform: translateY(2rem);
    opacity: 0;
  }

  100% {
    transform: translateY(0rem);
    opacity: 1;
  }

  0% {
    transform: translateY(1rem);
    opacity: 0;
  }
}

@-webkit-keyframes slideIn {
  0% {
    -webkit-transform: transform;
    -webkit-opacity: 0;
  }

  100% {
    -webkit-transform: translateY(0);
    -webkit-opacity: 1;
  }

  0% {
    -webkit-transform: translateY(2rem);
    -webkit-opacity: 0;
  }
}

.slideIn {
  -webkit-animation-name: slideIn;
  animation-name: slideIn;
}
// End Dropdown Hover No Click.
</style>