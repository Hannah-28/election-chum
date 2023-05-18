import React, { useState, useEffect } from 'react';
import UserSidebar from '../../components/UserSidebar';
import {
  getSingleReview,
  getSingleReviewCleanup,
} from '../../store/actions/get-single-review';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import {
  updateSingleReview,
  updateSingleReviewCleanup,
} from '../../store/actions/update-single-review';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';

export default function SingleReview() {
  const router = useRouter();
  const { id } = router.query;
  const dispatch = useDispatch();
  const getSingleReviewState = useSelector((s) => s.getSingleReview);
  const updateSingleReviewState = useSelector((s) => s.updateSingleReview);
  // const navigate = useNavigate();

  const [singleReview, setSingleReview] = useState([]);
  const [, setUpdate] = useState([]);
  useEffect(() => {
    dispatch(getSingleReview(id));
    // dispatch(updateSingleReview(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (getSingleReviewState.isSuccessful) {
      setSingleReview(getSingleReviewState.data);
      dispatch(getSingleReviewCleanup());
    } else if (getSingleReview.error) {
      dispatch(getSingleReviewCleanup());
    }
  }, [getSingleReviewState, dispatch]);

  useEffect(() => {
    if (updateSingleReviewState.isSuccessful) {
      setUpdate(updateSingleReviewState.data);
      dispatch(updateSingleReviewCleanup());
    } else if (updateSingleReview.error) {
      dispatch(updateSingleReviewCleanup());
    }
  }, [updateSingleReviewState, dispatch]);

  const update = (id) => {
    // const payload = {
    //   memberId: uuid,
    // }
    dispatch(updateSingleReview(id));
    // addToast(enableToast)
  };

  console.log(singleReview?.details?.passport?.path, 'details');

  return (
    <UserSidebar title="Details">
      <div className="h-screen my-10">
        {singleReview.details === undefined ? (
          <>
            <div className="spinner-border" role="status"></div>
          </>
        ) : (
          <>
            <h1 className="mb-4 text-2xl font-bold">Details</h1>
            <>
              <div className="my-4">
                <h6>Name of User</h6>
                <p>
                  {singleReview.details.firstName}{' '}
                  {singleReview.details.lastName}
                </p>
              </div>
              <div className="my-4">
                <h6>Phone Number</h6>
                <p>{singleReview.details.phoneNumber}</p>
              </div>
              <div className="my-4">
                <h6>Email</h6>
                <p>{singleReview.details.email}</p>
              </div>
              <div className="my-4">
                <h6>State of Origin</h6>
                <p>{singleReview.details['State of Origin']}</p>
              </div>
              <div className="my-4">
                <h6>LGA</h6>
                <p>{singleReview.details.LGA}</p>
              </div>
              <div className="my-4">
                <h6>State of Residence</h6>
                <p>{singleReview.details.residence}</p>
              </div>
              <div className="my-4">
                <h6>Passport</h6>
                <img src={singleReview?.details?.passport?.path} alt="passport" />
              </div>
              <div className="my-4">
                <h6>Birth Certificate</h6>
                <img src={singleReview.details.passport} alt="passport" />
              </div>
              <button
                type="submit"
                className="border-black text-white hover:bg-black px-7 py-3 rounded-md bg-zinc-900 text-base font-medium"
                onClick={() => {
                  update(id);
                  // setTimeout(() => {
                  //   router.push('/review')
                  // }, 3000)
                }}
              >
                Proceed
              </button>
            </>
          </>
        )}
      </div>
    </UserSidebar>
  );
}
