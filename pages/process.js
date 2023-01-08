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
              easy to navigate. This form of voting helps to foster: Lorem ipsum
              dolor sit amet, consectetur adipisicing el. Esse tenetur
              sapiente itaque harum voluptatibus fugiat iste dignissimos animi
              cum commodi incidunt consectetur, nostrum illum eaque! Ipsa illo
              non labore delectus!
            </h3>
            <div className="grid gap-5 lg:grid-cols-3 md:grid-cols-2">
              <div className="shadow-md p-8 w-auto flex flex-col bg-gray-50 hover:bg-white hover:cursor-pointer rounded-md">
                <h3 className="font-medium text-lg mb-3">
                  1. Register
                </h3>
                <p className="text-gray-700 text-base font-normal">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facilis minima, nobis modi eveniet obcaecati voluptatibus
                  alias hic assumenda fugiat, dolorem id cum eos ad harum
                  tenetur sunt mollitia delectus quo.
                </p>
              </div>

              <div className="shadow-md p-8 w-auto flex flex-col bg-gray-50 hover:bg-white hover:cursor-pointer rounded-md">
                <h3 className="font-medium text-lg mb-3">2. Get your unique voter&apos;s number</h3>
                <p className="text-gray-700 text-base font-normal">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facilis minima, nobis modi eveniet obcaecati voluptatibus
                  alias hic assumenda fugiat, dolorem id cum eos ad harum
                  tenetur sunt mollitia delectus quo.
                </p>
              </div>

              <div className="shadow-md p-8 w-auto flex flex-col bg-gray-50 hover:bg-white hover:cursor-pointer rounded-md">
                <h3 className="font-medium text-lg mb-3">3. Login</h3>
                <p className="text-gray-700 text-base font-normal">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facilis minima, nobis modi eveniet obcaecati voluptatibus
                  alias hic assumenda fugiat, dolorem id cum eos ad harum
                  tenetur sunt mollitia delectus quo.
                </p>
              </div>

              <div className="shadow-md p-8 w-auto flex flex-col bg-gray-50 hover:bg-white hover:cursor-pointer rounded-md">
                <h3 className="font-medium text-lg mb-3">4. Vote</h3>
                <p className="text-gray-700 text-base font-normal">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facilis minima, nobis modi eveniet obcaecati voluptatibus
                  alias hic assumenda fugiat, dolorem id cum eos ad harum
                  tenetur sunt mollitia delectus quo.
                </p>
              </div>

              <div className="shadow-md p-8 w-auto flex flex-col bg-gray-50 hover:bg-white hover:cursor-pointer rounded-md">
                <h3 className="font-medium text-lg mb-3">5. Get real-time results</h3>
                <p className="text-gray-700 text-base font-normal">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facilis minima, nobis modi eveniet obcaecati voluptatibus
                  alias hic assumenda fugiat, dolorem id cum eos ad harum
                  tenetur sunt mollitia delectus quo.
                </p>
              </div>
            </div>
          </div>
        </div>

    </Layout>
  );
}
