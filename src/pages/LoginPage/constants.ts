import * as Yup from 'yup'

export const fieldsInitialValues = {
  login: '',
  password: '',
}

export const fields = [
  { name: 'login', type: 'text', label: 'Enter login' },
  { name: 'password', type: 'password', label: 'Enter password' },
]

export const linkData = {
  path: '/reg',
  text: 'Go to the registration page',
}

export const LoginFormSchema = Yup.object().shape({
  login: Yup.string().required('Required'),
  password: Yup.string().required('Required'),
})
