import * as yup from 'yup'

import PropTypes from 'prop-types'
import React from 'react'

import { ErrorMessage, Formik, Form as FormikForm, Field } from 'formik'

import './Form.css'

const validations = yup.object().shape({
    user: yup.string().email().required(),
    password: yup.string().min(8).required()
})

const Form = ({ handleSubmit, initialValues }) => (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validations}>
        <FormikForm className="Form">
            <h1 className="Form-Welcome">Welcome</h1>
            <h2 className="Form-Info">Type your user and password to access the system</h2>
            <div className="Form-Group">
                <Field className="Form-Field" name="user" placeholder="User" type="text"/>
                <ErrorMessage className="Form-Error" component="span" name="user"/>
            </div>
            <div className="Form-Group">
                <Field className="Form-Field" name="password" placeholder="Password" type="password"/>
                <ErrorMessage className="Form-Error" component="span" name="password"/>
            </div>
            <button className="Form-Btn" type="submit">Login</button>
        </FormikForm>
    </Formik>
)

Form.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    initialValues: PropTypes.object.isRequired
}

export default Form