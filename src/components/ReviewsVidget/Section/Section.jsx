import PropTypes from 'prop-types';
import { ContainerSection, Title } from './Section.styled'
const Section = ({ title, children }) => {
    return (
        <ContainerSection className='Container-section'>
            <Title className='Title'>{title}</Title>
            {children}
        </ContainerSection>

    )
}

export default Section;

Section.propTypes = {
    title: PropTypes.string.isRequired,
}