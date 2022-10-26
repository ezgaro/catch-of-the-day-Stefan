import React from "react";
import PropTypes from "prop-types";

class Header extends React.Component {
  static propTypes = { tagline: PropTypes.string.isRequired };
  render() {
    return (
      <header className="top">
        <h1>
          Catch
          <span className="ofThe">
            <span className="of">of</span>
            <span className="the">the</span>
          </span>
          Day
        </h1>
        <h3 className="tagline">
          <span>{this.props.tagline}</span>
          {/* <span>{this.props.age}</span>
          <span>{this.props.cool}</span> */}
        </h3>
      </header>
    );
  }
}

//// Stateless functional component
// const Header = ({tagline, age}) =>

//     (
//       <header className="top">
//         <h1>
//           Catch
//           <span className="ofThe">
//             <span className="of">of</span>
//             <span className="the">the</span>
//           </span>
//           Day
//         </h1>
//         <h3 className="tagline">
//           <span>{tagline}</span>
//           <span>{age}</span>
//           {/* <span>{this.props.age}</span>
//           <span>{this.props.cool}</span> */}
//         </h3>
//       </header>
//     );

// Header.propTypes = {
//   tagline: PropTypes.string.isRequired,
//   // age: PropTypes.number.isRequired,
//   // cool: PropTypes.bool.isRequired,
// };

export default Header;
