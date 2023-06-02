import classnames from 'classnames'
import Text from '../../atoms/Text/Text'
import './style.css'

const FooterBar = () => {

    

    return (
        <footer className={footerClasses}>
            <Text text={'Todos los derechos reservados'} />
        </footer>
    )
}

export default FooterBar