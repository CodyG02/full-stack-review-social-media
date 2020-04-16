import React from 'react'

//TODO Fill out post content

const Post = (props) => {
  return (
    <li className="post-container">
      <div>
        <p className="post-text">{props.data.content}</p>
      </div>
      <div className="post-buttons">
        <button
          className="input-container-button-small"
          onClick={() => {
            //something goes here
          }}
        >
          Edit
        </button>
        <button
          className="input-container-button-small"
          onClick={() => {
            //something goes here
          }}
        >
          Delete
        </button>
      </div>
    </li>
  )
}

export default Post
