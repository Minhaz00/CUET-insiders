import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import SuggestedUser from './SuggestedUser';

const Rightnav = () => {

    const { user } = useContext(AuthContext);
    const [people, setPeople] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/people/${user?.uid}`)
            .then(res => res.json())
            .then(data => {
                setPeople(data);
            });
    }, [people]);

    

    return (
        <div className=''>
            <h6>Suggested for you</h6>
            
            <div>
                {
                    people?.map(p => <SuggestedUser
                        key={p}
                        person={p}
                    ></SuggestedUser>)
                }
            </div>
        </div>
    );
};

export default Rightnav;