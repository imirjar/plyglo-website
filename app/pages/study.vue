<script setup>
definePageMeta({
  layout: "landing",
});

const courseSteps = [
  {
    title: "Учитесь бесплатно",
    description:
      "Открывайте главы курса, проходите материалы и возвращайтесь к ним в удобном темпе без оплаты за доступ.",
    icon: "bx:book-open",
  },
  {
    title: "Проверяйте главу тестом",
    description:
      "В конце каждой главы можно пройти платный тест и получить подтверждение знаний по этой теме.",
    icon: "bx:check-shield",
  },
  {
    title: "Собирайте подтверждения",
    description:
      "Когда подтверждены все главы курса, курс считается пройденным и готовится электронный сертификат.",
    icon: "bx:badge-check",
  },
];

const benefits = [
  "Материалы курса доступны бесплатно",
  "Платите только за итоговую проверку главы",
  "Подтверждения фиксируют реальный прогресс",
  "Электронный сертификат выдается после прохождения всего курса",
];

const languages = [
  "Английский язык",
  "Китайский язык",
  "Французский язык",
];
</script>

<template>
  <LandingContainer>
    <section class="grid gap-10 py-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-20">
      <div>
        <p class="text-sm font-semibold uppercase text-slate-500">
          Обучение без барьера на входе
        </p>
        <h1 class="mt-4 max-w-3xl text-3xl font-bold leading-tight text-slate-950 sm:text-4xl lg:text-5xl">
          Учитесь бесплатно, подтверждайте знания тогда, когда готовы
        </h1>
        <p class="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
          Доступ к обучающим материалам остается бесплатным. Оплачиваемой частью
          становится только тест в конце главы: он помогает зафиксировать результат
          и постепенно собрать подтверждения для сертификата.
        </p>
        <div class="mt-8 flex flex-col gap-3 sm:flex-row">
          <LandingLink href="https://app.plyglo.com" styleName="primary">
            Начать обучение
          </LandingLink>
          <LandingLink href="/shop" styleName="outline">
            Посмотреть курсы
          </LandingLink>
        </div>
      </div>

      <div class="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
        <div class="flex flex-col items-start justify-between gap-4 border-b border-slate-200 pb-5 sm:flex-row sm:items-center">
          <div>
            <p class="text-sm text-slate-500">Стоимость обучения</p>
            <p class="mt-1 text-3xl font-bold text-slate-950">0₽</p>
          </div>
          <div class="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
            Бесплатный доступ
          </div>
        </div>

        <ul class="mt-6 grid gap-4">
          <li
            v-for="item in benefits"
            :key="item"
            class="flex items-start gap-3 text-slate-700"
          >
            <span class="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-black text-white">
              <Icon name="bx:check" class="h-4 w-4" />
            </span>
            <span>{{ item }}</span>
          </li>
        </ul>
      </div>
    </section>

    <section class="py-10">
      <div class="max-w-3xl">
        <p class="text-sm font-semibold uppercase text-slate-500">
          Как это работает
        </p>
        <h2 class="mt-3 text-3xl font-bold text-slate-950">
          Прогресс строится по главам
        </h2>
      </div>

      <div class="mt-8 grid gap-5 md:grid-cols-3">
        <article
          v-for="(step, index) in courseSteps"
          :key="step.title"
          class="rounded-lg border border-slate-200 bg-white p-6 shadow-sm"
        >
          <div class="flex items-center justify-between gap-4">
            <span class="flex h-11 w-11 items-center justify-center rounded-full bg-slate-950 text-white">
              <Icon :name="step.icon" class="h-6 w-6" />
            </span>
            <span class="text-sm font-semibold text-slate-400">
              0{{ index + 1 }}
            </span>
          </div>
          <h3 class="mt-5 text-xl font-semibold text-slate-950">
            {{ step.title }}
          </h3>
          <p class="mt-3 leading-7 text-slate-600">
            {{ step.description }}
          </p>
        </article>
      </div>
    </section>

    <section class="grid gap-8 py-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
      <div>
        <p class="text-sm font-semibold uppercase text-slate-500">
          Сертификат
        </p>
        <h2 class="mt-3 text-3xl font-bold text-slate-950">
          Электронный документ после всего курса
        </h2>
        <p class="mt-4 leading-8 text-slate-600">
          Сертификат выдается, когда по каждой главе курса есть подтверждение
          знаний. Так итоговый статус отражает не просто просмотр материалов, а
          последовательное прохождение всей программы.
        </p>
      </div>

      <div class="grid gap-4 md:grid-cols-3">
        <div
          v-for="language in languages"
          :key="language"
          class="rounded-lg border border-slate-200 bg-slate-50 p-5"
        >
          <Icon name="bx:graduation" class="h-8 w-8 text-slate-950" />
          <h3 class="mt-4 font-semibold text-slate-950">
            {{ language }}
          </h3>
          <p class="mt-2 text-sm leading-6 text-slate-600">
            Бесплатные главы, платные подтверждающие тесты и сертификат после
            прохождения курса.
          </p>
        </div>
      </div>
    </section>
  </LandingContainer>
</template>
