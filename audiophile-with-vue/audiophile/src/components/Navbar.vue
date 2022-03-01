<template>
  <nav>
    <div class="flex navbar-container">
      <!-- <div class="flex nav-toggle-container"> -->
        <button @click="isExpanded = !isExpanded" class="nav-toggle-mobile"></button>
        <img src="@/assets/images/shared/desktop/logo.svg" alt="audiophile logo">
      <!-- </div> -->
      <ul :class="['flex', 'navbar', isExpanded ? 'show-nav' : 'hide-nav']">
        <li><a href="#">Home</a></li>
        <li><a href="#">Headphones</a></li>
        <li><a href="#">Speakers</a></li>
        <li><a href="#">Earphones</a></li>
      </ul>
      <img src="@/assets/images/shared/desktop/icon-cart.svg" alt="cart icon">
    </div>
    <div class="divider"></div>
  </nav>
</template>

<script>
// import $ from 'jquery';

export default {
  name: 'Navbar',
  data: function() {
    return {
      isExpanded: false,
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "@/assets/scss/abstracts/variables";
@import "@/assets/scss/abstracts/mixins";

.container {
  padding: 0 !important;
}

.navbar-container {
  justify-content: space-between;
  padding: 3rem 2rem;
  position: relative;
  z-index: 5;

  .nav-toggle-container {
    --gap: 1.8rem;
    justify-content: space-between;

    // button {
    //   display: inline-block;
    // }

    // img {
    //   display: inline-block;
    // }
  }

  .nav-toggle-mobile {
    background: transparent;
    border: 0;
    aspect-ratio: 1;
    width: 1.6rem;
    cursor: pointer;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url('../assets/images/shared/tablet/icon-hamburger.svg');

    @include for-size(tablet-up) {
      display: none;
    }
  }


  img {
    align-self: center;
    cursor: pointer;
  }
}

.navbar {
  --gap: 1.5rem;
  padding: 3rem 2rem;
  flex-direction: column;
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: $clr-dark-3;
  z-index: 0;
  transition: all 500ms ease-in-out;

  &.hide-nav {
    transform: translateY(-100%);
    // display: none;

    @include for-size(tablet-up) {
      transform: none;
      // display: flex;
    }
  }

  &.show-nav {
    transform: translateY(0);

    @include for-size(tablet-up) {
      transform: none;
    }
  }

  li {
    list-style-type: none;

    a {
      font-weight: 700;
      text-transform: uppercase;
      font-size: --fs-100;
      color: $clr-white;
      transition: all ease-in-out 300ms;

      &:hover {
        color: $clr-orange-1;
      }
    }
  }

  @include for-size(tablet-up) {
    flex-direction: row;
    --gap: 3rem;
    position: relative;
    width: auto;
    padding: 0;
    z-index: 0;
  }
}


.divider {
  height: 1px;
  background-color: $clr-white;
  opacity: 20%;
}

</style>
