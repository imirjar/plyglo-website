<script setup>
    const user = {
    name: 'Иван Петров',
    email: 'ivan.petrov@example.com',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg'
    }

    const account = {
    balance: 245.50
    }

    const courses = [
    {
        id: 1,
        title: 'Английский для начинающих',
        description: 'Базовый курс английского языка с нуля',
        level: 'Начальный',
        price: 99.99,
        available: true
    },
    {
        id: 2,
        title: 'Испанский средний уровень',
        description: 'Продолжайте изучать испанский язык',
        level: 'Средний',
        price: 129.99,
        available: false
    },
    {
        id: 3,
        title: 'Французский продвинутый',
        description: 'Совершенствуйте ваш французский',
        level: 'Продвинутый',
        price: 149.99,
        available: false
    },
    {
        id: 4,
        title: 'Немецкий для путешествий',
        description: 'Основы немецкого для туристов',
        level: 'Начальный',
        price: 79.99,
        available: true
    }
    ]

    const buyCourse = (courseId) => {
    // Логика покупки курса
    const course = courses.find(c => c.id === courseId)
    if (course && account.balance >= course.price) {
        account.balance -= course.price
        course.available = true
        // Здесь можно добавить вызов API для сохранения изменений
    }
    }
</script>

<template>
  <div class="max-w-4xl mx-auto p-6">
    <!-- Профиль пользователя -->
    <div class="bg-white rounded-lg shadow-md p-6 mb-8">
      <div class="flex items-center space-x-4 mb-6">
        <img 
          :src="user.avatar" 
          alt="User Avatar" 
          class="w-16 h-16 rounded-full object-cover border-2 border-blue-500"
        >
        <div>
          <h1 class="text-2xl font-bold text-gray-800">{{ user.name }}</h1>
          <p class="text-gray-600">{{ user.email }}</p>
        </div>
      </div>
      
      <!-- Информация о счете -->
      <div class="bg-blue-50 rounded-lg p-4">
        <h2 class="text-lg font-semibold text-gray-800 mb-2">Личный счет</h2>
        <p class="text-3xl font-bold text-blue-600">${{ account.balance.toFixed(2) }}</p>
        <p class="text-gray-600 mt-1">Доступно для покупки курсов</p>
      </div>
    </div>

    <!-- Список курсов -->
    <div class="bg-white rounded-lg shadow-md p-6">
      <h2 class="text-xl font-bold text-gray-800 mb-6">Доступные языковые курсы</h2>
      
      <div class="space-y-4">
        <div 
          v-for="course in courses" 
          :key="course.id"
          class="border rounded-lg p-4 transition-all hover:shadow-md"
          :class="{
            'border-green-200 bg-green-50': course.available,
            'border-gray-200': !course.available
          }"
        >
          <div class="flex justify-between items-start">
            <div>
              <h3 class="font-bold text-lg text-gray-800">{{ course.title }}</h3>
              <p class="text-gray-600">{{ course.description }}</p>
              <div class="mt-2 flex items-center">
                <span 
                  class="px-2 py-1 text-xs rounded-full"
                  :class="{
                    'bg-green-100 text-green-800': course.available,
                    'bg-gray-100 text-gray-800': !course.available
                  }"
                >
                  {{ course.available ? 'Доступен' : 'Недоступен' }}
                </span>
                <span class="ml-2 text-sm font-medium text-gray-700">
                  {{ course.level }}
                </span>
              </div>
            </div>
            
            <div class="text-right">
              <p class="text-gray-800 font-bold">${{ course.price.toFixed(2) }}</p>
              <button
                v-if="!course.available"
                @click="buyCourse(course.id)"
                class="mt-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm"
                :disabled="account.balance < course.price"
                :class="{
                  'opacity-50 cursor-not-allowed': account.balance < course.price,
                  'hover:bg-blue-700': account.balance >= course.price
                }"
              >
                Купить
              </button>
              <button
                v-else
                class="mt-2 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors text-sm"
              >
                Перейти к курсу
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>