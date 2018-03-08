import * as React from 'react'
import classNames from 'classnames'

import { UIKit } from '../lib/UIKit'

export interface NavbarProps extends UIKit.Props<Navbar> {
  className?: string
  children?: JSX.Element | string
  afterMount?: () => void

  selTarget?: string
  clsActive?: string

  // Component Attributes
  container?: boolean

  // Component Options
  align?: string
  mode?: string
  delayShow?: number
  delayHide?: number
  boundary?: any
  boundaryAlign?: boolean
  offset?: number
  dropbar?: boolean
  dropbarMode?: string
  duration?: number
}

export class Navbar extends UIKit.Component<NavbarProps> {

  public type: string = 'navbar'

  public events: string[] = [
    'onBeforeShow',
    'onShow',
    'onShown',
    'onBeforeHide',
    'onHide',
    'onHidden'
  ]

  public options: string[] = [
    'align',
    'mode',
    'delay-show',
    'delay-hide',
    'boundary',
    'boundary-align',
    'offset',
    'dropbar',
    'dropbar-mode',
    'duration'
  ]

  public render() {
    const {
      children,
      className,
      selTarget,
      container,
      clsActive,
      ...rest
    } = this.props

    return (
      <nav
        uk-navbar="true"
        className={classNames({ 'uk-navbar-container': container })}
      >
        {children}
      </nav>
    )
  }

}
