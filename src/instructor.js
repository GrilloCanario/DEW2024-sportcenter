const Activity = require('./activity')

class Instructor {
  #basicSalary
  constructor (name, basicSalary = 500) {
    this.name = name
    this.ledActivities = []
    this.#basicSalary = basicSalary
  }

  get salary () {
    let total = this.#basicSalary
    this.ledActivities.forEach(element => {
      total += element.assitance * 5 + 100
    })
    return total
  }
  /* OPCION PROFESOR
  get salary () {
    return this.#basicSalary +
        this.ledActivities.reduce((t, a) => t + 100 + 5 * a.assistance, 0)
  }
  */
}
module.exports = Instructor
