<script>
import { useRouter, useRoute } from "vue-router";
import { onMounted, ref } from "vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Header,
    Footer,
  },
  setup() {
    const router = useRouter();
    const isIntroScolled = ref(false);

    const handleScroll = () => {
      const targetDiv = document.getElementById("intro");
      const rect = targetDiv.getBoundingClientRect();

      console.log(`rect.bottom: ${rect.bottom}`);
      console.log(`window.innerHeight: ${window.innerHeight}`);

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
  <Header />
  <main id="index">

  </main>
  <Footer />
</template>
