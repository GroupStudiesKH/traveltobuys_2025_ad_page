<template>
  <header class="navbar navbar-expand-lg" :class="{ home: isHome }">
    <div class="container">
      <a class="navbar-brand" :href="'/'">
        <img src="/assets/img/logo.svg" alt="" />
      </a>
      <button 
        class="navbar-toggler ms-auto" 
        type="button" 
        data-bs-toggle="collapse" 
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">

        <button 
          class="btn-close d-lg-none" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav" 
          aria-label="Close"
        ></button>

        <ul class="navbar-nav ml-auto" :class="locale">
          <li class="nav-item">
            <a class="nav-link" :href="`/about`">header.about</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" :href="`/material`">header.material</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" :href="`/product/ffkm`">header.product</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" :href="`/lab`">header.lab</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" :href="`/service`">header.service</a>
          </li>
          <li class="nav-item language_switch dropdown d-none d-lg-block">
            <div
              class="dropdown-toggle"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <span class="material-icons">&#xE894;</span>
            </div>


          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
import { ref, onMounted, computed } from "vue";
import { useRouter, useRoute } from "vue-router";

export default {
  name: "Header",
  setup() {
    const route = useRoute();
    const router = useRouter();


    const isHome = computed(() => {
      return route.name === "home";
    });





    onMounted(() => {

    });

    return {
      isHome,
    };
  },
};
</script>
