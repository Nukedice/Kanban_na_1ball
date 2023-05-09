import './App.css';
import Header from './components/header/header.js';
import Footer from './components/footer/footer.js'
import MainContent from './components/main-content/main-content';
import { useState } from 'react';
import data from './mock.json'

function App() {
  const [tasks, setTasks] = useState(data)

  return (
    <div className="App">
      <Header />
      <MainContent tasks={tasks} setTasks={setTasks} />
      <Footer tasks={tasks}/>
    </div>
  );
}

export default App;
