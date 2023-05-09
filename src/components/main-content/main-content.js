import Board from '../Board/Board'
import css from './main-content.module.css'

const Main = (props) => {
	return (
		<main className={css.main}>
			<Board {...props}/>
		</main>
	)
}

export default Main