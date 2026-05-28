<script setup lang="ts">

  const  data  = ref(await useFetch('/api/check-auth'));
  import { computed, onMounted, onUnmounted, ref } from 'vue'

    const isUserMenuOpen = ref(false)
    const currentLanguage = ref('RU')
    const themeMode = ref<'system' | 'light' | 'dark'>('system')
    let mediaQuery: MediaQueryList | null = null
    
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

    const toggleLanguage = () => {
        currentLanguage.value = currentLanguage.value === 'RU' ? 'EN' : 'RU'

        if (import.meta.client) {
            document.documentElement.lang = currentLanguage.value.toLowerCase()
            localStorage.setItem('language', currentLanguage.value)
        }
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
            return 'Темная тема'
        }

        if (themeMode.value === 'light') {
            return 'Светлая тема'
        }

        return 'Системная тема'
    })

    onMounted(() => {
        const savedLanguage = localStorage.getItem('language')
        const savedThemeMode = localStorage.getItem('theme-mode')

        if (savedLanguage === 'RU' || savedLanguage === 'EN') {
            currentLanguage.value = savedLanguage
        }

        if (savedThemeMode === 'system' || savedThemeMode === 'light' || savedThemeMode === 'dark') {
            themeMode.value = savedThemeMode
        }

        document.documentElement.lang = currentLanguage.value.toLowerCase()
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
      title: "Обучение",
      path: "/study",
    },
    {
      title: "Магазин",
      path: "/shop",
    },
    {
      title: "Путешествия",
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
          <img src="~/assets/img/poliglotim.svg" alt="Poliglotim Login" class="h-16"> 
        </a>
        <div class="block lg:hidden">
          <button @click="open = !open" class="text-gray-800">
            <svg
              fill="currentColor"
              class="w-4 h-4"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Меню</title>
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
              {{ item.title }}
            </a>
            
          </li>
        </ul>
        <div class="lg:hidden flex flex-wrap items-center mt-3 gap-3">
          <button
            type="button"
            class="flex h-10 min-w-10 items-center justify-center rounded border border-slate-300 px-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
            :title="`Язык: ${currentLanguage}`"
            @click="toggleLanguage"
          >
            {{ currentLanguage }}
          </button>
          <button
            type="button"
            class="flex h-10 min-w-10 items-center justify-center rounded border border-slate-300 text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
            :title="themeTitle"
            @click="toggleTheme"
          >
            <Icon :name="themeIcon" class="h-5 w-5" />
          </button>
          <LandingLink v-if="!data.data?.isAuthenticated" href="/dashboard" size="md">Войти</LandingLink>
          <LandingLink v-else href="/logout" styleName="muted" block size="md">Выйти</LandingLink>
        </div>
      </nav>
      <div>
        <div class="hidden lg:flex items-center gap-3">
          <button
            type="button"
            class="flex h-10 min-w-10 items-center justify-center rounded border border-slate-300 px-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
            :title="`Язык: ${currentLanguage}`"
            @click="toggleLanguage"
          >
            {{ currentLanguage }}
          </button>
          <button
            type="button"
            class="flex h-10 min-w-10 items-center justify-center rounded border border-slate-300 text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
            :title="themeTitle"
            @click="toggleTheme"
          >
            <Icon :name="themeIcon" class="h-5 w-5" />
          </button>
          <!-- <a href="#">Войти</a> -->
          <LandingLink v-if="!data.data?.isAuthenticated" href="/dashboard" size="md">Войти</LandingLink>
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
                <span class="text-gray-700 font-medium dark:text-slate-200">Иван Петров</span>
            </button>
            
            <!-- Выпадающее меню -->
            <div 
              v-if="isUserMenuOpen"
              class="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-100 dark:border-slate-700 dark:bg-slate-900"
              v-click-outside="closeUserMenu"
            >
              <a 
                href="/dashboard"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
              >
                <div class="flex items-center gap-2">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  Личный кабинет
                </div>
              </a>
              <button
                @click="signOut"
                class="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
              >
                <div class="flex items-center gap-2">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                  </svg>
                  Выйти
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
</style>
