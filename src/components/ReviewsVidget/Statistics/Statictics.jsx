import PropTypes from 'prop-types';
import { StatisticsContainer, StatisticsTitle } from './Statistics.styled';

const Statistics = ({ title }) => {
    return (
        <StatisticsContainer className="Statistics-container">
            <StatisticsTitle className='Title'>{title}</StatisticsTitle>
            <div>
                <p>Good: 3</p>
                <p>Netural: 2</p>
                <p>Bad: 2</p>
            </div>

        </StatisticsContainer>
    )
}

export default Statistics;

Statistics.propTypes = {
    title: PropTypes.string.isRequired,
}