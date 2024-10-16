const Activity = require('./activity')
const Facility = require('./facility')
const Instructor = require('./instructor')
const Service = require('./service')

class SportCenter {
  #services = [] // #services
  #instructors = [] // #instructor

  constructor (name, fee, membership = 0) {
    this.name = name
    this.fee = fee
    this.membership = membership
    // this.#services = []
    // this.#instructor = []
  }

  income () {
    return this.fee * this.membership
  }

  getServices () {
    return this.#services
  }

  addService (...services) {
    services.forEach((service) => {
      if (service instanceof Service && !this.#services.includes(service)) {
        this.#services.push(service)
      }
    })
  }

  removeService (service) {
    if (service instanceof Service) {
      const index = this.#services.indexOf(service)
      if (index >= 0) {
        this.#services.splice(index, 1)
      }
    }
  }
  /* removeService (service) {
    if (this.#services.indexOf(service) != -1) {
      this.#services.splice(this.#services.indexOf(service), 1)
    }
  } */

  orderServicesBy (criteria) {
    switch (criteria) {
      case 'name': this.#services.sort((a, b) => (a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1))
        break
      case 'rating': this.#services.sort((a, b) => (a.rating > b.rating ? -1 : 1))
        break
      default: break
    }
  }
  /*   orderServicesBy (order) {
    if (order == 'name') {
      return this.#services.sort((a, b) => a.name.localeCompare(b.name))
    }
    if (order === 'rating') {
      return this.#services.sort((b, a) => a.rating - b.rating)
    }
  } */

  getFacilities () {
    return this.#services.filter((s) => s instanceof Facility)
  }
  /*  getFacilities () {
    return this.#services.filter(service => { // filtra de los servicios aquellos que venga de Facility
      if (service instanceof Facility) {
        return service
      }
    })
  }
  } */

  getActivities () {
    return this.#services.filter((s) => s instanceof Activity)
  }
  /*   getActivities () {
    return this.#services.filter(service => { // filtra de los servicios aquellos que venga de Activity
      if (service instanceof Activity) {
        return service
      }
    })
  } */

  getInstructors () {
    return this.#instructors
  }

  addInstructor (instructor) {
    if (instructor instanceof Instructor && !this.#instructors.includes(instructor)) {
      this.#instructors.push(instructor)
    }
  }

  removeInstructor (instructor) {
    const index = this.#instructors.indexOf(instructor)
    if (index >= 0) this.#instructors.splice(index, 1)
  }
  /*   removeInstructor (instructor) {
    if (instructor instanceof Instructor && this.#instructor.includes(instructor)) {
      this.#instructor.splice(this.#instructor.indexOf(instructor), 1)
    }
  } */

  listInstructorsActivities () {
    return this.#instructors.map((i) => [i.name, ...i.ledActivities.map((a) => a.name)])
  }
  /*   listInstructorsActivities () {
    const finalarray = []

    this.getInstructors().forEach(instructor => {
      const array1 = []
      array1.push(instructor.name)

      instructor.ledActivities.forEach(activity => {
        array1.push(activity.name)
      })
      finalarray.push(array1)
    })
    return finalarray
  } */

  costServices () {
    return this.#services.reduce((t, s) => t + s.calculateCost(), 0)
  }
  /*   costServices () {
    let total = 0
    this.getServices().forEach(service => {
      total += service.calculateCost()
    })
    return total
  } */

  costInstructors () {
    return this.#instructors.reduce((t, s) => t + s.salary, 0)
  }
/*   costInstructors () {
    let total = 0
    this.getInstructors().forEach(instructor => {
      total += instructor.salary
    })
    return total
  }
} */
}

module.exports = SportCenter
