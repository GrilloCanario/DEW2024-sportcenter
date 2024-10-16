const Activity = require('./activity')

class Instructor {
  #basicSalary

  constructor (name, basicSalary = 500) {
    this.name = name
    this.#basicSalary = basicSalary
    this.ledActivities = []
  }

  get salary () {
    return this.#basicSalary +
        this.ledActivities.reduce((t, a) => t + 100 + 5 * a.assistance, 0)
  }
  /*   get salary () {
    let total = this.#basicSalary
    this.ledActivities.forEach(element => {
      total += element.assistance * 5 + 100
    })
    return total
  } */

  lead (activity) {
    if (activity instanceof Activity) {
      // eslint-disable-next-line no-param-reassign
      this.ledActivities.push(activity)
      activity.instructor = this
    }
  }
/*   lead (activity) {
    if (activity instanceof Activity) {
      this.ledActivities.push(activity)
      activity.ledBy(this)
    }
  } */
}

module.exports = Instructor
