import React from 'react';
import Layout from '../components/Layout';

export default function Process() {
  return (
    <Layout title="Process">
      <div className="max-w-6xl mx-auto px-8 my-10 py-7">
        <h1 className="mb-4 text-2xl font-bold">Process</h1>
        <div>
          <h3 className="my-6 text-lg">
            ElectionChum is very easy to navigate and the the process is quite
            easy to navigate. There are just five steps needed.
          </h3>
          <div className="grid gap-5 lg:grid-cols-3 md:grid-cols-2">
            <div className="shadow-md p-8 w-auto flex flex-col bg-gray-50 hover:bg-white hover:cursor-pointer rounded-md">
              <h3 className="font-medium text-lg mb-3">1. Register</h3>
              <p className="text-gray-700 text-base font-normal">
                All citizens must register to get an approval for voting. During
                registration, your first name, last name, phone number, email,
                state of origin, LGA, state of residence, passport, means of
                identification, and password
              </p>
            </div>

            <div className="shadow-md p-8 w-auto flex flex-col bg-gray-50 hover:bg-white hover:cursor-pointer rounded-md">
              <h3 className="font-medium text-lg mb-3">
                2. Get your unique voter&apos;s number
              </h3>
              <p className="text-gray-700 text-base font-normal">
                After registration, an admin must approve your registration
                aftter which you get a VotersID in your mail.
              </p>
            </div>

            <div className="shadow-md p-8 w-auto flex flex-col bg-gray-50 hover:bg-white hover:cursor-pointer rounded-md">
              <h3 className="font-medium text-lg mb-3">3. Login</h3>
              <p className="text-gray-700 text-base font-normal">
                To login in to the portal, you need your VotersID nad password.
                Then an OTP is sent to your mail to verify if you initiated the
                login.
              </p>
            </div>

            <div className="shadow-md p-8 w-auto flex flex-col bg-gray-50 hover:bg-white hover:cursor-pointer rounded-md">
              <h3 className="font-medium text-lg mb-3">4. Vote</h3>
              <p className="text-gray-700 text-base font-normal">
                To vote, you need to use your webcam to verify if you are the
                same person as the picture uploaded during registration. After
                which you are permitted to vote for your preferred candidate.
              </p>
            </div>

            <div className="shadow-md p-8 w-auto flex flex-col bg-gray-50 hover:bg-white hover:cursor-pointer rounded-md">
              <h3 className="font-medium text-lg mb-3">
                5. Get real-time results
              </h3>
              <p className="text-gray-700 text-base font-normal">
                Immediately after voting, you are directed to a page showing the
                vote counts and data so far. And this allows you to monitor the
                result in the comfort of your home.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
