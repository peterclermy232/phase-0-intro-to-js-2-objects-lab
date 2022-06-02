// Write your solution in this file!
const employee = {}

function updateObjectWithKeyAndValue(employee, key, value) {
    return em.assign({}, employee, {[key]: value});
  }