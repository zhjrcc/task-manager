import Button from "../Button"
import useTask from "./useTask"

function TaskAdd() {
  const {
    actions: { addTask },
  } = useTask()

  const handleAddTask = (e) => {
    e.preventDefault()
    addTask(e.target.title.value)
    e.target.reset()
  }

  return (
    <li className="card">
      <header className="card-header card-header-new">
        <form className="card-title-form" onSubmit={handleAddTask}>
          <input
            type="text"
            className="card-title card-title-input"
            name="title"
            placeholder="Add new task"
          />
          <Button icon="plus" label="Add task" />
        </form>
      </header>
    </li>
  )
}

export default TaskAdd
