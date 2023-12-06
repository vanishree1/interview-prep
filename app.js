// import React from 'react';
// import ReactDom from 'react-dom';
// const Child = ({props}) => {
//     return (
//         <div>
//             {props.text}
//         </div>
//     )
// }
// const  Parent = () => {
//     return (
//         <div>
//             <Child text={'treat to eyes'} />
//         </div>
//     )
// }
const domNode = document.getElementById('root');
const root = ReactDOM.createRoot(domNode)
root.render(React.createElement("h1", {}, "render react"))
