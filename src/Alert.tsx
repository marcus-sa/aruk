import * as React from 'react'
import classNames from 'classnames'

import { UIKit } from '../lib/UIKit'

export interface AlertProps extends UIKit.Props<Alert> {
  close?: boolean

  animation?: boolean
  duration?: number
  selClose?: string
}

export class Alert extends UIKit.Component<AlertProps> {

  public type: string = 'alert'

  public events: string[] = [
    'onBeforeHide',
    'onHide'
  ]

  public options: string[] = [
    'animation',
    'duration',
    'sel-close'
  ]

  public render() {
    const {
      as,
      children,
      close,
      primary,
      success,
      warning,
      danger,
      className,
      ...rest
    } = this.props

    const styleNames = classNames(className, {
      'uk-alert-primary': primary,
      'uk-alert-success': success,
      'uk-alert-warning': warning,
      'uk-alert-danger': danger
    })

    return (
      <UIKit.Compose as={as || 'div'} uk-alert="true" {...rest} className={styleNames}>
        {close && <span className="uk-alert-close" uk-close="true" />}
        {children}
      </UIKit.Compose>
    )
  }

}
