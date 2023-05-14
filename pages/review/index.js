import React, { useEffect, useState, useRef } from 'react';
import Layout from '../../components/Layout';
import Link from 'next/link';
import { useRouter } from 'next/router';
import UserSidebar from '../../components/UserSidebar';
import { useDispatch, useSelector } from 'react-redux';
import { getReview, getReviewCleanup } from '../../store/actions/get-review';

// import './../styles.css'

//Bootstrap and jQuery libraries
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'jquery-ui-dist/jquery-ui';
// import 'jquery/dist/jquery.min.js';
// //Datatable Modules
// import "datatables.net-dt/js/dataTables.dataTables"
// import "datatables.net-dt/css/jquery.dataTables.min.css"
// import $ from 'jquery';
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
  console.log(review, 'data');

  // $(document).ready(function () {
  //   $.fn.dataTable.ext.search.push(function (settings, data, dataIndex) {
  //     var min = $('#min').datepicker('getDate');
  //     var max = $('#max').datepicker('getDate');
  //     var startDate = new Date(data[1]);
  //     if (min === null && max === null) {
  //       return true;
  //     }
  //     if (min === null && startDate <= max) {
  //       return true;
  //     }
  //     if (max === null && startDate >= min) {
  //       return true;
  //     }
  //     if (startDate <= max && startDate >= min) {
  //       return true;
  //     }
  //     return false;
  //   });

  //   $('#min').datepicker({
  //     onSelect: function () {
  //       table.draw();
  //     },
  //     changeMonth: true,
  //     changeYear: true,
  //   });
  //   $('#max').datepicker({
  //     onSelect: function () {
  //       table.draw();
  //     },
  //     changeMonth: true,
  //     changeYear: true,
  //   });
  //   var table = $('#example').DataTable();

  //   // Event listener to the two range filtering inputs to redraw on input
  //   $('#min, #max').change(function () {
  //     table.draw();
  //   });
  // });
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
            <table
              border="0"
              cellSpacing="5"
              cellPadding="5"
              style={{ width: '100%', margin: '2em 0', border: 'none' }}
            >
              <tbody
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  width: '100%',
                  justifyContent: 'space-between',
                }}
              >
                <tr>
                  <td>Min Date:</td>
                  <td>
                    <input name="min" id="min" type="text" autoComplete="off" />
                  </td>
                </tr>
                <tr>
                  <td>Max Date:</td>
                  <td>
                    <input name="max" id="max" type="text" autoComplete="off" />
                  </td>
                </tr>
              </tbody>
            </table>

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
                          // style={{ textDecoration: 'none' }}
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
