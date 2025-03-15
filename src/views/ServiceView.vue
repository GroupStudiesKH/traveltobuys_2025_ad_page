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
  <main id="service">
    <div
      class="banner"
      style="background-image: url('/assets/img/service_banner.webp')"
    ></div>
   
    <div class="container">
        <div class="row">
          <div class="col-12" id="service_intro">
           <p class="page_intro">
            {{ t('service.pageIntro') }}
      </p>
    </div>
  </div>
</div>
     <div class="container text-section">
      

      <h4>{{ t('service.customCompoundTitle') }}</h4>
      <div>
        <img
          src="/assets/img/service_picintext.webp"
          alt="實驗室工作人員"
          class="worker"
        />
        <p>
          {{ t('service.customCompoundText1') }}
        </p>
        <p>
          {{ t('service.customCompoundText2') }}
        </p>
      </div>

      <h4 class="mt-5">{{ t('service.customPartsTitle') }}</h4>
      <p>
        {{ t('service.customPartsText') }}
      </p>

      <img
        src="/assets/img/service_center.webp"
        alt="波浪紋理"
        style="width: 100%; margin: 20px 0"
      />

      <div class="mt-5 row">
        <div class="col-12 col-md-6 mb-4">
          <h4>{{ t('service.inventoryPlanTitle') }}</h4>
          <p>
            {{ t('service.inventoryPlanText') }}
          </p>
        </div>
        <div class="col-12 col-md-6">
          <h4>{{ t('service.technicalSupportTitle') }}</h4>
          <p>
            {{ t('service.technicalSupportText') }}
          </p>
        </div>
      </div>
    </div>
  </main>
  <Footer />
</template>
