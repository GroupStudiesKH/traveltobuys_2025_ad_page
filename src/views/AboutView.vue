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
    const route = useRoute();
    const isIntroScolled = ref(false);
    const { t, locale } = useI18n();


    onMounted(() => {
      setTimeout(() => {
        // Check if the 'content' query parameter exists and matches 'pfas_content'
        if (route.query.content === 'pfas_content') {
          const element = document.getElementById('pfas_content');
          if (element) {
            // Scroll to the element with id 'pfas_content'
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }, 500);
    });


    return {
      isIntroScolled,
      t,
      locale,
    };
  },
};
</script>
<style scoped>
  @media (max-width: 768px) {
    table td:first-child, table th:first-child{
      width: 90px;
    }
  }
</style>

<template>
  <Header />
  <main id="company">
    <div
      class="banner"
      style="background-image: url('/assets/img/company_banner.webp')"
    ></div>

    <div id="company_info">
      <div class="container">
        <div class="row">
          <div class="col-12" id="company_intro">
            <p>{{ t('about.intro') }}</p>
            <img src="/assets/img/company_intro.jpg" />
          </div>
        </div>
      </div>

      <div class="container" id="badge_area">
        <div class="row">
          <div class="col-4 badge">
            <div class="outline" style="margin-right: 20px">
              <img src="/assets/img/company-professional.png" alt="" />
              <h4 class="d-md-none mt-3">{{ t('about.badge.professional') }}</h4>
              <h4 class="d-none d-md-block">{{ t('about.badge.professional') }}</h4>
            </div>
          </div>
          <div class="col-4 badge">
            <div class="outline" style="margin: 0 20px">
              <img src="/assets/img/company-bestquality.png" alt="" />
              <h4 class="d-md-none mt-3">{{ t('about.badge.quality') }}</h4>
              <h4 class="d-none d-md-block">{{ t('about.badge.quality') }}</h4>
            </div>
          </div>
          <div class="col-4 badge">
            <div class="outline" style="margin-left: 20px">
              <img src="/assets/img/company-customer-service.png" alt="" />
              <h4 class="d-none d-md-block">{{ t('about.badge.service') }}</h4>
              <h4 class="d-md-none" v-html="t('about.badge.service_mobile')"></h4>
            </div>
          </div>
        </div>
      </div>

      <div class="container text-section">
        <h4>{{ t('about.professional.title') }}</h4>
        <p>{{ t('about.professional.content') }}</p>
      </div>

      <div class="container text-section">
        <h4>{{ t('about.quality.title') }}</h4>
        <p>{{ t('about.quality.content') }}</p>
      </div>

      <div class="container text-section">
        <h4>{{ t('about.service.title') }}</h4>
        <p>{{ t('about.service.content') }}</p>
      </div>

      <div id="company_center_image"></div>

      <div class="container company_card" id="pfas_content">
        <div class="row">
          <div class="col-12 card">
            <h4>
              <img src="/assets/img/check-icon.png" />{{ t('about.pfas.q1') }}
            </h4>
            <p v-html="t('about.pfas.a1')"></p>

            <h4><img src="/assets/img/check-icon.png" />{{ t('about.pfas.q2') }}</h4>
            <p>{{ t('about.pfas.a2') }}</p>

            <h4><img src="/assets/img/check-icon.png" />{{ t('about.pfas.q3') }}</h4>
            <p>{{ t('about.pfas.a3') }}</p>

            <h4><img src="/assets/img/check-icon.png" />{{ t('about.pfas.q4') }}</h4>
            <p v-html="t('about.pfas.a4')"></p>

            <h4><img src="/assets/img/check-icon.png" />{{ t('about.pfas.q5') }}</h4>
            <table class="table table-striped">
              <thead class="table-danger">
                <tr>
                  <th class="text-center" scope="col" width="55%">{{ t('about.pfas.table.th1') }}</th>
                  <th class="text-center" scope="col">{{ t('about.pfas.table.th2') }}</th>
                  <th class="text-center" scope="col">{{ t('about.pfas.table.th3') }}</th>
                  <th class="text-center" scope="col">{{ t('about.pfas.table.th4') }}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="text-center">{{ t('about.pfas.table.row1.country') }}</td>
                  <td>{{ t('about.pfas.table.row1.regulation') }}</td>
                  <td>{{ t('about.pfas.table.row1.substances') }}</td>
                  <td>{{ t('about.pfas.table.row1.note') }}</td>
                </tr>
                <tr>
                  <td class="text-center">{{ t('about.pfas.table.row2.country') }}</td>
                  <td>{{ t('about.pfas.table.row2.regulation') }}</td>
                  <td>{{ t('about.pfas.table.row2.substances') }}</td>
                  <td>{{ t('about.pfas.table.row2.note') }}</td>
                </tr>
                <tr>
                  <td class="text-center">{{ t('about.pfas.table.row3.country') }}</td>
                  <td>{{ t('about.pfas.table.row3.regulation') }}</td>
                  <td>{{ t('about.pfas.table.row3.substances') }}</td>
                  <td>{{ t('about.pfas.table.row3.note') }}</td>
                </tr>
                <tr>
                  <td class="text-center">{{ t('about.pfas.table.row4.country') }}</td>
                  <td>{{ t('about.pfas.table.row4.regulation') }}</td>
                  <td>{{ t('about.pfas.table.row4.substances') }}</td>
                  <td>{{ t('about.pfas.table.row4.note') }}</td>
                </tr>
                <tr>
                  <td class="text-center">{{ t('about.pfas.table.row5.country') }}</td>
                  <td>{{ t('about.pfas.table.row5.regulation') }}</td>
                  <td>{{ t('about.pfas.table.row5.substances') }}</td>
                  <td>{{ t('about.pfas.table.row5.note') }}</td>
                </tr>
                <tr>
                  <td class="text-center">{{ t('about.pfas.table.row6.country') }}</td>
                  <td>{{ t('about.pfas.table.row6.regulation') }}</td>
                  <td>{{ t('about.pfas.table.row6.substances') }}</td>
                  <td>{{ t('about.pfas.table.row6.note') }}</td>
                </tr>
                <tr>
                  <td class="text-center">{{ t('about.pfas.table.row7.country') }}</td>
                  <td>{{ t('about.pfas.table.row7.regulation') }}</td>
                  <td>{{ t('about.pfas.table.row7.substances') }}</td>
                  <td>{{ t('about.pfas.table.row7.note') }}</td>
                </tr>
                <tr>
                  <td class="text-center">{{ t('about.pfas.table.row8.country') }}</td>
                  <td>{{ t('about.pfas.table.row8.regulation') }}</td>
                  <td>{{ t('about.pfas.table.row8.substances') }}</td>
                  <td>{{ t('about.pfas.table.row8.note') }}</td>
                </tr>
                <tr>
                  <td class="text-center">{{ t('about.pfas.table.row9.country') }}</td>
                  <td>{{ t('about.pfas.table.row9.regulation') }}</td>
                  <td>{{ t('about.pfas.table.row9.substances') }}</td>
                  <td>{{ t('about.pfas.table.row9.note') }}</td>
                </tr>
                <tr>
                  <td class="text-center">{{ t('about.pfas.table.row10.country') }}</td>
                  <td>{{ t('about.pfas.table.row10.regulation') }}</td>
                  <td>{{ t('about.pfas.table.row10.substances') }}</td>
                  <td>{{ t('about.pfas.table.row10.note') }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </main>
  <Footer />
</template>
