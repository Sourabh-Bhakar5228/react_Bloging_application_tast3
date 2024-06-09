import React from 'react'
import { Link } from 'react-router-dom'
import PostAuthor from "../components/PostAuthor"

const PostItem = ({ postID, category, title, desc, authorID, thumbnail }) => {
    const shortDesc = desc.length > 145 ? desc.substr(0, 145) + "....." : desc;
    const posttitle = title.length > 27 ? title.substr(0, 27) + "....." : title;
    return (
        <>
            <article className='post'>
                <div className='post_thumbnail'>
                    <img src={thumbnail} alt={title} />
                </div>
                <div className="post__content">
                    <Link to={`/posts/${postID}`}>
                        <h3>{posttitle}</h3>
                    </Link>
                    <p>{shortDesc}</p>
                    <div className="post__footer">
                        <PostAuthor />
                        <Link to={`/posts/categories/${category}`} className='btn category'>{category}</Link>
                    </div>
                </div>
            </article>
        </>
    )
}

export default PostItem
