<script>
import { useRouter, useRoute } from "vue-router";
import { onMounted, ref } from "vue";

export default {
  components: {
  },
  setup() {
    const router = useRouter();
    const isIntroScolled = ref(false);

    const handleScroll = () => {
      const targetDiv = document.getElementById("intro");
      const rect = targetDiv.getBoundingClientRect();

      if (rect.top >= 0 && rect.bottom / 2 <= window.innerHeight) {
        isIntroScolled.value = true;
      }
    };

    onMounted(() => {
      window.addEventListener("scroll", handleScroll);
    });

    return {
      isIntroScolled,
    };
  },
};
</script>

<template>
  <main>
    <div id="screen_25_1">
      <div class="screen_container">

        <div class="left_side">
          <img src="/assets/img/S25-01-banner2.png" style="width: 80%; margin: 50px 0">
          <img src="/assets/img/S25-01-food.png">
        </div>

        <img src="/assets/img/S25-01-banner.png" class="banner">

        <div class="right_side">
          <img src="/assets/img/S25-01-food2.png">
          <img src="/assets/img/S25-01-banner3.png" style="width: 60%; margin: 30px 0">
          <img src="/assets/img/S25-01-food3.png">
        </div>
      </div>
    </div>

    <div id="screen_25_2">
      <div class="screen_container">
        <img src="/assets/img/S25-01-screen2.png" class="banner">
      </div>
    </div>

    <div id="screen_25_3">
      <div class="screen_container">
        <img src="/assets/img/S25-01-screen3.png" class="banner">
      </div>
    </div>

  </main>
</template>
