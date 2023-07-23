import React, { useState } from 'react';
import { Image } from 'react-bootstrap';
import { FaArrowRight } from 'react-icons/fa6';
import { useLoaderData } from 'react-router-dom';

const EventDetails = () => {
    const event = useLoaderData();
    const [reg, setReg] = useState(false);

    const RegistrationHandle = () => {
        if (!reg) {
            window.alert("Registration Completed");
            setReg(true);
        }
        else {
            window.alert("Registration Canceled");
            setReg(false);
        }
    };

    return (
        <div className='p-5 event-details  shadow rounded-3 mt-3 w-75'>
            
            <Image src={event.banner} fluid rounded />
            
            <h3 className='text-left mt-5 mb-3'>{event.name}</h3>
            
            <h6 className='mt-5 '>Event Description: </h6>
            <small>TechX 2023
                is an exciting technology-focused event organized by the
                university's Computer Science Department. It aims to bring
                together students, professionals, and technology enthusiasts to
                explore the latest advancements and trends in the tech industry.
                The event will feature keynote sessions, interactive workshops,
                panel discussions, and networking opportunities, making it a
                must-attend gathering for all tech enthusiasts.
            </small>

            
            <h6 className='mt-5'>Event Highlights: </h6>
            <small>
                1. Innovative Keynote Sessions: Renowned experts from leading
                tech companies will deliver inspiring keynote sessions, sharing
                their experiences and insights into the ever-evolving tech
                landscape.
                <br />
                2. Hands-On Workshops: Engage in practical workshops that cover
                a wide range of topics such as artificial intelligence,
                blockchain, web development, cybersecurity, and more.
                Participants will have the opportunity to learn from experienced
                instructors and work on real-world projects.
                <br />
                3. Panel Discussions: Join thought-provoking panel discussions
                on emerging technologies, industry trends, and the future of
                tech. Gain valuable insights from experts and thought
                leaders in the field.   
            </small>
            
            <h6 className='mt-5'>Featured Speakers: </h6>
            <small>
                1. Dr. Samantha Carter - Chief Technology Officer, Tech Solutions
                Inc. Topic: "Demystifying AI: From Theory to Real-World
                Applications" <br />
                2. Mr. Michael Ramirez - Co-founder, BlockchainX
                Topic: "Unlocking the Potential of Blockchain:
                Revolutionizing Industries"
            </small>
            
            <h6 className='mt-5'>Event Host: </h6>
            <small>CUET computer club</small>
            
            <h6 className='mt-5'>Event platform: </h6>
            <small>Zoom <br /> [link will be provided soon]
            </small>


            <h6 className='mt-5'>Event date & time: </h6>
            <small>Date: {event.date} <br />
                Time: 9:00 AM to 6:00 PM<br />
            </small>

            {!reg ? 
                <><button onClick={RegistrationHandle} className='mt-5 btn btn-outline-dark'>Register <FaArrowRight></FaArrowRight> </button></>
                : 
                <><button onClick={RegistrationHandle} className='mt-5 btn btn-outline-danger'>Cancel Registration</button></>
            }
            
        </div>
    );
};

export default EventDetails;