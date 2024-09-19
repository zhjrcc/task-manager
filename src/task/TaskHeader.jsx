function TaskHeader({ task, isEditable, setEditable, editTask }) {
  const { title } = task

  const handleEditTask = (evt) => {
    evt.preventDefault()
    editTask(task.id, evt.target.title.value)
    setEditable(false)
  }

  if (isEditable) {
    return (
      <header className="card-header">
        <form className="card-title-form" onSubmit={handleEditTask}>
          <input
            className="card-title card-title-input"
            name="title"
            defaultValue={title}
          />
          <button className="icon-button">
            <img src="icons/plus.svg" alt="Add task" />
          </button>
        </form>
      </header>
    )
  }
  return (
    <header className="card-header">
      <p className="card-title">{title}</p>
    </header>
  )
}
export default TaskHeader
