

    const btnCreate = document.getElementById("btn-main")
    const items = document.getElementsByClassName("item1")
    const btnRemove = document.querySelector(".btn-remove")
    const listContainer = document.querySelector(".list-container ul ")          
    const btnToggle = document.querySelector(".btn-toggle")
    const faq = document.querySelector(".faq")
    const listItem = listContainer.children; // ul children -> li
    
    document.addEventListener("DOMContentLoaded", getLocal) //On load - from local storage


// Create task
    btnCreate.addEventListener("click", () =>{

       
        let ul = document.getElementsByTagName('ul')[0]; 
        const input = document.querySelector('.input-main');
        let li = document.createElement('li');
        li.textContent = input.value;
   
        attachRemoveButton(li)
        ul.appendChild(li)
        // saveLocal(input.value)
        saveToL(input.value)
    
        input.value = ""; //reset
    
    })


// Save to Local storage 
function saveToL(event){
    let values ;

    if(localStorage.getItem("inputs") == null ){
        values = []
        values.push(event) // otherwise first item empty array
      
    }else {
        values = JSON.parse(localStorage.getItem("inputs"))
        values.push(event)
    }
    localStorage.setItem("inputs", JSON.stringify(values))

}


// Getting Item from local storage 
function getLocal(){
    values = JSON.parse(localStorage.getItem("inputs"))
     for(let i =0; i<values.length; i++){ 
    let ul = document.getElementsByTagName('ul')[0];
    const input = document.querySelector('.input-main');
    let li = document.createElement('li');
    li.textContent =values[i];

    attachRemoveButton(li)
    ul.appendChild(li)
}
}

// Remove from local storage

function removeFromLocal(event){


    let values ;
    if(localStorage.getItem("inputs") == null ){
        values = []
      
    }else {
        values = JSON.parse(localStorage.getItem("inputs"))
      
    }


    const item = event.target
    const newArr = item.previousSibling.textContent //getting text in the li
    let newArr1 = values.indexOf(newArr) //checking which index it is

    // I was getting -1 on index 0 which this will fix the issue
    if(newArr1 === -1){
        newArr1 ++
    }else{
        newArr1
    }

    values.splice(newArr1,1) //removing index 
    localStorage.setItem("inputs", JSON.stringify(values)) //reset 
}



    //Remove Buttons on 
    listContainer.addEventListener("click", (event) =>{ 
    
        if(event.target.tagName === "BUTTON"){
            const button = event.target
            const li = button.parentNode; // ul parentNode => li
            li.remove()

            removeFromLocal(event)

        }
    
    })

    // Remove button 
    function attachRemoveButton(event){
    
        let remove = document.createElement("button") //creating button
        remove.className = "remove" //adding class to my button 
        remove.innerHTML = "remove" //adding text to my button
        
        event.appendChild(remove)
        
        }
    

    
    
        
    
    
    // Hide and Show list 
    btnToggle.addEventListener("click", ()=>{
                              
    if( listContainer.style.display === "none"  ){
      btnToggle.innerHTML = "HIDE LIST"
     listContainer.style.display = "block"  
    }
    else{
     btnToggle.innerHTML = "SHOW LIST"
     listContainer.style.display = "none"  
    
    }
      
      
    })
    
    
    // Delete element
    btnRemove.addEventListener("click", () =>{
                               
        listContainer.remove()
                               
    })


   

    

    
 
    
    

    
    