// IT Словарь - 67 терминов
const terms = [
    // Программирование
    {
        title: "API",
        category: "programming",
        categoryName: "Программирование",
        description: "Application Programming Interface — набор методов для взаимодействия между программами.",
        details: "API позволяет разным программам обмениваться данными и командами. Используется для интеграции сервисов и приложений."
    },
    {
        title: "Переменная",
        category: "programming",
        categoryName: "Программирование",
        description: "Именованная область памяти для хранения данных, которые могут изменяться в процессе выполнения программы.",
        details: "Переменные используются для временного хранения информации: чисел, текста, объектов. Имеют имя и тип данных."
    },
    {
        title: "Функция",
        category: "programming",
        categoryName: "Программирование",
        description: "Блок кода, который выполняет определённую задачу и может быть вызван многократно.",
        details: "Функции помогают избежать повторения кода. Могут принимать параметры и возвращать результат."
    },
    {
        title: "ООП",
        category: "programming",
        categoryName: "Программирование",
        description: "Объектно-ориентированное программирование — парадигма, основанная на концепции объектов.",
        details: "ООП использует классы и объекты для структурирования кода. Основные принципы: наследование, инкапсуляция, полиморфизм."
    },
    {
        title: "Массив",
        category: "programming",
        categoryName: "Программирование",
        description: "Структура данных для хранения упорядоченной коллекции элементов одного типа.",
        details: "Массивы позволяют хранить множество значений под одним именем. Доступ к элементам по индексу."
    },
    {
        title: "Алгоритм",
        category: "programming",
        categoryName: "Программирование",
        description: "Последовательность действий для решения конкретной задачи за конечное время.",
        details: "Алгоритм — это пошаговая инструкция. Хороший алгоритм должен быть понятным, эффективным и завершаться."
    },
    {
        title: "Дебаг",
        category: "programming",
        categoryName: "Программирование",
        description: "Процесс поиска и исправления ошибок (багов) в программном коде.",
        details: "Отладка помогает найти причину неправильной работы программы. Используются специальные инструменты — отладчики."
    },
    {
        title: "Git",
        category: "programming",
        categoryName: "Программирование",
        description: "Распределённая система контроля версий для отслеживания изменений в коде.",
        details: "Git сохраняет историю изменений, позволяет работать в команде, откатывать ошибки. Основа современной разработки."
    },
    {
        title: "JSON",
        category: "programming",
        categoryName: "Программирование",
        description: "JavaScript Object Notation — текстовый формат обмена данными, основанный на JavaScript.",
        details: "JSON используется для передачи данных между сервером и клиентом. Легко читается человеком и машиной."
    },
    {
        title: "Рекурсия",
        category: "programming",
        categoryName: "Программирование",
        description: "Метод решения задач, при котором функция вызывает сама себя.",
        details: "Рекурсия полезна для задач с повторяющейся структурой: обход дерева, вычисление факториала."
    },
    {
        title: "Класс",
        category: "programming",
        categoryName: "Программирование",
        description: "Шаблон для создания объектов, определяющий их свойства и методы.",
        details: "Класс описывает структуру объекта. Из одного класса можно создать множество объектов (экземпляров)."
    },
    {
        title: "Интерфейс",
        category: "programming",
        categoryName: "Программирование",
        description: "Контракт, определяющий набор методов, которые должен реализовать класс.",
        details: "Интерфейс задаёт правила взаимодействия. Классы, реализующие интерфейс, обязаны иметь все его методы."
    },
    {
        title: "Исключение",
        category: "programming",
        categoryName: "Программирование",
        description: "Механизм обработки ошибок во время выполнения программы.",
        details: "Исключения позволяют перехватывать ошибки и корректно на них реагировать, не прерывая программу."
    },
    {
        title: "Библиотека",
        category: "programming",
        categoryName: "Программирование",
        description: "Набор готовых функций и классов для решения типовых задач.",
        details: "Библиотеки ускоряют разработку, предоставляя проверенные решения. Не нужно писать всё с нуля."
    },
    {
        title: "Фреймворк",
        category: "programming",
        categoryName: "Программирование",
        description: "Каркас приложения, определяющий архитектуру и предоставляющий готовые решения.",
        details: "Фреймворк диктует структуру проекта. Примеры: React, Django, Laravel. Упрощает создание сложных приложений."
    },
    {
        title: "Компилятор",
        category: "programming",
        categoryName: "Программирование",
        description: "Программа, переводящая исходный код в машинный код или байт-код.",
        details: "Компилятор преобразует код на языке программирования в исполняемый файл. Проверяет ошибки до запуска."
    },
    {
        title: "Интерпретатор",
        category: "programming",
        categoryName: "Программирование",
        description: "Программа, выполняющая код построчно без предварительной компиляции.",
        details: "Интерпретатор читает и выполняет код сразу. Используется в Python, JavaScript. Удобен для быстрой разработки."
    },

    // Системы
    {
        title: "Операционная система",
        category: "systems",
        categoryName: "Системы",
        description: "Комплекс программ, управляющих аппаратными и программными ресурсами компьютера.",
        details: "ОС обеспечивает работу всех программ, управляет памятью, процессором, устройствами. Примеры: Windows, Linux, macOS."
    },
    {
        title: "BIOS",
        category: "systems",
        categoryName: "Системы",
        description: "Basic Input/Output System — базовая система ввода-вывода, запускающаяся при включении компьютера.",
        details: "BIOS проверяет оборудование при загрузке, инициализирует устройства, запускает операционную систему."
    },
    {
        title: "Процессор",
        category: "systems",
        categoryName: "Системы",
        description: "Центральное процессорное устройство (CPU), выполняющее машинные инструкции программ.",
        details: "Процессор — мозг компьютера. Выполняет вычисления, обрабатывает данные. Измеряется в гигагерцах (ГГц)."
    },
    {
        title: "Оперативная память",
        category: "systems",
        categoryName: "Системы",
        description: "RAM (Random Access Memory) — энергозависимая память для временного хранения данных.",
        details: "ОЗУ хранит данные работающих программ. Чем больше памяти, тем больше программ можно запустить одновременно."
    },
    {
        title: "Виртуализация",
        category: "systems",
        categoryName: "Системы",
        description: "Технология создания виртуальных версий компьютерных ресурсов (серверов, ОС, сетей).",
        details: "Виртуализация позволяет запускать несколько ОС на одном компьютере. Экономит ресурсы, упрощает тестирование."
    },
    {
        title: "Файловая система",
        category: "systems",
        categoryName: "Системы",
        description: "Способ организации и хранения файлов на носителях информации.",
        details: "Файловая система определяет, как данные записываются на диск. Примеры: NTFS, FAT32, ext4."
    },
    {
        title: "SSD",
        category: "systems",
        categoryName: "Системы",
        description: "Solid State Drive — твердотельный накопитель без механических частей.",
        details: "SSD работает быстрее обычного жёсткого диска, не шумит, устойчив к ударам. Использует флеш-память."
    },
    {
        title: "RAID",
        category: "systems",
        categoryName: "Системы",
        description: "Redundant Array of Independent Disks — технология объединения дисков для надёжности или скорости.",
        details: "RAID повышает производительность или защищает от потери данных. Разные уровни: RAID 0, 1, 5, 10."
    },
    {
        title: "Драйвер",
        category: "systems",
        categoryName: "Системы",
        description: "Программа для взаимодействия операционной системы с аппаратным устройством.",
        details: "Драйвер переводит команды ОС на язык устройства. Без драйвера принтер, видеокарта не будут работать."
    },
    {
        title: "Кэш",
        category: "systems",
        categoryName: "Системы",
        description: "Быстрая промежуточная память для хранения часто используемых данных.",
        details: "Кэш ускоряет доступ к данным. Процессор, браузер, диск используют кэш для повышения производительности."
    },

    // Сети
    {
        title: "IP-адрес",
        category: "networks",
        categoryName: "Сети",
        description: "Уникальный числовой идентификатор устройства в сети, работающей по протоколу IP.",
        details: "IP-адрес выглядит как 192.168.1.1. Каждое устройство в интернете имеет свой уникальный адрес."
    },
    {
        title: "DNS",
        category: "networks",
        categoryName: "Сети",
        description: "Domain Name System — служба преобразования доменных имён в IP-адреса.",
        details: "DNS переводит понятные имена (google.com) в IP-адреса. Работает как телефонная книга интернета."
    },
    {
        title: "HTTP/HTTPS",
        category: "networks",
        categoryName: "Сети",
        description: "Протоколы передачи гипертекста для обмена данными в интернете.",
        details: "HTTP передаёт веб-страницы. HTTPS — защищённая версия с шифрованием. Замочек в браузере означает HTTPS."
    },
    {
        title: "TCP/IP",
        category: "networks",
        categoryName: "Сети",
        description: "Набор протоколов передачи данных, используемых в интернете.",
        details: "TCP/IP — основа интернета. TCP обеспечивает надёжную доставку, IP отвечает за маршрутизацию пакетов."
    },
    {
        title: "VPN",
        category: "networks",
        categoryName: "Сети",
        description: "Virtual Private Network — технология создания защищённого соединения поверх публичной сети.",
        details: "VPN шифрует трафик, скрывает IP-адрес. Используется для безопасности и доступа к заблокированным ресурсам."
    },
    {
        title: "Маршрутизатор",
        category: "networks",
        categoryName: "Сети",
        description: "Устройство для пересылки пакетов данных между различными сегментами сети.",
        details: "Роутер соединяет домашнюю сеть с интернетом, раздаёт Wi-Fi, управляет трафиком между устройствами."
    },
    {
        title: "Порт",
        category: "networks",
        categoryName: "Сети",
        description: "Числовой идентификатор для различения сетевых служб на одном устройстве.",
        details: "Порты позволяют одному компьютеру работать с разными сервисами. Например: 80 — HTTP, 443 — HTTPS, 22 — SSH."
    },
    {
        title: "SSH",
        category: "networks",
        categoryName: "Сети",
        description: "Secure Shell — протокол для безопасного удалённого управления операционной системой.",
        details: "SSH шифрует соединение, позволяет управлять сервером через командную строку. Используется администраторами."
    },
    {
        title: "Bandwidth",
        category: "networks",
        categoryName: "Сети",
        description: "Пропускная способность канала связи — максимальная скорость передачи данных.",
        details: "Bandwidth измеряется в Мбит/с или Гбит/с. Чем выше, тем быстрее загружаются файлы и страницы."
    },
    {
        title: "Ping",
        category: "networks",
        categoryName: "Сети",
        description: "Время отклика сети — задержка между отправкой запроса и получением ответа.",
        details: "Ping измеряется в миллисекундах. Низкий пинг важен для игр и видеозвонков. Высокий пинг — лаги."
    },
    {
        title: "MAC-адрес",
        category: "networks",
        categoryName: "Сети",
        description: "Media Access Control — уникальный физический адрес сетевого адаптера.",
        details: "MAC-адрес прошит в сетевую карту при производстве. Используется для идентификации устройства в локальной сети."
    },
    {
        title: "CDN",
        category: "networks",
        categoryName: "Сети",
        description: "Content Delivery Network — сеть серверов для быстрой доставки контента пользователям.",
        details: "CDN размещает копии сайта на серверах по всему миру. Пользователь получает данные с ближайшего сервера."
    },
    {
        title: "Proxy",
        category: "networks",
        categoryName: "Сети",
        description: "Прокси-сервер — посредник между клиентом и целевым сервером.",
        details: "Proxy может кэшировать данные, фильтровать контент, скрывать IP-адрес. Используется для анонимности."
    },

    // Безопасность
    {
        title: "Файрвол",
        category: "security",
        categoryName: "Безопасность",
        description: "Межсетевой экран, фильтрующий сетевой трафик для защиты от несанкционированного доступа.",
        details: "Файрвол блокирует подозрительные соединения, защищает от атак. Может быть программным или аппаратным."
    },
    {
        title: "Шифрование",
        category: "security",
        categoryName: "Безопасность",
        description: "Преобразование данных в нечитаемый вид для защиты от несанкционированного доступа.",
        details: "Шифрование защищает конфиденциальность. Только тот, у кого есть ключ, может расшифровать данные."
    },
    {
        title: "DDoS-атака",
        category: "security",
        categoryName: "Безопасность",
        description: "Distributed Denial of Service — распределённая атака, направленная на отказ в обслуживании.",
        details: "DDoS перегружает сервер огромным количеством запросов. Сайт становится недоступным для пользователей."
    },
    {
        title: "SQL-инъекция",
        category: "security",
        categoryName: "Безопасность",
        description: "Тип атаки, при котором злоумышленник внедряет вредоносный SQL-код в запрос.",
        details: "SQL-инъекция позволяет получить доступ к базе данных, украсть или изменить информацию. Защита — валидация ввода."
    },
    {
        title: "Двухфакторная аутентификация",
        category: "security",
        categoryName: "Безопасность",
        description: "2FA — метод защиты, требующий два способа подтверждения личности.",
        details: "Кроме пароля нужен код из SMS или приложения. Даже если пароль украден, без второго фактора не войти."
    },
    {
        title: "Фишинг",
        category: "security",
        categoryName: "Безопасность",
        description: "Мошенничество с целью получения конфиденциальных данных через поддельные сайты или письма.",
        details: "Фишеры создают копии сайтов банков, соцсетей для кражи паролей. Всегда проверяй адрес сайта!"
    },
    {
        title: "Вирус",
        category: "security",
        categoryName: "Безопасность",
        description: "Вредоносная программа, способная самостоятельно распространяться и заражать файлы.",
        details: "Вирусы могут удалять файлы, красть данные, замедлять систему. Антивирус помогает обнаружить и удалить вирусы."
    },
    {
        title: "Антивирус",
        category: "security",
        categoryName: "Безопасность",
        description: "Программа для обнаружения и удаления вредоносного ПО.",
        details: "Антивирус сканирует файлы, блокирует угрозы, обновляет базы вирусов. Важная защита для любого компьютера."
    },

    // DevOps
    {
        title: "Docker",
        category: "devops",
        categoryName: "DevOps",
        description: "Платформа для автоматизации развёртывания приложений в изолированных контейнерах.",
        details: "Docker упаковывает приложение со всеми зависимостями. Контейнер работает одинаково на любом сервере."
    },
    {
        title: "CI/CD",
        category: "devops",
        categoryName: "DevOps",
        description: "Continuous Integration/Continuous Deployment — практики автоматизации сборки и развёртывания.",
        details: "CI/CD автоматически тестирует и выкатывает код. Ускоряет разработку, снижает количество ошибок."
    },

    {
        title: "Мониторинг",
        category: "devops",
        categoryName: "DevOps",
        description: "Отслеживание состояния систем и приложений для выявления проблем.",
        details: "Мониторинг собирает метрики: загрузка CPU, память, ошибки. Помогает обнаружить проблемы до того, как их заметят пользователи."
    },
    {
        title: "Логирование",
        category: "devops",
        categoryName: "DevOps",
        description: "Запись событий и ошибок приложения в файлы или системы мониторинга.",
        details: "Логи помогают понять, что произошло при ошибке. Содержат время, уровень (info, warning, error), сообщение."
    },
    {
        title: "Балансировщик нагрузки",
        category: "devops",
        categoryName: "DevOps",
        description: "Распределяет входящий трафик между несколькими серверами для повышения производительности.",
        details: "Load balancer равномерно распределяет запросы, повышает отказоустойчивость. Если один сервер упал, трафик идёт на другие."
    },

    // Сленг
    {
        title: "АФК (AFK)",
        category: "slang",
        categoryName: "Сленг",
        description: "Away From Keyboard — пользователь отошёл от компьютера.",
        details: "Используется в играх и чатах, чтобы сообщить, что временно отсутствуешь. 'Я АФК на 5 минут'."
    },

    {
        title: "Краш",
        category: "slang",
        categoryName: "Сленг",
        description: "Внезапное завершение работы программы или игры из-за ошибки.",
        details: "Когда программа крашится, она закрывается без предупреждения. Часто с сообщением об ошибке."
    },
    {
        title: "Лаг",
        category: "slang",
        categoryName: "Сленг",
        description: "Задержка в работе программы или сети, приводящая к замедлению.",
        details: "Лаги в играх — картинка тормозит, действия выполняются с задержкой. Причина — медленный интернет или слабый ПК."
    },
    {
        title: "Фикс",
        category: "slang",
        categoryName: "Сленг",
        description: "Исправление ошибки или проблемы в программе.",
        details: "Разработчики выпускают фиксы для устранения багов. 'Вышел фикс, который исправил вылеты'."
    },



    {
        title: "Бэкап",
        category: "slang",
        categoryName: "Сленг",
        description: "Резервная копия данных для восстановления при сбоях.",
        details: "Бэкап защищает от потери данных. Регулярно делай бэкапы важных файлов на другой диск или в облако."
    },
    {
        title: "Репозиторий",
        category: "slang",
        categoryName: "Сленг",
        description: "Хранилище исходного кода проекта с историей изменений.",
        details: "Репозиторий (repo) хранится на GitHub, GitLab. Содержит весь код проекта и историю коммитов."
    },
    {
        title: "Баг",
        category: "slang",
        categoryName: "Сленг",
        description: "Ошибка в программе, вызывающая неправильное поведение.",
        details: "Баги могут быть критическими (программа крашится) или мелкими (кнопка не того цвета)."
    },


    {
        title: "Легаси",
        category: "slang",
        categoryName: "Сленг",
        description: "Legacy — устаревший код или система, которую сложно поддерживать.",
        details: "Легаси-код написан давно, плохо документирован, но критичен для бизнеса. Страшно что-то менять."
    },
    {
        title: "Продакшн",
        category: "slang",
        categoryName: "Сленг",
        description: "Production — рабочая среда, где приложение доступно реальным пользователям.",
        details: "В продакшн выкатывают только проверенный код. Ошибки в продакшне влияют на пользователей."
    },

    {
        title: "Сервер",
        category: "systems",
        categoryName: "Системы",
        description: "Мощный компьютер, который хранит данные и обслуживает запросы пользователей.",
        details: "Серверы работают 24/7, на них размещены сайты, базы данных, приложения. Находятся в дата-центрах."
    },
    {
        title: "Облако",
        category: "networks",
        categoryName: "Сети",
        description: "Удалённые серверы для хранения данных и запуска приложений через интернет.",
        details: "Облачные сервисы: Google Drive, Dropbox, AWS. Файлы доступны с любого устройства."
    },
    {
        title: "Пароль",
        category: "security",
        categoryName: "Безопасность",
        description: "Секретная комбинация символов для защиты доступа к аккаунту.",
        details: "Надёжный пароль содержит буквы, цифры, символы. Не используй один пароль везде!"
    },

    {
        title: "Апдейт",
        category: "slang",
        categoryName: "Сленг",
        description: "Обновление программы или системы с новыми функциями и исправлениями.",
        details: "Апдейты улучшают работу, закрывают уязвимости. Важно регулярно обновлять систему и программы."
    },

    {
        title: "Патч",
        category: "devops",
        categoryName: "DevOps",
        description: "Небольшое обновление для исправления конкретной ошибки или уязвимости.",
        details: "Патчи выпускаются между крупными обновлениями. Быстро устраняют критические проблемы безопасности."
    }
];

