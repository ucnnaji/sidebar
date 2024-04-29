/*import React from 'react';*/
import React, { useState } from 'react';

import CourseContent from '../CourseContent.js';

function Category() {
  const [activeComponent, setActiveComponent] = useState(null);

  const renderComponent = (component) => {
    setActiveComponent(component);
  };

  return (
  
     <nav className='second-link'>   
        <div>
          <a href="/home">Courses</a>
          <a href="#" onClick={() => renderComponent('CourseContent')} >Published Articles</a>
          <a href="/contact">Upcoming Events</a>

          {activeComponent === 'CourseContent' && <CourseContent />}
        </div>
   </nav>
  );
}

export default Category;
