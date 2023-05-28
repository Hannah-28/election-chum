import React, { useEffect, useState } from 'react';
import UserSidebar from '../components/UserSidebar';
import {
  getVotesData,
  getVotesDataCleanup,
} from '../store/actions/get-votes-data';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import { useRouter } from 'next/router';
import 'react-toastify/dist/ReactToastify.css';
import { CSVLink } from 'react-csv';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function Results() {
  const dispatch = useDispatch();
  const getVotesDataState = useSelector((s) => s.getVotesData);
  const [results, setResults] = useState([]);
  const router = useRouter();

  useEffect(() => {
    dispatch(getVotesData());
  }, [dispatch]);

  useEffect(() => {
    if (getVotesDataState.isSuccessful) {
      setResults(getVotesDataState.data);
      dispatch(getVotesDataCleanup());
    } else if (getVotesDataState.error) {
      toast.error(
        `You need to vote before you can have access to the votes data. Thanks`,
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
        dispatch(getVotesDataCleanup());
        router.push('/vote');
      }, 3000);
    }
  }, [dispatch, getVotesDataState, router]);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Votes By Party',
      },
    },
  };

  // const labels = ['YAP', 'NNPC', 'CP', 'APPA', 'NPC'];
  const labels = results?.votesByParty?.map((data) => {
    return data._id;
  });

  const count = results?.votesByParty?.map((data) => {
    return data.count;
  });

  const data = {
    labels: [`Party Votes (Total Votes = ${results?.totalVotes})`],
    datasets: [
      {
        label: `${labels?.at(0)}`,
        data: [count?.at(0)],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: `${labels?.at(1)}`,
        data: [count?.at(1)],
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
      {
        label: `${labels?.at(2)}`,
        data: [count?.at(2)],
        backgroundColor: 'rgba(29, 222, 25, 0.5)',
      },
      {
        label: `${labels?.at(3)}`,
        data: [count?.at(3)],
        backgroundColor: 'rgba(253, 72, 35, 0.5)',
      },
      {
        label: `${labels?.at(4)}`,
        data: [count?.at(4)],
        backgroundColor: 'rgba(73, 62, 205, 0.5)',
      },
    ],
  };

  const state = results?.votesByState?.map((data) => {
    return data._id;
  });

  const stateCount = results?.votesByState?.map((data) => {
    return data.count;
  });

  const headersVotesByParty = [
    { label: 'Parties', key: '_id' },
    { label: 'Votes', key: 'count' },
  ];

  const csvVotesByPartyReport = {
    filename: 'VotesByParty.csv',
    headers: headersVotesByParty,
    data: results?.votesByParty,
  };

  const headersVotesByState = [
    { label: 'States', key: '_id' },
    { label: 'Votes', key: 'count' },
  ];

  const csvVotesByStateReport = {
    filename: 'VotesByState.csv',
    headers: headersVotesByState,
    data: results?.votesByState,
  };

  console.log(results);
  console.log(state);
  console.log(stateCount);

  return (
    <UserSidebar title="Results">
      <div className="h-full my-10">
        {results.length === 0 ? (
          <>
            <div className="spinner-border" role="status"></div>
          </>
        ) : (
          <>
            <h1 className="mb-4 text-2xl font-bold">Results</h1>
            <div
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'right',
                marginBottom: '2em',
              }}
            >
              <CSVLink {...csvVotesByPartyReport}>Download</CSVLink>
            </div>

            <Bar options={options} data={data} />

            <div style={{ width: '100%', marginTop: '2em' }}>
              <h6 className="text-center w-full">Votes By State</h6>
              <div
                style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'right',
                  marginBottom: '2em',
                }}
              >
                <CSVLink {...csvVotesByStateReport}>Download</CSVLink>
              </div>
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
                    <th>Count</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      {state.map((data, i) => (
                        <tr key={i}>{data}</tr>
                      ))}
                    </td>
                    <td>
                      {stateCount.map((data, i) => (
                        <tr key={i}>{data}</tr>
                      ))}
                    </td>
                  </tr>
                </tbody>
              </table>
              </div>
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
