





// let mainDiv= document.getElementById("container");
// let heading= React.createElement("h1",null,"Muhammad Hussain Tahir");



// hello =()=> console.log("Muhammad Hussian Tahir")


// let button=React.createElement('button',{onClick:  hello},'Click to Print');
// let mainChild =React.createElement('div',null,heading,heading,button);

// ReactDOM.render(mainChild,mainDiv);


// let mainDiv= document.getElementById("container");
// let mainDivForJs= document.getElementById("js");

// setInterval(()=>{
//     let inputTag=document.createElement('input');
//     mainDivForJs.innerHTML=`JS:  ${new Date()}`;
//     mainDiv.appendChild(inputTag);


//     let inputTagReact=React.createElement('input');
//     let heading=React.createElement('div',null,`React : ${new Date()}`,inputTagReact);
//     ReactDOM.render(heading,mainDiv);



// },2000);


/*
const mainDiv=document.getElementById('container');
let array=JSON.parse( localStorage.getItem('todo'))||[];
console.log(array);

let add=()=>{
    let newTodo=input.value;
    console.log(newTodo);
    localStorage.setItem('todo',JSON.stringify(array));

    if(newTodo){
    array.push(newTodo);
    input.value='';
    render();
    }
}
let deleteTodo=(todoIndex)=>{
    array.splice(todoIndex,1);
    render();
}
let editTodo=()=>{

}

let render=()=>{

    ReactDOM.render(
        <div>
            <h1>Todo App wit React and JSX</h1>
            <input type="text" id='input'/>
            <button onClick={()=>add()}>Add todo</button>

            <ul>
                {
               
                    array.map((todo,key)=>{
                        
                        return    <li id={key}> {todo}
                            <button onClick={()=>deleteTodo(key)}>delete todo</button>
                     
                        </li>
                        
                    })
                }
            </ul>

            </div>,mainDiv);

}
render();*/

////////////////////// Working Code ///////////////////////////////////

let mainDiv =document.getElementById("root"); 
let array =JSON.parse(localStorage.getItem('todo'))|| [];

//component 1

const Heading=(props)=>{
return (<h1>{ props.text}</h1>);

    }

//component 2

let TodoList=(props)=>{
return (<div>
        <Heading text={props.HeadingText}/>
     <ul>
          
        {

            props.array && props.array.length > 0?
            props.array.map((todo,key) =>{
                
            return<li key={key}>{todo}
                     <button onClick={()=>del(key)}>Delete</button>
                     <button onClick={()=>editTodo(key,todo)}>Edit</button></li>
            
            })
            :
            <p>nothing to show</p>
        }
    </ul>
    </div>)
}

let add=()=>{
      let newTodo= input.value;

      console.log(newTodo);
      console.log(array);
      localStorage.setItem('todo',JSON.stringify(array));
      input.value='';
      if(newTodo){
      array.push(newTodo);
      
      render();
 }
}
let del =(todoIndex)=>{
   array.splice(todoIndex, 1);
   render();

}
let editTodo =(todoIndex, todoText)=>{
    let newText =prompt('Edit Todo',todoText);
    if(newText){
    array.splice(todoIndex, 1 , newText);
    render();
}
}

let render =()=>{
    
  
    
    localStorage.setItem('todo',JSON.stringify(array));
    ReactDOM.render(
    <div>
    


    <Heading text='Todo App Using React And Jsx'/>

  


      <input id="input"/>
      <button onClick={()=>add()}>Add</button>

<TodoList array={array} HeadingText='Customer'/>
<TodoList array={array} HeadingText='Sales '/>
      
     
    

   </div>

   ,mainDiv);
}
render();




// }
// ReactDOM.render(<Heading text='Hello world' react='Lets start'/>,document.getElementById('root'));


















