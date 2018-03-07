import ReactDOM from 'react-dom'
import * as React from 'react'

import { UIKitComponent } from './lib'

export interface iAccordionChildren {
  key: string
  className?: string
  active?: boolean
  children?: JSX.Element
}

export interface AccordionProps extends React.Props<Accordion> {
  title?: string | JSX.Element
  content?: object[] | string | JSX.Element
  children?: JSX.Element
  className?: string

  active?: boolean = false
  animation?: boolean = true
  collapsible?: boolean = true
  content?: string = 'uk-accordion-content'
  duration?: number = 200
  multiple?: boolean = false
  targets?: string = '*'
  toggle?: string = 'uk-accordion-title'
  transition?: string = 'ease'

  onBeforeShow?: () => boolean | void
  onShow?: () => void
  onShown?: () => void
  onBeforeHide?: () => boolean | void
  onHide?: () => void
  onHidden?: () => void
}

export default class Accordion extends UIKitComponent<AccordionProps> {

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

  public render(): JSX.Element {
    const { className, children, title, content } = this.props

    return (
      <ul right="big" big="right" className={className} ref="component" uk-accordion {...this.componentOptions}>
        {children}
        {Array.isArray(content) &&
          content.map(({ key, className, active, children }: iAccordionChildren) => (
            <li key={key} className={classNames(className, { 'uk-open': active })}>
              {children}
            </li>
          ))
        }
      </ul>
    )
  }

}
