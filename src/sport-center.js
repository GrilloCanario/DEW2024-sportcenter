class SportCenter {
  #services
  constructor (name, fee = 0, membership = 0) {
    this.name = name
    this.fee = fee
    this.membership = membership
  }

  income () {
    return (this.fee * this.membership)
  }
}

module.exports = SportCenter
