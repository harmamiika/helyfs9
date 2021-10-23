import React from 'react';

interface MyProps {
  courseName: string;
}

const Header = ({ courseName }: MyProps) => {
  return (
    <div>
      <h2>{courseName}</h2>
    </div>
  );
};

export default Header;
