# Тестовое задание для компании Smartway.

Использованные технологии: React + TypeScript + MobX + Vite

## Реализованные фичи

- Поиск по API Github;
- Добавление в избранное;
- Копирование текста из поля ввода;
- Механизм debounce;
- Роутер;
- localStorage;

## Механизм debounce

В проекте использован debounce вместо throttling, так как этот механизм позволяет отложить запрос до момента окончания ввода данных, и не использовать механизим request cancellation. Тогда как throttling лишь уменьшает частоту вызова функции запроса и требует дополнительно использовать request cancellation.
