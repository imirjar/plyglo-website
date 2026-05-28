type Locale = "ru" | "en" | "fr" | "zh";
type TranslationValue = string | string[] | Record<string, TranslationValue>;

const locales: Array<{ code: Locale; label: string }> = [
  { code: "ru", label: "RU" },
  { code: "en", label: "EN" },
  { code: "fr", label: "FR" },
  { code: "zh", label: "中文" },
];

const messages: Record<Locale, Record<string, TranslationValue>> = {
  ru: {
    common: {
      nav: {
        study: "Обучение",
        shop: "Магазин",
        travel: "Путешествия",
        login: "Войти",
        logout: "Выйти",
        account: "Личный кабинет",
        menu: "Меню",
        language: "Язык",
      },
      theme: {
        system: "Системная тема",
        light: "Светлая тема",
        dark: "Темная тема",
      },
      footer: {
        copyright: "Все права защищены.",
        madeBy: "Сделано",
      },
      courseCta: "К обучению",
      choosePath: "Выбери путь",
      ctaSubtitle: "Выберите направление и продолжайте путь с Plyglo.",
      getStarted: "Начать",
    },
    contact: {
      title: "Мы вам позвоним",
      description:
        "В связи с повышением деятельности програм-ботов - просим вас заполнять поле сообщения.",
      phonePlaceholder: "Номер телефона",
      emailPlaceholder: "адрес@mail.ru",
      messagePlaceholder: "Тема обращения",
      submit: "Позвоните мне!",
    },
    home: {
      title: "Учитесь! Общайтесь! Развивайтесь! Полиглотствуйте!",
      description:
        "Язык - это главный инструмент коммуникации! Общайтесь с представителями разных культур. Путешествуйте. А мы поможем вам на этом пути!",
    },
    study: {
      eyebrow: "Обучение без барьера на входе",
      title: "Учитесь бесплатно, подтверждайте знания тогда, когда готовы",
      description:
        "Доступ к обучающим материалам остается бесплатным. Оплачиваемой частью становится только тест в конце главы: он помогает зафиксировать результат и постепенно собрать подтверждения для сертификата.",
      start: "Начать обучение",
      browse: "Посмотреть курсы",
      costLabel: "Стоимость обучения",
      freeAccess: "Бесплатный доступ",
      how: "Как это работает",
      progressTitle: "Прогресс строится по главам",
      certificateEyebrow: "Сертификат",
      certificateTitle: "Электронный документ после всего курса",
      certificateText:
        "Сертификат выдается, когда по каждой главе курса есть подтверждение знаний. Так итоговый статус отражает не просто просмотр материалов, а последовательное прохождение всей программы.",
      languageCardText:
        "Бесплатные главы, платные подтверждающие тесты и сертификат после прохождения курса.",
      benefits: [
        "Материалы курса доступны бесплатно",
        "Платите только за итоговую проверку главы",
        "Подтверждения фиксируют реальный прогресс",
        "Электронный сертификат выдается после прохождения всего курса",
      ],
      languages: ["Английский язык", "Китайский язык", "Французский язык"],
      steps: [
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
      ],
    },
    shop: {
      title: "Магазин материалов для языковой практики",
      description:
        "В магазине можно будет приобрести дидактические материалы для обучения и литературу на разных языках мира. Это пространство для тех, кто хочет не просто пройти курс, а продолжить практику через книги, задания и полезные учебные инструменты.",
      open: "Перейти в магазин",
      inside: "Что внутри",
      insideTitle: "Все, что помогает языку стать привычкой",
      inspiration: "Для учебы и вдохновения",
      goalsTitle: "Материалы под разные цели",
      categories: [
        "Учебники и рабочие тетради",
        "Карточки и наглядные материалы",
        "Адаптированная литература",
        "Книги на языке оригинала",
        "Материалы для преподавателей",
        "Практические задания к курсам",
      ],
      highlights: [
        {
          title: "Дидактические материалы",
          description:
            "Карточки, рабочие тетради, задания и дополнительные материалы, которые помогают закреплять темы из курсов.",
          icon: "bx:collection",
        },
        {
          title: "Литература на языках мира",
          description:
            "Книги, адаптированные тексты и издания на разных языках для чтения, практики и знакомства с культурой.",
          icon: "bx:book-bookmark",
        },
        {
          title: "Материалы для самостоятельной практики",
          description:
            "Подборки для тех, кто хочет учиться в своем темпе и дополнять занятия живыми примерами языка.",
          icon: "bx:pencil",
        },
      ],
    },
    travel: {
      title: "Направьте язык туда, где он оживает",
      description:
        "Полученные в обучении навыки стоит использовать в путешествиях по странам, язык которых вы выучили. Поездка становится продолжением курса: вы слышите живую речь, пробуете говорить сами и лучше понимаете культуру.",
      open: "Перейти к путешествиям",
      studyBefore: "Учиться перед поездкой",
      idea: "Идея направления",
      ideaTitle: "Сначала язык, потом страна",
      ideaText:
        "Обучение дает основу, а путешествие помогает закрепить ее в настоящих ситуациях: в кафе, музее, аэропорту, на улице и в разговорах с людьми.",
      why: "Зачем ехать",
      experienceTitle: "Путешествие превращает знания в опыт",
      routes: [
        "Английский для путешествий по Европе, Азии и Америке",
        "Французский для Франции, Бельгии, Канады и других франкоязычных стран",
        "Китайский для поездок в Китай и знакомства с современной культурой",
      ],
      ideas: [
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
      ],
    },
    login: {
      username: "Имя пользователя",
      password: "Пароль",
      missingUsername: "Введите имя пользователя",
      missingPassword: "Введите пароль",
      error: "Ошибка при входе",
    },
    dashboard: {
      userName: "Иван Петров",
      account: "Личный счет",
      availableBalance: "Доступно для покупки курсов",
      coursesTitle: "Доступные языковые курсы",
      available: "Доступен",
      unavailable: "Недоступен",
      buy: "Купить",
      goToCourse: "Перейти к курсу",
      levels: {
        beginner: "Начальный",
        intermediate: "Средний",
        advanced: "Продвинутый",
      },
      courses: [
        {
          title: "Английский для начинающих",
          description: "Базовый курс английского языка с нуля",
          level: "beginner",
        },
        {
          title: "Испанский средний уровень",
          description: "Продолжайте изучать испанский язык",
          level: "intermediate",
        },
        {
          title: "Французский продвинутый",
          description: "Совершенствуйте ваш французский",
          level: "advanced",
        },
        {
          title: "Немецкий для путешествий",
          description: "Основы немецкого для туристов",
          level: "beginner",
        },
      ],
    },
  },
  en: {
    common: {
      nav: {
        study: "Learning",
        shop: "Shop",
        travel: "Travel",
        login: "Log in",
        logout: "Log out",
        account: "Account",
        menu: "Menu",
        language: "Language",
      },
      theme: {
        system: "System theme",
        light: "Light theme",
        dark: "Dark theme",
      },
      footer: {
        copyright: "All rights reserved.",
        madeBy: "Made by",
      },
      courseCta: "To learning",
      choosePath: "Choose a path",
      ctaSubtitle: "Choose a direction and continue your journey with Plyglo.",
      getStarted: "Get started",
    },
    contact: {
      title: "We will call you",
      description:
        "Due to increased bot activity, please fill in the message field.",
      phonePlaceholder: "Phone number",
      emailPlaceholder: "email@example.com",
      messagePlaceholder: "Request topic",
      submit: "Call me!",
    },
    home: {
      title: "Learn! Communicate! Grow! Become multilingual!",
      description:
        "Language is the main tool of communication! Connect with people from different cultures, travel, and we will help you along the way.",
    },
    study: {
      eyebrow: "Learning without an entry barrier",
      title: "Learn for free, confirm your knowledge when you are ready",
      description:
        "Access to learning materials remains free. The only paid part is the test at the end of each chapter: it helps record your result and gradually collect confirmations for a certificate.",
      start: "Start learning",
      browse: "Browse courses",
      costLabel: "Learning cost",
      freeAccess: "Free access",
      how: "How it works",
      progressTitle: "Progress is built chapter by chapter",
      certificateEyebrow: "Certificate",
      certificateTitle: "An electronic document after the full course",
      certificateText:
        "A certificate is issued when every chapter in the course has a knowledge confirmation. This way, the final status reflects not just viewed materials, but consistent completion of the whole program.",
      languageCardText:
        "Free chapters, paid confirmation tests, and a certificate after completing the course.",
      benefits: [
        "Course materials are available for free",
        "Pay only for the final chapter check",
        "Confirmations record real progress",
        "An electronic certificate is issued after the full course",
      ],
      languages: ["English", "Chinese", "French"],
      steps: [
        {
          title: "Learn for free",
          description:
            "Open course chapters, study the materials, and return to them at your own pace without paying for access.",
          icon: "bx:book-open",
        },
        {
          title: "Check each chapter with a test",
          description:
            "At the end of every chapter, you can take a paid test and receive a knowledge confirmation for that topic.",
          icon: "bx:check-shield",
        },
        {
          title: "Collect confirmations",
          description:
            "When all chapters are confirmed, the course is considered completed and an electronic certificate is prepared.",
          icon: "bx:badge-check",
        },
      ],
    },
    shop: {
      title: "A shop for language practice materials",
      description:
        "In the shop, you will be able to buy didactic learning materials and literature in different languages of the world. It is a place for those who want not only to complete a course, but to continue practicing through books, exercises, and useful learning tools.",
      open: "Go to the shop",
      inside: "Inside",
      insideTitle: "Everything that helps language become a habit",
      inspiration: "For study and inspiration",
      goalsTitle: "Materials for different goals",
      categories: [
        "Textbooks and workbooks",
        "Cards and visual materials",
        "Adapted literature",
        "Books in the original language",
        "Materials for teachers",
        "Practice tasks for courses",
      ],
      highlights: [
        {
          title: "Didactic materials",
          description:
            "Cards, workbooks, exercises, and additional materials that help reinforce course topics.",
          icon: "bx:collection",
        },
        {
          title: "Literature in world languages",
          description:
            "Books, adapted texts, and editions in different languages for reading, practice, and cultural discovery.",
          icon: "bx:book-bookmark",
        },
        {
          title: "Materials for self-practice",
          description:
            "Selections for those who want to study at their own pace and add real language examples to lessons.",
          icon: "bx:pencil",
        },
      ],
    },
    travel: {
      title: "Take your language where it comes alive",
      description:
        "The skills gained through learning should be used while traveling to countries whose language you have studied. A trip becomes a continuation of the course: you hear living speech, try speaking yourself, and understand the culture better.",
      open: "Go to travel",
      studyBefore: "Learn before the trip",
      idea: "Direction idea",
      ideaTitle: "First the language, then the country",
      ideaText:
        "Learning gives you a foundation, and travel helps strengthen it in real situations: in cafes, museums, airports, streets, and conversations with people.",
      why: "Why travel",
      experienceTitle: "Travel turns knowledge into experience",
      routes: [
        "English for travel across Europe, Asia, and America",
        "French for France, Belgium, Canada, and other French-speaking countries",
        "Chinese for trips to China and modern cultural discovery",
      ],
      ideas: [
        {
          title: "Choose a country by language",
          description:
            "After a course, it is easier to see the map as a space where you can speak and understand people.",
          icon: "bx:map",
        },
        {
          title: "Practice language on the road",
          description:
            "Ordering food, buying tickets, tours, conversations with locals, and new friendships turn knowledge into skill.",
          icon: "bx:conversation",
        },
        {
          title: "Discover culture more deeply",
          description:
            "Language helps you read signs, understand context, notice details, and feel a country beyond a tourist's view.",
          icon: "bx:compass",
        },
      ],
    },
    login: {
      username: "Username",
      password: "Password",
      missingUsername: "Enter your username",
      missingPassword: "Enter your password",
      error: "Login failed",
    },
    dashboard: {
      userName: "Ivan Petrov",
      account: "Personal balance",
      availableBalance: "Available for course purchases",
      coursesTitle: "Available language courses",
      available: "Available",
      unavailable: "Unavailable",
      buy: "Buy",
      goToCourse: "Go to course",
      levels: {
        beginner: "Beginner",
        intermediate: "Intermediate",
        advanced: "Advanced",
      },
      courses: [
        {
          title: "English for beginners",
          description: "A basic English course from scratch",
          level: "beginner",
        },
        {
          title: "Intermediate Spanish",
          description: "Continue learning Spanish",
          level: "intermediate",
        },
        {
          title: "Advanced French",
          description: "Improve your French",
          level: "advanced",
        },
        {
          title: "German for travel",
          description: "German basics for tourists",
          level: "beginner",
        },
      ],
    },
  },
  fr: {
    common: {
      nav: {
        study: "Apprendre",
        shop: "Boutique",
        travel: "Voyages",
        login: "Connexion",
        logout: "Déconnexion",
        account: "Compte",
        menu: "Menu",
        language: "Langue",
      },
      theme: {
        system: "Thème système",
        light: "Thème clair",
        dark: "Thème sombre",
      },
      footer: {
        copyright: "Tous droits réservés.",
        madeBy: "Créé par",
      },
      courseCta: "Vers l'apprentissage",
      choosePath: "Choisissez un chemin",
      ctaSubtitle: "Choisissez une direction et continuez avec Plyglo.",
      getStarted: "Commencer",
    },
    contact: {
      title: "Nous vous appellerons",
      description:
        "En raison de l'activité accrue des bots, merci de remplir le champ du message.",
      phonePlaceholder: "Numéro de téléphone",
      emailPlaceholder: "adresse@mail.fr",
      messagePlaceholder: "Sujet de la demande",
      submit: "Appelez-moi !",
    },
    home: {
      title: "Apprenez ! Communiquez ! Progressez ! Devenez polyglotte !",
      description:
        "La langue est le principal outil de communication ! Échangez avec des personnes de différentes cultures, voyagez, et nous vous accompagnerons.",
    },
    study: {
      eyebrow: "Apprendre sans barrière d'entrée",
      title: "Apprenez gratuitement, confirmez vos connaissances quand vous êtes prêt",
      description:
        "L'accès aux supports de cours reste gratuit. Seul le test à la fin de chaque chapitre est payant : il permet de valider votre résultat et de réunir progressivement les confirmations pour un certificat.",
      start: "Commencer",
      browse: "Voir les cours",
      costLabel: "Coût de l'apprentissage",
      freeAccess: "Accès gratuit",
      how: "Comment ça marche",
      progressTitle: "La progression se construit chapitre par chapitre",
      certificateEyebrow: "Certificat",
      certificateTitle: "Un document électronique après tout le cours",
      certificateText:
        "Le certificat est délivré lorsque chaque chapitre du cours possède une confirmation des connaissances. Le statut final reflète ainsi un vrai parcours, pas seulement la consultation des supports.",
      languageCardText:
        "Chapitres gratuits, tests de validation payants et certificat après la fin du cours.",
      benefits: [
        "Les supports de cours sont gratuits",
        "Vous payez seulement la validation du chapitre",
        "Les confirmations reflètent les progrès réels",
        "Un certificat électronique est délivré après tout le cours",
      ],
      languages: ["Anglais", "Chinois", "Français"],
      steps: [
        {
          title: "Apprenez gratuitement",
          description:
            "Ouvrez les chapitres, étudiez les supports et revenez-y à votre rythme sans payer l'accès.",
          icon: "bx:book-open",
        },
        {
          title: "Validez le chapitre par un test",
          description:
            "À la fin de chaque chapitre, vous pouvez passer un test payant et obtenir une confirmation des connaissances.",
          icon: "bx:check-shield",
        },
        {
          title: "Réunissez les confirmations",
          description:
            "Lorsque tous les chapitres sont confirmés, le cours est considéré comme terminé et un certificat électronique est préparé.",
          icon: "bx:badge-check",
        },
      ],
    },
    shop: {
      title: "Boutique de supports pour la pratique des langues",
      description:
        "Dans la boutique, vous pourrez acheter des supports didactiques pour apprendre et de la littérature dans différentes langues du monde. C'est un espace pour continuer à pratiquer avec des livres, des exercices et des outils utiles.",
      open: "Aller à la boutique",
      inside: "À l'intérieur",
      insideTitle: "Tout ce qui aide la langue à devenir une habitude",
      inspiration: "Pour étudier et s'inspirer",
      goalsTitle: "Des supports pour différents objectifs",
      categories: [
        "Manuels et cahiers d'exercices",
        "Cartes et supports visuels",
        "Littérature adaptée",
        "Livres en langue originale",
        "Supports pour enseignants",
        "Exercices pratiques liés aux cours",
      ],
      highlights: [
        {
          title: "Supports didactiques",
          description:
            "Cartes, cahiers, exercices et supports complémentaires pour consolider les thèmes des cours.",
          icon: "bx:collection",
        },
        {
          title: "Littérature en langues du monde",
          description:
            "Livres, textes adaptés et éditions dans différentes langues pour lire, pratiquer et découvrir la culture.",
          icon: "bx:book-bookmark",
        },
        {
          title: "Supports pour la pratique autonome",
          description:
            "Sélections pour apprendre à son rythme et enrichir les leçons avec des exemples vivants.",
          icon: "bx:pencil",
        },
      ],
    },
    travel: {
      title: "Emmenez la langue là où elle prend vie",
      description:
        "Les compétences acquises doivent servir en voyage dans les pays dont vous avez appris la langue. Le voyage prolonge le cours : vous entendez la langue vivante, vous parlez et vous comprenez mieux la culture.",
      open: "Aller aux voyages",
      studyBefore: "Apprendre avant le départ",
      idea: "Idée de direction",
      ideaTitle: "D'abord la langue, ensuite le pays",
      ideaText:
        "L'apprentissage donne une base, et le voyage la renforce dans des situations réelles : cafés, musées, aéroports, rues et conversations.",
      why: "Pourquoi partir",
      experienceTitle: "Le voyage transforme le savoir en expérience",
      routes: [
        "Anglais pour voyager en Europe, en Asie et en Amérique",
        "Français pour la France, la Belgique, le Canada et les pays francophones",
        "Chinois pour voyager en Chine et découvrir la culture moderne",
      ],
      ideas: [
        {
          title: "Choisissez un pays par la langue",
          description:
            "Après un cours, la carte devient un espace où vous pouvez parler et comprendre les gens.",
          icon: "bx:map",
        },
        {
          title: "Pratiquez en voyage",
          description:
            "Commander, acheter des billets, visiter, parler aux habitants et faire des rencontres transforment le savoir en compétence.",
          icon: "bx:conversation",
        },
        {
          title: "Découvrez la culture plus profondément",
          description:
            "La langue aide à lire les panneaux, comprendre le contexte, remarquer les détails et ressentir le pays autrement.",
          icon: "bx:compass",
        },
      ],
    },
    login: {
      username: "Nom d'utilisateur",
      password: "Mot de passe",
      missingUsername: "Entrez votre nom d'utilisateur",
      missingPassword: "Entrez votre mot de passe",
      error: "Erreur de connexion",
    },
    dashboard: {
      userName: "Ivan Petrov",
      account: "Compte personnel",
      availableBalance: "Disponible pour acheter des cours",
      coursesTitle: "Cours de langues disponibles",
      available: "Disponible",
      unavailable: "Indisponible",
      buy: "Acheter",
      goToCourse: "Aller au cours",
      levels: {
        beginner: "Débutant",
        intermediate: "Intermédiaire",
        advanced: "Avancé",
      },
      courses: [
        {
          title: "Anglais pour débutants",
          description: "Un cours d'anglais de base à partir de zéro",
          level: "beginner",
        },
        {
          title: "Espagnol intermédiaire",
          description: "Continuez à apprendre l'espagnol",
          level: "intermediate",
        },
        {
          title: "Français avancé",
          description: "Perfectionnez votre français",
          level: "advanced",
        },
        {
          title: "Allemand pour voyager",
          description: "Bases de l'allemand pour touristes",
          level: "beginner",
        },
      ],
    },
  },
  zh: {
    common: {
      nav: {
        study: "学习",
        shop: "商店",
        travel: "旅行",
        login: "登录",
        logout: "退出",
        account: "个人中心",
        menu: "菜单",
        language: "语言",
      },
      theme: {
        system: "跟随系统",
        light: "浅色主题",
        dark: "深色主题",
      },
      footer: {
        copyright: "保留所有权利。",
        madeBy: "制作",
      },
      courseCta: "去学习",
      choosePath: "选择路径",
      ctaSubtitle: "选择方向，继续与 Plyglo 一起前进。",
      getStarted: "开始",
    },
    contact: {
      title: "我们会给你回电",
      description: "由于机器人活动增加，请填写消息字段。",
      phonePlaceholder: "电话号码",
      emailPlaceholder: "email@example.com",
      messagePlaceholder: "咨询主题",
      submit: "请给我回电！",
    },
    home: {
      title: "学习！交流！成长！成为多语者！",
      description:
        "语言是沟通的主要工具！与不同文化的人交流，去旅行，我们会陪你一路前进。",
    },
    study: {
      eyebrow: "零门槛学习",
      title: "免费学习，在准备好时验证知识",
      description:
        "学习资料保持免费。唯一付费的部分是每章末尾的测试：它可以记录你的结果，并逐步收集获得证书所需的确认。",
      start: "开始学习",
      browse: "查看课程",
      costLabel: "学习费用",
      freeAccess: "免费访问",
      how: "如何运作",
      progressTitle: "进度按章节推进",
      certificateEyebrow: "证书",
      certificateTitle: "完成整个课程后的电子证书",
      certificateText:
        "当课程中的每一章都获得知识确认后，将颁发证书。这样最终状态不仅代表看过资料，也代表完整完成了学习计划。",
      languageCardText: "免费章节、付费确认测试，以及完成课程后的证书。",
      benefits: [
        "课程资料免费开放",
        "只为章节最终测试付费",
        "确认记录真实进度",
        "完成整个课程后颁发电子证书",
      ],
      languages: ["英语", "中文", "法语"],
      steps: [
        {
          title: "免费学习",
          description: "打开课程章节，学习资料，并按照自己的节奏反复查看，无需为访问付费。",
          icon: "bx:book-open",
        },
        {
          title: "用测试检查章节",
          description: "每章结束时，你可以参加付费测试，并获得该主题的知识确认。",
          icon: "bx:check-shield",
        },
        {
          title: "收集确认",
          description: "当所有章节都被确认后，课程视为完成，并准备电子证书。",
          icon: "bx:badge-check",
        },
      ],
    },
    shop: {
      title: "语言练习材料商店",
      description:
        "在商店里，你可以购买用于学习的教学材料，以及世界不同语言的文学作品。这里适合想继续通过书籍、练习和实用工具进行语言实践的人。",
      open: "进入商店",
      inside: "里面有什么",
      insideTitle: "帮助语言成为习惯的一切",
      inspiration: "学习与灵感",
      goalsTitle: "面向不同目标的材料",
      categories: [
        "教材和练习册",
        "卡片和视觉材料",
        "分级读物",
        "原版语言书籍",
        "教师材料",
        "课程配套练习",
      ],
      highlights: [
        {
          title: "教学材料",
          description: "卡片、练习册、任务和补充材料，帮助巩固课程主题。",
          icon: "bx:collection",
        },
        {
          title: "世界语言文学",
          description: "不同语言的书籍、改编文本和读物，用于阅读、练习和了解文化。",
          icon: "bx:book-bookmark",
        },
        {
          title: "自主练习材料",
          description: "适合按自己的节奏学习，并用真实语言例子补充课程的材料选择。",
          icon: "bx:pencil",
        },
      ],
    },
    travel: {
      title: "把语言带到它真正鲜活的地方",
      description:
        "学习获得的能力应该用于前往你所学语言的国家旅行。旅行会成为课程的延续：你听到真实表达，尝试开口，也更理解当地文化。",
      open: "进入旅行",
      studyBefore: "出发前学习",
      idea: "方向理念",
      ideaTitle: "先学语言，再去国家",
      ideaText:
        "学习给你基础，旅行则在真实场景中巩固它：咖啡馆、博物馆、机场、街头以及与人的对话。",
      why: "为什么旅行",
      experienceTitle: "旅行把知识变成经验",
      routes: [
        "用于欧洲、亚洲和美洲旅行的英语",
        "用于法国、比利时、加拿大和其他法语地区的法语",
        "用于中国旅行和了解现代文化的中文",
      ],
      ideas: [
        {
          title: "按语言选择国家",
          description: "课程结束后，地图不只是地点列表，而是你可以交流和理解他人的空间。",
          icon: "bx:map",
        },
        {
          title: "在路上练习语言",
          description: "点餐、买票、参观、与当地人交谈和结识朋友，会把知识变成技能。",
          icon: "bx:conversation",
        },
        {
          title: "更深入地发现文化",
          description: "语言帮助你阅读标识、理解语境、注意细节，并不只是以游客视角看一个国家。",
          icon: "bx:compass",
        },
      ],
    },
    login: {
      username: "用户名",
      password: "密码",
      missingUsername: "请输入用户名",
      missingPassword: "请输入密码",
      error: "登录失败",
    },
    dashboard: {
      userName: "伊万·彼得罗夫",
      account: "个人账户",
      availableBalance: "可用于购买课程",
      coursesTitle: "可用语言课程",
      available: "可用",
      unavailable: "不可用",
      buy: "购买",
      goToCourse: "进入课程",
      levels: {
        beginner: "初级",
        intermediate: "中级",
        advanced: "高级",
      },
      courses: [
        {
          title: "初学者英语",
          description: "从零开始的基础英语课程",
          level: "beginner",
        },
        {
          title: "中级西班牙语",
          description: "继续学习西班牙语",
          level: "intermediate",
        },
        {
          title: "高级法语",
          description: "提高你的法语水平",
          level: "advanced",
        },
        {
          title: "旅行德语",
          description: "游客德语基础",
          level: "beginner",
        },
      ],
    },
  },
};

