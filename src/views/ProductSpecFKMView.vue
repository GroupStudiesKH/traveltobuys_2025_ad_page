<script>
import { useRouter, useRoute } from "vue-router";
import { onMounted, ref } from "vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import ProductsMenu from "@/components/ProductsMenu.vue";
import { useI18n } from "vue-i18n";

export default {
  components: {
    Header,
    Footer,
    ProductsMenu,
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
  <main id="product">
    <div
      class="banner"
      style="background-image: url('/assets/img/product_banner.png')"
    ></div>

    <div id="product_info">
      <ProductsMenu />

      <div class="container text-section">
        <div class="row">
          <div class="col-12">
            <div class="mb-4">
              <h4>{{ t('product.specFkm.title') }}</h4>
              <p>{{ t('product.specFkm.intro1') }}</p>

              <p>{{ t('product.specFkm.intro2') }}</p>

              <p>
                {{ t('product.specFkm.series.intro') }}<br/>
                {{ t('product.specFkm.series.highPurity') }}<br/>
                {{ t('product.specFkm.series.thermalResistant') }}<br/>
                {{ t('product.specFkm.series.highFluorine') }}<br/>
                {{ t('product.specFkm.series.chemicalResistant') }}<br/>
                {{ t('product.specFkm.series.antiStatic') }}<br/>
                {{ t('product.specFkm.series.lowTemperature') }}
              </p>
              <br/>
              <p>{{ t('product.specFkm.conclusion') }}</p>

              <img src="/assets/img/specfkm_img.jpg" class="w-100" />

            </div>

          </div>
        </div>
      </div>
    </div>
  </main>
  <Footer />
</template>
