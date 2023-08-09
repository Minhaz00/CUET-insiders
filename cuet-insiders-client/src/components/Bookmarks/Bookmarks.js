import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import SavedCard from './SavedCard';

const Bookmarks = () => {

    const { user } = useContext(AuthContext);
    const [savedPosts, setSavedPosts] = useState([]);
    const [usr, setUsr] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/user/${user?.uid}`)
            .then(res => res.json())
            .then(data => {
                setUsr(data[0]);
                setSavedPosts(data[0].bookmarks);
            });
    }, [usr]);
    const { bookmarks } = usr;


    return (
        <div className='w-75 mx-auto p-3 pb-5 mt-4 border rounded-4'>
            <h5>My saved items ({bookmarks?.length})</h5>
            <hr className='mt-0' />

            <div className=''>
                {
                    savedPosts.length === 0 ?
                        <>
                            <p className='text-muted fst-italic'>
                                You have no saved post yet.
                            </p>
                        </>
                        :
                        <>
                            {
                                savedPosts.map(post => <SavedCard
                                    key={post}
                                    post={post}
                                ></SavedCard>)
                            }
                        </>
                }
            </div>
        </div>
    );
};

export default Bookmarks;