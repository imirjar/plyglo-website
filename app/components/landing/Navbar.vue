<script setup lang="ts">

  const  data  = ref(await useFetch('/api/check-auth'));
  import { computed, onMounted, onUnmounted, ref } from 'vue'

    const isUserMenuOpen = ref(false)
    const themeMode = ref<'system' | 'light' | 'dark'>('system')
    let mediaQuery: MediaQueryList | null = null
    const { currentLocaleLabel, locale, locales, setLocale, t } = useI18n()
    
    const toggleUserMenu = () => {
        console.log("toggle")
        isUserMenuOpen.value = !isUserMenuOpen.value // Переключаем состояние
    }

    const closeUserMenu = () => {
        isUserMenuOpen.value = false // Просто закрываем меню
    }

    const signOut = async () => {
        try {
            await $fetch('/api/auth/signout', { method: 'POST' })
            navigateTo('/')
        } catch (error) {
            console.error('Ошибка при выходе:', error)
        }
    }

    const applyTheme = () => {
        if (!import.meta.client) {
            return
        }

        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
        const shouldUseDark = themeMode.value === 'dark' || (themeMode.value === 'system' && prefersDark)

        document.documentElement.classList.toggle('dark', shouldUseDark)
        document.documentElement.dataset.theme = themeMode.value
        localStorage.setItem('theme-mode', themeMode.value)
    }

    const toggleTheme = () => {
        const modes: Array<'system' | 'light' | 'dark'> = ['system', 'light', 'dark']
        const currentIndex = modes.indexOf(themeMode.value)
        themeMode.value = modes[(currentIndex + 1) % modes.length]
        applyTheme()
    }

    const themeIcon = computed(() => {
        if (themeMode.value === 'dark') {
            return 'bx:moon'
        }

        if (themeMode.value === 'light') {
            return 'bx:sun'
        }

        return 'bx:desktop'
    })

    const themeTitle = computed(() => {
        if (themeMode.value === 'dark') {
            return t('common.theme.dark')
        }

        if (themeMode.value === 'light') {
            return t('common.theme.light')
        }

        return t('common.theme.system')
    })

    onMounted(() => {
        const savedThemeMode = localStorage.getItem('theme-mode')

        if (savedThemeMode === 'system' || savedThemeMode === 'light' || savedThemeMode === 'dark') {
            themeMode.value = savedThemeMode
        }

        mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
        mediaQuery.addEventListener('change', applyTheme)
        applyTheme()
    })

    onUnmounted(() => {
        mediaQuery?.removeEventListener('change', applyTheme)
    })

  const menuitems = [
    // {
    //   title: "Features",
    //   path: "#",
    // },
    {
      titleKey: "common.nav.study",
      path: "/study",
    },
    {
      titleKey: "common.nav.shop",
      path: "/shop",
    },
    {
      titleKey: "common.nav.travel",
      path: "/travel",
    },
  ];

  const open = ref(false);
</script>

