import './App.css';
import TaskForm from './Components/TaskForm/TaskForm';
import Home from './Components/Home/Home';

function App() {

  return (
    <>
      <div className='app_container flex justify-center items-center py-8'>
        <Home></Home>
        <TaskForm></TaskForm>


      </div>
    </>
  )
}

export default App
