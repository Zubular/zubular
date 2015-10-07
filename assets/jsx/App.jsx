class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { greetings: "Zubular!" };
  }

  render() {
    return <h1>{this.state.greetings}</h1>;
  }
}

React.render(<App/>, document.getElementById('main'));
