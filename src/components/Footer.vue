<template>
  <footer>
    <div class="container">
      <div class="row">
        <!-- footer up  -->
        <div class="col-12 py-5 border-bottom">
          <div class="row d-flex justify-content-between">
            <!-- Brand  -->
            <div
              class="
                col-12 col-sm-12 col-md-6 col-lg-4
                pb-4
                d-flex
                flex-column flex-sm-column
                align-items-center align-items-md-start align-items-lg-start
              "
            >
              <div class="brand">
                <img
                  class="img-fluid"
                  src="../assets/img/logo.png"
                  alt="Shelly School Center"
                />
              </div>
              <div class="footer-text w-75 pt-4">
                <p
                  class="
                    fs-7
                    gray-text-color
                    text-center text-md-start text-lg-start
                    fw-light
                  "
                >
                  Vivamus porta efficitur nibh nec convallis. Vestibulum egestas
                  efend justo. Ut tellus ipsum, accumsan.
                </p>
              </div>
            </div>
            <!-- Contacts  -->
            <div
              class="col-12 col-sm-12 col-md-6 col-lg-4 d-flex flex-column pb-3"
            >
              <!-- phone -->
              <div class="pb-4">
                <div
                  class="
                    contacts
                    d-flex
                    flex-column flex-md-row
                    justify-content-lg-start
                    align-items-center align-items-md-start align-items-lg-start
                  "
                >
                  <div class="icon pb-2 me-md-3 me-lg-3">
                    <font-awesome-icon class="fs-5 color" icon="phone-flip" />
                  </div>
                  <div class="data text-center text-md-start text-lg-start">
                    <h6 class="fs-7 fw-normal">Call</h6>
                    <p class="m-0 gray-text-color fs-8 fw-light">
                      +201156260918
                    </p>
                  </div>
                </div>
              </div>
              <!-- time -->
              <div class="pb-4">
                <div
                  class="
                    contacts
                    d-flex
                    flex-column flex-md-row
                    justify-content-lg-start
                    align-items-center align-items-md-start align-items-lg-start
                  "
                >
                  <div class="icon pb-2 me-md-3 me-lg-3">
                    <font-awesome-icon class="fs-5 color" icon="clock" />
                  </div>
                  <div class="data text-center text-md-start text-lg-start">
                    <h6 class="fs-7 fw-normal">Work Time</h6>
                    <p class="m-0 gray-text-color fs-8 fw-light">
                      Mon - Fri 8 AM - 5 PM
                    </p>
                  </div>
                </div>
              </div>
              <!-- address -->
              <div class="pb-4">
                <div
                  class="
                    contacts
                    d-flex
                    flex-column flex-md-row
                    justify-content-lg-start
                    align-items-center align-items-md-start align-items-lg-start
                  "
                >
                  <div class="icon pb-2 me-md-3 me-lg-3">
                    <font-awesome-icon class="fs-5 color" icon="location-dot" />
                  </div>
                  <div class="data text-center text-md-start text-lg-start">
                    <h6 class="fs-7 fw-normal">Address</h6>
                    <p class="m-0 gray-text-color fs-8 fw-light">
                      Franklin St, Greenpoint Ave.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <!-- Links  -->
            <div
              class="
                special-links
                m-auto m-md-0 m-lg-0
                col-12 col-sm-12 col-md-6 col-lg-4
                d-flex
                flex-column
                text-center text-md-start text-lg-start
                align-items-center align-items-md-start align-items-lg-start
              "
            >
              <h5 class="pb-3">Quick Links</h5>
              <ul class="border-0">
                <li class="pb-2">
                  <router-link
                    :to="{ name: 'about' }"
                    class="hover gray-text-color"
                    href="#"
                    >About Us</router-link
                  >
                </li>
                <li class="pb-2">
                  <router-link
                    :to="{ name: 'home' }"
                    class="hover gray-text-color"
                    href="#"
                    >Our Classes</router-link
                  >
                </li>
                <li class="pb-2">
                  <router-link
                    :to="{ name: 'home' }"
                    class="hover gray-text-color"
                    href="#"
                    >School Teachers</router-link
                  >
                </li>
                <li class="pb-2">
                  <router-link
                    :to="{ name: 'home' }"
                    class="hover gray-text-color"
                    href="#"
                    >Recent Events</router-link
                  >
                </li>
                <li class="pb-2">
                  <router-link
                    :to="{ name: 'home' }"
                    class="hover gray-text-color"
                    href="#"
                    >Our News</router-link
                  >
                </li>
                <li class="pb-2">
                  <router-link
                    :to="{ name: 'home' }"
                    class="hover gray-text-color"
                    href="#"
                    >Schedule</router-link
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!-- footer down -->
        <div class="col-12">
          <div class="row">
            <div class="col-12 col-md-6 col-lg-6 py-4 pb-sm-1 px-0">
              <p
                class="
                  gray-text-color
                  text-center
                  m-0
                  text-md-start text-lg-start
                "
              >
                © Copyrights 2022 by
                <a class="color" href="#">Badr Jibali</a> All rights reserved.
              </p>
            </div>
            <div class="col-12 col-md-6 col-lg-6 py-4 px-0">
              <div
                class="
                  social-links
                  d-flex
                  justify-content-center
                  justify-content-md-end
                  justify-content-lg-end
                "
              >
                <div
                  class="
                    social-link
                    icon-links
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
                </div>
                <div
                  class="
                    social-link
                    icon-links
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
                </div>
                <div
                  class="
                    social-link
                    icon-links
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="scss" scoped>
.hover {
  transition: var(--main-transition);

  &:hover {
    margin-left: 0.5rem;
    color: var(--hover-color);
  }
}

.icon-links {
  width: 1rem;
  height: 1rem;
  padding: 1rem;
}

.special-links {
  width: 13rem;
}

.social-link {
  cursor: pointer;
  transition: var(--main-transition);

  &:hover {
    background-color: var(--hover-color);
    transform: scale(1.15);
  }
}
</style>