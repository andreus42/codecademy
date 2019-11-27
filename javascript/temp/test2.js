class Button extends React.Component {
  scream() {
    alert('AAAAAAAAHHH!!!!!');
  }

  render() {
    return (
      <button onClick={this.scream}>
        AAAAAH!
      </button>);
  }
}