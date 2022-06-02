
// Write your solution in this file!
const employee = {
    name:'Sam',
    streetAddress: '11 '
}

function updateObjectWithKeyAndValue(employee, key, value) {
    return employee.assign({}, employee, {[key]: value});
  }