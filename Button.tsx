import * as React from 'react'
import classNames from 'classnames'

import { PropTypes } from './lib/types'

export interface ButtonProps extends React.Props<Button> implements PropTypes {
  children?: JSX.Element | string
  active?: boolean
  className?: string
  danger?: boolean
  large?: boolean
  link?: boolean
  primary?: boolean
  secondary?: boolean
  small?: boolean
  text?: boolean
  disabled?: boolean
}

export default class Button extends React.Component<ButtonProps> {

  public render(): JSX.Element {
    const {
      children,
      active,
      className: customClassName,
      danger,
      large,
      link,
      primary,
      secondary,
      small,
      text,
      ...rest
    } = this.props

    const className = classNames('uk-button', customClassName, {
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
      <button {...rest} className={className}>
        {children}
      </button>
    )
  }

}
