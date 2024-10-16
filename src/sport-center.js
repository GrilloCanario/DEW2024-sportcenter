const Service = require('./service')

class SportCenter {
  #services = []
  constructor (name, fee = 0, membership = 0) {
    this.name = name
    this.fee = fee
    this.membership = membership
  }

  income () {
    return (this.fee * this.membership)
  }

  getServices () {
    return this.#services
  }

  addService (...service) {
    services.forEach(service => {
      if (service instanceof Service && !this.#services.incluides(service)) {
        this.#services.push(service)
      }
    })
  }
}

module.exports = SportCenter
