import React from 'react';
import Course from './Course';

function Courses({ list }) {
  return (
    <ul className="d-flex mt-2" style={{ flexWrap: 'wrap', gap: 30 }}>
      {
        list.map((item) => (
          <Course key={item.id} course={item} />
        ))
      }
    </ul>
  );
}

export default Courses;
