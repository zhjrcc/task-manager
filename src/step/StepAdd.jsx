import Button from "../Button"
import useTask from "../task/useTask"

function StepAdd({ taskId }) {
  const {
    actions: { addStep },
  } = useTask()

  const handleAddStep = (e) => {
    e.preventDefault()
    addStep(taskId, e.target.step.value)
    e.target.reset()
  }
  return (
    <li className="step add-step">
      <form onSubmit={handleAddStep} className="step-form">
        <input
          type="text"
          className="step-input"
          placeholder="Add new step"
          name="step"
        />
        <Button className="step-button" icon="plus" label="Add new step" />
      </form>
    </li>
  )
}
export default StepAdd
