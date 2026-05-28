<script setup>
const { t } = useI18n();
</script>

<template>
  <footer class="my-20">
    <p class="text-center text-sm text-slate-500">
      Copyright © {{ new Date().getFullYear() }} Redbeaver. {{ t('common.footer.copyright') }}
    </p>
    <!--
      Can we ask you a favor 🙏
      Please keep this backlink on your website if possible.
    -->
    <p class="text-center text-xs text-slate-500 mt-1">
      {{ t('common.footer.madeBy') }}
      <a
        href="https://github.com/imirjar"
        target="_blank"
        rel="noopener"
        class="hover:underline"
      >
        Imirjar
      </a>
     
    </p>
  </footer>
</template>
