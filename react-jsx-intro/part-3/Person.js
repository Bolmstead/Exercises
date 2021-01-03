function Person(props) {
  let voteText
  if (props.age > 18) {
    voteText = "Please go vote!"
  } else {
    voteText = "you must be 18"
  }
  
  let hobbies = props.hobbies.map(hobby => <li>{hobby}</li>);

  return (
    <div>
      <span>Learn some information about {props.name}</span>
      <ul>
        <li>Name: {props.name.slice(0, 6)}</li>
        <li>{voteText}</li>
        <ul>
          Hobbies
          {hobbies}
        </ul>
      </ul>
    </div>
  );
}