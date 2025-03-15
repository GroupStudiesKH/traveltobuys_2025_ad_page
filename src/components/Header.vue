<template>
  <header class="navbar navbar-expand-lg" :class="{ home: isHome }">
    <div class="container">
      <a class="navbar-brand" :href="'/' + locale">
        <img src="/assets/img/logo.svg" alt="" />
      </a>
      <button 
        class="navbar-toggler ms-auto" 
        type="button" 
        data-bs-toggle="collapse" 
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">

        <button 
          class="btn-close d-lg-none" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav" 
          aria-label="Close"
        ></button>

        <ul class="navbar-nav ml-auto" :class="locale">
          <li class="nav-item">
            <a class="nav-link" :href="`/${locale}/about`">{{ t('header.about') }}</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" :href="`/${locale}/material`">{{ t('header.material') }}</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" :href="`/${locale}/product/ffkm`">{{ t('header.product') }}</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" :href="`/${locale}/lab`">{{ t('header.lab') }}</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" :href="`/${locale}/service`">{{ t('header.service') }}</a>
          </li>
          <li class="nav-item language_switch dropdown d-none d-lg-block">
            <div
              class="dropdown-toggle"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <span class="material-icons">&#xE894;</span>
              <span class="lang_switch_text">{{ localeOptions.find(opt => opt.lang === locale)?.name || 'Language' }}</span>
            </div>

            <ul class="dropdown-menu">
              <li
                v-for="(lOption, lOptionIndex) in localeOptions"
                :key="lOptionIndex"
              >
                <a
                  class="dropdown-item"
                  role="button"
                  @click="urlSetLocale(lOption.lang)"
                  >{{ lOption.name }}</a
                >
              </li>
            </ul>
          </li>
          <li class="nav-item language_switch d-lg-none">
            <div class="btn-group w-100" role="group">
              <button
              v-for="(lOption, lOptionIndex) in localeOptions"
              :key="lOptionIndex"
              type="button"
              class="btn"
              :class="['btn', { 'btn-secondary': locale === lOption.lang, 'btn-outline-secondary text-dark': locale !== lOption.lang }]"
              @click="urlSetLocale(lOption.lang)"
              >
              {{ lOption.name }}
              </button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
import { useI18n } from "vue-i18n";
import { ref, onMounted, computed } from "vue";
import { useRouter, useRoute } from "vue-router";

export default {
  name: "Header",
  setup() {
    const { t, locale } = useI18n();
    const route = useRoute();
    const router = useRouter();

    const localeOptions = ref([
      {
        lang: "eng",
        name: "English",
      },
      {
        lang: "zh_TW",
        name: "繁中",
      },
      {
        lang: "zh_CN",
        name: "簡中",
      },
    ]);

    const isHome = computed(() => {
      return route.name === "home";
    });

    const urlSetLocale = (lang) => {
      const currentPath = route.path;
      const currentName = route.name;
      const currentParams = route.params;

      let newPath = `/${lang}`;

      if (currentName) {
        const matchedRoute = route.matched[route.matched.length - 1];
        if (matchedRoute) {
          newPath += matchedRoute.path.replace(/^\/[^\/]+/, "");
        }

        if (Object.keys(currentParams).length > 0) {
          for (const [key, value] of Object.entries(currentParams)) {
            if (key !== "locale") {
              newPath = newPath.replace(`:${key}`, value);
            }
          }
        }
      } else {
        newPath = currentPath.replace(/^\/[^\/]+/, `/${lang}`);
      }

      window.location.href = newPath;
    };

    const setLocale = (lang) => {
      locale.value = lang;
      localStorage.setItem("locale", lang);

      const currentPath = route.path;
      const currentName = route.name;
      const currentParams = route.params;

      let newPath = `/${lang}`;

      if (currentName) {
        const matchedRoute = route.matched[route.matched.length - 1];
        if (matchedRoute) {
          newPath += matchedRoute.path.replace(/^\/[^\/]+/, "");
        }

        if (Object.keys(currentParams).length > 0) {
          for (const [key, value] of Object.entries(currentParams)) {
            if (key !== "locale") {
              newPath = newPath.replace(`:${key}`, value);
            }
          }
        }
      } else {
        newPath = currentPath.replace(/^\/[^\/]+/, `/${lang}`);
      }

      window.location.href = newPath;
    };

    onMounted(() => {
      const urlLocale = route.params.locale;
      const storedLocale = localStorage.getItem("locale");

      if (!urlLocale && !storedLocale) {
        setLocale("zh_TW");
      } else if (urlLocale && urlLocale !== storedLocale) {
        setLocale(urlLocale);
      } else if (!urlLocale && storedLocale) {
        locale.value = storedLocale;
      }
    });

    return {
      t,
      locale,
      setLocale,
      urlSetLocale,
      localeOptions,
      isHome,
    };
  },
};
</script>
