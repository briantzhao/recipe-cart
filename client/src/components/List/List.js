export default function List({ title, ordered, list }) {
  return (
    <>
      <h1 className="List__title">{title}</h1>
      {ordered ? (
        <ol className="List__body--ordered">
          {list.map((element, index) => (
            <li className="List__body__item" key={index}>
              {element}
            </li>
          ))}
        </ol>
      ) : (
        <ul className="List__body">
          {list.map((element, index) => (
            <li className="List__body__item" key={index}>
              {element}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
