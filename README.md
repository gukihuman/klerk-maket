## Klerk Maket

### Тестовое задание Klerk

Онлайн песочница CodeSandbox: https://codesandbox.io/p/github/gukihuman/klerk-maket/main

Vercel (только фронтенд): https://klerk-maket.vercel.app/

### Установка локально

Скачать проект (автоматически создаст папку "klerk-maket").

```
git clone https://github.com/gukihuman/klerk-maket.git
```

Перейти в папку проекта, поставить зависимости и запустить dev сервер:

```
cd klerk-maket
npm install
npm run dev
```

Открыть http://localhost:3000/ в браузере.

#### Время выполнения

Планировалось 15 часов, получилось ~10 часов. Закладывал больше времени на верстку, т. к. последний год в основном писал свою игру, где UI в художественном стиле и верстка специфическая (хотя также на tailwind, который я обожаю).

#### Заметки

-   Цвета добавлены в tailwind.config.js.
-   Компонент Switch имеет атрибут size с возможными значениями sm и md (в стиле tailwind). По умолчанию size="md".
-   Поддержка динамических путей webp изображений реализована через import.meta.glob функцию, обернутую в Nuxt-плагин - плагин, предоставляющий объект webpPaths, содержащий стабильно работающие пути на Vite и в разработке и на продакшене.
-   Комментарии в коде на английском, потому что так привык. В работе, разумеется, буду соблюдать принятую в проекте стилистику.

#### Потенциальные возможные улучшения

-   Добавить анимацию на синюю полоску под выделенной вкладкой, чтобы она перемещалась влево-вправо, а не просто исчезала и появлялась.