<template>
  <LandingContainer>
    <header class="flex flex-col lg:flex-row justify-between items-center my-5">
      <div class="flex w-full lg:w-auto items-center justify-between">
        <a href="/">
          <img src="~/assets/img/poliglotim.svg" alt="Poliglotim Login" class="h-16 dark:hidden">
          <img src="~/assets/img/poliglotim_white.svg" alt="Poliglotim Login" class="hidden h-16 dark:block">
        </a>
        <div class="block lg:hidden">
          <button @click="open = !open" class="text-gray-800 dark:text-slate-100">
            <svg
              fill="currentColor"
              class="w-4 h-4"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>{{ t('common.nav.menu') }}</title>
              <path
                v-show="open"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M18.278 16.864a1 1 0 01-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 01-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 011.414-1.414l4.829 4.828 4.828-4.828a1 1 0 111.414 1.414l-4.828 4.829 4.828 4.828z"
              ></path>
              <path
                v-show="!open"
                fill-rule="evenodd"
                d="M4 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <nav
        class="w-full lg:w-auto mt-2 lg:flex lg:mt-0"
        :class="{ block: open, hidden: !open }"
      >
        <ul class="flex flex-col lg:flex-row lg:gap-3">
          <li v-for="item of menuitems">
            <a
              :href="item.path"
              class="flex lg:px-3 py-2 text-gray-600 hover:text-gray-900 dark:text-slate-300 dark:hover:text-white"
            >
              {{ t(item.titleKey) }}
            </a>
            
          </li>
        </ul>
        <div class="lg:hidden flex flex-wrap items-center mt-3 gap-3">
          <div class="language-menu relative">
            <button
              type="button"
              class="flex h-10 min-w-10 items-center justify-center gap-1 rounded border border-slate-300 px-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 focus:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800 dark:focus:bg-slate-800"
              :title="`${t('common.nav.language')}: ${currentLocaleLabel}`"
              aria-haspopup="true"
            >
              {{ currentLocaleLabel }}
              <Icon name="bx:chevron-down" class="h-4 w-4" />
            </button>
            <div
              class="language-menu-list absolute left-0 top-full z-50 hidden min-w-28 pt-2"
            >
              <div class="rounded-md border border-slate-200 bg-white py-1 shadow-lg dark:border-slate-700 dark:bg-slate-900">
                <button
                  v-for="item in locales"
                  :key="item.code"
                  type="button"
                  class="flex w-full items-center justify-between gap-3 px-3 py-2 text-left text-sm text-slate-700 transition hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
                  :class="{ 'font-semibold': item.code === locale }"
                  @click="setLocale(item.code)"
                >
                  {{ item.label }}
                  <Icon v-if="item.code === locale" name="bx:check" class="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
          <button
            type="button"
            class="flex h-10 min-w-10 items-center justify-center rounded border border-slate-300 text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
            :title="themeTitle"
            @click="toggleTheme"
          >
            <Icon :name="themeIcon" class="h-5 w-5" />
          </button>
          <LandingLink v-if="!data.data?.isAuthenticated" href="/dashboard" size="md">{{ t('common.nav.login') }}</LandingLink>
          <LandingLink v-else href="/logout" styleName="muted" block size="md">{{ t('common.nav.logout') }}</LandingLink>
        </div>
      </nav>
      <div>
        <div class="hidden lg:flex items-center gap-3">
          <div class="language-menu relative">
            <button
              type="button"
              class="flex h-10 min-w-10 items-center justify-center gap-1 rounded border border-slate-300 px-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 focus:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800 dark:focus:bg-slate-800"
              :title="`${t('common.nav.language')}: ${currentLocaleLabel}`"
              aria-haspopup="true"
            >
              {{ currentLocaleLabel }}
              <Icon name="bx:chevron-down" class="h-4 w-4" />
            </button>
            <div
              class="language-menu-list absolute right-0 top-full z-50 hidden min-w-28 pt-2"
            >
              <div class="rounded-md border border-slate-200 bg-white py-1 shadow-lg dark:border-slate-700 dark:bg-slate-900">
                <button
                  v-for="item in locales"
                  :key="item.code"
                  type="button"
                  class="flex w-full items-center justify-between gap-3 px-3 py-2 text-left text-sm text-slate-700 transition hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
                  :class="{ 'font-semibold': item.code === locale }"
                  @click="setLocale(item.code)"
                >
                  {{ item.label }}
                  <Icon v-if="item.code === locale" name="bx:check" class="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
          <button
            type="button"
            class="flex h-10 min-w-10 items-center justify-center rounded border border-slate-300 text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
            :title="themeTitle"
            @click="toggleTheme"
          >
            <Icon :name="themeIcon" class="h-5 w-5" />
          </button>
          <!-- <a href="#">Войти</a> -->
          <LandingLink v-if="!data.data?.isAuthenticated" href="/dashboard" size="md">{{ t('common.nav.login') }}</LandingLink>
          <div v-else class="relative">
            <button 
              v-on:click="toggleUserMenu"
              class="flex items-center gap-2 focus:outline-none"
            >
                <img 
                src="~/assets/img/chineese-girl-questions.svg"
                alt="User Avatar"
                class="w-8 h-8 rounded-full object-cover border-2 border-white shadow-sm"
                >
                <span class="text-gray-700 font-medium dark:text-slate-200">{{ t('dashboard.userName') }}</span>
            </button>
            
            <!-- Выпадающее меню -->
            <div 
              v-if="isUserMenuOpen"
              class="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-100 dark:border-slate-700 dark:bg-slate-900"
              v-click-outside="closeUserMenu"
            >
              <a 
                href="/dashboard"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors dark:text-slate-200 dark:hover:bg-slate-800"
              >
                <div class="flex items-center gap-2">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  {{ t('common.nav.account') }}
                </div>
              </a>
              <button
                @click="signOut"
                class="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors dark:text-slate-200 dark:hover:bg-slate-800"
              >
                <div class="flex items-center gap-2">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                  </svg>
                  {{ t('common.nav.logout') }}
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  </LandingContainer>
</template>

<style>
  /* Анимация для выпадающего меню */
  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.2s, transform 0.2s;
  }
  .fade-enter-from, .fade-leave-to {
    opacity: 0;
    transform: translateY(-10px);
  }

  .language-menu:hover .language-menu-list,
  .language-menu:focus-within .language-menu-list {
    display: block;
  }
</style>
