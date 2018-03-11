## Accordion

#### Options
Any of these options can be applied as props

Option | Value | Default | Description
--- | --- | --- | ---
`active` | number | `false` | Index of the element to open initially.
`animation` | boolean | `true` | Reveal item directly or with a transition.
`collapsible` | boolean | `true` | Allow all items to be closed.
`content` | string | `.uk-accordion-content` | The content selector, which selects the accordion content elements.
`duration` | number | `200` | Animation duration in milliseconds.

#### Events
The following events will be triggered on elements with this component attached:

Name | Description
--- | ---
`onBeforeShow` | Fires before an item is shown. Can prevent showing by returning `false`
`onShow` | Fires after an item is shown.
`onShown` | Fires after the item's show animation has completed.
`onBeforeHide` | Fires before an item is hidden. Can prevent hiding by returning `false`
`onHide` | Fires after an item's hide animation has started.
`onHidden` | Fires after an item is hidden.

> Example

```jsx
/*react*/
<desc>
title?: string | JSX.Element
content?: object[] | string | JSX.Element

active?: boolean = false
animation?: boolean = true
collapsible?: boolean = true
content?: string = 'uk-accordion-content'
duration?: number = 200
multiple?: boolean = false
targets?: string = '*'
toggle?: string = 'uk-accordion-title'
transition?: string = 'ease'
</desc>
<script>
const { Accordion } = aruk

export default class Application extends React.Component {

  state = {
    itemActive: 'item-1'
  }

  toggle = (key) => this.setState({ itemActive: key })

  render() {
    const { itemActive } = this.state

    return (
      <Accordion
        active="item-1"
        collapsible={false}
        multiple
        content={[
          {
            key: 'item-1',
            title: 'Item 1',
            content: 'Proin volutpat sollicitudin nibh sit amet hendrerit. Donec dolor lorem.',
          },
          {
            key: 'item-2',
            title: 'Item 2',
            content: 'Nam volutpat dapibus quam ac tincidunt. Nullam mollis, quam et.',
          },
          {
            key: 'item-3',
            title: 'Item 3',
            content: 'Sed sit amet scelerisque justo. Praesent ullamcorper massa vitae dolor.'
          }
        ]}
      />
    )
  }

}
</script>
```
