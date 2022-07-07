import PropTypes from 'prop-types';
import { StatisticsContainer, StatisticsTitle } from './Statistics.styled';

const Statistics = ({ title, statisticsGood, statisticsNeutral, statisticsBad }) => {
    return (
        <StatisticsContainer className="Statistics-container">
            <StatisticsTitle className='Title'>{title}</StatisticsTitle>
            <div>
                <p>Good: {statisticsGood}</p>
                <p>Neutral: {statisticsNeutral}</p>
                <p>Bad: {statisticsBad}</p>
            </div>

        </StatisticsContainer>
    )
}

export default Statistics;

Statistics.propTypes = {
    title: PropTypes.string.isRequired,
    statisticsGood: PropTypes.number.isRequired,
    statisticsNetural: PropTypes.number.isRequired,
    statisticsBad: PropTypes.number.isRequired,
}