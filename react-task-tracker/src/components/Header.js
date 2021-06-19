import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title}) => {
    const onClick = (e) =>{
        console.log('Click')
    }
    
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color='green' text='Add'
            onClick={onClick}/>
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

export default Header

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

//CSS using JS
/* const headingStyle = { 
    color: 'red', 
    backgroundColor:'black'
} */