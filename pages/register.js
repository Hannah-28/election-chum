import React, { useEffect, useRef } from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { register, registerCleanup } from '../store/actions/register';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NaijaStates from 'naija-state-local-government';

export default function Register() {
  const formikRef = useRef();
  const dispatch = useDispatch();
  const registerState = useSelector((s) => s.register);
  const router = useRouter();

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().trim().required('FirstName is required'),
    lastName: Yup.string().trim().required('LastName is required'),
    phoneNumber: Yup.string()
      .trim()
      .required('Phone Number is required')
      .min(11, 'Phone Number is less than 11 digits')
      .max(11, 'Phone Number is more than 11 digits'),
    email: Yup.string()
      .trim()
      .required('Email is required')
      .email('Fill in a valid email'),
    ['State of Origin']: Yup.string()
      .trim()
      .required('State of Origin is required'),
    LGA: Yup.string().trim().required('LGA is required'),
    residence: Yup.string().trim().required('State of Residence is required'),
    passport: Yup.string().trim().required('Passport is required'),
    certificate: Yup.string()
      .trim()
      .required('Means of Identification is required'),
    password: Yup.string().trim().required('Password is required'),
  });

  useEffect(() => {
    if (registerState.isSuccessful) {
      if (formikRef.current) {
        formikRef.current.resetForm();
      }
      toast.success(
        `Check your mail in a few days to confirm if you're eligible to vote or not. Thanks`,
        {
          position: 'top-center',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        }
      );
      setTimeout(() => {
        dispatch(registerCleanup());
        router.push('/login');
      }, 3000);
    } else if (registerState.error) {
      toast.error(`Account already exists`, {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
      dispatch(registerCleanup());
    }
  }, [registerState, dispatch, router]);

  return (
    <Layout title="Register">
      <div className="max-w-6xl mx-auto px-8 my-10 register">
        <form className="shadow-md bg-gray-50 rounded-md p-7 my-10">
          <h1 className="mb-4 text-2xl font-bold">Register</h1>
          <Formik
            initialValues={{
              firstName: '',
              lastName: '',
              phoneNumber: '',
              email: '',
              'State of Origin': 'Abia',
              LGA: '',
              residence: '',
              passport: '',
              certificate: '',
              password: '',
            }}
            onSubmit={(values, { setSubmitting }) => {
              dispatch(register(values));
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
              setFieldValue,
            }) => (
              <>
                <div className="mb-4">
                  <input
                    name="firstName"
                    className="w-full mt-4 py-2 pl-2 text-gray-700"
                    type="text"
                    placeholder="First Name"
                    value={values.firstName}
                    onChange={handleChange('firstName')}
                    onBlur={handleBlur('firstName')}
                  />
                  {errors.firstName && touched.firstName ? (
                    <p style={{ color: 'red' }}>{errors.firstName}</p>
                  ) : null}
                </div>
                <div className="mb-4">
                  <input
                    name="lastName"
                    className="w-full mt-4 py-2 pl-2 text-gray-700"
                    type="text"
                    placeholder="Last Name"
                    value={values.lastName}
                    onChange={handleChange('lastName')}
                    onBlur={handleBlur('lastName')}
                  />
                  {errors.lastName && touched.lastName ? (
                    <p style={{ color: 'red' }}>{errors.lastName}</p>
                  ) : null}
                </div>
                <div className="mb-4">
                  <input
                    name="phoneNumber"
                    className="w-full mt-4 py-2 pl-2 text-gray-700"
                    type="tel"
                    placeholder="Phone Number"
                    value={values.phoneNumber}
                    onChange={handleChange('phoneNumber')}
                    onBlur={handleBlur('phoneNumber')}
                  />
                  {errors.phoneNumber && touched.phoneNumber ? (
                    <p style={{ color: 'red' }}>{errors.phoneNumber}</p>
                  ) : null}
                </div>
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
                <div className="mb-4">
                  <label>State of Origin</label>
                  <select
                    name="State of Origin"
                    className="w-full mt-4 py-2 pl-2 text-gray-700"
                    type="text"
                    value={values['State of Origin']}
                    onChange={handleChange('State of Origin')}
                    onBlur={handleBlur('State of Origin')}
                  >
                    <option>Open this to select your State of Origin</option>
                    {NaijaStates.states().map((state) => (
                      <option key={state} value={state}>
                        {state}
                      </option>
                    ))}
                  </select>
                  {errors['State of Origin'] && touched['State of Origin'] ? (
                    <p style={{ color: 'red' }}>{errors['State of Origin']}</p>
                  ) : null}
                </div>
                <div className="mb-4">
                  <label>Local Government Area</label>
                  <select
                    name="LGA"
                    className="w-full mt-4 py-2 pl-2 text-gray-700"
                    type="text"
                    value={values.LGA}
                    onChange={handleChange('LGA')}
                    onBlur={handleBlur('LGA')}
                  >
                    <option>Open this to select your lga</option>
                    {NaijaStates.lgas(`${values['State of Origin']}`).lgas.map(
                      (lga) => (
                        <option key={lga} value={lga}>
                          {lga}
                        </option>
                      )
                    )}
                  </select>
                  {errors.LGA && touched.LGA ? (
                    <p style={{ color: 'red' }}>{errors.LGA}</p>
                  ) : null}
                </div>
                <div className="mb-4">
                  <label>State of Residence</label>
                  <select
                    name="residence"
                    className="w-full mt-4 py-2 pl-2 text-gray-700"
                    type="text"
                    value={values.residence}
                    onChange={handleChange('residence')}
                    onBlur={handleBlur('residence')}
                  >
                    <option>Open this to select your State of Residence</option>
                    {NaijaStates.states().map((residence) => (
                      <option key={residence} value={residence}>
                        {residence}
                      </option>
                    ))}
                  </select>
                  {errors.residence && touched.residence ? (
                    <p style={{ color: 'red' }}>{errors.residence}</p>
                  ) : null}
                </div>
                <div className="mb-4">
                  <label htmlFor="passport">Upload your passport:</label>
                  <br />
                  <input
                    className="w-full mt-4 py-2 pl-2 text-gray-700"
                    type="file"
                    name="passport"
                    onChange={(event) => {
                      setFieldValue('passport', event.target.files[0]);
                    }}
                  />
                  {errors.passport && touched.passport ? (
                    <p style={{ color: 'red' }}>{errors.passport}</p>
                  ) : null}
                </div>
                <div className="mb-4">
                  <label htmlFor="certificate">
                    Upload a means of identification:
                  </label>
                  <br />
                  <input
                    name="certificate"
                    className="w-full mt-4 py-2 pl-2 text-gray-700"
                    type="file"
                    accept="image/*,.pdf"
                    onChange={(event) => {
                      setFieldValue('certificate', event.target.files[0]);
                    }}
                  />
                  {errors.certificate && touched.certificate ? (
                    <p style={{ color: 'red' }}>{errors.certificate}</p>
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
                  type="submit"
                  className="border-black text-white hover:bg-black px-3 py-2 rounded-md bg-zinc-900 text-base font-medium"
                  onClick={handleSubmit}
                  disabled={!isValid || registerState.isLoading}
                >
                  Submit
                </button>
                <div className="flex mt-5 space-x-5 text-sm">
                  <Link
                    href="/login"
                    className="text-blue-500 hover:underline hover:text-blue-800"
                  >
                    LOGIN?
                  </Link>
                </div>
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
}
