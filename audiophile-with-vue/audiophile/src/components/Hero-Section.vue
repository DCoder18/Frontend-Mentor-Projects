<template>

  <section class="hero flow flex">
    <div>
      <p class="heading heading--7">New product</p>
      <h2 class="heading heading--1">XX99 Mark II Headphones</h2>
      <p>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
      <a class="btn btn--primary" href="#">See product</a>
    </div>
  </section>
  
</template>

<script>
export default {
  name: 'Hero',
}
</script>

<style lang="scss" scoped>
  .hero {
    padding: 2rem;
    --flow-space: 2.4rem;
    background-image: url("@/assets/images/home/desktop/image-hero.jpg");
    background-position: left bottom .8rem;
    background-repeat: no-repeat;
    background-size: cover;
    height: 60vh;
    justify-content: center;
    flex-direction: column;
  }

  .heading--7 {
    opacity: 50%;
  }

  .heading--1 {
    max-width: 20ch;
  }

  p {
    opacity: 75%;
    max-width: 40ch;
  }

  .btn--primary {
    --flow-space: 4rem;
  }
</style>