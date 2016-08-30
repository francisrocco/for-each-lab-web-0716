function iterativeLog(array) {
  array.forEach((element, index) => {
    console.log(`${index}: ${element}`)
  })
}

function iterate(callback) {
  var stuff = ["Francis", "Sheri", "Albert"]
  stuff.forEach(callback)
  return stuff
}

function doToArray(array, callback) {
  array.forEach(callback)
}
