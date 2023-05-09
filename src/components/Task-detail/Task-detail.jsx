import { useRouteMatch, Link } from 'react'
import { LIST_TYPES, LIST_COPY } from '../../config'
import css from './Task-detail.module.css'

const TaskDetail = (props) => {
	const match = useRouteMatch()
	const {taskId} = match.params
	const {tasks, setTasks} = props
	const task = tasks.find(task => task.id === taskId)

	const handleChange = (e) => {
		const newStatus = e.target.value
		const updatedTasks = tasks.map(task => {
			if (task.id === taskId) {
				return {...task, status: newStatus}
			}
			return task
		})
		setTasks(updatedTasks)
	}

	const renderTaskDetails = () => {
		return (
			<>
				<div className={css.header}>
					<h2 className={css.title}>{task.title}</h2>
					<p className={css.status}>{LIST_COPY[task.status]}</p>
				</div>
				<p>Description: {task.description || '(no description)'}</p>
				<p className={css.label}>Change status:</p>
				<select className={css.select} onChange={handleChange} value={task.status}>
					{Object.values(LIST_TYPES).map(list => {
						return <option key={list} value={list}>{LIST_COPY[list]}</option>
					})}
				</select>
			</>
		)
	}

	const renderEmptyState = () => {
		return (
			<div className={css.emptyState}>
				<h2>Task with ID <em>{taskId}</em> was not found</h2>
			</div>
		)
	}

	return (
		<>
			<Link to='/' className={css.homeLink}>&#8592; Back</Link>
			<div className={css.wrapper}>
				{task ? renderTaskDetails() : renderEmptyState()}
			</div>
		</>
	)
}

export default TaskDetail