<script setup lang="ts">
const { tm } = useI18n();

const features = computed(() => tm<Array<{ title: string; description: string; icon: string }>>("study.steps"));
</script>

<template>
  <div class="grid md:grid-cols-3 gap-10 mx-auto max-w-screen-lg mt-12">
    <div v-for="item of features" class="flex gap-4 items-start">
      <div class="mt-1 bg-black rounded-full p-2 w-8 h-8 shrink-0">
        <Icon class="text-white" :name="item.icon" />
      </div>
      <div>
        <h3 class="font-semibold text-lg">{{ item.title }}</h3>
        <p class="text-slate-500 mt-2 leading-relaxed">
          {{ item.description }}
        </p>
      </div>
    </div>
  </div>
</template>
