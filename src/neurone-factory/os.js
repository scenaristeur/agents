import { Base } from "./base.js"

export { Os }

class Os extends Base {
  constructor(options = {}) {
    super(options)
    options['type'] == undefined ? this['type'] = "os": ""
    // this.options = options

    // this._data = Object.assign({}, modele)
    // this["ve:created"] = Date.now()
    // this.id = uuidv4()
    //console.log(this)
    // ...
  }
}
