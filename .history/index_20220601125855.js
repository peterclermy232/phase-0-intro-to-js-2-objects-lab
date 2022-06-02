
// Write your solution in this file!
const employee = {
    name:'Sam',
    streetAddress: ''
}

function updateObjectWithKeyAndValue(employee, key, value) {
    return employee.assign({}, employee, {[key]: value});
  }