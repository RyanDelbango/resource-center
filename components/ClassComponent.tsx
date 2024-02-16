import React from "react";
import axios from "axios";

interface ClassComponentState {
  location?: string,
  color: string,
  planet?: string,
  nums?: Array<number>,
}

class ClassComponent extends React.Component<ClassComponentState, ClassComponentState> {
  constructor(props: ClassComponentState) {
    super(props);
    this.state = { location: "Loading", color: "blue", planet: "Earth", nums: [3,1,2,5,6]  };
  }
  changeColor = () => {
    this.setState({ color: this.state.color !== this.props.color ? this.props.color : "blue" });
  };
  sortList = () => {
    this.setState({ nums: this.state.nums?.sort() });
  };
  async componentDidMount() {
    try {
      const params = {
        format: 'json'
      };
      const response = await axios.get(`https://swapi.dev/api/planets/3/`, {params});
      const { name } = await response.data;
      const locationRes = await axios.get(`http://localhost:8000/`, {params});
      const { location } = locationRes.data;
      this.setState({ location, planet: name });
    } catch(e) {
      alert(e);
    }

  }
  componentDidUpdate() {
    // console.log(this.state);
  }
  render() {
    return (
      <>
        <div style={{ width: '100%', display: "flex", justifyContent: 'center', padding: 24 }}>
          <button
            type="button"
            onClick={this.changeColor}
            style={{ margin: 24 }}
          >
            Change color
          </button>
          <h2 style={{ margin: 24 }}>Fetching from: {this.state.location}</h2>
          <h2 style={{ margin: 24 }}>I am a {this.state.color} Car!</h2>
          <h2 style={{ margin: 24 }}>I am on planet {this.state.planet}</h2>
        </div><div style={{ width: '100%', display: "flex", justifyContent: 'center', padding: 24 }}>
            <button
              type="button"
              onClick={this.sortList}
              style={{ margin: 24 }}
            >
              Sort
            </button>
            <h2 style={{ margin: 24 }}>{this.state.nums}</h2>
          </div>
        </>
    );
  }
}

export default ClassComponent;

// const url = 'https://jsonplaceholder.typicode.com/posts'
// const data = {
//   a: 10,
//   b: 20,
// };
// axios
//   .post(url, data, {
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json;charset=UTF-8",
//     },
//   })