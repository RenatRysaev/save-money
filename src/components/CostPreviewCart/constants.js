import * as Yup from 'yup'

export const CartSchema = Yup.object().shape({
  name: Yup.string().required(),
  description: Yup.string(),
  sum: Yup.number('Enter a number')
    .positive('Enter a number greater an zero')
    .required(),
})
