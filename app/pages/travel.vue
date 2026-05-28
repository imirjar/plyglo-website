<script setup>
definePageMeta({
  layout: "landing",
});

const travelIdeas = [
  {
    title: "Выбирайте страну по языку",
    description:
      "После курса проще смотреть на карту не как на список мест, а как на пространство, где можно говорить и понимать людей.",
    icon: "bx:map",
  },
  {
    title: "Практикуйте язык в дороге",
    description:
      "Заказ еды, билеты, экскурсии, разговоры с местными жителями и новые знакомства превращают знания в навык.",
    icon: "bx:conversation",
  },
  {
    title: "Открывайте культуру глубже",
    description:
      "Язык помогает читать вывески, понимать контекст, замечать детали и чувствовать страну не только глазами туриста.",
    icon: "bx:compass",
  },
];

const routes = [
  "Английский для путешествий по Европе, Азии и Америке",
  "Французский для Франции, Бельгии, Канады и других франкоязычных стран",
  "Китайский для поездок в Китай и знакомства с современной культурой",
];
</script>

<template>
  <LandingContainer>
    <section class="grid gap-10 py-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-20">
      <div>
        <p class="text-sm font-semibold uppercase text-slate-500">
          travel.plyglo.com
        </p>
        <h1 class="mt-4 max-w-3xl text-3xl font-bold leading-tight text-slate-950 sm:text-4xl lg:text-5xl">
          Направьте язык туда, где он оживает
        </h1>
        <p class="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
          Полученные в обучении навыки стоит использовать в путешествиях по
          странам, язык которых вы выучили. Поездка становится продолжением
          курса: вы слышите живую речь, пробуете говорить сами и лучше
          понимаете культуру.
        </p>
        <div class="mt-8 flex flex-col gap-3 sm:flex-row">
          <LandingLink href="https://travel.plyglo.com" styleName="primary">
            Перейти к путешествиям
          </LandingLink>
          <LandingLink href="https://app.plyglo.com" styleName="outline">
            Учиться перед поездкой
          </LandingLink>
        </div>
      </div>

      <div class="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
        <div class="flex items-start gap-4">
          <span class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-slate-950 text-white">
            <Icon name="bx:plane-alt" class="h-7 w-7" />
          </span>
          <div>
            <p class="text-sm font-semibold uppercase text-slate-500">
              Идея направления
            </p>
            <h2 class="mt-2 text-2xl font-bold text-slate-950">
              Сначала язык, потом страна
            </h2>
            <p class="mt-3 leading-7 text-slate-600">
              Обучение дает основу, а путешествие помогает закрепить ее в
              настоящих ситуациях: в кафе, музее, аэропорту, на улице и в
              разговорах с людьми.
            </p>
          </div>
        </div>

        <ul class="mt-6 grid gap-3">
          <li
            v-for="route in routes"
            :key="route"
            class="flex items-start gap-3 rounded-md bg-slate-50 px-4 py-3 text-sm text-slate-700"
          >
            <Icon name="bx:check" class="mt-0.5 h-5 w-5 shrink-0 text-slate-950" />
            <span>{{ route }}</span>
          </li>
        </ul>
      </div>
    </section>

    <section class="py-10">
      <div class="max-w-3xl">
        <p class="text-sm font-semibold uppercase text-slate-500">
          Зачем ехать
        </p>
        <h2 class="mt-3 text-3xl font-bold text-slate-950">
          Путешествие превращает знания в опыт
        </h2>
      </div>

      <div class="mt-8 grid gap-5 md:grid-cols-3">
        <article
          v-for="item in travelIdeas"
          :key="item.title"
          class="rounded-lg border border-slate-200 bg-white p-6 shadow-sm"
        >
          <span class="flex h-11 w-11 items-center justify-center rounded-full bg-slate-950 text-white">
            <Icon :name="item.icon" class="h-6 w-6" />
          </span>
          <h3 class="mt-5 text-xl font-semibold text-slate-950">
            {{ item.title }}
          </h3>
          <p class="mt-3 leading-7 text-slate-600">
            {{ item.description }}
          </p>
        </article>
      </div>
    </section>
  </LandingContainer>
</template>
