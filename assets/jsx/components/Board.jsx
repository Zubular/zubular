class Board extends React.Component {
  render() {
    return (
      <div key={this.props.data.id}>
        <h3>
          <a href={`https://zube.io/boards/${this.props.data.id}`} target="_new">
            {this.props.data.name}
          </a>
        </h3>
        <p>{this.props.data.description}</p>
      </div>
    );
  }
}
