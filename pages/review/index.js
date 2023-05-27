import React, { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import UserSidebar from '../../components/UserSidebar';
import { useDispatch, useSelector } from 'react-redux';
import { getReview, getReviewCleanup } from '../../store/actions/get-review';

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

  useEffect(() => {
    dispatch(getReview());
  }, [dispatch]);

  useEffect(() => {
    if (getReviewState.isSuccessful) {
      setReview(getReviewState.data.pendingUsers);
      dispatch(getReviewCleanup());
    } else if (getReviewState.error) {
      console.log('error');
      dispatch(getReviewCleanup());
    }
  }, [dispatch, getReviewState]);

 
  console.log(review)
  
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
                        {data?.firstName} {data?.lastName}
                      </td>
                      <td>{moment(data.createdDate).format('MM/DD/YYYY')}</td>
                      <td>{data.status}</td>
                      <td>
                        <Link
                          href={`/review/${data._id}`}
                        >
                          View
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>
    </UserSidebar>
  );
}
