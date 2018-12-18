# Приложение для планирования бюджета, мониторинга своих расходов и создания финансовых целей.

### Минимальный функционал для работы приложения.

### Страницы:

1. **(/auth)** - Страница авторизации, с формой для логина и пароля.

2. **(/registration)** - Страница регистрации, с формой для логина и пароля.

3. **(/me)** - Главная страница личного кабинета с ссылками на др страницы/разделы (Бюджет).

4. **(/budget)** - Главная страница планирования, на ней отображается план расходов и доходы,
    финансовые цели(и информация о том сколько нужно откладывать каждый месяц, чтобы придти к этой цели)
    (информация не отрисовывается, если не было создано ни одной цели),
    а так же информация о ваших текущих ежемесячных расходах и доходах.
    Так же есть кнопка для быстрого добавления записи расхода.
    Для быстрого добавления используется модальное окно с формой.
    (Кнопка не отрисовывается если не было создано категорий на странице (/budget/costs),
    у формы есть следующие поля:
    категория расхода (выпадающий список, согласно созданным категориям на странице (/budget/costs), сумма и дата.
    По дефолту дата ставится текущим числом.
    
5. **(/budget/income)** - Страница с видами доходов, виды выводятся списком.
    Если нету ни одной категории выводится надпись "Доходы отсутствуют" и кнопка для того чтобы добавить вид дохода.
    При нажатии на кнопку открывается модальное окно с формой,
    у которой есть поля: вид дохода(выпадающий список: З/П, бизнес, инвестиции) и сумма дохода.
    У каждой категории дохода есть уникальный id.
    
6. **(/budget/costs)** - Страница планирования расходов. Расходы выводятся списком.
    Если нету ни одной категории выводится надпись "Расходы отсутствуют" и кнопка для того чтобы добавить вид расхода.
    На этой странице можно добавлять/изменять/удалять планируемые расходы.
    При добавлении расхода необходимо указать сумму по этой категории расходов.
    Для совершения CRUD используется модальное окно.
    
7. **(/costs-records)** - Страница с категориями расходов. Категории выводятся согласно списку,
    который создал юзер на странице (/budget/costs),
    при нажатии происходит переход на детальную страницу категории.
    
8. **(/costs-records/:id)** - Детальная страница записи расхода.
    Конкретные записи о расходах выводятся списком.
    Каждая запись расхода представляет из себя объект с датой, типом и суммой расхода.
    На этой странице можно добавлять/изменять/удалять конкретную запись о расходах.
    Для совершения CRUD используется модальное окно.
    
9. **(/targets)** - Страница финансовых целей.
    Цели выводятся списком.
    Чтобы добавить цель нужно заполнить след поля:
    Название, дату заверешения и сумму, которую нужно накопить.
    На этой странице можно добавлять/изменять/завершать/удалять цели.
    Для совершения CRUD используется модальное окно.
    У созданной цели есть возможность изменять прогресс, добавляя туда сумму,
    которую вы уже смогли отложить. (Будет прогресс бар, информирующий о том, насколько выполнена цель).
    
10. **(/statistics)** - Страница статистики.
    Выводится список месяцев, за которые у юзера были расходы/доходы.
    По дефолту выводится статистика за текущий месяц.
    Статистика представляет из себя планируемые расходы и фактические за выбранный месяц.
    
    
    
### Основные зависимости:

1. [TypeScript](https://www.typescriptlang.org/docs/home.html) - статическая типизация данных.
2. [Immutable](https://facebook.github.io/immutable-js/docs/#/) - иммутабельность данных.
3. [React](https://reactjs.org/docs/getting-started.html) - ui.
4. [React-router](https://reacttraining.com/react-router/web/guides/quick-start) - роутинг.
5. [Connected React Router](https://github.com/supasate/connected-react-router) - синхронизация роутинга с редаксом.
6. [React-loadable](https://github.com/jamiebuilds/react-loadable) - динамические импорты.
7. [Redux](https://redux.js.org/api/api-reference) - управление состоянием.
8. [Redux-act](https://github.com/pauldijou/redux-act) - уменьшение бойлерплейта.
9. [Redux-thunk](https://github.com/reduxjs/redux-thunk) - работа с сайдэффектами.
10. [Reselect](https://github.com/reduxjs/reselect) - мемоизация селекторов.
11. [Material-ui](https://material-ui.com/) - библиотека компонентов.
12. [Lodash](https://lodash.com/) - полезные утилиты.
13. [Axios](https://github.com/axios/axios) - http.
14. [Formik](https://github.com/jaredpalmer/formik) - работа с формами.
15. [Yup](https://github.com/jquense/yup) - валидация данных.
