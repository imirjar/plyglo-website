<script setup>
const { t } = useI18n();
</script>

<template>
  <main class="grid lg:grid-cols-2 place-items-center pt-16 pb-8 md:pt-8">
    <div class="p-24 md:order-1 hidden md:block">
      <div class="relative group">
        <img
          class=" transition-opacity duration-300 group-hover:opacity-0 "
          src="~/assets/img/chineese-girl.svg"
          alt="Normal state"
        />
        <img
          class="absolute inset-0 opacity-0  duration-300 group-hover:opacity-100"
          src="~/assets/img/chineese-girl-questions.svg"
          alt="Hover state"
        />
      </div>
    </div>

    <div>
      <h1 class="text-5xl lg:text-6xl xl:text-7xl font-bold lg:tracking-tight">
        {{ t('home.title') }}
      </h1>
      <p class="text-lg mt-4 text-slate-600 max-w-xl">
        {{ t('home.description') }}
      </p>
    </div>
  </main>
</template>
