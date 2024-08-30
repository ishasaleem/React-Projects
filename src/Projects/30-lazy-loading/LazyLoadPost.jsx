import React from 'react';
import Title from "./../../Components/Title";
import{LazyLoadImage}from "react-lazy-load-image-component"
import "react-lazy-load-image-component/src/effects/blur.css"
function LazyLoadPost({ title, img }) {
  return (
    <div className='custom-post-container'>
      <div className='custom-post-header'>
        <Title classes="custom-post-title" text={title || "Post title"} />
      </div>
      {img && (
        <div className='custom-post-body'>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis voluptates molestiae itaque maiores sint molestias error commodi ea modi
                , illo fugiat, reiciendis aliquam pariatur assumenda sequi magnam! Sunt, perferendis delectus.</p>
          <LazyLoadImage src={img} height={fit-content} width={500}effect={blur}alt={title} className='custom-post-image' />
        </div>
      )}
    </div>
  );
}

export default LazyLoadPost;
