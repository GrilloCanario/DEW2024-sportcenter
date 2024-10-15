class service {
  constructor (name) {
    this.name = name
    this.ratings = []
  }

  giveRating(rating) {
    this.ratings.push(rating)
  }
}

module.exports = service
