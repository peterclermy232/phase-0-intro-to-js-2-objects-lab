// Write your solution in this file!
const employee = {}

function updateObjectWithKeyAndValue(empl, key, value) {
    return Object.assign({}, employee, {[key]: value});
  }