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
              <h4>{{ t('product.pfls.title') }}</h4>
              <p>{{ t('product.pfls.intro') }}</p>

              <!-- 第一個表格：測試項目 -->
              <div class="table-responsive text-center">
                <table class="table table-striped">
                  <thead class="table-danger">
                    <tr>
                      <th width="30%">Perfluorinated liquid (PFLs) </th>
                      <th>FL-50</th>
                      <th>FL-98</th>
                      <th>FL-125</th>
                      <th>FL-165</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>MIL. STD. Tests:</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Gross Leak</td>
                      <td>×</td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Detector Fluids (Bombing)</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Bubble Tank or NID</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td> Indicator Fluids (Bubble Tank)</td>
                      <td></td>
                      <td></td>
                      <td>×</td>
                      <td>×</td>
                    </tr>
                    <tr>
                      <td>Thermal Shock</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Cold Side</td>
                      <td></td>
                      <td>×</td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Hot Side</td>
                      <td></td>
                      <td></td>
                      <td>×</td>
                      <td>×</td>
                    </tr>
                    <tr>
                      <td>Liquid Burn In/Stress Screening</td>
                      <td></td>
                      <td></td>
                      <td>×</td>
                      <td>×</td>
                    </tr>
                    <tr>
                      <td>Cooling/Thermal Management</td>
                      <td></td>
                      <td>×</td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>High Voltage/Dielectric Testing</td>
                      <td>×</td>
                      <td>×</td>
                      <td>×</td>
                      <td>×</td>
                    </tr>
                    <tr>
                      <td>Constant Temperature Baths</td>
                      <td>×</td>
                      <td>×</td>
                      <td>×</td>
                      <td>×</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <!-- 第二個表格：產品規格 -->
              <div class="table-responsive  text-center">
                <table class="table table-striped">
                  <thead class="table-danger">
                    <tr>
                      <th clas>Properties</th>
                      <th>FL-50</th>
                      <th>FL-98</th>
                      <th>FL-125</th>
                      <th>FL-165</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Appearance</td>
                      <td>{{ t('product.pfls.table2.colorless') }}</td>
                      <td>{{ t('product.pfls.table2.colorless') }}</td>
                      <td>{{ t('product.pfls.table2.colorless') }}</td>
                      <td>{{ t('product.pfls.table2.colorless') }}</td>
                    </tr>
                    <tr>
                      <td>Average Molecular Weight</td>
                      <td>320</td>
                      <td>430</td>
                      <td>550</td>
                      <td>650</td>
                    </tr>
                    <tr>
                      <td>Boiling Point ℃ </td>
                      <td>50</td>
                      <td>98</td>
                      <td>125</td>
                      <td>165</td>
                    </tr>
                    <tr>
                      <td>Freezing Point ℃</td>
                      <td>＜-80</td>
                      <td>＜-60</td>
                      <td>-55</td>
                      <td>-57</td>
                    </tr>
                    <tr>
                      <td>Calculated Critical Temperature ℃ </td>
                      <td>160</td>
                      <td>240</td>
                      <td>230</td>
                      <td>269</td>
                    </tr>
                    <tr>
                      <td>Calculated Critical Pressure Mpa</td>
                      <td>1.52</td>
                      <td>1.18</td>
                      <td>1.2</td>
                      <td>1.18</td>
                    </tr>
                    <tr>
                      <td>Liquid Density g/cm3</td>
                      <td>1.61</td>
                      <td>1.78</td>
                      <td>1.8</td>
                      <td>1.86</td>
                    </tr>
                    <tr>
                      <td>Latent Heat of Vaporization at boiling point J/g</td>
                      <td>80</td>
                      <td>84</td>
                      <td>136</td>
                      <td>69</td>
                    </tr>
                    <tr>
                      <td>Kinematic Viscosity cSt</td>
                      <td>0.5</td>
                      <td>0.8</td>
                      <td>0.68</td>
                      <td>2.2</td>
                    </tr>
                    <tr>
                      <td>Absolute Viscosity cP</td>
                      <td>6</td>
                      <td>3.4</td>
                      <td>1.68</td>
                      <td>4.1</td>
                    </tr>
                    <tr>
                      <td>Vapor Pressure kPa</td>
                      <td>30</td>
                      <td>0.56</td>
                      <td>1.22</td>
                      <td>0.3</td>
                    </tr>
                    <tr>
                      <td>Specific Heat J·kg-1·℃-1</td>
                      <td>1030</td>
                      <td>1050</td>
                      <td>1440</td>
                      <td>1100</td>
                    </tr>
                    <tr>
                      <td>Thermal Conductivity K-1</td>
                      <td>0.0013</td>
                      <td>0.0014</td>
                      <td>0.0034</td>
                      <td>0.0012</td>
                    </tr>
                    <tr>
                      <td>Surface Tension mN/m</td>
                      <td>10</td>
                      <td>15</td>
                      <td>12.7</td>
                      <td>15</td>
                    </tr>
                    <tr>
                      <td>Dielectric Strength KV (2.54 mm)</td>
                      <td>30</td>
                      <td>45</td>
                      <td>50</td>
                      <td>45</td>
                    </tr>
                    <tr>
                      <td>Dielectric Constant (1KHz)</td>
                      <td>1.8</td>
                      <td>1.86</td>
                      <td>1.96</td>
                      <td>1.9</td>
                    </tr>
                    <tr>
                      <td>Dissipation Factor  (1KHz)</td>
                      <td>＜0.0003</td>
                      <td>＜0.0003</td>
                      <td>N/A</td>
                      <td>＜0.0003</td>
                    </tr>
                    <tr>
                      <td>Electrical Resistivity ohm-cm</td>
                      <td>2.0x1015</td>
                      <td>2.0x1015</td>
                      <td>N/A</td>
                      <td>4.0x1015</td>
                    </tr>
                    <tr>
                      <td>Water Solubility ppm</td>
                      <td>＜155</td>
                      <td>＜13</td>
                      <td>＜7</td>
                      <td>＜7</td>
                    </tr>
                    <tr>
                      <td>Solubility in Water ppmw</td>
                      <td>＜41</td>
                      <td>＜41</td>
                      <td>＜5</td>
                      <td>＜5</td>
                    </tr>
                    <tr>
                      <td>Ozone Depletion Potential</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
  <Footer />
</template>
