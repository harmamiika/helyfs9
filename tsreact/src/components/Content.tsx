import React from 'react';

import Part from './Part';

import { CoursePart } from './App';

interface contentProps {
  courseParts: CoursePart[];
}

const Content = ({ courseParts }: contentProps): JSX.Element => {
  const renderCourseparts = () => {
    return courseParts.map((part) => {
      return <Part key={part.name} part={part} />;
    });
  };
  return <div>{renderCourseparts()}</div>;
};

export default Content;
