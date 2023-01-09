import React from "react";

interface ClassComponentState {
  color: string,
  planet?: string,
}

class ClassComponent extends React.Component<ClassComponentState, ClassComponentState> {
  constructor(props: ClassComponentState) {
    super(props);
    this.state = { color: "blue", planet: "Earth"  };
  }
  changeColor = () => {
    this.setState({ color: this.state.color !== this.props.color ? this.props.color : "blue" });
  };
  async componentDidMount() {
    const response = await fetch(`https://swapi.dev/api/planets/3/?format=json`);
    const json = await response.json();
    this.setState({ planet: json.name });
  }
  componentDidUpdate() {
    console.log(this.state);
  }
  render() {
    return (
      <div style={{width: '100%', display: "flex", justifyContent: 'center', padding: 24}}>
        <button
          type="button"
          onClick={this.changeColor}
          style={{ margin: 24}}
        >
          Change color
        </button>
        <h2 style={{ margin: 24}}>I am a {this.state.color} Car!</h2>
        <h2 style={{ margin: 24}}>I am on planet {this.state.planet}</h2>
      </div>
    );
  }
}

export default ClassComponent;