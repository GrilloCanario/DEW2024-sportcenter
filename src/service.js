class Service {
  // name
  // ratings = new Array(0)
  constructor (name) {
    this.name = name
    this.ratings = [] // eliminado
  }

  giveRating (value) { // en vez de value seria rating
    this.ratings.push(value)
  }

  get rating () {
    if (this.ratings.length === 0) return 0
    const num = this.ratings.reduce((a, r) => a + r, 0) / this.ratings.length
    return Math.round((num + Number.EPSILON) * 100) / 100
  }
  /*   get rating () {
    if (this.ratings.length == 0) {
      return 0
    }
    let result = 0
    this.ratings.forEach(element => { // Recorre cada elemento del array se va sumando con el acumulador
      result = result + element
    })
    return Number((result / this.ratings.length).toFixed(2)) // redondea a 2 decimales
  } */

  // eslint-disable-next-line class-methods-use-this
  calculateCost () {
    throw new Error('Method "calculateCost()" must be implemented.')
  }
}

module.exports = Service
