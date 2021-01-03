const App = () => {
    return (
      <div>
        <FirstComponent />
        <NamedComponent name="Berkley"/>
      </div>
    );
  }

  ReactDOM.render(<App />,
    document.getElementById("root"));