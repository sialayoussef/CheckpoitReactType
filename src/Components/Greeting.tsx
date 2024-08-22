interface propsComponent{
    name : string
}


const Greeting = ({ name } : propsComponent) => { 
    
return <div>Hello, {name}!</div>;
 };
 export default Greeting;