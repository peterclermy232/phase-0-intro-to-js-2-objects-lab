// Write your solution in this file!
const employee = {}

function updateObjectWithKeyAndValue(employee, key, value) {
    return Object.assign({}, employee, {[key]: value});
  }