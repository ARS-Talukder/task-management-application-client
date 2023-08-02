import { useEffect, useState } from 'react';
import TimeHooks from '../../hooks/TimeHooks';
import Task from './Task';

const Home = () => {
    const [tasks, setTasks] = useState([]);
    const time = TimeHooks();
    useEffect(() => {
        fetch("http://localhost:5000/tasks")
            .then(data => data.json())
            .then(data => setTasks(data));
    }, [])
    // console.log(tasks)

    return (
        <div className='home_container w-1/3'>
            <h1 className='time_container text-center text-5xl font-bold mb-8'>{time}</h1>
            {
                tasks.map((task) => <Task key={task._id} task={task}></Task>)
            }

        </div>


    );
};

export default Home;