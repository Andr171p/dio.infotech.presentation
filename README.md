# DIO Consult — HTML-презентация

Откройте [index.html](index.html) в Chrome или Edge. Презентация работает без интернета: изображение, видео и шрифты лежат в `assets/`.

Для отправки и печати есть [PDF-версия на 12 страниц](output/pdf/dio-consult-ai-agents.pdf). Это статичная версия: видео доступно в HTML-презентации.

## Управление

- `←` / `→`, `Page Up` / `Page Down`, `Пробел` — переключение слайдов.
- `Home` / `End` — первый и последний слайд.
- `F` — полноэкранный режим.
- На третьем слайде кнопка открывает видео. `Esc` закрывает его.
- Ссылка вида `index.html#slide-7` открывает нужный слайд.

При необходимости можно печатать слайды из браузера в PDF. Макет рассчитан на 16:9 и масштабируется под экран.

## Материалы и точность

- Скриншот DIOS основан на файле пользователя. В копии для презентации персональное имя заменено нейтральным обозначением. Для точечного редактирования использован встроенный ImageGen с запросом: «Заменить только персональное имя в ответе на “сотрудника команды”; сохранить остальной интерфейс и размеры». Исходный PNG в поставку презентации не входит.
- Видео скопировано из файла пользователя и встроено без просмотра содержимого. **Перед публичным показом проверьте кадры на персональные данные и сведения о клиентах.**
- Схема создания курса сопоставлена с [генератором курса](https://github.com/AndrewMedvedev/dio-ai-courses/blob/main/backend/src/courses/agents/course_generator/nodes.py) и [генератором уроков](https://github.com/AndrewMedvedev/dio-ai-courses/blob/main/backend/src/courses/agents/course_generator/subagents/lesson_builder.py): план, структура, модули, уроки, блоки и черновик.
- Подключение инструментов чата сопоставлено с [MCP toolset](https://github.com/Andr171p/dio.ai-chats/blob/main/ai-chats.backend/src/application/mcp/toolset.py) и [клиентом MCP](https://github.com/Andr171p/dio.ai-chats/blob/main/ai-chats.backend/src/infra/mcp/client.py): обнаружение инструментов, доступ пользователя, вызовы и обработка отказа одного из сервисов.
- Слайд о встречах основан на [процессе транскрибации](https://github.com/Andr171p/dio.comm-intelligence.back/blob/main/src/infra/temporal/workflows.py) и [MCP-инструментах](https://github.com/Andr171p/dio.comm-intelligence.back/blob/main/src/api/routers/mcp/v1/tools.py). MCP здесь предоставляет поиск и чтение готовых расшифровок; обработка аудио запускается отдельным процессом.
- Сайт, почта и телефон взяты из [контактов ДИО-Консалт](https://edu.diocon.ru/kontakty/). Описание MCP сверено с [документацией проекта](https://github.com/modelcontextprotocol/docs/blob/main/introduction.mdx).
- Слайды про память, модели заказчика и долгоживущих агентов описывают подходы и планы команды. Перед выступлением стоит уточнить, какие части уже работают в продуктах.

Шрифты Inter и JetBrains Mono хранятся локально. Их лицензии лежат в `assets/fonts/`.
