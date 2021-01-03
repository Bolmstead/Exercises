function Tweet(props) {
  return (
    <div>
      <span>{props.name}</span>
      <span>@{props.username}</span>
      <span>{props.date}</span>
      <p>{props.message}</p>
    </div>
  );
}