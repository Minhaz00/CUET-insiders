import React, { useEffect, useState } from 'react';
import demoDp from '../../assets/images/logo/user.png';
import { Button, Form, Modal } from 'react-bootstrap';
import { FaSquareArrowUpRight } from 'react-icons/fa6';
import { Link } from 'react-router-dom';


const RequestCard = ({ request }) => {

    const { _id, status, topic, reqSender, userMsg, mentorMsg } = request;
    const [sender, setSender] = useState([]);

    // ================== Details Modal ====================
    const [show1, setShow1] = useState(false);
    const handleShow1 = () => setShow1(true);        
    const handleClose1 = () => setShow1(false);

    // ================== Approve Modal ====================
    const [show2, setShow2] = useState(false);
    const handleShow2 = () => setShow2(true);        
    const handleClose2 = () => setShow2(false);

    // ================== Reject Modal ====================
    const [show3, setShow3] = useState(false);
    const handleShow3 = () => setShow3(true);        
    const handleClose3 = () => setShow3(false);

    // ========= Details Modal (after approved) ============
    const [show4, setShow4] = useState(false);
    const handleShow4 = () => setShow4(true);        
    const handleClose4 = () => setShow4(false);

    
    // ============ fetching requests sender ============
    useEffect( () => {
        fetch(`http://localhost:5000/user/${reqSender}`)
            .then(res => res.json())
            .then(data => setSender(data[0]));
    }, [sender])



    // ================ handle approve/ reject with mentors note =========================

    const [Msg, setMsg] = useState('');

    const msgTextHandle = (event) => {
        const text = event.target.value;
        setMsg(text);
    }

    const handleApprove = () => {
        setShow2(false);
        let mentorMsg = Msg;
        let newStatus = 1;
        const appObj = { mentorMsg, newStatus };
        
        if (Msg !== '') {
            fetch(`http://localhost:5000/appointment/${_id}`, {
            method: 'POST',
            headers: {
                "content-type": 'application/json'
            },
            body: JSON.stringify(appObj)
            })
                .then(res => res.json())
                .then(data => { })
                .catch(err => console.error(err));
        }
        setMsg('');
    }
    
    const handleReject = () => {
        setShow3(false);
        let mentorMsg = Msg;
        let newStatus = -1;
        const appObj = { mentorMsg, newStatus };
        
        if (Msg !== '') {
            fetch(`http://localhost:5000/appointment/${_id}`, {
            method: 'POST',
            headers: {
                "content-type": 'application/json'
            },
            body: JSON.stringify(appObj)
            })
                .then(res => res.json())
                .then(data => { })
                .catch(err => console.error(err));
        }
        setMsg('');
    }



    return (
        <div className='shadow-sm border rounded-2 p-2 mt-2 d-flex justify-content-between align-items-center'>
            <div className='d-flex'>
                <Link to={`/user/${reqSender}`}>
                    <img style={{ width: "50px", height: "50px" }} src={(sender?.photoURL) ? sender.photoURL : demoDp} className=' rounded-circle' alt="" />
                </Link>
                <div className='ms-3'>
                    <Link className='text-decoration-none text-body' to={`/user/${reqSender}`}>
                        <p className='fw-bold mb-0'>{sender.displayName}</p>
                    </Link>
                    <p className='mb-0'><small>Topic: {topic}</small></p>
                </div>
            </div>
            <div>
                {
                    (status === 0) ?
                        <div className='d-flex'>
                            <button className='btn text-primary px-1' onClick={handleShow1}><small>Details</small></button>
                            <button className='btn text-success  px-1' onClick={handleShow2}><small>Approve</small></button>
                            <button className='btn text-danger  px-1' onClick={handleShow3}><small>Reject</small></button>
                        </div>
                        :
                        <>
                            {
                                (status === 1) ?
                                    <div className='d-flex'>
                                        <button className='btn text-success py-auto'><small>Approved </small></button>
                                        <button className='btn text-primary' onClick={handleShow4}><small>Details</small></button>
                                    </div>
                                    :
                                    <></>
                            }
                        </>
                }
            </div>


            
            {/* Show users message before approval/rejection  */}
            <Modal show={show1} onHide={handleClose1} >
                            
                <Modal.Header closeButton className='pt-2 pb-1'>
                    <Modal.Title><small>Message request</small> </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p className='mb-0 fw-bold'>Topic: </p>
                    <p className='border p-1 rounded-2'> {topic}</p>
                    <br />
                    <p className='mb-0 fw-bold'>User's Message: </p>
                    <p className='border p-1 rounded-2'>{userMsg}</p>
                </Modal.Body>

            </Modal>

            {/* write a message before approving  */}
            <Modal show={show2} onHide={handleClose2} >
                            
                <Modal.Header closeButton className='pt-2 pb-1'>
                    <Modal.Title><small>Mentor's Note</small> </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form.Group
                        className="mb-3 border-0"
                        controlId="exampleForm.ControlTextarea1"
                        >
                            <Form.Control className='shadow-sm' placeholder="Send a note and other details..." as="textarea" rows={5} onBlur={msgTextHandle} required/>
                    </Form.Group>
                </Modal.Body>

                <Modal.Footer>
                    <Button className='w-100' variant="dark" onClick={handleApprove}>
                        Send <FaSquareArrowUpRight/>
                    </Button>
                </Modal.Footer>

            </Modal>


            {/* write a message before rejecting  */}
            <Modal show={show3} onHide={handleClose3} >
                            
                <Modal.Header closeButton className='pt-2 pb-1'>
                    <Modal.Title><small>Mentor's Note</small> </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form.Group
                        className="mb-3 border-0"
                        controlId="exampleForm.ControlTextarea1"
                        >
                            <Form.Control className='shadow-sm' placeholder="Send a note and other details..." as="textarea" rows={5} onBlur={msgTextHandle} required/>
                    </Form.Group>
                </Modal.Body>

                <Modal.Footer>
                    <Button className='w-100' variant="dark" onClick={handleReject}>
                        Send <FaSquareArrowUpRight/>
                    </Button>
                </Modal.Footer>

            </Modal>


            {/* show all details after approval  */}
            <Modal show={show4} onHide={handleClose4} >
                            
                <Modal.Header closeButton className='pt-2 pb-1'>
                    <Modal.Title><small>Appointment details</small> </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p className='mb-0 fw-bold'>Topic: </p>
                    <p className='border p-1 rounded-2'> {topic}</p>
                    <br />
                    <p className='mb-0 fw-bold'>User's Message: </p>
                    <p className='border p-1 rounded-2'>{userMsg}</p>
                    <br />
                    <p className='mb-0 fw-bold'>Mentors's Message: </p>
                    <p className='border p-1 rounded-2'>{mentorMsg}</p>
                </Modal.Body>

            </Modal>

        </div>
    );
};

export default RequestCard;