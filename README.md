Шаблон для сайтов с webpack
=============================
Информация 
-----------------------------------
Простая сборка для создания сайтов, основанная на Webpack (в отличие от предыдущей сборки, в котором была связка с gulp). Встроена поддержка Vue.

Конфигурация
-----------------------------------
Конфигурация сборки находится в файле .env.
Возможные значения:
- **NODE_ENV** = development/production
- **CONFIG** = main/back/...

**main config** используется обычно для верстки (т.е. без использования веб-сервера apache/nginx и т.п.).

**back config** используется уже с веб-сервером, например, для натяжки на движок CMS. 

Команды
-----------------------------------
**Начать/продолжить разработку, используя dev-server с горячей перезагрузкой модулей**:
* npm run dev

**Сборка проекта**:
* npm run build

**Собрать проект и следить за изменениями**:
* npm run watch
