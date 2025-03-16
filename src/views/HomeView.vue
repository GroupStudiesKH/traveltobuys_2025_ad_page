<script>
import { useRouter, useRoute } from "vue-router";
import { onMounted, ref } from "vue";

export default {
  components: {
  },
  setup() {
    const router = useRouter();
    const screenRefs = ref([]);

    onMounted(() => {
      const activeIndices = ref(new Set());

      const defaultObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const index = Array.from(screenRefs.value).indexOf(entry.target);
            if (entry.isIntersecting && !activeIndices.value.has(index)) {
              entry.target.classList.add("animate");
              activeIndices.value.add(index);
            }
          });
        },
        { threshold: 0.5 }
      );

      const screen25_4Observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const index = Array.from(screenRefs.value).indexOf(entry.target);
            if (entry.isIntersecting && !activeIndices.value.has(index)) {
              entry.target.classList.add("animate");
              activeIndices.value.add(index);
            }
          });
        },
        { threshold: 0.1 }
      );

      screenRefs.value = Array.from(
        document.querySelectorAll(".screen_container")
      );

      screenRefs.value.forEach((el) => {
        if (el.parentElement.id == "screen_25_2" || el.parentElement.id == "screen_25_4" ) {
          defaultObserver.observe(el);
        } else if(el.parentElement.id == "screen_25_3" || el.parentElement.id == "screen_25_5") {
          screen25_4Observer.observe(el);
        }
      });

    });

    return {
    };
  },
};
</script>

<template>
  <main>
    <div id="screen_25_1">
      <div class="screen_container animate">

        <div class="left_side">
          <img src="/assets/img/S25-01-banner2.webp" style="width: 80%; margin: 5% 0">
          <img src="/assets/img/S25-01-food.webp">
        </div>

        <img src="/assets/img/S25-01-banner.webp" class="banner">
        <img src="/assets/img/S25-01-banner1.webp" class="banner1">

        <div class="right_side">
          <img src="/assets/img/S25-01-food2.webp">
          <img src="/assets/img/S25-01-banner3.webp" style="width: 60%; margin: 5% 0">
          <img src="/assets/img/S25-01-food3.webp">
        </div>
      </div>
    </div>

    <div id="screen_25_2">
      <div class="screen_container">
        <img src="/assets/img/S25-01-screen2.webp" class="banner">
      </div>
    </div>

    <div id="screen_25_3">
      <div class="screen_container">
        <img src="/assets/img/S25-01-screen3.webp" class="banner">
      </div>
    </div>

    <div id="screen_25_4">
      <div class="screen_container">
        <img src="/assets/img/S25-01-screen4.webp" class="banner">
      </div>
    </div>

    <div id="screen_25_5">
      <div class="screen_container">
        <img src="/assets/img/S25-01-screen5.webp" class="banner">
      </div>
    </div>

  </main>
</template>
