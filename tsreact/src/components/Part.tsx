import React from 'react';

import { CoursePart } from './App';

interface partProps {
  part: CoursePart;
}

const Part = ({ part }: partProps) => {
  switch (part.type) {
    case 'normal':
      return (
        <>
          <h3>
            {part.name} {part.exerciseCount}
          </h3>
          <p>{part.description}</p>
        </>
      );
    case 'groupProject':
      return (
        <>
          <h3>
            {part.name} {part.exerciseCount}
          </h3>
          <p>Group exercises: {part.groupProjectCount}</p>
        </>
      );
    case 'submission':
      return (
        <>
          <h3>
            {part.name} {part.exerciseCount}
          </h3>
          <p>{part.description}</p>
          <p>
            Submit to{' '}
            <a href={part.exerciseSubmissionLink}>
              {part.exerciseSubmissionLink}
            </a>
          </p>
        </>
      );
    case 'special':
      return (
        <>
          <h3>
            {part.name} {part.exerciseCount}
          </h3>
          <p>{part.description}</p>
          <p>
            required skills:{' '}
            {part.requirements.map((requirement) => {
              return (
                <span key={requirement}>
                  {requirement}
                  {requirement ===
                  part.requirements[part.requirements.length - 1]
                    ? ''
                    : ', '}
                </span>
              );
            })}{' '}
          </p>
        </>
      );
    default:
      return null;
  }
};

export default Part;
