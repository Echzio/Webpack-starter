# Webpack

Для начала работы следует установить:

- Последнию версию [Node](https://nodejs.org/en/)
- Последнию версию [Yarn](https://yarnpkg.com/lang/en/)

Базовая настройка [webpack 4](https://webpack.js.org/) для bundle .scss/.js с транспилляцией кода через [babel](https://babeljs.io/). Для актуальности, вместо [extract-text-webpack-plugin](https://github.com/webpack-contrib/extract-text-webpack-plugin) был использован модуль [mini-css-extract-plugin](https://github.com/webpack-contrib/mini-css-extract-plugin).

Команды запуска:

- Установка зависимостей

```sh
yarn
```

- Запуск режима разработки

```sh
yarn dev
```

- Запуск билдинга

```sh
yarn build
```

- Запуск минимизации

```sh
yarn prod
```
- Запуск watch, кому это по приколу
```sh
yarn watch
```
