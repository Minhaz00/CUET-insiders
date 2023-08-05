import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import './Profile.css';
import { FaArrowRight, FaCloudArrowUp, FaTag, FaUserCheck, FaUserPlus, FaUsers } from "react-icons/fa6";
import { GiVideoConference } from "react-icons/gi";
import { FaArrowCircleRight, FaEdit } from "react-icons/fa";
import { Button, Col, Form, Modal, Row } from 'react-bootstrap';
import About from './About';
import { AuthContext } from '../../context/AuthProvider';
import AllPosts from '../Feed/AllPosts';
import demoCover from '../../assets/images/logo/demo-cover.jpg';
import demoDp from '../../assets/images/logo/user.png';

const Profile = () => {

    const {userProfile, userPosts} = useLoaderData();
    const { user, currUser } = useContext(AuthContext);
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const handleShow1 = () => setShow1(true);             // open update modal
    const handleClose1 = () => setShow1(false);           // close update modal
    const handleShow2 = () => setShow2(true);             // open appointment modal
    const handleClose2 = () => setShow2(false);           // close appointment modal

    const {
        userId,
        photoURL,
        coverURL,
        displayName,
        bio,
        email,
        isMentor,
        isAvailable,
        deptName,
        position,
        institution,
        batch,
        currentLoc,
        facebook,
        linkedin,
        mailSocial,
        interests,
        followers,
        following
    } = userProfile[0];
     

    // ============ sorting posts using date =================
    userPosts.sort(function(a, b) {
        let keyA = new Date(a.pubDate);
        let keyB = new Date(b.pubDate);
        if (keyA > keyB) return -1;
        if (keyA < keyB) return 1;
        return 0;
    });



    // ============= handling follow / unfollow ===================
    const isFollowing = () => {
        // searching if this profile is followed by the user or not
        // const usr = followers.find(u => u === user?.uid);
        for (let i = 0; i < followers.length; i++){
            if (followers[i] === user.uid) {
                return true;
            }
        }
        return false;
    }

    const [toggleFollow, setToggleFollow] = useState(isFollowing());

    // handling follow 
    const handleFollow = () => {
        setToggleFollow(toggleFollow ^ 1);
        let profileOwner = userId;              // profile owner
        let loggedInUser = user.uid;           // currently logged in user
        const followObj = { profileOwner, loggedInUser };
        

        fetch(`http://localhost:5000/follow`, {
            method: 'POST',
            headers: {
                "content-type": 'application/json'
            },
            body: JSON.stringify(followObj)
        })
            .then(res => res.json())
            .then(data => {})
            .catch(err => console.error(err));

    }


    // =============all profile-update states ================== 
    const [name, setName] = useState(displayName);
    const [dp, setDp] = useState(photoURL);
    const [cover, setCover] = useState(coverURL);
    const [userbio, setUserBio] = useState(bio);
    const [mentor, setmentor] = useState(isMentor);
    const [available, setAvailable] = useState(isAvailable);
    const [dept, setDept] = useState(deptName);
    const [pos, setPos] = useState(position);
    const [org, setOrg] = useState(institution);
    const [batchYear, setBatchYear] = useState(batch);
    const [loc, setLoc] = useState(currentLoc);
    const [userInterest, setUserInterest] = useState(interests);
    const [fbLink, setfbLink] = useState(facebook);
    const [liLink, setLiLink] = useState(linkedin);
    const [mailLink, setMailLink] = useState(mailSocial);


    // =============all profile-update function ================== 
    const handleDisplayName = event => {
        const fieldValue = event.target.value;
        setName(fieldValue);
    }
    const handleBio = event => {
        const fieldValue = event.target.value;
        setUserBio(fieldValue);
    }
    const handleMentor = event => {
        setmentor(event.target.checked);
    }
    const handleAvailable = event => {
        setAvailable(event.target.checked);
    }
    const handleDeptName = event => {
        const fieldValue = event.target.value;
        setDept(fieldValue);
    }
    const handleBatch = event => {
        const fieldValue = event.target.value;
        setBatchYear(fieldValue);
    }
    const handlePosition = event => {
        const fieldValue = event.target.value;
        setPos(fieldValue);
    }
    const handleInstitution = event => {
        const fieldValue = event.target.value;
        setOrg(fieldValue);
    }
    const handleCurrentCity = event => {
        const fieldValue = event.target.value;
        setLoc(fieldValue);
    }
    const handleInterests = event => {
        const fieldValue = event.target.value;
        setUserInterest(fieldValue);
    }
    const handleFacebookLink = event => {
        const fieldValue = event.target.value;
        setfbLink(fieldValue);
    }
    const handleLinkedinLink = event => {
        const fieldValue = event.target.value;
        setLiLink(fieldValue);
    }
    const handleMailLink = event => {
        const fieldValue = event.target.value;
        setMailLink(fieldValue);
    }
    const DpConvertBase64 = event => {                  // dpImg => Binary
        var fileReader = new FileReader();
        fileReader.readAsDataURL(event.target.files[0]);
        fileReader.onload = () => {
            setDp(fileReader.result);
        };
        fileReader.onerror = (error) => {
          console.log(error);
        };
    }
    const CoverConvertBase64 = event => {                  // coverImg => Binary
        var fileReader = new FileReader();
        fileReader.readAsDataURL(event.target.files[0]);
        fileReader.onload = () => {
            setCover(fileReader.result);
        };
        fileReader.onerror = (error) => {
          console.log(error);
        };
    }


    // ================== updating user info =====================
    const handleUpdateProfileInfo = () => {
        handleClose1();
        const photoURL = dp;
        const coverURL = cover;
        const displayName = name;
        const bio = userbio;
        const isMentor = mentor;
        const isAvailable = available;
        const deptName = dept;
        const position = pos;
        const institution = org;
        const batch = batchYear;
        const currentLoc = loc;
        const facebook = fbLink;
        const linkedin = liLink;
        const mailSocial = mailLink;
        const interests = userInterest;
        const updatedUser = {
            photoURL,
            coverURL,
            displayName,
            bio,
            isMentor,
            isAvailable,
            deptName,
            position,
            institution,
            batch,
            currentLoc,
            facebook,
            linkedin,
            mailSocial,
            interests,
        }

        fetch(`http://localhost:5000/user/update/${userId}`, {
            method: 'POST',
            headers: {
                "content-type": 'application/json'
            },
            body: JSON.stringify(updatedUser)
        })
            .then(res => res.json())
            .then(data => {})
            .catch(err => console.error(err));
            
            

        
    }


    // ================== sending appointment request ============
    const [Topic, setTopic] = useState('');
    const [UserMsg, setUserMsg] = useState('');

    const handleTopicName = event => {
        const text = event.target.value;
        setTopic(text);
    }
    const handleuserMsg = event => {
        const text = event.target.value;
        setUserMsg(text);
    }

    const handleAppointmentReq = () => {
        setShow2(false);
        const topic = Topic;
        const userMsg = UserMsg;
        const mentor = userId;
        const reqSender = user?.uid; 
        const status = 0;
        const appointmentObj = { topic, userMsg, mentor, reqSender, status };
        if (topic !== '' || userMsg !== '') {
            fetch('http://localhost:5000/appointment', {
            method: 'POST',
            headers: {
                "content-type": 'application/json'
            },
            body: JSON.stringify(appointmentObj)
            })
                .then(res => res.json())
                .then(data => { })
                .catch(err => console.error(err));
        }
        setTopic('');
        setUserMsg('');
    }


    let coverPhoto = coverURL ? coverURL : demoCover;
    let profilePhoto = photoURL ? photoURL : demoDp;

    return (
        <div className='p-2 event-details shadow rounded-3 mt-3 w-75'>
            {/* cover-picture  */}
            <div className="profile-cover">
                <img src={coverPhoto} alt="" />
            </div>

            {/* Profile-picture  */}
            <div className="profile-user text-center">
                <div className="profile-picture">
                    <img src={profilePhoto} className="rounded-circle shadow" width="150" alt="" />
                </div>
            </div>

            {/* profile_Header_Info + update/follow  + Appointment*/}
            <div className='d-flex justify-content-between'>
                
                {/* Profile-header info */}
                <div className='mt-5 pt-3 ps-4'>
                    
                    <div className='mb-0'>
                        <h4 className='d-inline me-3'>{displayName}</h4>
                    </div>

                    <div className="text-muted">
                        
                        <p className='m-0'><small>{bio}</small></p>

                        {
                            (isMentor) ? 
                                <p className='mb-0'> 
                                    <FaTag />
                                    <small className='ms-2'>Mentor</small>
                                </p>: <></>
                        }


                        <p>
                            <FaUsers/>
                            <small className='ms-2'>{followers?.length} Followers</small>
                            <small className='ms-2'>{following?.length} Following</small>
                        </p>
                    </div>
                </div>

                {/* follow unfollow + update + appointment */}
                <div className='mt-5'>
                    
                    {/* show 'update' in own profile and 'follow'/'unfollow' in others  */}
                    {
                        (user?.uid === userId) ?
                            <button onClick={handleShow1} className="btn btn-dark me-1 px-2 pt-1">
                                <FaEdit /><small className='ps-2'>Update</small>
                            </button> 
                            :
                            <>
                                {
                                    (!toggleFollow) ? 
                                        <button className="btn btn-dark me-1 px-4 pt-1 " onClick={handleFollow}>
                                            <FaUserPlus /><small className='ps-2'>Follow</small>
                                        </button>
                                        :
                                        <button className="btn btn-outline-dark me-1 px-4 pt-1" onClick={handleFollow}>
                                            <FaUserCheck /><small className='ps-2'>Following</small>
                                        </button>
                                }
                            </>
                    }


                    {/* show appointment in other mentors profile  */}
                    {
                        (user?.uid !== userId && isMentor) ?
                            <button onClick={handleShow2} className="btn btn-dark me-1 px-3 pt-1">
                                <GiVideoConference /><small className='ps-2'>Appointment</small>
                            </button>
                            :
                            <></>
                    }
                    

                    {/* Update profile MODAL  */}
                    <Modal show={show1} onHide={handleClose1} size="lg">
                            
                        <Modal.Header closeButton className='pt-2 pb-1'>
                            <Modal.Title><small>Update profile</small> </Modal.Title>
                        </Modal.Header>

                        <Modal.Body className='ps-5 ms-5'>
                            <Form>
                                {/* name */}
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label className="w-25"> <p className='d-inline'> Display name: </p> </Form.Label>   
                                    <Form.Control className='fileInput  w-50 ms-2 shadow-sm d-inline' defaultValue={displayName} type="text"  onChange={handleDisplayName}/>
                                </Form.Group>
                                {/* photoURL */}
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                                    <Form.Label className="w-25"> <p className='d-inline'>Profile photo: </p> </Form.Label>   
                                    <Form.Control className='fileInput  w-50 ms-2 shadow-sm d-inline'  type="file"  onChange={DpConvertBase64}/>
                                </Form.Group>
                                {/* coverURL */}
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                                    <Form.Label className="w-25"> <p className='d-inline'>Cover photo: </p> </Form.Label>   
                                    <Form.Control className='fileInput  w-50 ms-2 shadow-sm d-inline' type="file"  onChange={CoverConvertBase64}/>
                                </Form.Group>
                                {/* bio */}
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
                                    <Form.Label className="w-25"> <p className='d-inline'>Bio: </p> </Form.Label>   
                                    <Form.Control className='fileInput  w-50 ms-2 shadow-sm d-inline' defaultValue={bio} type="text"  onChange={handleBio}/>
                                </Form.Group>
                                
                                <div className="d-flex justify-content-md-start">
                                    {/* isMentor */}
                                    <Form.Group className="mb-3 me-5" controlId="exampleForm.ControlInput5">
                                        <Form.Label className=""> <p className='d-inline'>Mentor? </p> </Form.Label>   
                                        <Form.Check className='fileInput  w-50 ms-2 shadow-sm d-inline' defaultValue={isMentor} type='checkbox'  onClick={handleMentor}/>
                                    </Form.Group>
                                    {/* isAvailable */}
                                    <Form.Group className="mb-3 ms-5" controlId="exampleForm.ControlInput6">
                                        <Form.Label className=""> <p className='d-inline'>Available? </p> </Form.Label>   
                                        <Form.Check className='fileInput  w-50 ms-2 shadow-sm d-inline' defaultValue={isAvailable} type="checkbox"  onClick={handleAvailable}/>
                                    </Form.Group>
                                </div>
                                {/* deptName */}
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput7">
                                    <Form.Label className="w-25"> <p className='d-inline'>Department: </p> </Form.Label>   
                                    <Form.Control className='fileInput  w-50 ms-2 shadow-sm d-inline' defaultValue={deptName} type="text"  onChange={handleDeptName}/>
                                </Form.Group>
                                {/* batch  */}
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput8">
                                    <Form.Label className="w-25"> <p className='d-inline'>Batch: </p> </Form.Label>   
                                    <Form.Control className='fileInput  w-50 ms-2 shadow-sm d-inline' defaultValue={batch} type="text"  onChange={handleBatch}/>
                                </Form.Group>
                                {/* position */}
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput9">
                                    <Form.Label className="w-25"> <p className='d-inline'>Working as: </p> </Form.Label>   
                                    <Form.Control className='fileInput  w-50 ms-2 shadow-sm d-inline' defaultValue={position} type="text"  onChange={handlePosition}/>
                                </Form.Group>
                                {/* institution */}
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput10">
                                    <Form.Label className="w-25"> <p className='d-inline'>Working at: </p> </Form.Label>   
                                    <Form.Control className='fileInput  w-50 ms-2 shadow-sm d-inline' defaultValue={institution} type="text"  onChange={handleInstitution}/>
                                </Form.Group>
                                
                                {/* currentLoc */}
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput11">
                                    <Form.Label className="w-25"> <p className='d-inline'>Current city: </p> </Form.Label>   
                                    <Form.Control className='fileInput  w-50 ms-2 shadow-sm d-inline' defaultValue={currentLoc} type="text"  onChange={handleCurrentCity}/>
                                </Form.Group>
                                {/* Interests  */}
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput12">
                                    <Form.Label className="w-25"> <p className='d-inline'>Interests: </p> </Form.Label>   
                                    <Form.Control className='fileInput  w-50 ms-2 shadow-sm d-inline' defaultValue={interests} type="text"  onChange={handleInterests}/>
                                </Form.Group>
                                {/* facebook */}
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput13">
                                    <Form.Label className="w-25"> <p className='d-inline'>Facebook URL: </p> </Form.Label>   
                                    <Form.Control className='fileInput  w-50 ms-2 shadow-sm d-inline' defaultValue={facebook} type="text"  onChange={handleFacebookLink}/>
                                </Form.Group>
                                {/* linked in */}
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput14">
                                    <Form.Label className="w-25"> <p className='d-inline'>LinkedIn URL: </p> </Form.Label>   
                                    <Form.Control className='fileInput  w-50 ms-2 shadow-sm d-inline' defaultValue={linkedin} type="text"  onChange={handleLinkedinLink}/>
                                </Form.Group>
                                {/* mailLink */}
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput15">
                                    <Form.Label className="w-25"> <p className='d-inline'>Contact mail: </p> </Form.Label>   
                                    <Form.Control className='fileInput  w-50 ms-2 shadow-sm d-inline' defaultValue={mailSocial} type="text"  onChange={handleMailLink}/>
                                </Form.Group>
                            
                            </Form>
                        </Modal.Body>

                        <Modal.Footer >
                            <Button className='px-4' variant="dark" onClick={handleUpdateProfileInfo}>
                                Update <FaCloudArrowUp/>
                            </Button>
                        </Modal.Footer>

                    </Modal>   

                    
                    {/* appointment modal */}
                    <Modal show={show2} onHide={handleClose2}>
                            
                        <Modal.Header closeButton className='pt-2 pb-1'>
                            <Modal.Title><small>Request for appointment</small> </Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                            <Form>
                                {/* topic name */}
                                <Form.Group className="mb-3 border-0  shadow-sm" controlId="exampleForm.ControlTextarea1">
                                        <Form.Control className='shadow-sm' placeholder="What's the topic?" as="textarea" rows={2} onBlur={handleTopicName} required/>
                                </Form.Group>
                                {/* Users Message */}
                                <Form.Group className="mb-3 border-0  shadow-sm" controlId="exampleForm.ControlTextarea1">
                                        <Form.Control className='shadow-sm' placeholder="Write your message" as="textarea" rows={4} onBlur={handleuserMsg} required/>
                                </Form.Group>
                            </Form>
                        </Modal.Body>

                        <Modal.Footer >
                            <Button className='px-3' variant="dark" onClick={handleAppointmentReq}>
                                Send <FaArrowRight/>
                            </Button>
                        </Modal.Footer>

                    </Modal>  
                </div>


            </div>

            <hr className='mt-0'></hr>
            {/* Post, abouts */}
            <div>
                <Row>
                    <Col lg='5'>
                        <About
                            key={userId}
                            userProfile={userProfile[0]}
                        ></About>
                    </Col>                        
                    <Col lg='7'>
                        <AllPosts
                            key={userId}
                            ProfileUserId={userId}
                            posts={userPosts}
                        ></AllPosts>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default Profile;