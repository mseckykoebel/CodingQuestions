// If you are givin a string, return define a funciton that returns a new string with all of the characters reversed

function reverse(str) {
  let array = str.split("");
  array.reverse();
  return array.join("");
}
