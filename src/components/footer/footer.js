import './footer.css'
function Footer (props) {
    const tasks = props
    const finishedTasks = props.tasks.filter(task => task.status === 'Finished')
    const finishedNum =  finishedTasks.length
    const activeNum = (props.tasks.length - finishedNum)
    return (
        <footer className='footer'>
            <div className="footer-item">Active tasks: {activeNum}</div>
            <div className="footer-item">Finished tasks: {finishedNum}</div>
            <div className="footer-copyright">Kanban board by Vadim Galiullin, 2023</div>
        </footer>
    )
}
export default Footer;