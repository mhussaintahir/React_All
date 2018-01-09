





let mainDiv= document.getElementById("container");
let heading= React.createElement("h1",null,"HAZRAT ABU UBAIDA BIN JARRAH RZ");



hello =()=> console.log("HAZRAT ABU UBAIDA BIN JARRAH RZ")


// let button=React.createElement('button',{onClick:  hello},'Click to Print');
let mainChild =React.createElement('div',null,heading);

ReactDOM.render(mainChild,mainDiv);


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
