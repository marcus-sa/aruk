# HTML Helper functions
?> All methods returns a `String`
> Importing

```javascript
import { helpers } from 'trinity'

...
```
## Methods

### map

* **Arguments**:
    * `{Array} keys`
    * `{Function} callback`
        * **Parameter**: `{String} key`
        * **Expects**: `String`

> Example

```javascript
import { Component, helpers } from 'trinity'

export default class Helpers extends Component {

    getInitialState = () => ({
        functions: ['map', 'other']
    })

    render = ({ state }) => {
        return helpers.map(state.functions,
            (name) => `<span>${name}</span>\n`
        )
    }

}
```

> Output

```html
<span>map</span>
<span>other</span>
```

### ifElse
* **Arguments**:
    * `{Any} statement`
    * `{String} valid`
    * `{String} invalid`

* **Details**:<br>
    Validates `statement` using `!!` operator

* **Read more**: [Logical Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators)

> Example

```javascript
import { Component, helpers } from 'trinity'

export default class LastPage extends Component {

  async componentWillMount({ context: { store, api } }) {
    this._elementRender(this.parent, `<div>Loading</div>`)

    if (!store.getState().mocky) {
      try {
        const result = await api.get('https://www.mocky.io/v2/5185415ba171ea3a00704eed')

        store.setState({ mocky: { result } })
      } catch (error) {
        store.setState({ mocky: { error } })
      }
    }
  }

  render = ({ context: { store } }) => {
    return `
      <span>Mocky ${helpers.ifElse(mocky.error,
        `Error: ${mocky.error}`,
        `Result: ${mocky.result}`
      )}</span>`
  }

}
```