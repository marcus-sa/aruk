import * as React from 'react'
import * as UIkit from 'uikit'

import { componentEvents } from './types'

import { pick } from 'lodash'

export namespace UIKit {

  export function Compose({ as, children, ...props }: { as: string, children: JSX.Element | string, props: object }): any {
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
  }

  export interface Props<T = {}> extends React.ClassAttributes<T>, Events { // React.Props
    className?: string
    afterMount?: () => void
    primary?: boolean
    secondary?: boolean
    danger?: boolean
    success?: boolean
    warning?: boolean
    as?: JSX.Element | string
  }

  //export interface State extends React.State<Component> {}

  //abstract
  export class Component<P = {}, S = {}> extends React.Component<P, S> implements iComponent {

    public type: string
    public options: string[]
    public events: string[]

    public componentDidMount(autoHooks = true): any {
      if (this.refs['component'] && this.type) {

      	const options = pick(this.props, this.options)
        const events = pick(this.props, this.events)

    	  const component = UIkit[this.type](this.refs['component'], options)

        Object.keys(events).forEach((key: string) => {
          UIkit.util.on(
            this.refs['component'],
            componentEvents[key],
            this.props[key]
          )
        })

        if (autoHooks && this.props.hasOwnProperty('afterMount')) {
          (this.props as any).afterMount(component)
        }

        return component
      }
    }

  }

}
