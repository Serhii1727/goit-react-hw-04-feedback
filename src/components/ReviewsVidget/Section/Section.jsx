import PropTypes from 'prop-types';
import { Title } from './Section.styled'
const Section = ({ title, children }) => {
    return (
        <div>
            <Title>{title}</Title>
            {children}
        </div>

    )
}

export default Section;

Section.propTypes = {
    title: PropTypes.string.isRequired,
}