import React, { useState, useEffect } from 'react';
import UserSidebar from '../components/UserSidebar';
import { useDispatch, useSelector } from 'react-redux';
import { getProfile, getProfileCleanup } from '../store/actions/get-profile';

export default function Profile() {
  const dispatch = useDispatch();
  const getProfileState = useSelector((s) => s.getProfile);
  const [profile, setProfile] = useState([]);

  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch]);

  useEffect(() => {
    if (getProfileState.isSuccessful) {
      setProfile(getProfileState.data);
      dispatch(getProfileCleanup());
    } else if (getProfileState.error) {
      dispatch(getProfileCleanup());
    }
  }, [dispatch, getProfileState]);

  console.log(profile);
 
  return (
    <UserSidebar title="Profile">
      <div className="h-full my-10">
        {profile.length === 0 ? (
          <>
            <div className="spinner-border" role="status"></div>
          </>
        ) : (
          <>
            <h1 className="mb-4 text-2xl font-bold">Profile</h1>
            <>
              <div className="my-4" style={{ display: 'flex', flexWrap: 'wrap', width: '100%', justifyContent: 'space-between', alignItems: 'center'}}>
                <h6>First Name</h6>
                <p
                  style={{
                    border: '1px solid transparent',
                    borderRadius: '0.5em',
                    background: '#000140',
                    display: 'flex',
                    alignItems: 'center',
                    color: 'white',
                    padding: '0.7em 1em',
                    fontSize: '1.2em',
                  }}
                >
                  {profile.profile.firstName.charAt(0).toUpperCase() +   profile.profile.firstName.slice(1)}
                </p>
              </div>

              <div className="my-4" style={{ display: 'flex', flexWrap: 'wrap', width: '100%', justifyContent: 'space-between', alignItems: 'center'}}>
                <h6>Last Name</h6>
                <p
                  style={{
                    border: '1px solid transparent',
                    borderRadius: '0.5em',
                    background: '#000140',
                    display: 'flex',
                    alignItems: 'center',
                    color: 'white',
                    padding: '0.7em 1em',
                    fontSize: '1.2em',
                  }}
                >
                  {profile.profile.lastName.charAt(0).toUpperCase() +   profile.profile.lastName.slice(1)}
                </p>
              </div>

              <div className="my-4" style={{ display: 'flex', flexWrap: 'wrap', width: '100%', justifyContent: 'space-between', alignItems: 'center'}}>
                <h6>Phone Number</h6>
                <p
                  style={{
                    border: '1px solid transparent',
                    borderRadius: '0.5em',
                    background: '#000140',
                    display: 'flex',
                    alignItems: 'center',
                    color: 'white',
                    padding: '0.7em 1em',
                    fontSize: '1.2em',
                  }}
                >
                  {profile.profile.phoneNumber}
                </p>
              </div>

              <div className="my-4" style={{ display: 'flex', flexWrap: 'wrap', width: '100%', justifyContent: 'space-between', alignItems: 'center'}}>
                <h6>Email</h6>
                <p
                  style={{
                    border: '1px solid transparent',
                    borderRadius: '0.5em',
                    background: '#000140',
                    display: 'flex',
                    alignItems: 'center',
                    color: 'white',
                    padding: '0.7em 1em',
                    fontSize: '1.2em',
                  }}
                >
                  {profile.profile.email}
                </p>
              </div>

              <div className="my-4" style={{ display: 'flex', flexWrap: 'wrap', width: '100%', justifyContent: 'space-between', alignItems: 'center'}}>
                <h6>State of Origin</h6>
                <p
                  style={{
                    border: '1px solid transparent',
                    borderRadius: '0.5em',
                    background: '#000140',
                    display: 'flex',
                    alignItems: 'center',
                    color: 'white',
                    padding: '0.7em 1em',
                    fontSize: '1.2em',
                  }}
                >
                  {profile['profile']['State of Origin']}
                </p>
              </div>

              <div className="my-4" style={{ display: 'flex', flexWrap: 'wrap', width: '100%', justifyContent: 'space-between', alignItems: 'center'}}>
                <h6>LGA</h6>
                <p
                  style={{
                    border: '1px solid transparent',
                    borderRadius: '0.5em',
                    background: '#000140',
                    display: 'flex',
                    alignItems: 'center',
                    color: 'white',
                    padding: '0.7em 1em',
                    fontSize: '1.2em',
                  }}
                >
                  {profile.profile.LGA}
                </p>
              </div>

              <div className="my-4" style={{ display: 'flex', flexWrap: 'wrap', width: '100%', justifyContent: 'space-between', alignItems: 'center'}}>
                <h6>State of Residence</h6>
                <p
                  style={{
                    border: '1px solid transparent',
                    borderRadius: '0.5em',
                    background: '#000140',
                    display: 'flex',
                    alignItems: 'center',
                    color: 'white',
                    padding: '0.7em 1em',
                    fontSize: '1.2em',
                  }}
                >
                  {profile.profile.residence}
                </p>
              </div>

              <div className="my-4" style={{ display: 'flex', flexWrap: 'wrap', width: '100%', justifyContent: 'space-between', alignItems: 'center'}}>
                <h6>Position</h6>
                <p
                  style={{
                    border: '1px solid transparent',
                    borderRadius: '0.5em',
                    background: '#000140',
                    display: 'flex',
                    alignItems: 'center',
                    color: 'white',
                    padding: '0.7em 1em',
                    fontSize: '1.2em',
                  }}
                >
                  {profile.profile.userType}
                </p>
              </div>
            </>
          </>
        )}
      </div>
    </UserSidebar>
  );
}

