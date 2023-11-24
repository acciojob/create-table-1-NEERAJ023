let table=document.querySelector("#sampleTable");
function insert_Row() {
    //Write your code here
	
  let tr= document.createElement("tr");
	let value={
		val1:"New Cell1",
		val2:"New Cell2"
	}
	for(let key in value){
		let td=document.createElement("td");
		td.innerText=value[key];
		tr.appendChild(td);
	}
	table.prepend(tr);
}
