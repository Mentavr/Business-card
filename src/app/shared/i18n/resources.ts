export const resources = {
    en: {
        translation: {
            header: {
                name: 'Artem Bykov',
                nav: {
                    item1: 'Work',
                    item2: 'About',
                    item3: 'Contact',
                },
            },
            hero: {
                title: 'Hi, I am Artem Bykov.',
                description: 'Building the web where people feel comfortable, not lost.',
            },
            button: {
                hero: 'Contact Me',
                footer: 'Submit',
            },
            about: {
                title: 'About me',
                subTitle: 'Front-end Developer with an engineering background in energy.',
                description:
                    'Hi! I love building modern web apps, learning new tech, and finding creative solutions to problems. Beyond coding, I’m into photography, guitar, and cinema.',
                link: 'More about me',
                resume: 'Open Resume',
            },
            form: {
                name: 'Name',
                email: 'Email',
                subject: 'Subject',
                message: 'Message',
            },
            footer: {
                title: 'Let’s connect',
                description: 'Say hello at',
                resumeTitle: 'For more info, here’s my',
                resume: 'resume',
                name: 'Artem Bykov',
            },
            skills: {
                title: 'My Skills',
                description:
                    'I am constantly developing my skills and seeking new opportunities to improve, adapt, and grow both professionally and personally.',
                stack: 'Stack',
            },
            experience: {
                title: 'Мой опыт',
                firstJobTitle: 'Climbing company',
                secondJobTitle: 'ReLabs',
                firstJobDesc:
                    'Climbing Company is a startup that unites the climbing community and provides digital tools for training, communication, and gear shopping. The company’s mission is to make climbing accessible, safe, and engaging for all skill levels through modern technology.',
                secondJobDesc:
                    'A company that develops software and hardware solutions for real business challenges, supporting projects at every stage — from requirements analysis to implementation.',
                firstJobDate: 'Jul 2022 - Aug 2023',
                secondJobDate: 'Sep 2023 - Jul 2025',
            },
            works: {
                title: 'Featured Projects',
                description:
                    'Worked on a variety of projects — from social apps and training platforms to e-commerce sites and analytics tools. Completed these projects across different roles and companies. You can view them at the link',
                link: 'My projects',
            },
            toast: {
                success: 'The email has been sent, I will definitely read it and reply, have a great day!',
                error: 'An error occurred, please try again',
            },
            validation: {
                required: 'Required field',
                matches: 'First character cannot be a space',
                max: 'No more than 200 characters',
                email: 'Please enter a valid email',
            },
            climbing: {
                title: 'Climbing company',
                description:
                    'Climbing Company is a startup that unites the climbing community and provides digital tools for training, communication, and gear shopping. The company’s mission is to make climbing accessible, safe, and engaging for all skill levels through modern technology.',
                projects: {
                    peakConnect: {
                        title: 'PeakConnect',
                        description: 'Social app for climbers',
                        works: {
                            point1:'Development of the user authorization and registration system.',
                            point2:'Implementation of a real-time chat using WebSocket for instant communication between users.',
                            point3:'Integration with the backend to manage user data and interact with application services.',
                            point4:'Optimization of UX/UI for proper operation across different web browsers and devices.',
                            point5:'Creation of a rating system for evaluating partners and increasing user engagement.',
                            point6:'Working in a startup environment via a freelance platform: independently managing tasks, communicating with the team, and participating in project decision-making.',
                        },
                    },
                    climbBoard: {
                        title: 'ClimbBoard',
                        description: 'Internal platform for training and statistics',
                        works: {
                            point1:'Development of the athlete’s personal dashboard with progress charts.',
                            point2:'Integration of training trackers via REST API.',
                            point3:'Creation of a calendar for events and competitions.',
                            point4:'Responsive interface layout.',
                            point5:'Page load optimization and data caching.',
                        },
                    },
                    rockShop: {
                        title: 'RockShop',
                        description: 'Gear sales module',
                        works: {
                            point1:'Implementation of a product catalog with filters and search.',
                            point2:'Integration of the shopping cart and payment system.',
                            point3:'Setup of the order form with validation using React Hook Form.',
                            point4:'Support for product reviews and ratings.',
                        },
                    },
                },
            },
            relabs: {
                title: 'ReLabs',
                description: 'A company that develops software and hardware solutions for real business challenges, supporting projects at every stage — from requirements analysis to implementation.',
                projects: {
                    kremi: {
                        title: 'Kremi',
                        description: "Online ice cream machine store.",
                        works: {
                             point1:'Responsive interface layout and implementation of payment method selection logic.',
                             point2:'Integration of a video player with custom controls: enabling video playback with customer reactions to ice cream via user buttons and additional interface elements (play/pause, progress, visual cues).',
                             point3:'Creation of an interactive product slider with scrolling and product selection functionality.',
                        },
                    },
                    foodTruck: {
                        title: 'FoodTruck',
                        description:
                        "Platform for renting spaces to mobile food vendors.",
                        works: {
                             point1:'Development of forms for registration and rental management.',
                             point2:'Integration with API using RTK Query for efficient data exchange between frontend and backend.',
                             point3:'Bug fixing and ensuring stable application performance.',
                        },
                    },
                    relabs: {
                        title: 'Relabs',
                        description: "Company main website, updates and redesign.",
                        works: {
                             point1:'Responsive interface layout and refinement of blocks based on the design, adding animations to improve UX.',
                             point2:'Implementation of company project catalogs with image examples and sliders within the catalogs.',
                             point3:'Website optimization and performance improvement.',
                        },
                    },
                    krupec: {
                        title: 'Agricultural Unitary Cooperative Enterprise “Krupec”',
                        description:
                        "Internal company website, monitoring of surveillance cameras, keeping statistics, and tracking cow feeding.",
                        works: {
                             point1:'Development and implementation of functionality on the internal map: adding specialized buttons and filters to optimize internal processes.',
                             point2:'Bug fixing related to statistics and filtering in the relevant site sections, improving stability and accuracy of displayed data.',
                             point3:'Development of report signing functionality: enabling users to draw signatures interactively using React and Canvas.',
                        },
                    },
                    anjerie: {
                        title: 'Anjerie',
                        description: "Online jewelry store.",
                        works: {
                             point1:'Layout of interface blocks, including the top block with animation and background video.',
                             point2:'Implementation of order placement and payment logic.',
                        },
                    },
                    minerals: {
                        title: 'Minerals',
                        description: "Online store of stones and minerals «Minerals on Mokhovaya».",
                        works: {
                             point1:'Project analysis and task setting for development.',
                             point2:'Layout of interface blocks and implementation of user registration and authorization logic, including OAuth 2.0.',
                             point3:'Creation of a shopping cart with order management support.',
                             point4:'Integration of Yandex.Maps to display the store location.',
                        },
                    },
                    concierge: {
                        title: 'Concierge (Telegram bot)',
                        description:
                        "Tracking, statistics, and analytics of advertising placed on Telegram channels @ConciergeTGBot.",
                        works: {
                             point1:'Refactoring existing code and joining the project as the main developer, improving code structure and readability.',
                             point2:'Development of an interactive interface for easy navigation through folders and favorites.',
                             point3:'Implementation of flexible data sorting via calendar, filters, and other mechanisms to enhance analysis efficiency.',
                             point4:'Creation of analytics charts to visualize advertising data and support decision-making.',
                             point5:'Integration with the backend via API for dynamic statistics display.',
                             point6:'Implementation of logic for calculating total ad revenue and filtering by selected dates.',
                        },
                    },
                    UIKit: {
                        title: 'UI Kit & Components',
                        description:
                        "A UI Kit that will be used by the company itself in future projects.",
                        works: {
                             point1:'Creation of a UI Kit with reusable components and documentation in Storybook.',
                             point2:'Development and maintenance of individual interface components for use in company projects.',
                        },
                    },
                },
            },
        },
    },
    ru: {
        translation: {
            header: {
                name: 'Артем Быков',
                nav: {
                    item1: 'Работа',
                    item2: 'Обо мне',
                    item3: 'Контакт',
                },
            },
            hero: {
                title: 'Привет, я Артем Быков.',
                description: 'Создаю веб-сайты, в которых людям удобно, а не сложно.',
            },
            button: {
                hero: 'Связь со мной',
                footer: 'Отправить',
            },
            about: {
                title: 'Обо мне',
                subTitle: 'Front-end разработчик с инженерным образованием в области энергетики.',
                description:
                    'Привет! Люблю создавать современные веб-приложения, изучать новые технологии и находить креативные решения. Вне кода увлекаюсь фотографией, игрой на гитаре и кино.',
                link: 'Больше обо мне',
                resume: 'Открыть Резюме',
            },
            form: {
                name: 'Имя',
                email: 'Электронная почта',
                subject: 'Тема',
                message: 'Сообщение',
            },
            footer: {
                title: 'Будем на связи',
                description: 'Напишите привет сюда',
                resumeTitle: 'Больше информации в моем',
                resume: 'резюме',
                name: 'Артем Быков',
            },
            skills: {
                title: 'Мои навыки',
                description:
                    'Я постоянно развиваю свои навыки и ищу новые возможности для совершенствования, адаптации и роста как в профессиональной, так и в личной сфере.',
                stack: 'Cтек',
            },
            experience: {
                title: 'Мой опыт',
                firstJobTitle: 'Climbing company',
                secondJobTitle: 'ReLabs',
                firstJobDesc:
                    'Climbing Company — стартап, объединяющий сообщество скалолазов и предоставляющий цифровые инструменты для тренировок, общения и покупки снаряжения. Миссия компании — сделать скалолазание доступным, безопасным и увлекательным для всех уровней, используя современные технологии.',
                secondJobDesc:
                    'Компания создающая программные и аппаратные решения для реальных бизнес-задач, сопровождая проекты на всех этапах — от анализа требований до внедрения.',
                firstJobDate: 'Июл 2022 - Авг 2023',
                secondJobDate: 'Сен 2023 - Июл 2025',
            },
            works: {
                title: 'Основные проекты',
                description:
                    'Работал над различными проектами — от социальных приложений и платформ для тренировок до интернет-магазинов и аналитических инструментов. Все проекты выполнял на разных позициях и в разных компаниях. Ознакомиться с ними можно по ссылке.',
                link: 'Мои работы',
            },
            toast: {
                success: 'Письмо отправлено, я обязательно прочту и отвечу, хорошего дня!',
                error: 'Произошла ошибка, попробуйте снова',
            },
            validation: {
                required: 'Обязательное поле',
                matches: 'Первый символ не может быть пробелом',
                max: 'Не больше 200 символов',
                email: 'Email указан неверно',
            },
            climbing: {
                title: 'Climbing company',
                description:
                    'Cтартап, объединяющий сообщество скалолазов и предоставляющий цифровые инструменты для тренировок, общения и покупки снаряжения. Миссия компании — сделать скалолазание доступным, безопасным и увлекательным для всех уровней, используя современные технологии.',
                projects: {
                    peakConnect: {
                        title: 'PeakConnect',
                        description: 'Cоциальное приложение для скалолазов',
                        works: {
                            point1:'Разработка системы авторизации и регистрации пользователей.',
                            point2:'Реализация чата в реальном времени с использованием WebSocket для мгновенного общения между пользователями.',
                            point3:'Интеграция с бэкендом для управления пользовательскими данными и взаимодействия с сервисами приложения.',
                            point4:'Оптимизация UX/UI для корректной работы в разных веб-браузерах и на различных устройствах.',
                            point5:'Создание рейтинговой системы для оценки партнеров и повышения вовлеченности пользователей.',
                            point6:'Работа в стартап-среде через фриланс-платформу: самостоятельное управление задачами, коммуникация с командой и участие в принятии проектных решений.',
                        },
                    },
                    climbBoard: {
                        title: 'ClimbBoard',
                        description: 'Внутренняя платформа для тренировок и статистики',
                        works: {
                            point1:'Разработка личного кабинета спортсмена с графиками прогресса.',
                            point2:'Подключение трекеров тренировок через REST API.',
                            point3:'Создание календаря событий и соревнований.',
                            point4:'Вёрстка адаптивных интерфейсов.',
                            point5:'Оптимизация загрузки страниц и кэширование данных.',
                        },
                    },
                    rockShop: {
                        title: 'RockShop',
                        description: 'Модуль для продажи снаряжения',
                        works: {
                            point1:'Имплементация каталога товаров с фильтрами и поиском.',
                            point2:'Интеграция корзины и системы оплаты.',
                            point3:'Настройка формы заказа с валидацией через React Hook Form.',
                            point4:'Поддержка отзывов и рейтингов товаров.',
                        },
                    },
                },
            },
            relabs: {
                title: 'ReLabs',
                description: 'Компания создающая программные и аппаратные решения для реальных бизнес-задач, сопровождая проекты на всех этапах — от анализа требований до внедрения.',
                projects: {
                    kremi: {
                        title: 'Креми',
                        description: 'Интернет-магазин морожениц',
                        works: {
                             point1:'Вёрстка адаптивных интерфейсов и реализация логики выбора способа оплаты.',
                             point2:'Интеграция видеоплеера с кастомным управлением: реализация воспроизведения видео с реакциями клиентов на мороженое через пользовательские кнопки и дополнительные элементы интерфейса (плей/пауза, прогресс, визуальные подсказки).',
                             point3:'Создание интерактивного слайдера товаров с возможностью пролистывания и выбора продуктов.',
                        },
                    },
                    foodTruck: {
                        title: 'FoodTruck',
                        description:
                            'Платформа для аренды площадей мобильными точками общественного питания',
                        works: {
                            point1:'Разработка форм для регистрации и управления арендой.',
                            point2:'Интеграция с API с использованием RTK Query для эффективного обмена данными между фронтендом и бэкендом.',
                            point3:'Поиск и устранение багов, обеспечение стабильной работы приложения.',
                        },
                    },
                    relabs: {
                        title: 'Relabs',
                        description: 'Основной сайт компании, обновление и редизайн',
                        works: {
                            point1:'Верстка адаптивных интерфейсов и доработка блоков на основе макета, добавление анимаций для улучшения UX.',
                            point2:'Реализация каталогов работ компании с примерами изображений и слайдеров внутри каталогов.',
                            point3:'Оптимизация сайта и повышение производительности.',
                        },
                    },
                    krupec: {
                        title: 'КСУП «Крупец»',
                        description:
                            'Внутренний сайт организации, мониторинг камер видеонаблюдения, ведение статистики и учет кормления коров',
                        works: {
                            point1:'Разработка и внедрение функционала на внутренней карте: добавление специализированных кнопок и фильтров для оптимизации работы внутренних процессов.',
                            point2:'Устранение багов, связанных со статистикой и фильтрацией в соответствующих разделах сайта, повышение стабильности и точности отображаемых данных.',
                            point3:'Разработка функционала подписи на отчёты: реализация возможности интерактивного рисования подписи пользователем с использованием библиотеки React на основе Canvas.',
                        },
                    },
                    anjerie: {
                        title: 'Anjerie',
                        description: ' Интернет-магазин ювелирных украшений',
                        works: {
                            point1:'Верстка интерфейсных блоков, включая верхний блок с анимацией и видео на фоне.',
                            point2:'Реализация логики оформления и оплаты заказов.',
                        },
                    },
                    minerals: {
                        title: 'Minerals',
                        description: 'Интернет-магазин камней и минералов «Минералы на Моховой»',
                        works: {
                            point1:'Анализ проекта и постановка задач для разработки.',
                            point2:'Верстка интерфейсных блоков и реализация логики регистрации и авторизации пользователей, включая OAuth 2.0.',
                            point3:'Создание корзины товаров с поддержкой управления заказами.',
                            point4:'Интеграция Яндекс.Карты для отображения местоположения магазина.',
                        },
                    },
                    concierge: {
                        title: 'Concierge (Telegram-бот)',
                        description:
                            ' Отслеживание, статистика и аналитика размещенной рекламы на Telegram-каналах @ConciergeTGBot',
                        works: {
                            point1:'Рефакторинг существующего кода и подключение к проекту в качестве основного разработчика, улучшение структуры и читаемости кода.',
                            point2:'Разработка интерактивного интерфейса для удобной навигации по папкам и избранному.',
                            point3:'Реализация гибкой сортировки данных через календарь, фильтры и другие механизмы, повышающие эффективность анализа.',
                            point4:'Создание графиков аналитики для визуализации рекламных данных и поддержки принятия решений.',
                            point5:'Интеграция с бэкендом через API для динамического отображения статистики.',
                            point6:'Реализация логики подсчета общей суммы заработка на рекламе и фильтрации по выбранным датам.',
                        },
                    },
                    UIKit: {
                        title: 'UI Kit & Компоненты',
                        description:
                            'UI Kit который в будущем будет использоваться самой компанией в проектах',
                        works: {
                            point1:'Создание UI Kit с повторно используемыми компонентами и документацией в Storybook.',
                            point2:'Разработка и поддержка отдельных компонентов интерфейса для использования в проектах компании.',
                        },
                    },
                },
            },
        },
    },
};
