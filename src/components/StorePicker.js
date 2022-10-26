import React from "react";
import PropTypes from "prop-types";
import { getFunName } from "../helpers";

class StorePicker extends React.Component {
  myInput = React.createRef();
  static propTypes = { history: PropTypes.object };

  // We use a class property set to an arrow function
  // As the property is bound to the instance of the class
  // it will have as THIS the Class
  goToStore = (e) => {
    // 1. Stop the form from submitting
    e.preventDefault();
    // 2. Get the text from the input
    const storeName = this.myInput.current.value;
    // console.log("Going to store!");
    // console.log(this.myInput);
    // 3. Change the page to store/whatever-they-entered
    this.props.history.push(`/store/${storeName}`); // Another way to access the Router
  };
  // // Or use bind instead of function expression ans vector function
  // // that has no own this instead.
  // constructor() {
  //   super();
  //   this.goToStore = this.goToStore.bind(this);
  // }

  render() {
    return (
      <form action="" className="store-selector" onSubmit={this.goToStore}>
        <h2>Please enter a store</h2>
        <input
          type="text"
          ref={this.myInput}
          required
          placeholder="Store Name"
          defaultValue={getFunName()}
        />
        <button type="submit">Visit Store ➡️</button>
      </form>
    );
  }
}

export default StorePicker;
