
// Write your solution in this file!
const employee = {
    name:'Sam',
    streetAddress: '11 Broadway'
}

function updateObjectWithKeyAndValue(object, key, value) {
    return object.assign({

    }, employee, 
    {[key]: value});
  }