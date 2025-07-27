import './Content.scss';
const Content = () => {
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