<template>
<div>
  <div class="row">
    <div class="">
      <form class="row">
        <div class="col-12 pt-3 col-md-4 col-lg-4">
          <input type="text" class="form-control border-1 color rounded-pill" placeholder="Name">
        </div>
        <div class="col-12 pt-3 col-md-4 col-lg-4">
          <input type="email" class="form-control border-1 color rounded-pill" placeholder="Email">
        </div>
        <div class="col-12 pt-3 col-md-4 col-lg-4">
          <input type="text" class="form-control border-1 color rounded-pill" placeholder="Website">
        </div>
      </form>
      <div class="row">
        <form class="col-12 mb-4">
          <textarea class="form-control border-1 color" rows="3" placeholder="message"></textarea>
        </form>
      </div>
    </div>
  </div>
    <div class="d-flex justify-content-center justify-content-md-center justify-content-lg-end">
      <Button :path="path">Send Now</Button>
    </div>
</div>
</template>

<script>
import Button from '@/components/Button.vue';

  export default {
    name: 'add-comment',
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


input, select, textarea {
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