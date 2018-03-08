import ReactDOM from 'react-dom'
import * as React from 'react'
import classNames from 'classnames'

import { UIKit } from '../lib/UIKit'

export interface iAccordionContent {
  key?: string
  className?: string
  active?: boolean
  children?: JSX.Element
  title?: string | JSX.Element
  content?: string | JSX.Element
}

export interface AccordionProps extends UIKit.Props<Accordion> {
  title?: string | JSX.Element
  content?: object[] | string | JSX.Element

  active?: boolean
  animation?: boolean
  collapsible?: boolean
  duration?: number
  multiple?: boolean
  targets?: string
  toggle?: string
  transition?: string
}

export class Accordion extends UIKit.Component<AccordionProps> {

  public type: string = 'accordion'

  public events: string[] = [
    'onBeforeShow',
    'onShow',
    'onBeforeHide',
    'onHide',
    'onHidden'
  ]

  public options: string[] = [
    'active',
    'animation',
    'collapsible',
    'content',
    'duration',
    'multiple',
    'targets',
    'toggle',
    'transition'
  ]

  public render() {
    const { className, children, title, content } = this.props

    return (
      <ul className={className} ref="component" uk-accordion="true">
        {children || Array.isArray(content) &&
          content.map(({ key, className, active, children, title, content }: iAccordionContent): JSX.Element => (
            <li key={key} className={classNames(className, { 'uk-open': active })}>
              {title && <span className="uk-accordion-title">{title}</span>}
              {content && <div className="uk-accordion-content">{content}</div>}
              {children}
            </li>
          ))
        }
      </ul>
    )
  }

}
