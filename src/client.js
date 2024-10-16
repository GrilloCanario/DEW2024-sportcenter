class Client {
  #age = 50

  constructor (name, age) {
    this.name = name
    this.age = age // eliminado por
    /* if (age < 0) {
      this.#age = 50
    } else {
      this.#age = age
    } */
  }

  get category () {
    if (this.age < 22) return 'Promesa'
    if (this.age > 40) return 'Veterano'
    return 'Senior'
  }
  /*   get category () {
    if (this.#age <= 21) {
      return 'Promesa'
    }
    if (this.#age > 20 && this.#age <= 40) {
      return 'Senior'
    } else {
      return 'Veterano'
    }
  } */

  turnedYearsOld () {
    this.#age++
  }

  get age () { return this.#age }

  set age (a) { if (a >= 0) this.#age = a }
  /*
  if (a >= 0) {
  this.#age = a
  }
  */
}

module.exports = Client
