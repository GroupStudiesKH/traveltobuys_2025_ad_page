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
<style scoped>
@media (min-width: 1280px) {
  #chemicalResistantTable th:first-child {
    line-height: 47px;
  }
}
</style>
<template>
  <Header />
  <main id="product" :class="locale">
    <div
      class="banner"
      style="background-image: url('/assets/img/product_banner.png')"
    ></div>

    <div id="product_info">
      <ProductsMenu />

      <div class="container text-section">
        <h4>{{ t("product.ffkm.title") }}</h4>
      </div>
      <div class="container" id="ffkm_section">
        <div class="row">
          <div class="col-12 badge">
            <div class="outline">
              <img src="/assets/img/ffkm_heading.png" />
            </div>
          </div>
        </div>
      </div>

      <div class="container company_card">
        <div class="row">
          <div class="col-12 card">
            <h4>
              <img src="/assets/img/ffkm_icon.png" />{{
                t("product.ffkm.chemicalResistant.title")
              }}
            </h4>
            <p>{{ t("product.ffkm.chemicalResistant.description") }}</p>
            <p>
              <strong>{{
                t("product.ffkm.chemicalResistant.equivalent")
              }}</strong>
            </p>
            <div class="table-responsive">
              <table class="table table-striped" id="chemicalResistantTable">
                <thead class="table-danger">
                  <tr>
                    <th
                      style="width: 120px; line-height: 47px"
                      v-html="
                        t('product.ffkm.chemicalResistant.table.heading1')
                      "
                    ></th>
                    <th style="width: 80px; line-height: 47px">FC750B</th>
                    <th style="width: 80px; line-height: 47px">FC750W</th>
                    <th style="width: 80px; line-height: 47px">FC752B</th>
                    <th style="width: 80px; line-height: 47px">FC752W</th>
                    <th style="width: 80px; line-height: 47px">FC800B</th>
                    <th style="width: 80px; line-height: 47px">FC900B</th>
                    <th style="width: 80px; line-height: 47px">FC600W</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th
                      v-html="
                        t('product.ffkm.chemicalResistant.table.heading2')
                      "
                    ></th>
                    <td>75</td>
                    <td>74</td>
                    <td>76</td>
                    <td>74</td>
                    <td>81</td>
                    <td>90</td>
                    <td>62</td>
                  </tr>
                  <tr>
                    <td
                      v-html="
                        t('product.ffkm.chemicalResistant.table.heading3')
                      "
                    ></td>
                    <td>{{ t("product.color.black") }}</td>
                    <td>{{ t("product.color.white") }}</td>
                    <td>{{ t("product.color.black") }}</td>
                    <td>{{ t("product.color.beige") }}</td>
                    <td>{{ t("product.color.black") }}</td>
                    <td>{{ t("product.color.black") }}</td>
                    <td>{{ t("product.color.white") }}</td>
                  </tr>
                  <tr>
                    <td
                      v-html="
                        t('product.ffkm.chemicalResistant.table.heading4')
                      "
                    ></td>
                    <td>10</td>
                    <td>4.5</td>
                    <td>11.6</td>
                    <td>7.1</td>
                    <td>11</td>
                    <td>17</td>
                    <td>4.5</td>
                  </tr>
                  <tr>
                    <td
                      v-html="
                        t('product.ffkm.chemicalResistant.table.heading5')
                      "
                    ></td>
                    <td>17.5</td>
                    <td>10</td>
                    <td>15.8</td>
                    <td>18</td>
                    <td>18.5</td>
                    <td>21</td>
                    <td>14.1</td>
                  </tr>
                  <tr>
                    <td
                      v-html="
                        t('product.ffkm.chemicalResistant.table.heading6')
                      "
                    ></td>
                    <td>177</td>
                    <td>190</td>
                    <td>129</td>
                    <td>185</td>
                    <td>150</td>
                    <td>125</td>
                    <td>188</td>
                  </tr>
                  <tr>
                    <td
                      v-html="
                        t('product.ffkm.chemicalResistant.table.heading7')
                      "
                    ></td>
                    <td>17</td>
                    <td>25</td>
                    <td>20</td>
                    <td>21</td>
                    <td>24</td>
                    <td>30</td>
                    <td>19</td>
                  </tr>
                  <tr>
                    <td
                      v-html="
                        t('product.ffkm.chemicalResistant.table.heading8')
                      "
                    ></td>
                    <td>250</td>
                    <td>250</td>
                    <td>275</td>
                    <td>275</td>
                    <td>250</td>
                    <td>250</td>
                    <td>250</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div class="container company_card">
        <div class="row">
          <div class="col-12 card">
            <h4>
              <img src="/assets/img/ffkm_icon.png" />{{
                t("product.ffkm.thermalResistant.title")
              }}
            </h4>
            <p>{{ t("product.ffkm.thermalResistant.description1") }}</p>

            <p>
              <strong>{{
                t("product.ffkm.thermalResistant.equivalent")
              }}</strong>
            </p>
            <div class="table-responsive">
              <table class="table table-striped">
                <thead class="table-danger">
                  <tr>
                    <th
                      style="width: 150px; line-height: 47px"
                      v-html="t('product.ffkm.thermalResistant.table.heading1')"
                    ></th>
                    <th style="line-height: 47px">FT750B</th>
                    <th style="line-height: 47px">FT750W</th>
                    <th style="line-height: 47px">FT900B</th>
                    <th style="line-height: 47px">FT600W</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td
                      v-html="t('product.ffkm.thermalResistant.table.heading2')"
                    ></td>
                    <td>74</td>
                    <td>74</td>
                    <td>91</td>
                    <td>62</td>
                  </tr>
                  <tr>
                    <td
                      v-html="t('product.ffkm.thermalResistant.table.heading3')"
                    ></td>
                    <td>{{ t("product.color.black") }}</td>
                    <td>{{ t("product.color.creamwhite") }}</td>
                    <td>{{ t("product.color.black") }}</td>
                    <td>{{ t("product.color.white") }}</td>
                  </tr>
                  <tr>
                    <td
                      v-html="t('product.ffkm.thermalResistant.table.heading4')"
                    ></td>
                    <td>6</td>
                    <td>4.5</td>
                    <td>13.5</td>
                    <td>3.3</td>
                  </tr>
                  <tr>
                    <td
                      v-html="t('product.ffkm.thermalResistant.table.heading5')"
                    ></td>
                    <td>14</td>
                    <td>7.5</td>
                    <td>16.5</td>
                    <td>11</td>
                  </tr>
                  <tr>
                    <td
                      v-html="t('product.ffkm.thermalResistant.table.heading6')"
                    ></td>
                    <td>260</td>
                    <td>262</td>
                    <td>115</td>
                    <td>189</td>
                  </tr>
                  <tr>
                    <td
                      v-html="t('product.ffkm.thermalResistant.table.heading7')"
                    ></td>
                    <td>23</td>
                    <td>24</td>
                    <td>25</td>
                    <td>11</td>
                  </tr>
                  <tr>
                    <td
                      v-html="t('product.ffkm.thermalResistant.table.heading8')"
                    ></td>
                    <td>330</td>
                    <td>330</td>
                    <td>330</td>
                    <td>330</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div class="container company_card">
        <div class="row">
          <div class="col-12 card">
            <h4>
              <img src="/assets/img/ffkm_icon.png" />{{
                t("product.ffkm.highPurity.title")
              }}
            </h4>
            <p>{{ t("product.ffkm.highPurity.intro") }}</p>
            <ol>
              <li>{{ t("product.ffkm.highPurity.feature1") }}</li>
              <li>{{ t("product.ffkm.highPurity.feature2") }}</li>
              <li>{{ t("product.ffkm.highPurity.feature3") }}</li>
              <li>{{ t("product.ffkm.highPurity.feature4") }}</li>
              <li>{{ t("product.ffkm.highPurity.feature5") }}</li>
              <li>{{ t("product.ffkm.highPurity.feature6") }}</li>
              <li>{{ t("product.ffkm.highPurity.feature7") }}</li>
              <li>{{ t("product.ffkm.highPurity.feature8") }}</li>
            </ol>
            <p>{{ t("product.ffkm.highPurity.applications") }}</p>
            <p>{{ t("product.ffkm.highPurity.customization") }}</p>
            <p>
              <strong>{{ t("product.ffkm.highPurity.cert") }}</strong>
            </p>
            <div class="table-responsive">
              <table class="table table-striped">
                <thead class="table-danger">
                  <tr>
                    <th
                      style="width: 180px; line-height: 47px"
                      v-html="t('product.ffkm.highPurity.table.heading1')"
                    ></th>
                    <th style="line-height: 47px">FU800W</th>
                    <th style="line-height: 47px">FU750N</th>
                    <th style="line-height: 47px">FU650B</th>
                    <th style="line-height: 47px">FU650N</th>
                    <th style="line-height: 47px">FU650W</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td
                      v-html="t('product.ffkm.highPurity.table.heading2')"
                    ></td>
                    <td>78</td>
                    <td>75</td>
                    <td>65</td>
                    <td>65</td>
                    <td>67</td>
                  </tr>
                  <tr>
                    <td
                      v-html="t('product.ffkm.highPurity.table.heading3')"
                    ></td>
                    <td>{{ t("product.color.creamwhite") }}</td>
                    <td>{{ t("product.color.black") }}</td>
                    <td>{{ t("product.color.black") }}</td>
                    <td>{{ t("product.color.black") }}</td>
                    <td>{{ t("product.color.black") }}</td>
                  </tr>
                  <tr>
                    <td
                      v-html="t('product.ffkm.highPurity.table.heading4')"
                    ></td>
                    <td>4.7</td>
                    <td>6.2</td>
                    <td>6.8</td>
                    <td>3.3</td>
                    <td>6.9</td>
                  </tr>
                  <tr>
                    <td
                      v-html="t('product.ffkm.highPurity.table.heading5')"
                    ></td>
                    <td>11.5</td>
                    <td>17</td>
                    <td>12.8</td>
                    <td>13</td>
                    <td>13.7</td>
                  </tr>
                  <tr>
                    <td
                      v-html="t('product.ffkm.highPurity.table.heading6')"
                    ></td>
                    <td>303</td>
                    <td>251</td>
                    <td>232</td>
                    <td>215</td>
                    <td>229</td>
                  </tr>
                  <tr>
                    <td
                      v-html="t('product.ffkm.highPurity.table.heading7')"
                    ></td>
                    <td>25</td>
                    <td>17.5</td>
                    <td>17</td>
                    <td>12.5</td>
                    <td>16.3</td>
                  </tr>
                  <tr>
                    <td
                      v-html="t('product.ffkm.highPurity.table.heading8')"
                    ></td>
                    <td>330</td>
                    <td>315</td>
                    <td>275</td>
                    <td>315</td>
                    <td>275</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div class="container company_card">
        <div class="row">
          <div class="col-12 card">
            <h4>
              <img src="/assets/img/ffkm_icon.png" />{{
                t("product.ffkm.lowCompression.title")
              }}
            </h4>
            <p v-html="t('product.ffkm.lowCompression.description')"></p>
            <p v-html="t('product.ffkm.lowCompression.applications')"></p>
            <p>
              <strong>{{ t("product.ffkm.lowCompression.equivalent") }}</strong>
            </p>
            <div class="table-responsive">
              <table class="table table-striped">
                <thead class="table-danger">
                  <tr>
                    <th
                      style="width: 180px; line-height: 47px"
                      v-html="t('product.ffkm.lowCompression.table.heading1')"
                    ></th>
                    <th style="line-height: 47px">LCS759B</th>
                    <th style="line-height: 47px">LCS759W</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td
                      v-html="t('product.ffkm.lowCompression.table.heading2')"
                    ></td>
                    <td>74</td>
                    <td>75</td>
                  </tr>
                  <tr>
                    <td
                      v-html="t('product.ffkm.lowCompression.table.heading3')"
                    ></td>
                    <td>{{ t("product.color.black") }}</td>
                    <td>{{ t("product.color.white") }}</td>
                  </tr>
                  <tr>
                    <td
                      v-html="t('product.ffkm.lowCompression.table.heading4')"
                    ></td>
                    <td>8.8</td>
                    <td>6.1</td>
                  </tr>
                  <tr>
                    <td
                      v-html="t('product.ffkm.lowCompression.table.heading5')"
                    ></td>
                    <td>12.5</td>
                    <td>12.2</td>
                  </tr>
                  <tr>
                    <td
                      v-html="t('product.ffkm.lowCompression.table.heading6')"
                    ></td>
                    <td>180</td>
                    <td>215</td>
                  </tr>
                  <tr>
                    <td
                      v-html="t('product.ffkm.lowCompression.table.heading7')"
                    ></td>
                    <td>12.5</td>
                    <td>12.6</td>
                  </tr>
                  <tr>
                    <td
                      v-html="t('product.ffkm.lowCompression.table.heading8')"
                    ></td>
                    <td>330</td>
                    <td>330</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div class="container company_card">
        <div class="row">
          <div class="col-12 card">
            <h4>
              <img src="/assets/img/ffkm_icon.png" />{{
                t("product.ffkm.foodMedical.title")
              }}
            </h4>
            <p>{{ t("product.ffkm.foodMedical.intro") }}</p>
            <br />
            <img
              src="/assets/img/fda_usp.png"
              style="width: 327px"
              alt="FDA and USP logos"
            />
            <br />
            <p>
              {{ t("product.ffkm.foodMedical.feature1") }}<br />
              {{ t("product.ffkm.foodMedical.feature2") }}<br />
              {{ t("product.ffkm.foodMedical.feature3") }}<br />
              {{ t("product.ffkm.foodMedical.feature4") }}<br />
              {{ t("product.ffkm.foodMedical.feature5") }}<br />
              {{ t("product.ffkm.foodMedical.feature6") }}
            </p>

            <p>
              <strong
                style="
                  font-size: 24px;
                  padding-left: 5px;
                  border-left: 5px solid #be1e2d;
                "
                >{{ t("product.ffkm.foodMedical.fdaTitle") }}</strong
              ><br />
              {{ t("product.ffkm.foodMedical.fdaDescription1") }}<br /><br />
              {{ t("product.ffkm.foodMedical.fdaDescription2") }}<br /><br />
              {{ t("product.ffkm.foodMedical.fdaDescription3") }}
            </p>

            <p>
              <strong>{{ t("product.ffkm.foodMedical.fda") }}</strong>
            </p>
            <div class="table-responsive">
              <table class="table table-striped">
                <thead class="table-danger">
                  <tr>
                    <th
                      style="width: 180px; line-height: 47px"
                      v-html="t('product.ffkm.foodMedical.table.heading1')"
                    ></th>
                    <th style="line-height: 47px">F807B</th>
                    <th style="line-height: 47px">F807W</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td
                      v-html="t('product.ffkm.foodMedical.table.heading2')"
                    ></td>
                    <td>75</td>
                    <td>76</td>
                  </tr>
                  <tr>
                    <td
                      v-html="t('product.ffkm.foodMedical.table.heading3')"
                    ></td>
                    <td>{{ t("product.color.black") }}</td>
                    <td>{{ t("product.color.white") }}</td>
                  </tr>
                  <tr>
                    <td
                      v-html="t('product.ffkm.foodMedical.table.heading4')"
                    ></td>
                    <td>16</td>
                    <td>5.8</td>
                  </tr>
                  <tr>
                    <td
                      v-html="t('product.ffkm.foodMedical.table.heading5')"
                    ></td>
                    <td>17.5</td>
                    <td>12.2</td>
                  </tr>
                  <tr>
                    <td
                      v-html="t('product.ffkm.foodMedical.table.heading6')"
                    ></td>
                    <td>180</td>
                    <td>215</td>
                  </tr>
                  <tr>
                    <td
                      v-html="t('product.ffkm.foodMedical.table.heading7')"
                    ></td>
                    <td>17</td>
                    <td>28</td>
                  </tr>
                  <tr>
                    <td
                      v-html="t('product.ffkm.foodMedical.table.heading8')"
                    ></td>
                    <td>260</td>
                    <td>260</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p v-if="locale != 'eng'">
              <strong
                style="
                  font-size: 24px;
                  padding-left: 5px;
                  border-left: 5px solid #be1e2d;
                "
                >{{ t("product.ffkm.foodMedical.medicalTitle") }}</strong
              ><br />
              {{ t("product.ffkm.foodMedical.medicalDescription1")
              }}<br /><br />
              {{ t("product.ffkm.foodMedical.medicalDescription2") }}
            </p>

            <p v-else>
              <strong
                style="
                  font-size: 24px;
                  padding-left: 5px;
                  border-left: 5px solid #be1e2d;
                "
                >Medical Grade Perfluoroelastomers</strong
              ><br />
              Medical grade perfluoroelastomers (FFKM) must comply with the
              requirements of the United States Pharmacopeia (USP) Class VI.
              Fluorez® FFKM UFT753 and UFT750, developed by Fluorez Technology,
              have been tested and approved by third-party laboratories, meeting
              the requirements of Chapter 87 (or ISO 10993-5) and Chapter 88 (or
              ISO 10993-6, -10, -11) and complying with USP Class VI polymer
              testing standards.<br /><br />
              <strong>Compliance with Food and Medical Standards:</strong> These
              perfluoroelastomer materials meet the stringent standards of the
              food and medical industries, such as FDA (U.S. Food and Drug
              Administration) and USP Class VI, ensuring safety and reliability
              when in contact with food and medical products.<br /><br />
              <strong>1. Extremely Low Extractables:</strong> Food and
              medical-grade perfluoroelastomers have very low extractables
              during use, which is crucial to prevent contamination of food and
              medical products.<br /><br />
              <strong>2. Chemical Resistance:</strong> These rubber materials
              exhibit excellent chemical resistance, able to withstand various
              chemicals, including acids, bases, solvents, and cleaning agents,
              making them suitable for applications requiring frequent cleaning
              and sterilization.<br /><br />
              <strong>3. High-Temperature Performance:</strong> These elastomers
              can maintain their physical and chemical properties in
              high-temperature environments without degradation or failure,
              making them ideal for high-temperature sterilization processes.<br /><br />
              <strong>4. Biocompatibility:</strong> These rubber materials are
              non-toxic and non-irritating to human tissues, with good
              biocompatibility, suitable for sealing and contact components in
              medical equipment and devices.<br /><br />
              <strong>5. Excellent Mechanical Properties:</strong> They possess
              high strength, high elasticity, and wear resistance, maintaining
              stable sealing performance and mechanical strength over long-term
              use.<br /><br />
              <strong>6. Low Gas Permeability:</strong> They have low gas
              permeability, ensuring effective airtightness and protection in
              food and medical applications.<br /><br />
              <strong>7. Resistance to Hot Water and Steam:</strong> They can
              withstand the erosion of hot water and steam without failure,
              making them suitable for applications requiring frequent
              high-temperature sterilization.<br /><br />
              <strong>8. Easy to Clean:</strong> With a smooth surface that does
              not easily attract dirt, these elastomers are easy to clean and
              maintain, meeting the hygiene requirements of the food and medical
              industries.<br /><br />
              Due to their excellent chemical and physical properties, food and
              medical-grade perfluoroelastomers are widely used in food
              processing, pharmaceuticals, medical equipment, and devices
              requiring high cleanliness and safety. We offer
              perfluoroelastomers that meet FDA standards and those that comply
              with USP Class VI standards.<br /><br />
              Fluorez Technology's medical-grade perfluoroelastomers also meet
              food-grade requirements, making them ideal for applications in
              medical devices, pharmaceuticals, and biocompatibility-related
              fields. All materials are available in finished forms.<br />
            </p>

            <p>
              <strong>{{ t("product.ffkm.foodMedical.cert") }}</strong>
            </p>
            <div class="table-responsive">
              <table class="table table-striped">
                <thead class="table-danger">
                  <tr>
                    <th
                      style="width: 180px; line-height: 47px"
                      v-html="t('product.ffkm.foodMedical.table.heading1')"
                    ></th>
                    <th style="line-height: 47px">UFT753</th>
                    <th style="line-height: 47px">UFT750</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td
                      v-html="t('product.ffkm.lowCompression.table.heading2')"
                    ></td>
                    <td>73</td>
                    <td>75</td>
                  </tr>
                  <tr>
                    <td
                      v-html="t('product.ffkm.lowCompression.table.heading3')"
                    ></td>
                    <td>{{ t("product.color.black") }}</td>
                    <td>{{ t("product.color.white") }}</td>
                  </tr>
                  <tr>
                    <td
                      v-html="t('product.ffkm.lowCompression.table.heading4')"
                    ></td>
                    <td>18.1</td>
                    <td>9.7</td>
                  </tr>
                  <tr>
                    <td
                      v-html="t('product.ffkm.lowCompression.table.heading5')"
                    ></td>
                    <td>17.2</td>
                    <td>16.5</td>
                  </tr>
                  <tr>
                    <td
                      v-html="t('product.ffkm.lowCompression.table.heading6')"
                    ></td>
                    <td>180</td>
                    <td>175</td>
                  </tr>
                  <tr>
                    <td
                      v-html="t('product.ffkm.lowCompression.table.heading7')"
                    ></td>
                    <td>17</td>
                    <td>25</td>
                  </tr>
                  <tr>
                    <td
                      v-html="t('product.ffkm.lowCompression.table.heading8')"
                    ></td>
                    <td>260</td>
                    <td>260</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div class="container text-section" style="line-height: 25px">
        <div class="row">
          <div class="col-12">
            <div class="mb-4">
              <p>
                <strong>{{ t("product.ffkm.products.intro") }}</strong>
              </p>
              <p>
                {{ t("product.ffkm.products.item1") }}<br />
                {{ t("product.ffkm.products.item2") }}<br />
                {{ t("product.ffkm.products.item3") }}
              </p>
            </div>

            <div>
              <p>
                <strong>{{ t("product.ffkm.contact") }}</strong>
              </p>
              <p>
                <sup>a</sup> ASTM D2240 (pellet test specimen)<br />
                <sup>b</sup> ASTM D412 & D1414 (dumbbell test specimen)<br />
                <sup>c</sup> ASTM D395B (AS568 K214 O-ring test specimen)<br />
                <sup>d</sup> Fluorez proprietary test method
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
  <Footer />
</template>
