//your JS code here. If required.
function getData(){
	const request = new XMLHttpRequest();
         request.open('GET',"https://jsonplaceholder.typicode.com/todos/1");
         request.send();
        
        // to get the response that is sent
        request.addEventListener('load',function(){
         const data = JSON.parse(this.responseText);
			console.log(data)
		})
}
getData();