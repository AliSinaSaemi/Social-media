import React from 'react';

const Posts = ({posts}) => {

    const postsList = posts.length ? (
        posts.map(post =>{
            return (
                <div className="post-item" key={post.id}>
                    <p>{post.msg}</p>
                </div>
            )
        })  
    ) : (
        <p>There is no posts here for now !</p>
    )
    return (
          <div>{postsList}</div>

    )
}

export default Posts;