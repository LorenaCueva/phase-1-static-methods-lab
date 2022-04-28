class Formatter {
  //add static methods here
  static capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  
  static sanitize(str){
    return str.replace(/[^A-Za-z0-9-\s']+/g, "")
  }
  static titleize(str){
    const avoid = ["a", "an", "but", "of", "for", "at", "by", "from", "and", "the"]
    let newWord = []
    str.split(' ').forEach(word => {
      if(avoid.includes(word))newWord.push(word)
      else newWord.push(this.capitalize(word))
    })
    return this.capitalize(newWord.join(' '))
  }
}

console.log(Formatter.capitalize("lore"))
console.log(Formatter.sanitize("Lo-r#$$$e ^&Cuev#a"))
console.log(Formatter.titleize("the red and green house by the lake"))
