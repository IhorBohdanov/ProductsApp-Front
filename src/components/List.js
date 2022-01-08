export const List = ({ dataArray }) => {
  return (
    <ul className="list">
      {!dataArray?.length ? (
        <li>No data</li>
      ) : (
        dataArray.map((item, index) => <li className="list__item" key={index}>{item}</li>)
      )}
    </ul>
  );
};
