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

import { getFile, getFileCleanUp } from '../../store/actions/get-file';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function SingleReview() {
  const router = useRouter();
  const { id } = router.query;
  const dispatch = useDispatch();
  const getSingleReviewState = useSelector((s) => s.getSingleReview);
  const updateSingleReviewState = useSelector((s) => s.updateSingleReview);
  const getFileState = useSelector((s) => s.getFile);
  const [show, setShow] = useState(false);
  const [status, setStatus] = useState('');
  const [comment, setComment] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [singleReview, setSingleReview] = useState([]);
  const [, setUpdate] = useState([]);
  const [file, setFile] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  useEffect(() => {
    dispatch(getSingleReview(id));
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
    if (getFileState.isSuccessful) {
      setFile(getFileState.data);
      dispatch(getFileCleanUp());
    } else if (getFile.error) {
      dispatch(getFileCleanUp());
    }
  }, [getFileState, dispatch]);

  useEffect(() => {
    if (updateSingleReviewState.isSuccessful) {
      setUpdate(updateSingleReviewState.data);
      setTimeout(() => {
        dispatch(updateSingleReviewCleanup());
        router.push('/review');
      }, 3000);
    } else if (updateSingleReview.error) {
      setTimeout(() => {
        dispatch(updateSingleReviewCleanup());
        router.push('/review');
      }, 3000);
    }
  }, [updateSingleReviewState, dispatch, router]);

  console.log(file)

  const update = () => {
    const body = {
      status: status,
      comment: comment,
    };
    dispatch(updateSingleReview(id, body));
  };
  const passport = () => {
    dispatch(getFile(singleReview.details.passport.passportID));
  };
  const birthCert = () => {
    if (singleReview['details']) {
      dispatch(
        getFile(
          singleReview['details']['Birth Certificate']['Birth CertificateID']
        )
      );
    }
  };

  return (
    <UserSidebar title="Details">
      <div className="h-full my-10">
        {singleReview?.details === undefined ? (
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
                  {singleReview.details.firstName.charAt(0).toUpperCase() +
                    singleReview.details.firstName.slice(1)}{' '}
                  {singleReview.details.lastName.charAt(0).toUpperCase() +
                    singleReview.details.lastName.slice(1)}
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
                <button
                  className="border-black text-white hover:bg-black px-3 py-2 rounded-md bg-zinc-900 text-base font-medium"
                  onClick={() => {
                    passport();
                  }}
                >
                  View
                </button>
                <img src={file} alt="passport" />
              </div>
              <div className="my-4">
                <h6>Birth Certificate</h6>
                <button
                  className="border-black text-white hover:bg-black px-3 py-2 rounded-md bg-zinc-900 text-base font-medium"
                  onClick={() => {
                    birthCert();
                  }}
                >
                  View
                </button>
                <img src={singleReview.details.passport} alt="passport" />
              </div>

              <button
                className="border-black text-white hover:bg-black px-3 py-2 rounded-md bg-zinc-900 text-base font-medium"
                onClick={handleShow}
              >
                Review
              </button>
            </>
          </>
        )}
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Review</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <label htmlFor="status">Status:</label>

            <select
              className="w-full my-2 py-2 text-gray-700 border"
              name="status"
              id="status"
              onChange={(value) => setStatus(value.target.value)}
            >
              <option value="">Open this to select status</option>
              <option value="approved">Approved</option>
              <option value="declined">Declined</option>
            </select>
          </div>

          <div>
            <label htmlFor="comment">Comment</label>
            <input
              className="w-full my-2 py-2 text-gray-700 border"
              name="comment"
              id="comment"
              onChange={(value) => setComment(value.target.value)}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              update(id);
            }}
            disabled={status === '' || comment === ''}
          >
            Proceed
          </Button>
        </Modal.Footer>
      </Modal>
    </UserSidebar>
  );
}
