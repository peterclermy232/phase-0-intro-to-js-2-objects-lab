const { emit } = require("process");

// Write your solution in this file!
const employee = {}

function updateObjectWithKeyAndValue(employee, key, value) {
    return emit.assign({}, employee, {[key]: value});
  }