const getMessage = (locale: Locale, key: string): TranslationValue | undefined => {
  return key.split(".").reduce<TranslationValue | undefined>((value, part) => {
    if (!value || typeof value !== "object" || Array.isArray(value)) {
      return undefined;
    }

    return value[part];
  }, messages[locale]);
};

export const useI18n = () => {
  const locale = useState<Locale>("locale", () => "ru");

  const setLocale = (nextLocale: Locale) => {
    locale.value = nextLocale;

    if (import.meta.client) {
      document.documentElement.lang = nextLocale;
      localStorage.setItem("language", nextLocale);
    }
  };

  const nextLocale = () => {
    const currentIndex = locales.findIndex((item) => item.code === locale.value);
    const next = locales[(currentIndex + 1) % locales.length];
    setLocale(next.code);
  };

  const t = (key: string): string => {
    const value = getMessage(locale.value, key) ?? getMessage("ru", key);
    return typeof value === "string" ? value : key;
  };

  const tm = <T = TranslationValue>(key: string): T => {
    return (getMessage(locale.value, key) ?? getMessage("ru", key)) as T;
  };

  const currentLocaleLabel = computed(() => {
    return locales.find((item) => item.code === locale.value)?.label ?? "RU";
  });

  onMounted(() => {
    const savedLocale = localStorage.getItem("language");

    if (savedLocale && locales.some((item) => item.code === savedLocale)) {
      setLocale(savedLocale as Locale);
      return;
    }

    document.documentElement.lang = locale.value;
  });

  return {
    locale,
    locales,
    currentLocaleLabel,
    setLocale,
    nextLocale,
    t,
    tm,
  };
};
