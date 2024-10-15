class Service {
  constructor (name) {
    this.name = name
    this.ratings = []
  }

  giveRating (rating) {
    this.ratings.push(rating)
  }

  get rating () {
    if (this.ratings.length === 0) {
      return 0
    }
    let result = 0
    this.ratings.forEach(element => { // Recorre cada elemento del array se va sumando con el acumulador(result)
      result += element // result = result + element
    })
    return Number((result / this.ratings.length).toFixed(2)) // redondea a 2 decimales
  }

  calculateCost () {

  }
}

module.exports = Service
