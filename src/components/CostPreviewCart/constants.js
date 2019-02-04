import * as Yup from 'yup'

export const CartSchema = Yup.object().shape({
  name: Yup.string('Enter a string').required('Name is required'),
  description: Yup.string('Enter a string'),
  sum: Yup.number('Enter a number')
    .moreThan(0, 'Enter a number greater an zero')
    .required('Sum is required'),
})
