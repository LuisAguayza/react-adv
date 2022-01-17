import { Form, Formik } from 'formik';
import * as Yup from 'yup';

import { MyCheckbox, MySelect, MyTextInput } from '../components'

import '../styles/styles.css';

export const FormikAbstractation = () => {

    return (
        <div>
            <h1>Formik Abstractation</h1>

            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    terms: false,
                    jobType: ''
                }}
                onSubmit={(values) => {

                }}
                validationSchema={
                    Yup.object({
                        firstName: Yup.string()
                            .max(15, 'Debe tener 15 caracteres o menos')
                            .required('Requerido'),
                        lastName: Yup.string()
                            .max(10, 'Debe tener 10 caracteres o menos')
                            .required('Requerido'),
                        email: Yup.string()
                            .email('Debe ser un email válido')
                            .required('Requerido'),
                        terms: Yup.boolean()
                            .oneOf([true], 'Debe de aceptar las condiciones'),
                        jobType: Yup.string()
                            .notOneOf(['it-jr'], 'Esta opción no es permitida')
                            .required('Requerido')
                    })}
            >
                {
                    (formik) => (
                        <Form noValidate >

                            <MyTextInput
                                label={'First Name'}
                                name={'firstName'}
                                placeholder="First Name"
                            />
                            <MyTextInput
                                label={'Last Name'}
                                name={'lastName'}
                                placeholder="Last Name"
                            />
                            <MyTextInput
                                label={'Email Address'}
                                name={'email'}
                                placeholder="luis@mail.com"
                                type="email"
                            />

                            <MySelect label='Job Type' name='jobType' >
                                <option value="">Pick Something</option>
                                <option value="developer">Developer</option>
                                <option value="designer">Designer</option>
                                <option value="it-senior">IT Senior</option>
                                <option value="it-jr">IT Jr.</option>
                            </MySelect>

                            <MyCheckbox
                                label='Terms & conditions'
                                name='terms'
                            />

                            <button type="submit">Submit</button>
                        </Form>
                    )
                }
            </Formik>
        </div>
    )
}
