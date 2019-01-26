import * as Yup from 'yup'

export const fieldsInitialValues = {
  name: '',
  password: '',
}

export const fields = [
  { name: 'name', type: 'text', label: 'Enter name' },
  { name: 'password', type: 'password', label: 'Enter password' },
]

export const linkData = {
  path: '/reg',
  text: 'Go to the registration page',
}

export const LoginFormSchema = Yup.object().shape({
  name: Yup.string().required('Required'),
  password: Yup.string().required('Required'),
})
