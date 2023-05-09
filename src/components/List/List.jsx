import AddCardButton from '../AddCardButton/AddCardButton'
import css from './List.module.css'

const List = props => {
	const {type, title, tasks} = props
	console.log (props)
		return (
		<div className={css.list}>
			<h2 className={css.listTitle}>{title}</h2>
			{tasks.map (task => {
				return <div> {task.title}</div> })}
			<AddCardButton />
		</div>
	)
}

export default List