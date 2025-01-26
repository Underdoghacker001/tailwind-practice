import { Component } from "react";
import WithCounter from "./withCounter";

class HoverCounter extends Component {
  // constructor(props) {
  //   // console.log('constructor');
  //   super(props);
  //   this.state = {
  //     count: 0,
  //   };
  //   // this.timerId = null;
  // }
//   componentDidMount() {
//     console.log("ComponentDidMount")
//     this.timerId = setInterval(() => {
//       console.log("hii");
//     }, 1000)
//   }

//   componentDidUpdate(){
//     console.log('componentDidUpdate');
//   }

//   componentWillUnmount(){
//     console.log('componentWillUnmount');
//     clearInterval(this.timerId)
//   }
// increaseCount = () => {
//     this.setState({count : this.state.count + 1})
// }

  render() {
    // console.log('render');
    const { name } = this.props;
    // const {count} = this.state
    return (
      <>
        <h1 className="mt-4">{name}</h1>
        <div >
          {/* <button
            className="bg-blue-400 px-4 py-1 rounded mt-6"
            onClick={() => this.setState({ count: this.state.count - 1 })}
          >
            Decrement
          </button> */}
          <h1 onMouseEnter={this.props.increaseCount} className="px-4 py-1 rounded mt-6 font-bold text-2xl bg-green-300 text-center">
            {this.props.count}
          </h1>
          {/* <button
            className="bg-blue-400 px-4 py-1 rounded mt-6"
            onClick={() => this.setState({ count: this.state.count + 1 })}
          >
            Increment
          </button> */}
        </div>
      </>
    );
  }
}

export default WithCounter(HoverCounter);
