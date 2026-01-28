export const resources = {
    en: {
        translation: {
            header: {
                name: 'Artem Bykov',
                nav: {
                    item1: 'Main',
                    item2: 'Work',
                    item3: 'About',
                },
            },
            hero: {
                title: 'Hi, I am Artem Bykov.',
                description: 'Building the web where people feel comfortable, not lost.',
                resume: 'Open Resume',
                contacts: 'Write to me',
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
                contacts: 'Write to me',
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
                title: 'My experience',
                firstJobTitle: 'Climbing company',
                secondJobTitle: 'ReLabs',
                firstJobDesc:
                    'Climbing Company is a startup that unites the climbing community and provides digital tools for training, communication, and gear shopping. The company’s mission is to make climbing accessible, safe, and engaging for all skill levels through modern technology.',
                secondJobDesc:
                    'A company that develops software and hardware solutions for real business challenges, supporting projects at every stage — from requirements analysis to implementation.',
                firstJobDate: 'Jul 2022 - Aug 2023',
                secondJobDate: 'Sep 2023 - Nov 2025',
            },
            works: {
                title: 'Featured Projects',
                description:
                    'Worked on a variety of projects — from social apps and training platforms to e-commerce sites and analytics tools. Completed these projects across different roles and companies. You can view them at the linkI have experience working on various projects — from social apps and training platforms to e-commerce sites and analytics tools. I have contributed to these projects in different roles and at different companies. You can view them via the link.',
                link: 'My projects',
            },
            toast: {
                success:
                    'The email has been sent, I will definitely read it and reply, have a great day!',
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
                            point1: 'Built a registration and profile system for climbers to connect with each other. This serves as the foundation for the entire website.',
                            point2: 'Implemented a real-time chat using WebSocket, enabling users to quickly message each other and coordinate training sessions and climbs.',
                            point3: "Created a partner rating system to encourage more interaction and build trust within the community. This helped revitalize the platform's user base.",
                            point4: 'Ensured cross-device and cross-browser compatibility to provide a consistent and positive user experience for everyone.',
                        },
                    },
                    climbBoard: {
                        title: 'ClimbBoard',
                        description: 'Internal platform for training and statistics',
                        works: {
                            point1: 'Developed a personal dashboard for athletes with progress charts, making it easier for them to track their workouts and stay motivated.',
                            point2: 'Integrated the system with fitness trackers via API, enabling automatic workout data import and eliminating the need for manual entry.',
                            point3: 'Created a shared calendar for events and competitions, allowing athletes to better plan their training sessions and tournament participation.',
                            point4: 'Improved dashboard performance by optimizing page load speeds and implementing data caching.',
                        },
                    },
                    rockShop: {
                        title: 'RockShop',
                        description: 'Gear sales module',
                        works: {
                            point1: 'Created a user-friendly product catalog with search functionality, enabling customers to find what they need faster. This reduced search time by 30%.',
                            point2: 'Configured a secure checkout system. Payments are now processed smoothly and reliably.',
                            point3: 'Designed and implemented a streamlined checkout form. As a result, cart abandonment decreased and conversion rates increased.',
                            point4: 'Integrated a product review and rating system. This built greater trust in the products, leading to a rise in sales.',
                        },
                    },
                },
            },
            relabs: {
                title: 'ReLabs',
                description:
                    'A company that develops software and hardware solutions for real business challenges, supporting projects at every stage — from requirements analysis to implementation.',
                projects: {
                    kremi: {
                        title: 'Kremi',
                        description: 'Online ice cream machine store.',
                        works: {
                            point1: 'Ensured the website works flawlessly on all devices, including the checkout process. Purchases can now be conveniently made on 98% of mobile phones and computers.',
                            point2: 'Implemented a sophisticated video player with custom features to showcase customer reviews. As a result, interest in products increased.',
                            point3: "Built a user-friendly product selection slider with image browsing. This simplified the choice process, especially when dealing with a large number of products, thereby enhancing the site's overall usability and quality.",
                        },
                    },
                    foodTruck: {
                        title: 'FoodTruck',
                        description: 'Platform for renting spaces to mobile food vendors.',
                        works: {
                            point1: 'Created core user forms (registration, rental management). Applications are now completed 25% faster.',
                            point2: 'Established efficient communication between the server and the application via API using RTK Query. As a result, the interface responds 15% faster due to improved caching and fewer network requests.',
                            point3: 'Ensured product stability by fixing over 50 critical and minor bugs during development and testing. Consequently, errors now occur in less than 5% of usage cases.',
                        },
                    },
                    relabs: {
                        title: 'Relabs',
                        description: 'Company main website, updates and redesign.',
                        works: {
                            point1: "I rebuilt and assembled the core components of the corporate website using Next.js 14. I developed responsive interfaces and interactive animations (Framer Motion). Collaborating with the team, we enhanced the site's usability and strengthened brand recognition.",
                            point2: 'I designed and integrated modules for an interactive portfolio (project catalogs, sliders). This became the standout feature of the new website. As a result, our team was able to showcase 20+ completed projects, making it easier for clients to evaluate our expertise.',
                            point3: "I contributed to improving the site's performance by working with SSR and image optimization in Next.js. The team achieved an approximate 30% faster load time for key pages and improved technical metrics (Lighthouse Performance). This had a positive impact on SEO.",
                        },
                    },
                    krupec: {
                        title: 'Agricultural Unitary Cooperative Enterprise “Krupec”',
                        description:
                            'Internal company website, monitoring of surveillance cameras, keeping statistics, and tracking cow feeding.',
                        works: {
                            point1: 'Improved core processes at the agricultural enterprise: created an interactive map with various tools (filters, quick-action buttons). As a result, the interface became more responsive, routine operations now take less time, and overall usability has improved.',
                            point2: 'Enhanced the reliability and accuracy of data in the monitoring system: fixed critical bugs in statistics and filters. Management now makes decisions based on accurate information.',
                            point3: 'Automated document workflows: implemented a module with electronic signatures on Canvas. There is no longer a need to sign reports by hand, and they are now approved more quickly.',
                        },
                    },
                    anjerie: {
                        title: 'Anjerie',
                        description: 'Online jewelry store.',
                        works: {
                            point1: 'Implemented a clear and secure payment system on the website with validation for all forms. The key focus was on ensuring complete reliability so customers could shop with confidence.',
                            point2: "Developed core UI components for a jewelry brand's website. For instance, added a striking hero section with a background video to ensure immediate brand recall and full alignment with the brand's style.",
                        },
                    },
                    minerals: {
                        title: 'Minerals',
                        description: 'Online store of stones and minerals «Minerals on Mokhovaya».',
                        works: {
                            point1: 'Created the website development plan, breaking it down into clear modules and establishing a development timeline with deadlines as the lead developer.',
                            point2: 'Implemented a secure registration system, including OAuth 2.0, to make it easy for new customers to sign up while keeping their data safe. This also lays the groundwork for future CRM integration.',
                            point3: 'Integrated a user-friendly shopping cart and order management system. This simplifies the checkout process for customers, reducing cart abandonment. It also enables flexible order composition, which increases the average order value.',
                            point4: 'Embedded Yandex Maps, which builds trust by displaying the exact location of the museum-store and directly encourages in-store purchases.',
                        },
                    },
                    concierge: {
                        title: 'Concierge (Telegram bot)',
                        description:
                            'Tracking, statistics, and analytics of advertising placed on Telegram channels @ConciergeTGBot.',
                        works: {
                            point1: 'I completely overhauled the code and became the lead developer. As a result, code maintainability improved by 50%, and it became easier for new team members to integrate.',
                            point2: 'I created an intuitive interface with user-friendly navigation and favorites. Users now spend half as much time finding the advertising campaigns they need.',
                            point3: 'I developed an analytics system with various filters, a calendar, and charts. Clients can independently track trends and optimize their advertising spending.',
                            point4: '•I set up seamless backend integration. Statistics now update in real time, and key metrics (e.g., total revenue) are calculated automatically. This eliminates errors from manual input and saves up to 10 working hours per week.',
                        },
                    },
                    UIKit: {
                        title: 'UI Kit & Components',
                        description:
                            'A UI Kit that will be used by the company itself in future projects.',
                        works: {
                            point1: 'Actively contributed to the creation and maintenance of a shared UI component library (UI Kit). This helped standardize the design across all company projects and save development time by reusing ready-made solutions.',
                            point2: 'Was responsible for creating and documenting components in Storybook, which streamlined collaboration between developers and designers.',
                            point3: "Developed adaptive and type-safe React components (using TypeScript) that complied with the library's design system. This increased the reliability of interfaces across all company products.",
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
                    item1: 'Главная',
                    item2: 'Работа',
                    item3: 'Обо мне',
                },
            },
            hero: {
                title: 'Привет, я Артем Быков.',
                description: 'Создаю веб-сайты, в которых людям удобно, а не сложно.',
                resume: 'Открыть Резюме',
                contacts: 'Написать мне',
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
                contacts: 'Написать мне',
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
                secondJobDate: 'Сен 2023 - Ноя 2025',
            },
            works: {
                title: 'Основные проекты',
                description:
                    'Имею опыт работы с различными проектами — от социальных приложений и платформ для тренировок до интернет-магазинов и аналитических инструментов. Все проекты выполнял на разных позициях и в разных компаниях. Ознакомиться с ними можно по ссылке.',
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
                            point1: 'Сделал систему регистрации и профилей, чтобы альпинисты могли общаться друг с другом. Это как основа для всего сайта.',
                            point2: 'Внедрил чат в реальном времени через WebSocket, чтобы все могли быстро переписываться и договариваться о тренировках и восхождениях.',
                            point3: 'Создал систему рейтингов партнеров, чтобы люди больше общались и доверяли друг другу. Это помогло оживить сообщество.',
                            point4: 'Убедился, что сайт нормально работает на разных устройствах и браузерах, чтобы у всех был хороший опыт.',
                        },
                    },
                    climbBoard: {
                        title: 'ClimbBoard',
                        description: 'Внутренняя платформа для тренировок и статистики',
                        works: {
                            point1: 'Сделал личный кабинет для спортсменов с графиками прогресса, чтобы им было проще следить за тренировками и не терять мотивацию.',
                            point2: 'Подключил систему к фитнес-трекерам через API. Теперь данные о тренировках загружаются сами, и спортсменам не нужно ничего вводить вручную.',
                            point3: 'Разработал общий календарь для мероприятий и соревнований. Так спортсмены могут легче планировать свои занятия спортом и участие в турнирах.',
                            point4: 'Ускорил работу личного кабинета за счет оптимизации загрузки страниц и кэширования данных.',
                        },
                    },
                    rockShop: {
                        title: 'RockShop',
                        description: 'Модуль для продажи снаряжения',
                        works: {
                            point1: 'Сделал удобный каталог товаров с поиском, чтобы люди быстрее находили то что им нужно. Это ускорило поиск на 30%.',
                            point2: 'Настроил безопасную систему оплаты через корзину. Теперь оплата проходит без проблем.',
                            point3: 'Придумал и сделал очень простую форму заказа. Из-за этого люди стали реже бросать корзины и больше покупать.',
                            point4: 'Добавил отзывы и оценки товаров. Это помогло людям больше доверять продуктам, и продаж стало больше.',
                        },
                    },
                },
            },
            relabs: {
                title: 'ReLabs',
                description:
                    'Компания создающая программные и аппаратные решения для реальных бизнес-задач, сопровождая проекты на всех этапах — от анализа требований до внедрения.',
                projects: {
                    kremi: {
                        title: 'Креми',
                        description: 'Интернет-магазин морожениц',
                        works: {
                            point1: 'Сделал так, чтобы сайт отлично работал на любых устройствах, включая оплату товара.  Теперь покупки удобно делать на 98% телефонов и компьютеров.',
                            point2: 'Добавил крутой видеоплеер с кастомными возможностями, чтобы показывать отзывы покупателей. В итоге интерес к товарам вырос.',
                            point3: 'Сделал удобную слайдер для выбора товаров, где можно листать фотки. Выбирать стало проще, особенно когда товаров очень много, тем самым повысил удобство и качество сайта.',
                        },
                    },
                    foodTruck: {
                        title: 'FoodTruck',
                        description:
                            'Платформа для аренды площадей мобильными точками общественного питания',
                        works: {
                            point1: 'Сделал основные формы для пользователей (регистрация, управление арендой). Теперь заявки заполняются на 25% быстрее.',
                            point2: 'Наладил связь между сервером и приложением через API с помощью RTK Query. В итоге интерфейс стал откликаться на 15% быстрее, потому что кэширование стало лучше и запросов в сеть стало меньше.',
                            point3: 'Убедился, что продукт работает стабильно, исправив больше 50+ важных и мелких багов в процессе разработки и тестирования. В итоге ошибок стало меньше чем в 5% случаев использования.',
                        },
                    },
                    relabs: {
                        title: 'Relabs',
                        description: 'Основной сайт компании, обновление и редизайн',
                        works: {
                            point1: 'Я переделал и собрал основные части корпоративного сайта на Next.js 14. Я делал адаптивные интерфейсы и интерактивные анимации (Framer Motion). Вместе с командой мы улучшили удобство использования сайта и сделали бренд более узнаваемым.',
                            point2: 'Я разработал и добавил модули для интерактивного портфолио (каталоги проектов, слайдеры). Это стало главной фишкой нового сайта. В итоге наша команда смогла показать больше 20+ выполненных проектов, и клиентам стало проще оценить наш опыт.',
                            point3: ' Я помогал улучшить производительность сайта, работал с SSR и оптимизацией изображений в Next.js. Команда смогла ускорить загрузку важных страниц примерно на 30% и улучшила технические показатели (Lighthouse Performance). Это хорошо повлияло на SEO.',
                        },
                    },
                    krupec: {
                        title: 'КСУП «Крупец»',
                        description:
                            'Внутренний сайт организации, мониторинг камер видеонаблюдения, ведение статистики и учет кормления коров',
                        works: {
                            point1: 'Улучшил основные процессы в сельхозпредприятии: сделал интерактивную карту с разными примочками (фильтры, кнопки быстрого действия). В итоге интерфейс стал быстрее откликаться, рутинные операции занимают меньше времени, и вообще стало удобнее.',
                            point2: 'Подтянул надежность и точность данных в системе мониторинга: починил важные баги в статистике и фильтрах. Теперь начальство принимает решения, опираясь на точную инфу.',
                            point3: 'Автоматизировал работу с документами: внедрил модуль с электронной подписью на Canvas. Больше не нужно подписывать отчеты от руки, и утверждаются они теперь быстрее.',
                        },
                    },
                    anjerie: {
                        title: 'Anjerie',
                        description: ' Интернет-магазин ювелирных украшений',
                        works: {
                            point1: 'Настроил понятную и безопасную оплату на сайте с проверкой всех форм. Важно было сделать всё надёжно, чтобы люди могли спокойно покупать товары.',
                            point2: 'Сделал основные элементы интерфейса для сайта ювелирного бренда. Например, добавил крутой блок в начале страницы с видео на фоне, чтобы сразу запоминалось и соответствовало стилю бренда.',
                        },
                    },
                    minerals: {
                        title: 'Minerals',
                        description: 'Интернет-магазин камней и минералов «Минералы на Моховой»',
                        works: {
                            point1: 'Сделал план на разработку сайте, разбил всё на понятные блоки и составил план по разработке с временными рамками в качестве главного разработчика.',
                            point2: 'Сделал безопасную систему регистрации в том числе использовал (OAuth 2.0), чтобы новым покупателям было легко зарегистрироваться и чтобы их данные были в безопасности. Это ещё и поможет в будущем подключить CRM.',
                            point3: 'Добавил удобную корзину и систему управления заказами. Так покупателям проще оформлять заказы, и они реже бросают корзины. Ещё это даёт возможность гибко формировать заказы, что увеличивает средний чек.',
                            point4: 'Встроил Яндекс Карты, это повышает доверие, показывая точное местоположение музея-магазина и напрямую стимулирует офлайн-покупки.',
                        },
                    },
                    concierge: {
                        title: 'Concierge (Telegram-бот)',
                        description:
                            ' Отслеживание, статистика и аналитика размещенной рекламы на Telegram-каналах @ConciergeTGBot',
                        works: {
                            point1: 'Полностью переделал код и стал ведущим разработчиком. Благодаря этому код стало проще поддерживать на 50%, и новым людям было легче влиться в команду.',
                            point2: 'Сделал понятный интерфейс с удобной навигацией и избранным. Теперь юзеры тратят в два раза меньше времени на поиск нужных рекламных кампаний.',
                            point3: 'Разработал систему аналитики с разными фильтрами, календарем и графиками. Клиенты могут сами отслеживать тренды и улучшать свои расходы на рекламу.',
                            point4: 'Настроил сквозную интеграцию бэкенда. Статистика теперь обновляется в реальном времени, а ключевые показатели (например, общая выручка) рассчитываются автоматически. Больше никаких ошибок из-за ручного ввода, и экономия до 10 рабочих часов в неделю.',
                        },
                    },
                    UIKit: {
                        title: 'UI Kit & Компоненты',
                        description:
                            'UI Kit который в будущем будет использоваться самой компанией в проектах',
                        works: {
                            point1: 'Активно участвовал в создании и поддержке общей библиотеки UI-компонентов (UI Kit). Это позволило привести дизайн к единому стандарту во всех проектах компании и сэкономить время разработки за счет повторного использования готовых решений.',
                            point2: 'Занимался созданием и описанием компонентов в Storybook, что упростило взаимодействие между разработчиками и дизайнерами.',
                            point3: 'Разрабатывал адаптивные и типобезопасные React-компоненты (используя TypeScript), соответствующие дизайн-системе библиотеки. Это повысило надежность интерфейсов во всех продуктах компании.',
                        },
                    },
                },
            },
        },
    },
};
