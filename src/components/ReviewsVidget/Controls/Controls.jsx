import PropTypes from 'prop-types';
import { Feedback, Title, ButtonsContainer } from './Controls.styled';

const Controls = ({ title }) => {
    return (
        <Feedback className="Feedback">
            <Title className='Title'>{title}</Title>
            <ButtonsContainer className='Buttons-container'>
                <button className='button-good' type='butoon'>Good</button>
                <button className='button-neutural' type='butoon'>Neutural</button>
                <button className='button-bad' type='butoon'>Bad</button>
            </ButtonsContainer>

        </Feedback>
    )
}

export default Controls;

Controls.propTypes = {
    title: PropTypes.string.isRequired,
}