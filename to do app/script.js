// UI vars 

const form = document.querySelector('form');
const input = document.querySelector('#txtTaskName');
const btnDeleteAll = document.querySelector('#btnDeleteAll');
const taskList = document.querySelector('#task-list');
let items;


// call event listeners
eventListeners();
loaditems();

function eventListeners(){
    // submit event
    form.addEventListener('submit',addNewItem);
    
    taskList.addEventListener("click",deleteitem);
    
    btnDeleteAll.addEventListener("click",deleteallitems);
}

function loaditems()
{
    items=getItemFromsLS();
    items.forEach(function(item)
    {
            createitem(item);      
                  
                  })
    
}

function getItemFromsLS()
{
    if(localStorage.getItem("items")===null){
        
        items=[];
        
    }else{
        
        items=JSON.parse(localStorage.getItem("items"));
    }
    return items;
}

function setItemToLS(text)
{
    
    items=getItemFromsLS();
    items.push(text);
    localStorage.setItem("items",JSON.stringify(items));
    
    
}
function deleteItemFromLS(text)

{
items=getItemFromsLS();
    items.forEach(function(item,index)
                 {
        
        if(item===text)
            {
                items.splice(index,1);
            }
    })
    localStorage.setItem("items",JSON.stringify(items));
}
function deleteallitems(e){
    
  if(confirm("are you sure ")==true)
      {
          
            const allitems=taskList.querySelectorAll("li"); 
    for(var i=0;i<allitems.length;i++)
        {
            
            allitems[i].remove();
            
        }
          localStorage.clear();
      }
    
    
    e.preventDefault();
}

function deleteitem(e){
    
    if(e.target.className==="fas fa-times")
        {
            
            e.target.parentElement.parentElement.remove();
            
            deleteItemFromLS(e.target.parentElement.parentElement.textContent);
            
            
        }
    
    
    e.preventDefault();
}

function createitem(text)
{
 

    // create li
    const li= document.createElement('li');
    li.className='list-group-item list-group-item-secondary';
    li.appendChild(document.createTextNode(text));

    // create a
    const a =document.createElement('a');
    a.classList='delete-item float-right';
    a.setAttribute('href','#');
    a.innerHTML='<i class="fas fa-times"></i>';

    // add a to li
    li.appendChild(a);

    // add li to ul
    taskList.appendChild(li);
    
    
}

// add new item
function addNewItem(e){
       
    if(input.value ===''){
        alert('add new item');
    }
    createitem(input.value);
    
    setItemToLS(input.value);
    // clear input
    input.value='';

    e.preventDefault();

}
