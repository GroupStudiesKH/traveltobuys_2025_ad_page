<template>
    <div class="container" id="badge_area">
        <div class="row">
            <div class="col-6 col-lg-3">
                <a href="ffkm">
                    <img src="/assets/img/m_product_icon01.png" alt="" class="img-fluid mb-2" />
                </a>
            </div>
            <div class="col-6 col-lg-3">
                <a href="fkm">
                    <img src="/assets/img/m_product_icon02.png" alt="" class="img-fluid" />
                </a>
            </div>
            <div class="col-6 col-lg-3">
                <a href="specfkm">
                    <img src="/assets/img/m_product_icon03.png" alt="" class="img-fluid" />
                </a>
            </div>
            <div class="col-6 col-lg-3">
                <a href="pfls">
                    <img src="/assets/img/m_product_icon04.png" alt="" class="img-fluid" />
                </a>
            </div>
        </div>
    </div>
</template>

<script>
import { useI18n } from 'vue-i18n';

export default {
  name: "ProductsMenu",
  setup() {
    const { t, locale } = useI18n();
    return {
      t,
      locale
    };
  },
};
</script>
