# Основне

[Git Pages](https://tartavik.github.io/monbplanProject/)
[макетом Figma](https://www.figma.com/design/MwGYHQfDaytsvUW7ivCNMY/Markup-test).

## Технології

- React
- TypeScript
- Vite
- SASS
- react-datepicker
- ESLint
- Prettier
- Stylelint

## Запуск

Потрібна актуальна LTS-версія Node.js.

```bash
npm install
npm run dev
```

## Команди

```bash
npm run build
npm run preview
npm run lint
npm run lint:styles
npm run format
npm run format:check
```

## Архітектура

```text
src/
├── app/                 # Ініціалізація застосунку та глобальні стилі
├── components/          # Компоненти сторінки
└── shared/
    ├── assets/          # Зображення та їхній типізований реєстр
    ├── styles/          # Глобальні SASS-токени
    └── ui/              # Спільні UI-компоненти
```
