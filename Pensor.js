class Person {
  constructor(name) {
    this.name = name
  }
  sayMyName() {
    console.log(`Seu nome é ${this.name}`)
  }
}

module.exports = Person