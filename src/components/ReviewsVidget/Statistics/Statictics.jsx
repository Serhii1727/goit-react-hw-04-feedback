import PropTypes from 'prop-types';
import Notification from './Notification';
import { StatisticsContainer, ResultStatistics } from './Statistics.styled';


const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return (
        <StatisticsContainer className="Statistics-container">
            {good > 0 || neutral > 0 || bad > 0 ? <ResultStatistics>
                <p>Good: {good}</p>
                <p>Neutral: {neutral}</p>
                <p>Bad: {bad}</p>
                <p>Total: {total()}</p>
                <p>Positive feedback: {!good ? 0 : positivePercentage()}%</p>
            </ResultStatistics> : <Notification message="There is no feedback" />}


        </StatisticsContainer>
    )
}

export default Statistics;

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.func.isRequired,
    positivePercentage: PropTypes.func.isRequired,
}