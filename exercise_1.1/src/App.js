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
/*
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

const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }
  return (
    <div>
      button press history: {props.allClicks.join(' ')}
    </div>
  )
}

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
);

const App = () => {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [allClicks, setAll] = useState([]);

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'));
    setLeft(left + 1);
  }
  const handleRightClick = () => {
    setAll(allClicks.concat('R'));
    setRight(right + 1);
  }

  return (
    <div>
      {left}
      <Button handleClick={handleLeftClick} text ='Left'/>
      <Button handleClick={handleRightClick} text = 'Right'/>
      {right}
      <History allClicks={allClicks}/>
    </div>
  );
} 

/*
const App = () => {
  const [clicks, setClicks] = useState({left: 0, right: 0});

  const handleLeftClick = () => {
    const newClicks = { ...clicks, left: clicks.left + 1};
    setClicks(newClicks); 
  }
  const handleRightClick = () => {
    const newClicks = { ...clicks, right: clicks.right + 1};
    setClicks(newClicks);
  }

  return (
    <div>
      {clicks.left}
      <button onClick={handleLeftClick}>Left</button>
      <button onClick={handleRightClick}>Right</button>
      {clicks.right}
    </div>
  );
}
*/
const App = () => {
  const [value, setValue] = useState(10)

  const setToValue = (newValue) => {
    console.log('value now', newValue)
    setValue(newValue)
  }

  return (
    <div>
      {value}
      <button onClick={() => setToValue(1000)}>
        thousand
      </button>
      <button onClick={() => setToValue(0)}>
        reset
      </button>
      <button onClick={() => setToValue(value + 1)}>
        increment
      </button>
    </div>
  )
}
export default App;
