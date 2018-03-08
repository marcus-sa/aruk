import * as React from 'react'

import { UIKit } from '../lib/UIKit'

export interface SpinnerProps {
  className?: string
}

export class Spinner extends React.Component<SpinnerProps> {

  public render() {
    return (
      <div
        className={this.props.className}
        uk-spinner
      />
    )
  }

}
