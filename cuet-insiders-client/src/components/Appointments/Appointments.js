import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import RequestCard from './RequestCard';
import MyAppCard from './MyAppCard';
import './Appointment.css'

const Appointments = () => {

    const { user } = useContext(AuthContext);
    const [usr, setUsr] = useState([]);
    const [myAppointments, setMyAppointments] = useState([]);
    const [requests, setRequests] = useState([]);

    useEffect( () => {
        fetch(`http://localhost:5000/user/${user?.uid}`)
            .then(res => res.json())
            .then(data => setUsr(data.userProfile[0]));
    }, [usr])
    
    useEffect(() => {
        fetch(`http://localhost:5000/myappointments/${user?.uid}`)
            .then(res => res.json())
            .then(data => setMyAppointments(data));
    }, [myAppointments])
    
    useEffect(() => {
        fetch(`http://localhost:5000/requests/${user?.uid}`)
            .then(res => res.json())
            .then(data => setRequests(data));
    }, [requests])



    // console.log(myAppointments, requests);


    return (
        <div className='w-75 mx-auto'>

            {/* {
                (usr?.isMentor) ?    
                    <div className='appointment-nav mt-4 mb-5'>
                        <ul className='d-flex justify-content-between align-items-center'>
                            <li><a href="#newReq">New requests</a></li>
                            <li><a href="#ApprovedReq">Approved requests</a></li>
                            <li><a href="#myApp">My appointment</a></li>
                        </ul>
                    </div>
                    :
                    <></>
            } */}
            
            
            {
                (usr?.isMentor) ?
                    <>
                        <h5 className=' mt-4'>Appointment requests</h5>
                        <hr className='mt-0'/>
                        {
                            (requests.length === 0) ? 
                                <p className='text-muted fst-italic'>
                                    You haven't received any requests yet.
                                </p>
                                :
                                <>
                                {
                                    requests.map(request => {
                                        if (request.status !== -1) {
                                            return (
                                                <RequestCard
                                                key= {request._id}
                                                request={request}
                                                ></RequestCard>
                                            )
                                        }
                                    })
                                }
                                </>
                        }
                    </>
                    :
                    <></>
            }
            

            <h5 className=' mt-5'>My appointments</h5>
            <hr className='mt-0'/>
            {
                (myAppointments.length === 0) ? 
                    <p className='text-muted fst-italic'>You haven't requested for any appointment yet. </p>
                    :
                    <>
                        {
                            myAppointments.map(appointment => <MyAppCard
                                key= {appointment._id}
                                appointment={appointment}
                            ></MyAppCard>)
                        }
                    </>
            }
            
        </div>
    );
};

export default Appointments;