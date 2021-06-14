import React, { useState } from 'react';

const Accordion = ({ items }) => {
  const [activeIndex, setActiveindex] = useState(null);


  const onTitleClick = (index) => {
    setActiveindex(index);
  };



  const renderedItems = items.map((item, index) => {
    return (
      <React.Fragment key={item.title}>
        <div
          className="title active"
          onClick ={() => onTitleClick(index)}
        >
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className="content active">
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    )
  })


  return (
    <div className="ui styled accordion">
      {renderedItems}
      <h1>{activeIndex}</h1>
    </div>
  )
};

export default Accordion;
