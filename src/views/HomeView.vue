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

        switch (el.parentElement.id) {
          case "screen_25_3":
          case "screen_25_2":
          case "screen_25_4":
          case "screen_25_5":
          case "screen_25_6":
          case "screen_25_7":
          case "screen_25_8":
          case "screen_25_10":
          case "screen_25_12":
            defaultObserver.observe(el)
            break;
          case "screen_25_9":
          case "screen_25_11":
            screen25_4Observer.observe(el);
            break;
          default:
            break;
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


    <div id="screen_25_6">
      <div class="screen_container animate">
        <img src="/assets/img/S25-02-screen1.webp" class="banner" />
      </div>
    </div>

    <div id="screen_25_7">
      <div class="screen_container">
        <img src="/assets/img/S25-02-screen2.webp" class="banner" />
      </div>
    </div>

    <div id="screen_25_8">
      <div class="screen_container">
        <img src="/assets/img/S25-02-screen3.webp" class="banner" />
      </div>
    </div>

    <div id="screen_25_9">
      <div class="screen_container">
        <img src="/assets/img/S25-02-screen4.webp" class="banner" />
      </div>
    </div>

    <div id="screen_25_10">
      <div class="screen_container animate">
        <img src="/assets/img/S25_03_screen1.webp" class="banner">
      </div>
    </div>

    <div id="screen_25_11">
      <div class="screen_container">
        <img src="/assets/img/S25_03_screen2.webp" class="banner">
        <img src="/assets/img/S25_03_screen3.webp" class="banner">
      </div>
    </div>

    <div id="screen_25_12">
      <div class="screen_container">
      </div>
    </div>

    <a class="add"><img src="/assets/img/S25-01-add.webp"></a>


  </main>
</template>
