<script>
import { useRouter, useRoute } from "vue-router";
import { onMounted, ref } from "vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import { useI18n } from "vue-i18n";

export default {
  components: {
    Header,
    Footer,
  },
  setup() {
    const router = useRouter();
    const isIntroScolled = ref(false);
    const { t, locale } = useI18n();

    return {
      isIntroScolled,
      t,
      locale,
    };
  },
};
</script>

<template>
  <Header />
  <main id="lab">
    <div
      class="banner"
      style="background-image: url('/assets/img/lab_banner.webp')"
    ></div>

    <div id="lab_intro">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <p v-html="t('lab.intro')"></p>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="row top_badge">
          <div class="col-12 col-md-6">
            <img class="top_image" src="/assets/img/clean_room.png" alt="" />
          </div>
          <div class="col-12 col-md-6">
            <img class="top_image" src="/assets/img/clean_room2.png" alt="" />
          </div>
          <div class="col-12 mt-3">
            <h4 class="text-decoration">{{ t('lab.ffkmTitle') }}</h4>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="row">
          <div class="col-6 col-md-4">
            <div class="top_badge">
              <img src="/assets/img/lab_1.png" alt="" />
              <h4 class="text-decoration">{{ t('lab.equipment1') }}</h4>
            </div>
          </div>
          <div class="col-6 col-md-4">
            <div class="top_badge">
              <img src="/assets/img/lab_2.png" alt="" />
              <h4 class="text-decoration">{{ t('lab.equipment2') }}</h4>
            </div>
          </div>
          <div class="col-6 col-md-4">
            <div class="top_badge">
              <img src="/assets/img/lab_3.png" alt="" />
              <h4 class="text-decoration">{{ t('lab.equipment3') }}</h4>
            </div>
          </div>
          <div class="col-6 col-md-4">
            <div class="top_badge">
              <img src="/assets/img/lab_4.png" alt="" />
              <h4 class="text-decoration">{{ t('lab.equipment4') }}</h4>
            </div>
          </div>
          <div class="col-6 col-md-4">
            <div class="top_badge">
              <img src="/assets/img/lab_5.png" alt="" />
              <h4 class="text-decoration">{{ t('lab.equipment5') }}</h4>
            </div>
          </div>
          <div class="col-6 col-md-4">
            <div class="top_badge">
              <img src="/assets/img/lab_6.png" alt="" />
              <h4 class="text-decoration">{{ t('lab.equipment6') }}</h4>
            </div>
          </div>
          <div class="col-6 col-md-4">
            <div class="top_badge">
              <img src="/assets/img/lab_7.png" alt="" />
              <h4 class="text-decoration">{{ t('lab.equipment7') }}</h4>
            </div>
          </div>
          <div class="col-6 col-md-4">
            <div class="top_badge">
              <img src="/assets/img/lab_8.png" alt="" />
              <h4 class="text-decoration">{{ t('lab.equipment8') }}</h4>
            </div>
          </div>
          <div class="col-6 col-md-4">
            <div class="top_badge">
              <img src="/assets/img/lab_9.png" alt="" />
              <h4 class="text-decoration">{{ t('lab.equipment9') }}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container text-section mb-5">
        <h4>{{ t('lab.qualityAssurance.title') }}</h4>
        <p>{{ t('lab.qualityAssurance.content') }}</p>
        <br>
        <h4>{{ t('lab.cleanroom.title') }}</h4>
        <p>{{ t('lab.cleanroom.content') }}</p>
        <br>
        <h4>{{ t('lab.customerSupport.title') }}</h4>
        <p>{{ t('lab.customerSupport.intro') }}</p>
        <ul>
          <li>{{ t('lab.customerSupport.point1') }}</li>
          <li>{{ t('lab.customerSupport.point2') }}</li>
          <li>{{ t('lab.customerSupport.point3') }}</li>
        </ul>
        <p>{{ t('lab.customerSupport.conclusion') }}</p>
        <br>
        <h4>{{ t('lab.qualityManagement.title') }}</h4>
        <p>{{ t('lab.qualityManagement.content') }}</p>
        <p>{{ t('lab.conclusion') }}</p>
        <br>
      </div>
  </main>
  <Footer />
</template>
