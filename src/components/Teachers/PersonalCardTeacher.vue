<template>
<div>
  <ul class="personal-card rounded-3">
    <li class="d-flex align-items-start mb-3">
      <h6 class="w-text m-0 fw-300 fs-8">DOB</h6>
      <span class="text-start fs-8 fw-500 color">{{ personal.dob }}</span>
    </li>
    <li class="d-flex align-items-start mb-3">
      <h6 class="w-text m-0 fw-300 fs-8">Education</h6>
      <span class="text-start fs-8 fw-500 color">{{ personal.education }}</span>
    </li>
    <li class="d-flex align-items-start">
      <h6 class="w-text m-0 fw-300 fs-8">Experience</h6>
      <span class="text-start fs-8 fw-500 color">{{ personal.experience }}</span>
    </li>
  </ul>
</div>
</template>

<script>
  export default {
    name: 'personal-card-teacher',
    props: ['personal']
  }
</script>

<style lang="scss" scoped>
.personal-card {
  position: relative;
  border: 0.125rem solid var(--main-color);
  padding: 2.2rem 2rem;
  width: 60%;

  @media (max-width: 1200px) {
    width: 100%;
  }
  
  &::before {
    content: "";
    background-image: url("@/assets/img/teachers-img/circle3.png");
    background-repeat: no-repeat;
    position: absolute;
    top: 0;
    left: 9rem;
    width: 3rem;
    height: 1.5rem;
  }

  &::after {
    content: "";
    background-image: url("@/assets/img/teachers-img/circle4.png");
    background-repeat: no-repeat;
    position: absolute;
    bottom: 0;
    right: 0;
    width: 4rem;
    height: 4rem;
  }
}

.w-text {
  width: 30%;
}
</style>