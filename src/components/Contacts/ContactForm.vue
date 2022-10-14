<template>
  <div class="container px-2 px-md-0 px-lg-0">
    <div class="row back bg-gradient-color-90 mx-2 mx-md-0 mx-lg-0 mt-5 border-0 rounded-3  pad">
      <div class="col-lg-4 d-flex flex-column text-center text-lg-start justify-content-between align-items-center align-items-lg-start">
        <h1 class="fw-700 m-auto w-100 w-md-75 w-lg-75 lh-base">Join us and stay tuned!</h1>
        <Button :path="path">Join Us</Button>
      </div>
      <div class="col-lg-8">
        <form class="row">
          <div class="col-12 pt-3 col-md-4 col-lg-4">
            <input type="text" class="form-control border-0 color rounded-pill" placeholder="name">
          </div>
          <div class="col-12 pt-3 col-md-4 col-lg-4">
            <input type="email" class="form-control border-0 color rounded-pill" placeholder="email">
          </div>
          <div class="col-12 pt-3 col-md-4 col-lg-4">
            <select class="form-select border-0 color rounded-pill" aria-label="Default select example">
              <option selected>Class</option>
              <option value="1">Class One</option>
              <option value="2">Class Two</option>
              <option value="3">Class Three</option>
            </select>
          </div>
        </form>
        <div class="row">
          <form class="col-12 mb-4">
            <textarea class="form-control border-0 color" rows="3" placeholder="message"></textarea>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from '@/components/Button.vue';

  export default {
    name: 'contact-form',
    components: {
      Button,
    },
    data() {
      return {
        path: 'contacts'
      }
    },
  }
</script>

<style lang="scss" scoped>

.pad {
  position: relative;
  padding: 3rem 5rem;
  text-align: start;

  @media (max-width: 767px) {
    padding: 1.5rem 0.5rem;
  }

  &:before {
    content: "";
    position: absolute;
    background-image: url("@/assets/img/news-bg.png");
    background-repeat: no-repeat;
    left: 0;
    bottom: 15%;
    width: 4rem;
    height: 8rem;
  }

  &::after {
    content: "";
    position: absolute;
    background-image: url("@/assets/img/circle5.png");
    background-repeat: no-repeat;
    right: 0;
    bottom: 2%;
    width: 5rem;
    height: 7rem;
  }
}

input, select, textarea {
  background-color: #fddead;
  font-size: 0.9rem;
  font-weight: 300;
  font-style: italic;
  padding: 0.65rem 1rem;
  color: var(--gray-text-color);


  &:focus {
    background-color: #fddead;
    outline: none;
    box-shadow: none;
  }
}

textarea {
  border-radius: 1rem;
  resize: none;
  margin-top: 1.6rem;
}

</style>