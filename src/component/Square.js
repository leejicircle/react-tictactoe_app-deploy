import React from 'react'
import './Square.css'


//rfc


// const Square = ({ onClick, value }) => {
//   return (
//     <button className='square' onClick={onClick}>
//       {value}
//     </button>
//   );
// };


const Square = (props) => {
  return (
    <button className='square' 
    onClick={props.onClick}>
      {props.value}
    </button>
  )
}
export default Square


// rcc

// export default class Square extends React.Component {

//   render() {
//     return (
//       <button className='square'
//         onClick={() => {this.props.onClick()}}
//       >
//         {this.props.value}

//       </button>
//     )
//   }
// }