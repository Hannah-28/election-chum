import React, { useRef, useEffect } from 'react';
import UserSidebar from '../components/UserSidebar';
import { vote, voteCleanup } from '../store/actions/vote';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Vote() {
  const formikRef = useRef();
  const dispatch = useDispatch();
  const voteState = useSelector((s) => s.vote);
  const router = useRouter();

  const validationSchema = Yup.object().shape({
    party: Yup.string().trim().required('Party is required'),
  });

  useEffect(() => {
    if (voteState.isSuccessful) {
      if (formikRef.current) {
        formikRef.current.resetForm();
      }
      toast.success(`${voteState.data.msg}`, {
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
        dispatch(voteCleanup());
        router.push('/candidates');
      }, 3000);
    } else if (voteState.error) {
      toast.error(`You can only vote once!`, {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
      dispatch(voteCleanup());
    }
  }, [voteState, dispatch, router]);

  return (
    <UserSidebar title="Vote">
      <div className="h-screen my-full">
        <form className="shadow-md bg-gray-50 rounded-md p-7 my-10">
          <h1 className="mb-4 text-2xl font-bold">Details</h1>
          <Formik
            initialValues={{
              party:'YAP'
            }}
            onSubmit={(values, { setSubmitting }) => {
              dispatch(vote(values));
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
                  <label>Party</label>
                  <select
                    name="party"
                    className="w-full mt-4 py-2 pl-2 text-gray-700"
                    type="text"
                    value={values.party}
                    onChange={handleChange('party')}
                    onBlur={handleBlur('party')}
                  >
                    <option value="YAP">Youth Action Party (YAP)</option>
                    <option value="NPC">National Peoples Congress (NPC)</option>
                    <option vlaue="APPA">
                      All Progressive Peoples Alliance (APPA)
                    </option>
                    <option value="NNPC">
                      New Nigeria Peoples Congress (NNPC)
                    </option>
                    <option value="CP">Change Party (CP)</option>
                  </select>
                  {errors.residence && touched.residence ? (
                    <p style={{ color: 'red' }}>{errors.residence}</p>
                  ) : null}
                </div>
                <button
                  type="submit"
                  className="border-black text-white hover:bg-black px-7 py-3 rounded-md bg-zinc-900 text-base font-medium"
                  onClick={handleSubmit}
                  disabled={!isValid || voteState.isLoading}
                >
                  Submit
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
    </UserSidebar>
  );
}
