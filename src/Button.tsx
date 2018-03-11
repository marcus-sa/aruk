import * as React from 'react'
import classNames from 'classnames'

import { UIKit } from '../lib/UIKit'

import { Align, Spinner } from './index'

export interface ButtonProps extends UIKit.Props<Button> {
  active?: boolean
  large?: boolean
  link?: boolean
  loading?: boolean
  small?: boolean
  text?: boolean
  disabled?: boolean
}

export class Button extends React.Component<ButtonProps> {

  public render() {
    const {
      children,
      active,
      className,
      danger,
      large,
      link,
      primary,
      secondary,
      small,
      text,
      loading,
      disabled,
      ...rest
    } = this.props

    const styleNames = classNames('uk-button', className, {
      'uk-button-default': !primary && !secondary && !danger && !text && !link,
      'uk-button-primary': primary,
      'uk-button-secondary': secondary,
      'uk-button-danger': danger,
      'uk-button-text': text,
      'uk-button-link': link,
      'uk-button-small': small,
      'uk-button-large': large,
      'uk-active': active
    })

    return (
      <UIKit.Compose as={link ? 'a' : 'button'} {...rest} className={styleNames} disabled={loading || disabled}>
        {loading ? (
          <Align.Center>
            <Spinner />
          </Align.Center>
        ) : children}
      </UIKit.Compose>
    )
  }

}
