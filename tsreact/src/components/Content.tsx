interface part {
  name: string;
  exerciseCount: number;
}

export interface courseParts {
  courseParts: part[];
}

const Content = ({ courseParts }: courseParts) => {
  return (
    <div>
      <p>
        {courseParts[0].name} {courseParts[0].exerciseCount}
      </p>
      <p>
        {courseParts[1].name} {courseParts[1].exerciseCount}
      </p>
      <p>
        {courseParts[2].name} {courseParts[2].exerciseCount}
      </p>
    </div>
  );
};

export default Content;
