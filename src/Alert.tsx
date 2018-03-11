import * as React from 'react'
import classNames from 'classnames'

import { UIKit } from '../lib/UIKit'

export interface AlertState {
  active: boolean
}

export interface AlertProps extends UIKit.Props<Alert> {
  close?: boolean
  active?: boolean

  animation?: boolean
  duration?: number
  selClose?: string
}

export class Alert extends UIKit.Component<AlertProps, AlertState> {

  public state: AlertState = {
    active: this.props.active
  }

  public static defaultProps: object = {
    as: 'div',
    active: true
  }

  public type: string = 'alert'

  public events: string[] = [
    'onBeforeHide',
    'onHide'
  ]

  public options: string[] = [
    'animation',
    'duration',
    'selClose'
  ]

  private _close = (e: React.SyntheticEvent<HTMLElement>): boolean => {
    this.pushEvent('onBeforeHide', e)
    this.setState({ active: false })
    this.pushEvent('onHide', e)

    return false
  }

  public componentWillReceiveProps({ active }: AlertProps) {
    if (this.state.active !== active) {
      this.setState({ active })
    }
  }

  public static Close({ onClick }: UIKit.Events): JSX.Element {
    return <a href="#" onClick={onClick} className="uk-alert-close" uk-close="true" />
  }

  public render() {
    const {
      as: element,
      children,
      close,
      primary,
      success,
      warning,
      danger,
      className,
      ...rest
    } = this.props

    const styleNames: string = classNames(className, {
      'uk-alert-primary': primary,
      'uk-alert-success': success,
      'uk-alert-warning': warning,
      'uk-alert-danger': danger
    })

    return this.state.active ? (
      <UIKit.Compose as={element} uk-alert="true" {...rest} className={styleNames}>
        {close && <Alert.Close onClick={this._close} />}
        {children}
      </UIKit.Compose>
    ) : null
  }

}
