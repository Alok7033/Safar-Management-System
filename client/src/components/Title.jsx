import React from 'react';
import '../style/Title.css'; // Adjust path based on your folder structure

const Title = ({ title, subTitle, align }) => {
  const alignmentClass = align === 'left' ? 'left-align' : 'center-align';

  return (
    <div className={`title-container ${alignmentClass}`}>
      <h1 className="title-heading">{title}</h1>
      <p className="title-subtitle">{subTitle}</p>
    </div>
  );
};

export default Title;

