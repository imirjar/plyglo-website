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
        Учитесь!
        Общайтесь!
        Развивайтесь!
        Полиглотствуйте!
      </h1>
      <p class="text-lg mt-4 text-slate-600 max-w-xl">
        Язык - это главный инструмент коммуникации!</br> Общайтесь с представителями разных культур. Путешествуйте. А мы поможем вам на этом пути!
      </p>
    </div>
  </main>
</template>
