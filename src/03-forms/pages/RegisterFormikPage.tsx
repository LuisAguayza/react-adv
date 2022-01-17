import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { MyTextInput } from '../components';
import '../styles/styles.css';



export const RegisterFormikPage = () => {

    return (
        <div>
            <h1>Register Formik Page</h1>

            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    password1: '',
                    password2: ''
                }}
                onSubmit={(values) => {
                    console.log(values)
                }}
                validationSchema={
                    Yup.object({
                        name: Yup.string()
                            .max(15, 'Debe tener un máximo de 15 caracteres')
                            .min(2, 'Debe tener más de dos caracteres')
                            .required('Campo obligatirio'),
                        email: Yup.string()
                            .email('Debe ingresar un email válido')
                            .required('Campo obligatirio'),
                        password1: Yup.string()
                            .min(6, 'Debe tener 6 o más caracteres')
                            .required('Campo obligatorio'),
                        password2: Yup.string()
                            .oneOf([Yup.ref('password1')], 'Las contraseña no coinciden')
                            .required('Campo obligatorio')
                    })
                }
            >
                {
                    ({ handleReset }) => (
                        <Form noValidate>
                            <MyTextInput
                                label='Name'
                                name='name'
                                placeholder='Name'
                            />
                            <MyTextInput
                                label='Email Address'
                                name='email'
                                placeholder='Example: luis@mail.com'
                                type='email'
                            />
                            <MyTextInput
                                label='Password'
                                name='password1'
                                placeholder='Password'
                                type='password'
                            />
                            <MyTextInput
                                label='Confirm password'
                                name='password2'
                                placeholder='Confirm password'
                                type='password'
                            />
                            <button type='submit'>Submit</button>
                            <button type='button' onClick={handleReset}>Reset</button>
                        </Form>
                    )
                }

            </Formik>

        </div>
    )
}
