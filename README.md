# App for budget planning.

## [API](https://github.com/RenatRysaev/save-money-api)

### Minimum functional for app work.

### Routes:

1. **(/, /reg)** - Login/registration

2. **(/budget)** - Planning page with links to costs/incomes pages. There is info about costs/incomes plan.

3. **(/budget/income)** Incomes. Incomes - it list. Every income - record with income's name and sum. (Ordinary CRUD)

4. **(/budget/costs)** Costs. Costs - it list. Every cost - record with cost's name, sum and description. (Ordinary CRUD)

### Main dependencies:

1. [Immutable](https://facebook.github.io/immutable-js/docs/#/) - immutable collections.
2. [React](https://reactjs.org/docs/getting-started.html) - ui.
3. [React-router](https://reacttraining.com/react-router/web/guides/quick-start) - router.
4. [Connected React Router](https://github.com/supasate/connected-react-router) - sync router with redux.
5. [React-loadable](https://github.com/jamiebuilds/react-loadable) - dynamic imports.
6. [Redux](https://redux.js.org/api/api-reference) - state management.
7. [Redux-act](https://github.com/pauldijou/redux-act) - boilerplate reduction.
8. [Redux-thunk](https://github.com/reduxjs/redux-thunk) - side effects.
9. [Reselect](https://github.com/reduxjs/reselect) - "memoize" for selectors.
10. [Material-ui](https://material-ui.com/) - ui framework.
11. [Lodash](https://lodash.com/) - utility library.
12. [Axios](https://github.com/axios/axios) - http client.
13. [Formik](https://github.com/jaredpalmer/formik) - work with forms.
14. [Yup](https://github.com/jquense/yup) - validation.

### Work with project in terminal:

**Install dependencies**: `yarn install`

**Run**: `yarn start`

**Build**: `yarn build`
