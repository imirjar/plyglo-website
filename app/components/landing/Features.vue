<script setup>
const features = [
  {
    title: "Английский язык",
    description:
      "Курс по изучению английского языка для всех уровней.",
    icon: "bx:bxs-briefcase",
  },
  {
    title: "Китайский язык",
    description:
      "Курс по изучению китайского языка и культуры.",
    icon: "bx:bxs-window-alt",
  },
  {
    title: "Французский язык",
    description:
      "Изучение французского языка и культуры Франции.",
    icon: "bx:bxs-data",
  },
];
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
