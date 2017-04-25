function getLaDataFromAPi(){
    var endpoint = 'https://data.lacity.org/resource/ngkp-kqkn.json'
    var inputEl = document.getElementById('search')
    var searchTerm = inputEl.value.toUpperCase()
    
    fetch(endpoint) 
    .then(function(data){
        return data.json()
    }) // turn data into JSOn
 .then(function(json){
        // console.log(json)
        var resultDiv = document.getElementById('result')
        var finalHTML = ''
        
       var filteredData = json.filter(function(item){
          return item.city === searchTerm
       })
       
       filteredData.forEach(function(item){
         finalHTML += item.city
       })
       console.log(filteredData)
       
        var resultDiv = document.getElementById('result')
        resultDiv.innerHTML = finalHTML
           
    }) // do something with data
    .catch(function(error){
        console.log(error)
    }) // catch any errors
}