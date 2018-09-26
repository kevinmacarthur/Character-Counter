const splitString = function(string) {
  const noSpaces = string.split(" ").join("").toLowerCase();
  return noSpaces;
};
function countLetters (string) {
  const output = {};
  const splitted = splitString(string);
  for (let i = 0; i < splitted.length; i++) {
    if (output[splitted[i]]) {
      output[splitted[i]].push(i);
    } else {
      output[splitted[i]] = [i];
    }
  }
  return output;
}
console.log(countLetters("lighthouse in the house"));