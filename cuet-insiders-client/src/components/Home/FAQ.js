import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { doubleUnderline } from './SVGs';

const FAQ = () => {
    return (
        <div>
            <h2 className='mb-0'>Frequently asked questions</h2>
            {doubleUnderline}
            <Accordion className='mt-3 '>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Is there a cost to join the mentor finder website?</Accordion.Header>
                    <Accordion.Body>
                    Registration and basic access to the website are usually free. However, some events or premium features may have associated costs. Always check the website's pricing or membership details for specific information.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Can I attend events hosted by mentors or other users?</Accordion.Header>
                    <Accordion.Body>
                    Yes, the platform may organize events, workshops, webinars, or seminars hosted by mentors and other users. You can join these events to learn from experienced individuals and network with like-minded individuals.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>How do I connect with a mentor?</Accordion.Header>
                    <Accordion.Body>
                    Once you find a potential mentor, you can send them a connection request through the platform. If they accept your request, you can begin communicating and setting up mentoring sessions.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>Can I post my own content on the platform?</Accordion.Header>
                    <Accordion.Body>
                    Yes, many mentor finder websites allow users to create and share their own content, such as articles, updates, or success stories. This can help you engage with the community and showcase your knowledge and experiences.
                    </Accordion.Body>
                </Accordion.Item>
                {/* <Accordion.Item eventKey="4">
                    <Accordion.Header>How do I search for a mentor on the platform?</Accordion.Header>
                    <Accordion.Body>
                    To find a mentor, simply use the search feature on the website. You can enter keywords related to your interests or specific skills you want to develop. The platform will then present a list of potential mentors matching your criteria.
                    </Accordion.Body>
                </Accordion.Item> */}
            </Accordion>

        </div>
    );
};

export default FAQ;