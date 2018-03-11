import * as React from 'react'

interface ButtonProps {
   label: string;
   onClick(): void;
}

export default class Button extends React.Component<ButtonProps, {}> {
   render() {
      return (
         <button onClick={this.props.onClick}>
            {this.props.label}
         </button>
      )
   }
}