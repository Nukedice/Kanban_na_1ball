import {LIST_TYPES, LIST_COPY} from '../../config'
import List from '../List/List'
import css from './Board.module.css'
import TaskExample from '../tasks/task'

const Board = (props) => {
	const {tasks, setTasks} = props
	console.log (tasks)
	return (
		<div className={css.board}>
		{
			Object.values(LIST_TYPES).map(type => {
				const listTasks = tasks.filter(task => task.status === type)
				return (
					<List
						key={LIST_COPY[type]}
						type={type}
						title={LIST_COPY[type]}
						tasks={listTasks }
					/>
				)
			})
		}
		</div>
	)
}

export default Board