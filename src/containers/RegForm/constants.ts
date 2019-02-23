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
  path: '/',
  text: 'Go to the login page',
}

export const RegFormSchema = Yup.object().shape({
  name: Yup.string()
    .min(1, 'Too short')
    .max(30, 'Too long')
    .required('Required'),
  password: Yup.string()
    .min(3, 'Too short')
    .required('Required'),
})
