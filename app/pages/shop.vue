<script setup lang="ts">
definePageMeta({
  layout: "landing",
});

const { t, tm } = useI18n();

const shopHighlights = computed(() => tm<Array<{ title: string; description: string; icon: string }>>("shop.highlights"));
const categories = computed(() => tm<string[]>("shop.categories"));
</script>

<template>
  <LandingContainer>
    <section class="grid gap-10 py-14 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:py-20">
      <div>
        <p class="text-sm font-semibold uppercase text-slate-500">
          shop.plyglo.com
        </p>
        <h1 class="mt-4 max-w-3xl text-3xl font-bold leading-tight text-slate-950 sm:text-4xl lg:text-5xl">
          {{ t('shop.title') }}
        </h1>
        <p class="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
          {{ t('shop.description') }}
        </p>
        <div class="mt-8 flex flex-col gap-3 sm:flex-row">
          <LandingLink href="https://shop.plyglo.com" styleName="primary">
            {{ t('shop.open') }}
          </LandingLink>
          <LandingLink href="/study" styleName="outline">
            {{ t('common.courseCta') }}
          </LandingLink>
        </div>
      </div>

      <div class="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
        <div class="flex items-start gap-4">
          <span class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-slate-950 text-white">
            <Icon name="bx:store" class="h-7 w-7" />
          </span>
          <div>
            <p class="text-sm font-semibold uppercase text-slate-500">
              {{ t('shop.inside') }}
            </p>
            <h2 class="mt-2 text-2xl font-bold text-slate-950">
              {{ t('shop.insideTitle') }}
            </h2>
          </div>
        </div>

        <div class="mt-6 grid gap-3 sm:grid-cols-2">
          <div
            v-for="category in categories"
            :key="category"
            class="rounded-md bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700"
          >
            {{ category }}
          </div>
        </div>
      </div>
    </section>

    <section class="py-10">
      <div class="max-w-3xl">
        <p class="text-sm font-semibold uppercase text-slate-500">
          {{ t('shop.inspiration') }}
        </p>
        <h2 class="mt-3 text-3xl font-bold text-slate-950">
          {{ t('shop.goalsTitle') }}
        </h2>
      </div>

      <div class="mt-8 grid gap-5 md:grid-cols-3">
        <article
          v-for="item in shopHighlights"
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
