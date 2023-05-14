import React, { useEffect, useState, useRef } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import {
  forgotPassword,
  forgotPasswordCleanup,
} from '../store/actions/forgot-password';
import { useRouter } from 'next/router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Layout from '../components/Layout';

const ChangePassword = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const formikRef = useRef();
  const forgotPasswordState = useSelector((s) => s.forgotPassword);
  const [forgotPasswordError, setForgotPasswordError] = useState(null);

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .trim()
      .required('Email is required')
      .email('Fill in a valid email'),
    password: Yup.string()
      .trim()
      .required('Password is required')
      .min(6, ' Password must have 6 or more character'),
  });

  useEffect(() => {
    if (forgotPasswordState.isSuccessful) {
      if (formikRef.current) {
        formikRef.current.resetForm();
      }
      toast.success(`Password successfully changed`, {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
      setTimeout(() => {
        dispatch(forgotPasswordCleanup());
        router.push('/login');
      }, 4000);
    } else if (forgotPasswordState.error) {
      setForgotPasswordError(forgotPasswordState.error);
      toast.error(`${forgotPasswordError}!!!`, {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });

      dispatch(forgotPasswordCleanup());
    }
  }, [forgotPasswordState, dispatch, router, forgotPasswordError]);

  return (
    <Layout title="Forgot Password">
      {/* <div className="bg-light min-vh-100 d-flex flex-row align-items-center"> */}
      <div className="max-w-6xl mx-auto px-8 my-10 register">
        <form className="shadow-md bg-gray-50 rounded-md p-7 my-10">
          <h1 className="mb-4 text-2xl font-bold">Change Password</h1>
          <p className="text-medium-emphasis">Enter your new password</p>
          {/* {forgotPasswordState.isSuccessful ? (
        // <CAlert color="success">
        <p>You have successfuly changed your password!!!</p>
      ) : // </CAlert>
      null}
      {forgotPasswordError ? (
        // <CAlert color="danger"></CAlert>
        <p>{forgotPasswordError}!!!</p>
      ) : null} */}
          <Formik
            initialValues={{
              email: '',
              password: '',
            }}
            onSubmit={(values, { setSubmitting }) => {
              setForgotPasswordError(null);
              dispatch(forgotPassword(values));
              setSubmitting(false);
            }}
            validationSchema={validationSchema}
            innerRef={formikRef}
          >
            {({
              handleChange,
              handleSubmit,
              values,
              errors,
              touched,
              isValid,
              handleBlur,
            }) => (
              <>
                <div className="mb-4">
                  <input
                    name="email"
                    className="w-full mt-4 py-2 pl-2 text-gray-700"
                    type="email"
                    placeholder="Email"
                    value={values.email}
                    onChange={handleChange('email')}
                    onBlur={handleBlur('email')}
                  />
                  {errors.email && touched.email ? (
                    <p style={{ color: 'red' }}>{errors.email}</p>
                  ) : null}
                </div>
                <div className="mb-10">
                  <input
                    name="password"
                    className="w-full mt-4 py-2 pl-2 text-gray-700"
                    type="password"
                    placeholder="Password"
                    value={values.password}
                    onChange={handleChange('password')}
                    onBlur={handleBlur('password')}
                  />
                  {errors.password && touched.password ? (
                    <p style={{ color: 'red' }}>{errors.password}</p>
                  ) : null}
                </div>
                <button
                  disabled={!isValid || forgotPasswordState.isLoading}
                  type="submit"
                  className="border-black text-white hover:bg-black px-7 py-3 rounded-md bg-zinc-900 text-base font-medium"
                  onClick={handleSubmit}
                >
                  Proceed
                </button>
              </>
            )}
          </Formik>
        </form>
      </div>
    </Layout>
  );
};

export default ChangePassword;
