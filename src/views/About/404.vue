<template>
<div class="parent">
  <div class="container text-center">
    <h1 class="text-size color fw-700">Oops!</h1>
    <p class="display-2 fw-400 heavy-gray-text-color mt-4">The page does not exist</p>
    <Button :path="id" class="mx-auto w-10 my-5">Home Page</Button>
    <div class="mt-5 pt-5 d-flex justify-content-center align-items-center">
      <a class="social-link icon bg-gradient-color ms-3 position-relative rounded-circle" href="#">
        <font-awesome-icon class="fs-3 color-trans position-absolute top-50 start-50 translate-middle" :icon="['fab', 'facebook-f']"/>
      </a>
      <a class="social-link icon bg-gradient-color ms-3 position-relative rounded-circle" href="#">
        <font-awesome-icon class="fs-3 color-trans position-absolute top-50 start-50 translate-middle" :icon="['fab', 'linkedin-in']"/>
      </a>
      <a class="social-link icon bg-gradient-color ms-3 position-relative rounded-circle" href="#">
        <font-awesome-icon class="fs-3 color-trans position-absolute top-50 start-50 translate-middle" :icon="['fab', 'instagram']"/>
      </a>
    </div>
  </div>
</div>
</template>

<script>
import Button from '@/components/Button.vue';

  export default {
    name: 'not-found',
    components: {
      Button,
    },
    data() {
      return {
        id: 'home', // Name Of Page,
      }
    },
  }
</script>

<style lang="scss" scoped>
.parent {
  background: var(--background-color) url("@/assets/img/error-bg.png");
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  height: 88vh;

    @media (max-width: 575.98px) {
      background: var(--background-color);
    }

  &::before {
    content: "Shelly";
    position: absolute;
    top: 25%;
    left: 50%;
    transform: translate(-50%,-50%);
    color: var(--main-color);
    font-size: 18.75rem;
    font-weight: 600;
    opacity: .06;

    @media (max-width: 991px) {
      font-size: 14rem;
    }

    @media (max-width: 767px) {
      font-size: 10rem;
    }

    @media (max-width: 575.98px) {
      font-size: 6rem;
    }
  }
}

.text-size {
  font-size: 10rem;

    @media (max-width: 1199.98px) {
      font-size: 10rem;
    }

    @media (max-width: 991px) {
      font-size: 10rem;
    }

    @media (max-width: 767px) {
      font-size: 10rem;
    }

    @media (max-width: 575.98px) {
      font-size: 5rem;
    }
}

.w-10 {
  max-width: 50%;
  width: 12.5%;

    @media (max-width: 1199.98px) {
      width: 17%;
    }

    @media (max-width: 991px) {
      width: 23%;
    }

    @media (max-width: 767px) {
      width: 45%;
    }

    @media (max-width: 575.98px) {
      width: 40%;
    }
}

.icon {
  width: 3rem;
  height: 3rem;
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