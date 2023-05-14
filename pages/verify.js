import React, { useEffect, useState, useRef } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { verify, verifyCleanup } from '../store/actions/verify';
import { useRouter } from 'next/router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Layout from '../components/Layout';
import Cookies from 'js-cookie';
import localStorage from 'redux-persist/es/storage';

const Verify = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const formikRef = useRef();
  const verifyState = useSelector((s) => s.verify);
  const [verifyError, setVerifyError] = useState(null);

  const validationSchema = Yup.object().shape({
    // votersID: Yup.string().trim().required('VotersID is required'),
    // password: Yup.string()
    //   .trim()
    //   .required('Password is required')
    //   .min(6, ' Password must have 6 or more character'),
    otp: Yup.string().trim().required('OTP is required'),
    // token: Yup.string()
  });

  useEffect(() => {
    if (verifyState.isSuccessful) {
      if (formikRef.current) {
        formikRef.current.resetForm();
      }
      toast.success(`Welcome back!!!`, {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
      setTimeout(() => {
        dispatch(verifyCleanup());
        router.push('/candidates');
      }, 3000);
    } else if (verifyState.error) {
      setVerifyError(verifyState.error);
      toast.error(`${verifyError}!!!`, {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });

      dispatch(verifyCleanup());
    }
  }, [verifyState, dispatch, router, verifyError]);
  const token = Cookies.get('token')
  console.log(token, 'Token')
  // console.log(localStorage.getItem('authToken'), 'hi')
  // const data = localStorage.getItem('key')
  // setMyLocalStorageData(JSON.parse(data))

  return (
    <Layout title="Verify">
      {/* <div className="bg-light min-vh-100 d-flex flex-row align-items-center"> */}
      <div className="max-w-6xl mx-auto px-8 my-10 register">
        <form className="shadow-md bg-gray-50 rounded-md p-7 my-10">
          <h1 className="mb-4 text-2xl font-bold">Verify</h1>
          <p className="text-medium-emphasis">Enter the secure pin sent to your phone</p>
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
              // votersID: '',
              // password: '',
              otp: '',
              // token: `${localStorage.getItem('authToken')}`
            }}
            onSubmit={(values, { setSubmitting }) => {
              setVerifyError(null);
              dispatch(verify(values));
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
                {/* <div className="mb-4">
                  <input
                    name="votersID"
                    className="w-full mt-4 py-2 pl-2 text-gray-700"
                    type="text"
                    placeholder="Voter's ID"
                    value={values.votersID}
                    onChange={handleChange('votersID')}
                    onBlur={handleBlur('votersID')}
                  />
                  {errors.votersID && touched.votersID ? (
                    <p style={{ color: 'red' }}>{errors.votersID}</p>
                  ) : null}
                </div>
                <div className="mb-4">
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
                </div> */}
                <div className="mb-10">
                  <input
                    name="otp"
                    className="w-full mt-4 py-2 pl-2 text-gray-700"
                    type="tel"
                    placeholder="otp"
                    value={values.otp}
                    onChange={handleChange('otp')}
                    onBlur={handleBlur('otp')}
                  />
                  {errors.otp && touched.otp ? (
                    <p style={{ color: 'red' }}>{errors.otp}</p>
                  ) : null}
                </div>
                <button
                  disabled={!isValid || verifyState.isLoading}
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
      <ToastContainer
        position="top-center"
        autoClose={3000}
        limit={1}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </Layout>
  );
};

export default Verify;
