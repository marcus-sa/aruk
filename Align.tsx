import * as React from 'react'

import { omit, pick } from 'lodash'

export interface AlignComponentProps extends React.Props<AlignComponent> {
  size?: string
  className?: string
  responsive?: object
  small?: string // s
  medium?: string // m
  big?: string // l
  large?: string // xl
}

/**
  @example:

  <AlignComponent responsive?={{ [size]: [position] }} />
  <AlignComponent [size]=[position] />
*/
export class AlignComponent extends React.Component<AlignComponentProps> {

  private sizes: object = {
    small: 's',
    medium: 'm',
    big: 'l',
    large: 'xl'
  }

  public render(): JSX.Element {
    const { children, responsive } = this.props

    const responsiveSizes = pick(this.props.responsive || this.props, this.sizes)

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
        this.className,
        Object.keys(responsiveSizes).map(size => {
          return `uk-align-${responsive[size]}@${this.sizes[size]}`
        })
      )}>
        {children}
      </div>
    )
  }

}

export class Left extends AlignComponent {

  public className: string = 'uk-align-left'

}

export class Right extends AlignComponent {

  public className: string = 'uk-align-right'

}

export class Center extends AlignComponent {

  public className: string = 'uk-align-center'

}
