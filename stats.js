let result = {}

function sortResult(sortBy = 'key') {
  const entries = Object.entries(result);

  console.log(entries)

  switch (sortBy) {
    case 'key':
      entries.sort(([keyA], [keyB]) => keyA.localeCompare(keyB));
      break;
    case 'value':
      entries.sort(([, valueA], [, valueB]) => valueA - valueB);
      break;
    case 'keyLength':
      entries.sort(([keyA], [keyB]) => keyA.length - keyB.length);
      break;
    default:
      return result;
  }

  return Object.fromEntries(entries);
}


function reverseDict(obj) {
  new_obj= {}
  rev_obj = Object.keys(obj).reverse();
  rev_obj.forEach(function(i) { 
    new_obj[i] = obj[i];
  })
  return new_obj;
}

function start(){
    const key = document.getElementById("key").value
    result = {}
    let current_key;
    for(let i=0; i<data.length; i++){
        current_key = data[i][key]
        if(!result.hasOwnProperty(current_key) ){
            result[current_key] = 1
        } else {
            result[current_key] ++
        }
    }

    console.log(document.getElementById("sortby").value)
    if(document.getElementById("sortby").value){
        result = sortResult(document.getElementById("sortby").value)
    }
    if(document.getElementById("reverse-inp")?.checked) 
        result = reverseDict(result)
    
    displayResult(result)
}

function displayResult(dict){
    let displayResult = '<table> <tr><th>Key</th><th>Value</th></tr>';
    for(let i = 0; i < Object.keys(dict).length; i++) {
        displayResult += `<tr><td>${Object.keys(dict)[i]}</td> <td>${Object.values(dict)[i]}</td></tr>`
    }
    document.getElementById("result-container").innerHTML = displayResult + '</table>';
}
    
