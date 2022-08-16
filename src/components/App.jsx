import { Component } from 'react';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';
import Statistics from './Statistics';
import Notification from './Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  categories = Object.keys(this.state);

  onLeaveFeedback = e => {
    const name = e.target.name;
    this.setState(prevState => {
      return { [name]: prevState[name] + 1 };
    });
  };

  countTotalFeedback() {
    return this.categories.reduce((acc, item) => acc + this.state[item], 0);
  }

  countPositiveFeedbackPercentage() {
    return (
      this.countTotalFeedback() > 0 &&
      Math.floor((this.state.good / this.countTotalFeedback()) * 100)
    );
  }

  render() {
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            feedbackCategories={this.categories}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() <= 0 ? (
            <Notification message="There is no Feedback" />
          ) : (
            <Statistics
              options={this.state}
              feedbackCategories={this.categories}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </>
    );
  }
}