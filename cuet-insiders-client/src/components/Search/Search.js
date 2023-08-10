import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import { Button } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
import UserCard from './UserCard';

const Search = () => {

    const { user } = useContext(AuthContext);
    const [allUsers, setAllUsers] = useState([]);
    useEffect( () => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => setAllUsers(data));
    }, [allUsers])

    const [query, setQuery] = useState("");
    const [query2, setQuery2] = useState("name");
    let filteredUser = [];
    filteredUser = allUsers?.filter((item) => {
        if (query2 === "name") {
            return item.displayName.toLowerCase().includes(query.toLowerCase());
        }    
        else if (query2 === "department"){
            return item.deptName.toLowerCase().includes(query.toLowerCase());
        }
        else {
            return item.interests.toLowerCase().includes(query.toLowerCase());
        }
    });

    const handleChange = (e) => {
        e.preventDefault();
        setQuery("");
        const val = e.target.value;
        setQuery2(val);
    };

    return (
        <div className='w-75 mx-auto my-4 p-3 pb-5 border rounded-4'>
            <h5>Search user</h5>
            <hr className='mt-0' />
            
            <div>
                <div>
                    <form className="d-flex mt-4 mb-4 controls">
                        <select className="text-center me-2 rounded-1" onChange={handleChange}>
                            <option value="name">Name</option>
                            <option value="department">Department</option>
                            <option value="interests">Interests</option>
                        </select>

                        <input
                        className="me-2"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        type="search"
                        />
                        <Button variant="outline-dark"><FaSearch/></Button>
                    </form>
                </div>
            </div>

            {
                filteredUser?.map(usr => <UserCard
                    key={usr.userId}
                    searchedUser={usr}
                ></UserCard>)
            }
            

        </div>
    );
};

export default Search;