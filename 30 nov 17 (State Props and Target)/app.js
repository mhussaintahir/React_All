// const mainDiv = document.getElementById("mainDiv");
// let arr = JSON.parse(localStorage.getItem("List")) || [];

// let add = () => {
//     let newTodo = input.value;
//     if (newTodo) {
//         arr.push(newTodo);
//         render();
//     }
//     input.value = " ";

// }

// let deleteTodo = (dataIndex) => {
//     arr.splice(dataIndex, 1);
//     render();
// }

// let deleteAll = () => {
//     arr = [];
//     render();
// }

// let editTodo = (dataIndex) => {
//     let editPrompt = prompt("Enter edit", arr[dataIndex]);
//     save(dataIndex, editPrompt);
// }

// let save = (dataIndex, editData) => {
//     if (editData) {
//         arr.splice(dataIndex, 1, editData);
//         render();
//     }
// }

// // COMPONENTS

// const Heading = (props) => {
//     return (
//         <div>
//             <h1>{props.text} {props.type}</h1>
//         </div>
//     )
// }

// const ButtonCom = (props) =>{
//    return <button onClick={props.func}>{props.text}</button>
// }

// const TodoList = (props) => {
//     return  (
//         <div>
//             <Heading text={props.text}/>
//             <ul>
//                 {
//                     props.arr && props.arr.length > 0 ?
//                     props.arr.map((data, i) => 
//                         {
//                             return (
//                                 <li key={i}>
//                                     {data} &nbsp;
//                                     <ButtonCom text="Delete" func={()=>deleteTodo(i)} />
//                                     <ButtonCom text="Edit" func={()=> editTodo(i)} />                                    
//                                 </li>

//                             )
//                         }
//                     )
//                     : <p>Nothing to show!</p>
//                 }
//             </ul>
//         </div>
//         )       
// }


// let render = () => {
//     localStorage.setItem("List", JSON.stringify(arr));
//     ReactDOM.render(
//         <div>
//             <Heading text="Todo List" type="with JSX" />
//             <input type="text" id="input" />
//             <ButtonCom text="Add Task" func={()=>add()} />
//             <ButtonCom text="Delete All" func={()=>deleteAll()} />                
//             <TodoList arr={arr} text="Customers"/>
//             <TodoList arr={arr} text="Employees"/>            
//         </div>,

//         mainDiv);
// }

// render();



// // ReactDOM.render(<Heading text="Hello World" type="with JSX" />, mainDiv);
// import Component from React ;

/*class App extends React.Component {
    
        
    render() {
  
        return (
            <div> 
                <h1>Hussain {this.props.greeting}</h1>

                <button onClick={() => this.props.changeStat}>Greet Me</button>  
             
            </div>
        )
    }
}

class Main extends React.Component{
    state={
        greeting:'Hey'
    }
    render(){
        return 
        <div> 
            <App greet={this.state.greeting} }/>
            
    
          </div>
    }
  
}

const mainDiv = document.getElementById("mainDiv");

ReactDOM.render(<Main/>, mainDiv);*/


class App extends React.Component {

    render(props){
        return (
            <div>
            <h1>Hussian{this.props.greets}</h1>
            <button onClick={() => this.props.changeStat()}>Greet Me</button>  

            </div>
        )
    }
}



class Main extends React.Component {

 

    state = {
        greeting : ' hey'
    }

    render(){
        return (
            <div>
            {/*<App greets = {this.state.greeting} changeStat={()=>this.setState({greeting: "Hello"})} />*/}
                
                <p>Enter Your Name</p>
                <input onChange={(event)=> this.setState({value : event.target.value})}/>
               <h1>{this.state.value}</h1> 
           
           
           
            </div>
        )
    }
}

const dom = document.getElementById('mainDiv');
ReactDOM.render(<Main/>,dom);




