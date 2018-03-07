import * as React from 'react'
import UIKit from 'uikit'

import { componentEvents } from './types'

import { pick, isMatch } from 'lodash'

export interface iUIKitComponent {
  type: string
  render: () => JSX.Element | any

  events?: string[]
  options?: string[]
  props?: React.Props
  state?: React.State
}

export default class UIKitComponent extends React.Component<T, U> implements iUIKitComponent {// Props

  public componentOptions: object

  constructor(props: T) {
    this.componentOptions = pick(this.props, this.options)
  }

  public componentDidMount() {
    if (this.refs['component'] && this.events && this.props) {
      //const componentOptions = _.pick(this.props, this.options)
      //const availableEvents = pick(componentEvents, this.events)
      const eventKeys = pick(this.props, this.events)

      //if (eventKeys.length > 0) {
        /*const element = ReactDOM.findDOMNode(this.refs['component'])
        const events = eventKeys.reduce((options, key) => {
          const eventKey = this.events[key]

          events[eventKey] = this.props[key]

          return options
        }, {})//componentOptions*/

        eventKeys.forEach(key => {
          const eventKey = componentEvents[key]

          UIKit.util.on(this.refs['component'], eventKey, this.props[key]))
        })

        //this.component = UIKit[this.type](element, events)
      //}
    }
  }

  public componentDidUnmount = () => this.component && this.component.$destroy(true)

}
