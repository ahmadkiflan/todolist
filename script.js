function upperCaseString(fullName) {
  return fullName.toUpperCase();
}

function addFullName(x) {
  console.log("Halo " + upperCaseString(x));
}

addFullName("Ahmad Kiflan Wafi");

const result = upperCaseString("Ahmad Kiflan Wafi");
console.log(result);
