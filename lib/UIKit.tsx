import * as React from 'react'
//import * as UIkit from 'uikit'

import { componentEvents } from './types'

import { pick } from 'lodash'

export namespace UIKit {

  export function Compose({ as, children, ...props }: { as: string, children: JSX.Element | any, props: object }): any {
    return React.createElement(as, props, children)
  }

  export interface iComponent {
    render: () => JSX.Element | any

    type?: string
    events?: string[]
    options?: string[]
    props: object
    refs?: object
    state: object
  }

  export interface Options {}

  export interface Events {
    onBeforeShow?: () => boolean
    onShow?: () => void
    onShown?: () => void
    onBeforeHide?: () => boolean
    onHide?: () => void
    onHidden?: () => void
    onClick?: (e: React.SyntheticEvent<HTMLElement>) => boolean | void
  }

  export interface Props<T = {}> extends React.ClassAttributes<T>, Events { // React.Props
    key?: string
    className?: string
    primary?: boolean
    secondary?: boolean
    danger?: boolean
    success?: boolean
    warning?: boolean
    duration?: number
    as?: JSX.Element | string
  }

  //export interface State extends React.State<Component> {}

  export class Component<P = {}, S = {}> extends React.Component<P, S> implements iComponent {

    public type: string
    public options: string[]
    public events: string[]

    public pushEvent(eventName: string, e?: React.SyntheticEvent<HTMLElement> | any) {
      if (this.props[eventName]) {
        this.props[eventName](e)
      }
    }

    public pushEvents(eventNames: string[]) {
      eventNames.forEach((event: string) => this.pushEvent(event))
    }

  }

}
