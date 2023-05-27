import React, { useState, useEffect } from 'react';
import UserSidebar from '../components/UserSidebar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';

export default function Candidates() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Creating a timeout within the useEffect hook
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  return (
    <UserSidebar title="Candidates">
      <div className="h-full my-10">
        {isLoading ? (
          <>
            <div className="spinner-border" role="status"></div>
          </>
        ) : (
          <>
            <h1 className="mb-4 text-2xl font-bold">Candidates</h1>
            <div>
              <h6>
                Below are the candidates for our upcoming election and this is
                their state and some information about them.
              </h6>
              <div className="grid gap-5 lg:grid-cols-2 md:grid-cols-2 text-left">
                <div className="shadow-md p-8 w-auto flex flex-col bg-gray-50 hover:bg-white hover:cursor-pointer rounded-md">
                  <Image
                    src="/profile.jpg"
                    width={30}
                    height={20}
                    alt="profile"
                    style={{
                      width: '23%',
                      height: '15%',
                      borderRadius: '50%',
                    }}
                  />
                  <h3 className="font-medium text-lg mb-3">
                    Mrs Udojike Chidinma
                  </h3>
                  <div className="text-gray-700 text-base font-normal">
                    <h6>Age</h6>
                    <p>38years</p>
                    <h6>State of Origin</h6>
                    <p>Abia</p>
                    <h6>Political Party</h6>
                    <p>Youth Action Party (YAP)</p>
                    <h6>Achievements</h6>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Facilis minima, nobis modi eveniet obcaecati voluptatibus
                      alias hic assumenda fugiat, dolorem id cum eos ad harum
                      tenetur sunt mollitia delectus quo.
                    </p>
                  </div>
                </div>

                <div className="shadow-md p-8 w-auto flex flex-col bg-gray-50 hover:bg-white hover:cursor-pointer rounded-md">
                  <Image
                    src="/profile.jpg"
                    width={30}
                    height={20}
                    alt="profile"
                    style={{
                      width: '23%',
                      height: '15%',
                      borderRadius: '50%',
                    }}
                  />
                  <h3 className="font-medium text-lg mb-3">
                    Mr Adedeji Timothy
                  </h3>
                  <div className="text-gray-700 text-base font-normal">
                    <h6>Age</h6>
                    <p>55 years</p>
                    <h6>State of Origin</h6>
                    <p>Ogun</p>
                    <h6>Political Party</h6>
                    <p>National Peoples Congress (NPC)</p>
                    <h6>Achievements</h6>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Facilis minima, nobis modi eveniet obcaecati voluptatibus
                      alias hic assumenda fugiat, dolorem id cum eos ad harum
                      tenetur sunt mollitia delectus quo.
                    </p>
                  </div>
                </div>

                <div className="shadow-md p-8 w-auto flex flex-col bg-gray-50 hover:bg-white hover:cursor-pointer rounded-md">
                  <Image
                    src="/profile.jpg"
                    width={30}
                    height={20}
                    alt="profile"
                    style={{
                      width: '23%',
                      height: '15%',
                      borderRadius: '50%',
                    }}
                  />
                  <h3 className="font-medium text-lg mb-3">
                    Mrs Hassanat Busari
                  </h3>
                  <div className="text-gray-700 text-base font-normal">
                    <h6>Age</h6>
                    <p>60 years</p>
                    <h6>State of Origin</h6>
                    <p>Kaduna</p>
                    <h6>Political Party</h6>
                    <p>All Progressive Peoples Alliance (APPA)</p>
                    <h6>Achievements</h6>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Facilis minima, nobis modi eveniet obcaecati voluptatibus
                      alias hic assumenda fugiat, dolorem id cum eos ad harum
                      tenetur sunt mollitia delectus quo.
                    </p>
                  </div>
                </div>

                <div className="shadow-md p-8 w-auto flex flex-col bg-gray-50 hover:bg-white hover:cursor-pointer rounded-md">
                  <Image
                    src="/profile.jpg"
                    width={30}
                    height={20}
                    alt="profile"
                    style={{
                      width: '23%',
                      height: '15%',
                      borderRadius: '50%',
                    }}
                  />
                  <h3 className="font-medium text-lg mb-3">
                    Mrs Udojike Chidinma
                  </h3>
                  <div className="text-gray-700 text-base font-normal">
                    <h6>Age</h6>
                    <p>46years</p>
                    <h6>State of Origin</h6>
                    <p>Abia</p>
                    <h6>Political Party</h6>
                    <p>New Nigeria Peoples Congress (NNPC)</p>
                    <h6>Achievements</h6>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Facilis minima, nobis modi eveniet obcaecati voluptatibus
                      alias hic assumenda fugiat, dolorem id cum eos ad harum
                      tenetur sunt mollitia delectus quo.
                    </p>
                  </div>
                </div>

                <div className="shadow-md p-8 w-auto flex flex-col bg-gray-50 hover:bg-white hover:cursor-pointer rounded-md">
                  <Image
                    src="/profile.jpg"
                    width={30}
                    height={20}
                    alt="profile"
                    style={{
                      width: '23%',
                      height: '15%',
                      borderRadius: '50%',
                    }}
                  />
                  <h3 className="font-medium text-lg mb-3">
                    Mr Adedeji Timothy
                  </h3>
                  <div className="text-gray-700 text-base font-normal">
                    <h6>Age</h6>
                    <p>41 years</p>
                    <h6>State of Origin</h6>
                    <p>Ogun</p>
                    <h6>Political Party</h6>
                    <p>Change Party (CP)</p>
                    <h6>Achievements</h6>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Facilis minima, nobis modi eveniet obcaecati voluptatibus
                      alias hic assumenda fugiat, dolorem id cum eos ad harum
                      tenetur sunt mollitia delectus quo.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </UserSidebar>
  );
}
