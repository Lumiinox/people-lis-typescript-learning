import './App.css';
import React, { useState } from 'react';
import List from "./components/Lists";
import AddToList from './components/AddToList';

export interface IState{
  people: {
    name:string;
    age:number;
    url:string;
    note?:string; 
  }[]
}

function App() {

  const [people, setPeople] = useState<IState["people"]>([{
    name: "Zero Two",
    url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.HRAe4jWLegCQFxzoEIP38AHaHP%26pid%3DApi&f=1",
    age: 18,
    note: "Chaotic",
  }])

  return (
    <div className="App">
      <h1>People Invited to my party</h1>
      <List people={people}/>
      <AddToList people={people} setPeople={setPeople}/>
    </div>
  );
}

export default App;
