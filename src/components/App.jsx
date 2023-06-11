import React, { Component } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import NotificationMessage from './Notification message/Notification message';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  addCountFeedback = e => {
    const name = e.currentTarget.name;
    this.setState(prevState => {
      return { [name]: prevState[name] + 1 };
    });
  };
  countTotalFeedback = () => {
    const totalFeedback = Object.values(this.state).reduce(
      (total, value) => total + value,
      0
    );
    return totalFeedback;
  };
  countPositiveFeedbackPercentage = () => {
    return parseInt((100 * this.state.good) / this.countTotalFeedback());
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div>
        <Section
          title="Please leave feedback"
          children={
            <FeedbackOptions
              options={this.state}
              onLeaveFeedback={this.addCountFeedback}
            />
          }
        />
        {this.countTotalFeedback() > 0 ? (
          <Section
            title="Statistics"
            children={
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={this.countTotalFeedback()}
                positivePercentage={this.countPositiveFeedbackPercentage()}
              />
            }
          />
        ) : (
          <NotificationMessage />
        )}
      </div>
    );
  }
}

export default App;
