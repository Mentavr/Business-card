import * as yup from 'yup';

export const schema = yup.object({
    name: yup
        .string()
        .required('validation.required')
        .matches(/^\S.*$/, 'validation.matches'),
    email: yup
        .string()
        .email('validation.email')
        .required('validation.required')
        .matches(/^\S.*$/, 'validation.matches'),
    subject: yup
        .string()
        .required('validation.required')
        .matches(/^\S.*$/, 'validation.matches'),
    message: yup
        .string()
        .max(200, 'validation.max')
        .required('validation.required')
        .matches(/^\S.*$/, 'validation.matches'),
});
