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

    const scrollToMaterialSection = (elementID) => {
      const element = document.getElementById(elementID);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    };

    return {
      isIntroScolled,
      t,
      locale,
      scrollToMaterialSection,
    };
  },
};
</script>

<template>
  <Header />
  <main id="material">
    <div
      class="banner"
      style="background-image: url('/assets/img/material_banner.png')"
    ></div>

    <div id="material_info">
      <div class="container" id="badge_area">
        <div class="row">
          <div class="col-4 badge">
            <div class="outline" style="margin-right: 20px" @click="scrollToMaterialSection('ffkm_section')" role="button">
              <img src="/assets/img/ffkm.png" alt="" />
              <h4 class="d-none d-md-block" v-if="locale != 'eng'">{{ t('product.ffkm.title') }}</h4>
              <h5 class="d-none d-md-block" v-else>{{ t('product.ffkm.title') }}</h5>
              <h4 class="d-md-none">{{ t('product.ffkm.title_mobile') }}</h4>
            </div>
          </div>
          <div class="col-4 badge">
            <div class="outline" style="margin: 0 20px" @click="scrollToMaterialSection('fkm_section')" role="button">
              <img src="/assets/img/fkm.png" alt="" />
              <h4 class="d-none d-md-block" v-if="locale != 'eng'">{{ t('product.fkm.title') }}</h4>
              <h5 class="d-none d-md-block" v-else>{{ t('product.fkm.title') }}</h5>
              <h4 class="d-md-none">{{ t('product.fkm.title_mobile') }}</h4>
            </div>
          </div>
          <div class="col-4 badge">
            <div class="outline" style="margin-left: 20px" @click="scrollToMaterialSection('pfls_section')" role="button">
              <img src="/assets/img/pfls.png" alt="" />
              <h4 class="d-none d-md-block" v-if="locale != 'eng'">{{ t('product.pfls.title') }}</h4>
              <h5 class="d-none d-md-block" v-else>{{ t('product.pfls.engMenuTitle') }}</h5>
              <h4 class="d-md-none">{{ t('product.pfls.title_mobile') }}</h4>
            </div>
          </div>
        </div>
      </div>

      <div class="container text-section" id="ffkm_section">
        <h4>{{ t('product.ffkm.title') }}</h4>
        <div class="row application">
          <div class="col-6 p-4">
            <img src="/assets/img/hpi-cpi-applications.webp" />
            <p>{{ t('material.hpiCpiApplications') }}</p>
          </div>
          <div class="col-6 p-4">
            <img src="/assets/img/material-semicon.webp" />
            <p>{{ t('material.semiconApplications') }}</p>
          </div>
        </div>
        <p v-html="t('material.ffkmIntro')"></p>

        <p>
          <h3>{{ t('material.mainFeatures') }}：</h3>
        </p>

        <ul>
          <li>{{ t('material.ffkmFeature1') }}</li>
          <li>{{ t('material.ffkmFeature2') }}</li>
          <li>{{ t('material.ffkmFeature3') }}</li>
          <li>{{ t('material.ffkmFeature4') }}</li>
          <li>{{ t('material.ffkmFeature5') }}</li>
        </ul>
        <p>
          <strong>{{ t('material.ffkmConclusion') }}</strong>
        </p>

        <img src="/assets/img/material_center.png" />
      </div>

      <div class="container text-section" id="fkm_section" v-if="locale != 'eng'">
        <h4>{{ t('product.fkm.title') }}</h4>
        <p>{{ t('material.fkmIntro') }}</p>
        <h3>{{ t('material.fkmFeatureTitle1') }}：</h3>
        <ul>
          <li>{{ t('material.fkmFeature1_1') }}</li>
          <li>{{ t('material.fkmFeature1_2') }}</li>
        </ul>

        <h3>{{ t('material.fkmFeatureTitle2') }}：</h3>
        <ul>
          <li>{{ t('material.fkmFeature2_1') }}</li>
          <li>{{ t('material.fkmFeature2_2') }}</li>
        </ul>

        <h3>{{ t('material.fkmFeatureTitle3') }}：</h3>
        <ul>
          <li>{{ t('material.fkmFeature3_1') }}</li>
        </ul>

        <h3>{{ t('material.fkmFeatureTitle4') }}：</h3>
        <ul>
          <li>{{ t('material.fkmFeature4_1') }}</li>
          <li>{{ t('material.fkmFeature4_2') }}</li>
        </ul>

        <h3>{{ t('material.applicationAreas') }}：</h3>
        <ul>
          <li>{{ t('material.fkmApplication1') }}</li>
          <li>{{ t('material.fkmApplication2') }}</li>
          <li>{{ t('material.fkmApplication3') }}</li>
          <li>{{ t('material.fkmApplication4') }}</li>
          <li>{{ t('material.fkmApplication5') }}</li>
        </ul>
        <br>
        <h3>{{ t('material.fkmConclusion') }}</h3>
      </div>

      <div class="container text-section" id="fkm_section" v-else>
        <h4>Fluoroelastomer, FKM (FPM by DIN/ISO)</h4>
        <p>Fluoroelastomer, FKM (FPM by DIN/ISO) is known by different trade names depending on the manufacturer. The American company DuPont® marketed FKM under the brand name Viton® until 2015, when it was transferred to Chemours®, a spin-off from DuPont®. The FKM products from 3M® are branded as Dyneon®, while the Japanese company Daikin® markets their FKM products under the name DAI-EL®. Another Japanese company, Asahi Glass (ACG)®, sells their FKM products under the brand Aflas® (FEPM).</p>
        <p>Previously, there was confusion where users often mistook Viton® to represent all FKM types, which was a misconception due to long-standing habits.</p>
        <p>FKM is a fully synthetic elastomer material characterized by carbon and fluorine atoms in its main or side chains, providing excellent chemical stability and resistance to chemical corrosion. It can withstand attacks from various chemicals. Due to differences in monomer compositions, FKM can be categorized into several types. Unless specified otherwise, the term "fluoroelastomer (FKM, Viton®)" generally refers to fluoroelastomers with bisphenol cross-links, specifically Viton® A.</p>
        <p>Fluoroelastomers offer superior physical properties compared to other synthetic rubber materials, including high tensile and structural strength, high temperature resistance (operating continuously at up to 230°C, with peak temperatures up to 250 °C, and excellent chemical resistance.</p>
      <h3>Key characteristics：</h3>
      <ul>
        <li>Excellent chemical resistance: FKM resists a wide range of chemicals including oils, fuels, acids, alkalis, and solvents, making it ideal for applications in industries such as chemicals, automotive, and aerospace.</li>
        <li>Superior temperature resistance: FKM materials maintain stability and performance at extreme high temperatures, suitable for high-temperature sealing applications, with good resistance to aging.</li>
        <li>Excellent dimensional stability: FKM materials exhibit excellent dimensional stability and recovery, ensuring reliable sealing performance under pressure and temperature fluctuations.</li>
        <li>Wide range of applications: Due to its outstanding properties, FKM materials are widely used in seals and rubber products in automotive, oil and gas, chemical, aerospace, and other industries.</li>
      </ul>
      <p>In terms of chemical resistance, fluoroelastomers excel in corrosion resistance against organic solvents, inorganic acids, strong oxidizers, and oils compared to other types of rubber. Additionally, they offer superior air tightness, weather resistance, flame resistance, radiation resistance, and vacuum resistance, making them suitable for various industrial applications including aviation, defense, machinery, automotive, and chemical industries.</p>
      <h3>Special Grade of Fluoroelastomers (FKM)：</h3>
      <p>As mentioned earlier, FKM products generally refer to bisphenol cross-linked fluoroelastomers with a fluorine content of 66% (Viton® A), commonly known as Viton®. The remaining dozen types, influenced by different monomer compositions, affect the rubber's chemical resistance and fluorine content, and are categorized as special fluoroelastomers for distinction. For example, high-fluorine products have a fluorine content ranging from 67% to 70%. Compared to typical fluorine content FKM, they exhibit stronger chemical resistance and physical properties, albeit at a higher price, suitable for applications requiring more stringent environmental conditions. Fluoroelastomers from different brands each have their own characteristics; for instance, Aflas (FEPM) produced by Asahi Glass (ACG)® of Japan demonstrates improved chemical resistance and resistance to steam through variations in monomers. Additionally, special fluoroelastomers also cater to categories requiring low-temperature performance.</p>
      <p>Fluoroelastomers all require compounding facilities to adjust FKM raw material quality and different additives to manufacture suitable products. Therefore, selecting the appropriate fluoroelastomer product relies not only on experience but also on testing different compounding formulations to meet specific application requirements.</p>

      </div>
      <br>
      <div class="container text-section" id="pfls_section">
        <h4>{{ t('product.pfls.title') }}</h4>
        <p>{{ t('material.pflsIntro') }}</p>
        <ul>
          <li>{{ t('material.pflsFeature1') }}</li>
          <li>{{ t('material.pflsFeature2') }}</li>
          <li>{{ t('material.pflsFeature3') }}</li>
          <li>{{ t('material.pflsFeature4') }}</li>
          <li>{{ t('material.pflsFeature5') }}</li>
        </ul>
      </div>
      <div class="container">
        <div class="row application">
          <div class="col-6 p-4">
            <img src="/assets/img/fpd_img.webp" />
            <p>{{ t('material.fpdApplications') }}</p>
          </div>
          <div class="col-6 p-4">
            <img src="/assets/img/sanitary.webp" />
            <p>{{ t('material.sanitaryApplications') }}</p>
          </div>
        </div>
      </div>
    </div>
  </main>
  <Footer />
</template>