// Состояние приложения
let currentCategory = 'all';
let searchQuery = '';

// Инициализация
document.addEventListener('DOMContentLoaded', () => {
    updateCounts();
    renderTerms();
    setupEventListeners();
});

// Подсчёт терминов по категориям
function updateCounts() {
    const counts = {
        all: terms.length,
        programming: 0,
        systems: 0,
        networks: 0,
        security: 0,
        devops: 0,
        slang: 0
    };

    terms.forEach(term => {
        counts[term.category]++;
    });

    Object.keys(counts).forEach(category => {
        const countElement = document.getElementById(`count-${category}`);
        if (countElement) {
            countElement.textContent = counts[category];
        }
    });
}

// Отрисовка карточек терминов
function renderTerms() {
    const grid = document.getElementById('termsGrid');
    const filteredTerms = terms.filter(term => {
        const matchesCategory = currentCategory === 'all' || term.category === currentCategory;
        const matchesSearch = term.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            term.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    if (filteredTerms.length === 0) {
        grid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: var(--text-secondary); font-size: 1.2rem;">Ничего не найдено 😔</p>';
        return;
    }

    grid.innerHTML = filteredTerms.map(term => `
        <div class="term-card" data-term="${term.title}">
            <div class="term-header">
                <div>
                    <h3 class="term-title">${term.title}</h3>
                </div>
                <span class="term-category">${term.categoryName}</span>
            </div>
            <p class="term-description">${term.description}</p>
            <div class="term-footer">
                <span class="read-more">Подробнее</span>
            </div>
        </div>
    `).join('');

    // Добавляем обработчики кликов на карточки
    document.querySelectorAll('.term-card').forEach(card => {
        card.addEventListener('click', () => {
            const termTitle = card.dataset.term;
            const term = terms.find(t => t.title === termTitle);
            if (term) {
                openModal(term);
            }
        });
    });
}

// Настройка обработчиков событий
function setupEventListeners() {
    // Фильтры категорий
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentCategory = btn.dataset.category;
            renderTerms();
        });
    });

    // Поиск
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value;
        renderTerms();
    });

    // Закрытие модального окна
    const modal = document.getElementById('modal');
    const modalClose = document.getElementById('modalClose');
    
    modalClose.addEventListener('click', closeModal);
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Закрытие по Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
}

// Открытие модального окна
function openModal(term) {
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modalBody');
    
    modalBody.innerHTML = `
        <h2 class="modal-title">${term.title}</h2>
        <span class="modal-category">${term.categoryName}</span>
        <p class="modal-description">${term.description}</p>
        <div class="modal-details">
            <h3>Дополнительно</h3>
            <p>${term.details}</p>
        </div>
    `;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Закрытие модального окна
function closeModal() {
    const modal = document.getElementById('modal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}
