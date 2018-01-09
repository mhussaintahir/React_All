
let mainDiv=document.getElementById('root');
let array=JSON.parse(localStorage.getItem('todo')) || [];

console.log(array);

let add=()=>{
let newTodo=input.value;
// array.push(newTodo);
localStorage.setItem('todo',JSON.stringify(array));

if(newTodo)
{
    array.push(newTodo);
    input.value='';
    render();
}
}


let render=()=>{
    localStorage.setItem('todo',JSON.stringify(array));
    ReactDOM.render(
        <div>
            <h1>TODO APP using React and JSX</h1>
            <input id='input'/>
            

        </div>

    ,mainDiv);
}
