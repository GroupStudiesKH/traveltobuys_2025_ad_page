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
              <h4>{{ t('product.fkm.title') }}</h4>
              <p>{{ t('product.fkm.intro1') }}</p>
              <p>{{ t('product.fkm.intro2') }}</p>
            </div>
            <div class="table-responsive">
              <table class="table table-striped text-center">
                <thead class="table-danger">
                  <tr>
                    <th style="width: 120px;">{{ t('product.fkm.table.header.product') }}</th>
                    <th style="width: 80px;">A</th>
                    <th style="width: 80px;">B</th>
                    <th style="width: 80px;">F</th>
                    <th style="width: 80px;">GBL-S</th>
                    <th style="width: 80px;">GF-S</th>
                    <th style="width: 80px;">GLT-S</th>
                    <th style="width: 80px;">GLT-S</th>
                    <th style="width: 80px;">GFLT-S</th>
                    <th style="width: 80px;">TBR-S</th>
                    <th style="width: 80px;">ETP-S</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{{ t('product.fkm.table.row.fluorine') }}</td>
                    <td>66%</td>
                    <td>68%</td>
                    <td>70%</td>
                    <td>68%</td>
                    <td>70%</td>
                    <td>64%</td>
                    <td>66%</td>
                    <td>67%</td>
                    <td>60%</td>
                    <td>67%</td>
                  </tr>
                  <tr>
                    <td>{{ t('product.fkm.table.row.chemical') }}</td>
                    <td>○</td>
                    <td>★</td>
                    <td>★★</td>
                    <td>★</td>
                    <td>★★</td>
                    <td>○</td>
                    <td>★</td>
                    <td>★★</td>
                    <td>○</td>
                    <td>★★★</td>
                  </tr>
                  <tr>
                    <td>{{ t('product.fkm.table.row.base') }}</td>
                    <td>×</td>
                    <td>×</td>
                    <td>×</td>
                    <td>○</td>
                    <td>○</td>
                    <td>★</td>
                    <td>★</td>
                    <td>★</td>
                    <td>★★★</td>
                    <td>★★★</td>
                  </tr>
                  <tr>
                    <td>{{ t('product.fkm.table.row.temperature') }}</td>
                    <td>★</td>
                    <td>★</td>
                    <td>○</td>
                    <td>★</td>
                    <td>○</td>
                    <td>★★★</td>
                    <td>★★</td>
                    <td>★★</td>
                    <td>×</td>
                    <td>○</td>
                  </tr>
                  <tr>
                    <td>{{ t('product.fkm.table.row.compression') }}</td>
                    <td>★★★</td>
                    <td>★★</td>
                    <td>★</td>
                    <td>★★</td>
                    <td>★★</td>
                    <td>★★</td>
                    <td>★★</td>
                    <td>★★</td>
                    <td>★</td>
                    <td>★</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div id="fkm_table_hint">
              <p>
                <span>{{ t('product.fkm.rating.excellent') }}</span> 
                <span>{{ t('product.fkm.rating.veryGood') }}</span> 
              </p>
              <p>
                <span>{{ t('product.fkm.rating.good') }}</span> 
                <span>{{ t('product.fkm.rating.fair') }}</span> 
                <span>{{ t('product.fkm.rating.poor') }}</span>
              </p>
            </div>

            <div class="container" id="fkm_section">
                <p><strong>Viton Types Monomer Composition</strong></p>

              <div class="row">
                <div class="col-12 badge">
                  <div class="outline">
                    <img src="/assets/img/fkm-img.png" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
  <Footer />
</template>
