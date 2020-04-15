# Webpack

Для начала работы следует установить:

- Последнию версию [Node](https://nodejs.org/en/)
- Последнию версию [Yarn](https://yarnpkg.com/lang/en/)

Базовая настройка [Webpack 4](https://webpack.js.org/).

Используется:
- babel
- postcss-preset-env
- scss

Загрузчики:
- file-loader
- html-loader
- url-loader

Алиасы:
- @ - src folder
- public - public folder

Файлы, не нуждающиеся в компиляции, должны находиться в public/assets/

Команды запуска:

- Установка зависимостей

```sh
yarn
```

- Запуск режима разработки

```sh
yarn dev
```

- Production

```sh
yarn prod
```
