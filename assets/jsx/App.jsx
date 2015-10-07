class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    //move this into storage
    $.getJSON('https://zube.io/api/boards', (res) => {
      this.setState({boards: res});
    });
  }

  render() {
    var boards = this.state.boards;
    if (boards === undefined) {
      return <p>Loading...</p>;
    }

    return (
      <div>
        {R.map((board) => { return <Board data={board}/> }, boards)}
      </div>
    );
  }
}

React.render(<App/>, document.getElementById('main'));
