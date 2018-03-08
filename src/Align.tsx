import * as React from 'react'
import classNames from 'classnames'

import { UIKit } from '../lib/UIKit'

import { omit, pick } from 'lodash'

export namespace Align {

  export interface Props extends UIKit.Props<Component> {
    size?: string
    responsive?: object
    small?: string // s
    medium?: string // m
    big?: string // l
    large?: string // xl
  }

  export class Component extends React.Component<Props> {

    public type: string = ''

    private readonly sizes: object = {
      small: 's',
      medium: 'm',
      big: 'l',
      large: 'xl'
    }

    public render() {
      const { children, responsive } = this.props

      const responsiveSizes: object | undefined = pick(responsive || this.props, Object.keys(this.sizes))

      // add classes directly to all child elements
      // or wrap all children in a div and then assign the classes to the parent?
      /**
        return React.Children.map(children, (child) => {
          return React.cloneElement(child, {
            ...child.props,
            className: classNames(
              child.props.className,
              this.props.className,
              this.className,
              Object.keys(responsiveSizes).map(size => {
                return `uk-align-${responsive[size]}@${this.sizes[size]}`
              })
            )
          })
        })
      */

      return (
        <div className={classNames(
          this.props.className,
          this.type,
          Object.keys(responsiveSizes || []).map((size: string): string => {
            return `uk-align-${responsive[size]}@${this.sizes[size]}`
          })
        )}>
          {children}
        </div>
      )
    }

  }

  export class Left extends Component {

    public readonly type: string = 'uk-align-left'

  }

  export class Right extends Component {

    public readonly type: string = 'uk-align-right'

  }

  export class Center extends Component {

    public readonly type: string = 'uk-align-center'

  }

}
