import * as React from 'react'
import classNames from 'classnames'

import { UIKit } from '../lib/UIKit'

export interface IconProps extends UIKit.Props<Icon> {
  children?: JSX.Element | string

  image?: boolean
  src?: string
  type?: string
  link?: boolean
  button?: boolean
}

export class Icon extends UIKit.Component<IconProps> {

  public type: string = 'icon'

  public options: string[] = ['icon', 'ratio']

  public render(): JSX.Element {
    const {
      className,
      type,
      link,
      button,
      image,
      src,
      ...rest
    } = this.props

    if (link || button) {
      return (
        <a ref="component" uk-icon={type} className={classNames(className, {
          'uk-icon-link': link,
          'uk-icon-button': button
        })} />
      )
    } else if (image) {
      return <span
        ref="component"
        className={classNames('uk-icon uk-icon-image', className)}
        style={{backgroundImage: src ? `url(${src})` : null}}
      />
    }

    return (
      <span ref="component" uk-icon={type} />
    )
  }

}
