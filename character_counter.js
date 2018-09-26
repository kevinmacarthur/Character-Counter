var output = {}
function countLetters (string) {
   var splitString = function(string) {
    var noSpaces = string.split(" ").join("").toLowerCase()
    return noSpaces
  }
  var splitted = splitString(string)

  function countString(splitted) {
    for (var letter of splitted) {
      if (output[letter]) {
        output[letter] += 1
      } else {
          output[letter] = 1
      }
    }
  }
  countString(splitted)
  return JSON.stringify(output, null, 2)
}
console.log(countLetters("lighthouse in the house"))
