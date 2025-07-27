import './Content.scss';
import { useContext } from 'react';
import DataContext from '../../ContextAPI/UseContext';
const Content = () => {
  const data = useContext(DataContext);
  console.log("Data in Content", data);
  return (
    <main>
      <div className='Content'>
        <input id="InputTask" type="text" placeholder="Enter the task" />
        <button>Add Task</button>
      </div>
    </main>
  )
}

export default Content