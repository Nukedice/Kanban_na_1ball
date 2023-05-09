import { useState } from "react"
import css from './Dropdown.module.css'

const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false)
    const handleClick = () => {
        setIsOpen(false)
    }
    return (
        <div className={css.container} onClick={() => setIsOpen(!isOpen)}>
                <img src={require('../img/profile-picture.svg').default} alt='mySvgImage' className={css.profile} />
                <button className={css.dropBtn}  onClick={handleClick}>&#9660;</button>
                <ul className={css.menu} hidden={!isOpen}>
                    <li className={css.dropItem}>Profile</li>
                    <li className={css.dropItem}>Logout</li>
                </ul>
        </div>
    )
}
export default Dropdown