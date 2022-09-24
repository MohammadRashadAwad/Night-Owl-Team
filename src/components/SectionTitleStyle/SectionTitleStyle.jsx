import React from 'react';
import './SectionTitleStyle.css';

const SectionTitleStyle = ({nameSection,color}) => {
  return (
    <div className='section-header'>
      <h2 className='title' style={{color:color}}>{nameSection}</h2>
      <span className='line' style={{background:color}}></span>
      </div>
  )
}

export default SectionTitleStyle