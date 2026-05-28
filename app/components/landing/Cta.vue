<script setup>
const { t } = useI18n();
</script>

<template>
  <div
    class="bg-black px-20 py-20 mt-20 mx-auto max-w-5xl rounded-lg flex flex-col items-center text-center"
  >
    <h2 class="text-white text-3xl md:text-6xl">{{ t('common.choosePath') }}</h2>
    <p class="text-slate-500 mt-4 text-lg md:text-xl">
      {{ t('common.ctaSubtitle') }}
    </p>
    <div class="row">
      <div class="flex mt-5">
        <LandingLink href="#" styleName="inverted">{{ t('common.getStarted') }}</LandingLink>
      </div>
      <div class="flex mt-5">
        <LandingLink href="#" styleName="inverted">{{ t('common.getStarted') }}</LandingLink>
      </div>
    </div>
  </div>
</template>
