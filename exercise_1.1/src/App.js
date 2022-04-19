import {useState} from 'react';

const Part = (props) => {
  return (
    <div>
      <p>
        {props.part} {props.exercises}
      </p>
    </div>
  );
};

const Hello = ({name, age}) => { 

  //const {name, age} = props.name;
  //const age = props.age;

  /*a helper function that returns age in years
  const bornYear = () => {
   const yearNow = new Date().getFullYear(); //get current year
   return yearNow - props.age; // return age in years
  }; */
  const bornYear = () => new Date().getFullYear() - age; //return age in years 

  return (
    <div>
      <p>
        <h1>Hello {name}, you are {age} years old</h1>
      </p>
      <p> So you were probably born in {bornYear()}</p>
    </div>
  );
}

const Content = () => {
  const part1 = 'Fundamentals of React';
  const part2 = 'Using props to pass data';
  const part3 = 'State of a component';
  const exercises1 = 10;
  const exercises2 = 7;
  const exercises3 = 14;
  return (
    <div> 
      <Part part = {part1} exercises = {exercises1}/>
      <Part part = {part2} exercises = {exercises2}/>
      <Part part = {part3} exercises = {exercises3}/>
      <p>
        Total: {exercises1 + exercises2 + exercises3}
      </p> 
    </div>
    
  )
}

const Header = () => {
  const course  =  'Full stack web development';
  return (
    <div>
      <h1>{course}</h1>
    </div>
  );
}

const App = () => {
  //counter initialized to 0
  const [counter, setCounter] = useState(0); //destructuring
  
  setTimeout(() => setCounter(counter + 1), 1000);

  console.log('rendering ... ',counter);
  const name = 'Max';
  const age = 18;

  return (
    <div>
      <Header />
      <Hello name = {name} age = {age}/>
      <Content />
      <div>{counter}</div>
    </div>
  
  );
}

export default App;
