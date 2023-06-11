import React from 'react';
import css from './Statistics.module.css';

class Statistics extends React.Component {
  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;
    return (
      <div className={css.ststisticsList}>
        <p>Good:{good}</p>
        <p>Neutral:{neutral}</p>
        <p>Bad:{bad}</p>
        <p>Total:{total}</p>
        <p>Total:{positivePercentage}%</p>
      </div>
    );
  }
}
export default Statistics;
