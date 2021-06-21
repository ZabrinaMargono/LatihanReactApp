import './App.css'
import React, {Component} from "react";
import Welcome from './components/welcome/welcome';

//const App = () =>
//{
/*return <h1>Hello World</h1>*/
/*return(
<div>
  <h1>Hello World</h1>
  <h3>Welcome to Our Kingdom</h3>
</div>
);
*/
/*return (
  <>
    <h1>Hello World</h1>
    <h3>Welcome to Our Kingdom</h3>
  </>
);*/
/*return (
  <div className = "container">
  <h1>Hello World</h1>
  <h3>Welcome to Our Kingdom</h3>
  </div>
);*/

/*const fullName="Paul Kim";

return(
  <>
    <h1>Hello World</h1>
    <h3>Welcome {fullName}</h3>
  </>
);*/

/*const student1="Paul Kim";
const student2="Jae Park";
const student3="Kevin Moon";

return(
  <>
    <h1>Welcome to Our Kingdom</h1>
    <h3>Welcome {student1}</h3>
    <h3>Welcome {student2}</h3>
    <h3>Welcome {student3}</h3>
  </>
);*/

/*const student1="Paul Kim";

return(
  <>
    <h1>Welcome to Our Kingdom</h1>
    <h3>Welcome {student1}</h3>
    <h3>Welcome {student1}</h3>
    <h3>Welcome {student1}</h3>
  </>
)
};*/

/*class App extends Component{
  render(){
  const fullName = "Paul Kim"
  return(
  <>
    <h1>Welcome to Our Kingdom</h1>
    <h3>Welcome {fullName}</h3>
    <h3>Welcome {fullName}</h3>
    <h3>Welcome {fullName}</h3>
  </>
  );
}
}*/
/*
class Welcome extends Component{
  render(){
    const fullName = "Paul Kim";
      return <h3>Welcome {fullName}</h3>
  }
}*/

class App extends Component{
  render(){
    const fullName ="Paul Kim";
    return (
      <>
      <h1>Welcome to Our Kingdom</h1>
      <Welcome/>
      <Welcome/>
      </>
    );
  }
}

export default App;

