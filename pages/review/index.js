import React, { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import UserSidebar from '../../components/UserSidebar';
import { useDispatch, useSelector } from 'react-redux';
import { getReview, getReviewCleanup } from '../../store/actions/get-review';
import { ToastContainer, toast } from 'react-toastify';
import { useRouter } from 'next/router';
import 'react-toastify/dist/ReactToastify.css';

// import './../styles.css'

//Bootstrap and jQuery libraries

// import $ from 'jquery';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'jquery-ui-dist/jquery-ui';
// import 'jquery/dist/jquery.min.js';

// //Datatable Modules

// import "datatables.net-dt/js/dataTables.dataTables"
// import "datatables.net-dt/css/jquery.dataTables.min.css"

import moment from 'moment';

export default function Review() {
  const dispatch = useDispatch();
  const getReviewState = useSelector((s) => s.getReview);
  const [review, setReview] = useState([]);
  const router = useRouter();

  useEffect(() => {
    dispatch(getReview());
  }, [dispatch]);

  useEffect(() => {
    if (getReviewState.isSuccessful) {
      if (getReviewState.data.pendingUsers.length === 0) {
        toast.error(`No pending user to be reviewed!!!`, {
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
          dispatch(getReviewCleanup());
          router.push('/candidates');
        }, 3000);
      } else {
        setReview(getReviewState.data.pendingUsers);
        dispatch(getReviewCleanup());
      }
    } else if (getReviewState.error) {
      toast.error(`Only an admin has access to this section!!!`, {
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
        dispatch(getReviewCleanup());
        router.push('/candidates');
      }, 3000);
    }
  }, [dispatch, getReviewState, router]);


  return (
    <UserSidebar title="Review">
      <div className="h-screen my-10">
        {review.length === 0 ? (
          <>
            <div className="spinner-border" role="status"></div>
          </>
        ) : (
          <>
            <h1 className="mb-4 text-2xl font-bold">Users</h1>

            <div style={{ overflowX: 'auto' }}>
              <table
                width="100%"
                className="display"
                id="example"
                cellSpacing="0"
              >
                <thead
                  style={{
                    backgroundColor: '#000140',
                    fontWeight: '700',
                    color: '#FFFFFF',
                    textAlign: 'left',
                  }}
                >
                  <tr>
                    <th>Name</th>
                    <th>
                      Date Created <br />
                      (MM/DD/YY)
                    </th>
                    <th>Status</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {review.map((data, i) => (
                    <tr key={i} className="table-success">
                      <td>
                        {data?.firstName.charAt(0).toUpperCase() +
                          data?.firstName.slice(1)}{' '}
                        {data?.lastName.charAt(0).toUpperCase() +
                          data?.lastName.slice(1)}
                      </td>
                      <td>{moment(data.createdDate).format('MM/DD/YYYY')}</td>
                      <td>{data.status}</td>
                      <td>
                        <Link href={`/review/${data._id}`}>View</Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}
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
