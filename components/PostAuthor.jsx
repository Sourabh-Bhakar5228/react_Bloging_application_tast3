import React from 'react'
import { Link } from 'react-router-dom'
import avtar3 from "../images/avatar3.jpg"

const PostAuthor = () => {
    return (
        <>
            <Link to={`/posts/users/sdfsdf`} className='post__author'>
                <div className="post__author_avtar">
                    <img src={avtar3} alt="" />
                </div>
                <div className="post__author__details">
                    <h5>By: SOURABH BHAKAR</h5>
                    <small>Just now </small>
                </div>
            </Link>
        </>
    )
}

export default PostAuthor
