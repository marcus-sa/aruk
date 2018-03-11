import ReactDOM from 'react-dom'
import * as React from 'react'
import * as classNames from 'classnames'

import { UIKit } from '../lib/UIKit'

export interface iAccordionContent {
  key: string
  className?: string
  //active?: boolean
  children?: JSX.Element
  title?: string | JSX.Element
  content?: string | JSX.Element
}

export interface AccordionState {
  active: (string | number)[]
}

export interface AccordionProps extends UIKit.Props<Accordion> {
  title?: string | JSX.Element
  content?: iAccordionContent[]

  //onToggle?: (key: string) => void
  active?: string | number
  animation?: boolean
  collapsible?: boolean
  duration?: number
  multiple?: boolean
  //targets?: string
  //toggle?: string
  transition?: UIKit.Component | JSX.Element | string
}

export class Accordion extends UIKit.Component<AccordionProps, AccordionState> {

  public defaultProps = {
    collapsible: true
  }

  public state: AccordionState = {
    active: [this.props.active]
  }

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
    //'targets',
    //'toggle',
    'transition'
  ]

  public static Title({ children, onToggle }: { onToggle?: (e: any) => any, children: JSX.Element | any }): JSX.Element {
    return <a href="#" onClick={onToggle} className="uk-accordion-title">{children}</a>
  }

  public static Content({ children, hidden }: { children: JSX.Element | any, hidden?: boolean }): JSX.Element {
    return <div className={classNames('uk-accordion', { 'uk-hidden': hidden })}>{children}</div>
  }

  private getMultipleItems(key: string | number): (string | number)[] {
    const { active } = this.state

    if (active.includes(key)) {
      return active.filter(item => item !== key)
    }

    return active.concat(key)
  }

  private toggle = (key) => {
    return (e) => {
      let activeItems = []

      if (this.props.multiple) {
        activeItems = this.getMultipleItems(key)
      }

      if (!this.props.collapsible && activeItems.length === 0) {
        activeItems = [key]
      }

      this.setState({
        active: activeItems
      } as AccordionState)

      e.preventDefault()
    }
  }

  private shouldItemBeHidden(key: string | number): boolean {
    return !this.state.active.includes(key)
  }

  // @TODO: Add transitions
  public render() {
    const { className, children, title, content } = this.props

    return (
      <ul uk-accordion="true" className={classNames('uk-accordion', className)}>
        {children || Array.isArray(content) &&
          content.map(({ key, className, children, title, content }: iAccordionContent): JSX.Element => {
            const hidden = this.shouldItemBeHidden(key)

            return (
              <li key={key} className={classNames(className, { 'uk-open': !hidden })}>
                {title && <Accordion.Title onToggle={this.toggle(key)}>{title}</Accordion.Title>}
                {content && <Accordion.Content hidden={hidden}>{content}</Accordion.Content>}
                {children}
              </li>
            )
          })
        }
      </ul>
    )
  }

}