//     <div style={{ fontSize: '0.7em' }}>
//       {JSON.stringify(profile) === '{}' ? (
//         <CSpinner color="#000140" />
//       ) : (
//         <>
//           <div style={{ display: 'flex', alignItems: 'center', marginBottom: '2em' }}>
//             <CCol>
//               <h1>Profile</h1>
//             </CCol>

//             <CCol style={{ display: 'contents' }}>
//               <Link to="/reset-password">
//                 <CButton
//                   style={{
//                     background: '#000140',
//                     color: 'white',
//                     borderColor: '#000140',
//                     fontSize: '1em',
//                   }}
//                 >
//                   Reset Password
//                 </CButton>
//               </Link>
//             </CCol>
//           </div>

//           <CCol>
//             <CRow>
//               <CCol style={{ display: 'flex', alignItems: 'center' }}>
//                 <h6>Username</h6>
//               </CCol>
//               <CCol
//                 style={{
//                   border: '1px solid transparent',
//                   borderRadius: '0.5em',
//                   background: '#000140',
//                   display: 'flex',
//                   alignItems: 'center',
//                   color: 'white',
//                   margin: '1.5em 0em',
//                   padding: '0.5em 0em 0.5em 0.5em',
//                   fontSize: '1.2em',
//                 }}
//               >
//                 {profile.username}
//               </CCol>
//             </CRow>
//           </CCol>

//           <CCol>
//             <CRow>
//               <CCol style={{ display: 'flex', alignItems: 'center' }}>
//                 <h6>First Name</h6>
//               </CCol>
//               <CCol
//                 style={{
//                   border: '1px solid transparent',
//                   borderRadius: '0.5em',
//                   background: '#000140',
//                   display: 'flex',
//                   alignItems: 'center',
//                   color: 'white',
//                   margin: '1.5em 0em',
//                   padding: '0.5em 0em 0.5em 0.5em',
//                   fontSize: '1.2em',
//                 }}
//               >
//                 {profile.firstName}
//               </CCol>
//             </CRow>
//           </CCol>

//           <CCol>
//             <CRow>
//               <CCol style={{ display: 'flex', alignItems: 'center' }}>
//                 <h6>Last Name</h6>
//               </CCol>
//               <CCol
//                 style={{
//                   border: '1px solid transparent',
//                   borderRadius: '0.5em',
//                   background: '#000140',
//                   display: 'flex',
//                   alignItems: 'center',
//                   color: 'white',
//                   margin: '1.5em 0em',
//                   padding: '0.5em 0em 0.5em 0.5em',
//                   fontSize: '1.2em',
//                 }}
//               >
//                 {profile.lastName}
//               </CCol>
//             </CRow>
//           </CCol>

//           <CCol>
//             <CRow>
//               <CCol style={{ display: 'flex', alignItems: 'center' }}>
//                 <h6>Phone Number</h6>
//               </CCol>
//               <CCol
//                 style={{
//                   border: '1px solid transparent',
//                   borderRadius: '0.5em',
//                   background: '#000140',
//                   display: 'flex',
//                   alignItems: 'center',
//                   color: 'white',
//                   margin: '1.5em 0em',
//                   padding: '0.5em 0em 0.5em 0.5em',
//                   fontSize: '1.2em',
//                 }}
//               >
//                 {profile.phone}
//               </CCol>
//             </CRow>
//           </CCol>
//         </>
//       )}
//     </div>
//   )
// }

// export default Profile
