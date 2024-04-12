import React from "react";
import Image from 'next/image'
import culture from '@/public/culture.png'

const SinglePost = () => {
  return (
    <div id="post">
      <div>
        <Image src={culture} />
      </div>
      <div>
        <p></p>
      </div>
    </div>
  );
};

export default SinglePost;
