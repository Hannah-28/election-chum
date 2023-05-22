import React, { useEffect, useState, useRef } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { verify, verifyCleanup } from '../store/actions/verify';
import { useRouter } from 'next/router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Layout from '../components/Layout';


const Verify = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const formikRef = useRef();
  const verifyState = useSelector((s) => s.verify);
  const [verifyError, setVerifyError] = useState(null);

  const validationSchema = Yup.object().shape({
    otp: Yup.string().trim().required('OTP is required'),
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
      setVerifyError('Invalid OTP');
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
  return (
    <Layout title="Verify">
      <div className="max-w-6xl mx-auto px-8 my-10 register">
        <form className="shadow-md bg-gray-50 rounded-md p-7 my-10">
          <h1 className="mb-4 text-2xl font-bold">Verify</h1>
          <p className="text-medium-emphasis">Enter the secure pin sent to your phone</p>
          <Formik
            initialValues={{
              otp: '',
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
