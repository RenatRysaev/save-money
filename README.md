# App for budget planning.

## [API](https://github.com/RenatRysaev/save-money-api)

### Minimum functional for app work.

### Routes:

1. **/** - Login page.

2. **/reg** - Registration page.

3. **/budget** - Planning page. There is info about costs/incomes plan.

4. **/budget/income** - Incomes. Every income - record with income's name and sum. (Ordinary CRUD)

5. **/budget/costs** - Costs. Every cost - record with cost's name, sum and description. (Ordinary CRUD)

### Main dependencies:

1. [TypeScript](https://www.typescriptlang.org/) - static types.
2. [Immutable](https://facebook.github.io/immutable-js/docs/#/) - immutable collections.
3. [React](https://reactjs.org/docs/getting-started.html) - ui.
4. [React-router](https://reacttraining.com/react-router/web/guides/quick-start) - router.
5. [Connected React Router](https://github.com/supasate/connected-react-router) - sync router with redux.
6. [Loadable-components](https://github.com/smooth-code/loadable-components) - dynamic imports.
7. [Redux](https://redux.js.org/api/api-reference) - state management.
8. [Redux-act](https://github.com/pauldijou/redux-act) - boilerplate reduction.
9. [Redux-thunk](https://github.com/reduxjs/redux-thunk) - side effects.
10. [Reselect](https://github.com/reduxjs/reselect) - "memoize" for selectors.
11. [Material-ui](https://material-ui.com/) - ui framework.
12. [Lodash](https://lodash.com/) - utility library.
13. [Axios](https://github.com/axios/axios) - http client.
14. [Formik](https://github.com/jaredpalmer/formik) - work with forms.
15. [Yup](https://github.com/jquense/yup) - validation.

### Work with project in terminal:

**Install dependencies**: `yarn install`

**Run**: `yarn start`

**Build**: `yarn build`
