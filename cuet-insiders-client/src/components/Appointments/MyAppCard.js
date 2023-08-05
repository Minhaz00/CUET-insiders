import React, { useEffect, useState } from 'react';
import demoDp from '../../assets/images/logo/user.png';
import { Button, Form, Modal } from 'react-bootstrap';
import { FaSquareArrowUpRight } from 'react-icons/fa6';

const MyAppCard = ({ appointment }) => {
    const { _id, status, mentor, topic, mentorMsg } = appointment;
    const [appMentor, setAppMentor] = useState([]);
    const [show1, setShow1] = useState(false);
    const handleShow1 = () => {                          // for modal open
        setShow1(true);
    }            
    
    const handleClose1 = () => {                         // for modal open
        setShow1(false);
    }
    
    useEffect( () => {
        fetch(`http://localhost:5000/user/${mentor}`)
            .then(res => res.json())
            .then(data => setAppMentor(data.userProfile[0]));
    }, [appMentor])


    const deleteAppointment = (deleteId) => {
        fetch(`http://localhost:5000/appointment/${deleteId}`, {
        method: "DELETE",
        })
        .then((res) => res.json())
        .then((data) => console.log(data));
    }

    return (
        <div className='shadow-sm border rounded-2 p-2 mt-2 d-flex justify-content-between align-items-center'>
            <div className='d-flex'>
                <img  style={{ width: "50px", height: "50px"}} src={(appMentor?.photoURL)?appMentor.photoURL:demoDp} className=' rounded-circle' alt="" />
                <div className='ms-3'>
                    <p className='fw-bold mb-0'>{appMentor.displayName}</p>
                    <p className='mb-0'><small>Topic: {topic}</small></p>
                </div>
            </div>
            <div>
                {
                    (status === 0) ?
                        <div className='d-flex'>
                            <button className='btn text-primary px-1'><small>Pending</small></button>
                            {/* delete created appointment  */}
                            <button className='btn text-danger px-1' onClick={()=>deleteAppointment(_id)}><small>Cancel</small></button>
                        </div>
                        :
                        <>
                            {
                                (status === 1) ?
                                    <div className='d-flex'>
                                        <button className='btn text-success py-auto px-1'><small>Approved </small></button>
                                        <button className='btn text-primary px-1' onClick={handleShow1}><small>Details</small></button>
                                    </div>
                                    :
                                    <div className='d-flex'>
                                        <button className='btn text-danger py-auto px-1'><small>Rejected </small></button>
                                        <button className='btn text-primary px-1' onClick={handleShow1}><small>Details</small></button>
                                        <button className='btn text-danger px-1' onClick={() => deleteAppointment(_id)}><small>X</small></button>
                                    </div>
                            }
                        </>
                }
            </div>

            
            {/* Show mentors message after approval/rejection  */}
            <Modal show={show1} onHide={handleClose1} >
                            
                <Modal.Header closeButton className='pt-2 pb-1'>
                    <Modal.Title><small>Mentor's Message</small> </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    {mentorMsg}
                </Modal.Body>

            </Modal>

        </div>
    );
};

export default MyAppCard;