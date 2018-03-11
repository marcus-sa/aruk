import * as React from 'react'
import classNames from 'classnames'
import {
  Transition as ReactTransition,
  TransitionGroup as ReactTransitionGroup
} from 'react-transition-group'

import { pick } from 'lodash'

import { UIKit } from '../lib'

export namespace Transition {

  export interface Events {
    onHover?: boolean
    onClick?: boolean
  }

  export interface Animations {
    bottomRight?: boolean
  }

  export interface Props extends UIKit.Props<Component> {
    mountOnEnter?: boolean
    unmountOnExit?: boolean
    appear?: boolean
    enter?: boolean
    exit?: boolean
    addEndListener?: () => void
    onEnter?: any
    onEntering?: any
    onExit?: any
    onExiting?: any
    onExited?: any
    styles?: object
    active?: boolean
  }

  export const DefaultProps: object = {
    styles: {
      entering: { opacity: 1 },
      entered: { opacity: 0 }
    }
  }

  export class Group extends UIKit.Component {

  }

  export class Component extends UIKit.Component<Props> {

    public transitionName: string

    public options: string[] = [
      'key',
      'duration',
      'mountOnEnter',
      'unmountOnExit',
      'appear',
      'enter',
      'exit',
      'addEndListener',
      'onEnter',
      'onEntering',
      'onEntered',
      'onExit',
      'onExiting',
      'onExited'
    ]

    public render() {
      const { duration, key, className, active, children, styles } = this.props

      //const transitionStyles = merge(styles)
      const options = pick(this.props, this.options)

      return (
        <ReactTransition in={active} {...options}>
          {(state) => (
            <div style={styles[state]}
              className={classNames(`uk-transition-${this.transitionName}`, className)}
              >
              {children}
            </div>
          )}
        </ReactTransition>
      )
    }

  }

  export namespace Scale {

    export class Up extends Component {

      public transitionName: string = 'scale-up'

      public defaultProps: object = {
        ...DefaultProps,
        duration: 300,
        active: true
      }

    }

  }

  export class Fade extends Component {

    public transitionName: string = 'fade'

    public defaultProps: object = {
      ...DefaultProps,
      duration: 300,
      active: true
    }

  }

}
