import React, { Component } from 'react';
import { Layout } from './App.styled';
import { Section, FeedbackOptions, Statistics, Notification } from 'components';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  totalFeedback = 0;
  positiveFeedbackPercentage = 0;

  addFeedback = event => {
    const { id } = event.target;
    this.setState(() => {
      return { [id]: this.state[id] + 1 };
    });
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };

  countTotalFeedback = () => {
    this.setState(({ good, neutral, bad }) => {
      this.totalFeedback = good + neutral + bad;
    });
  };
  countPositiveFeedbackPercentage = () => {
    this.setState(({ good }) => {
      this.positiveFeedbackPercentage = Number(
        ((good / this.totalFeedback) * 100).toFixed(0)
      );
    });
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <Layout>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={{ good: 'Good', neutral: 'Neutral', bad: 'Bad' }}
            onLeaveFeedback={this.addFeedback}
          ></FeedbackOptions>
        </Section>

        <Section title="Statistics">
          {this.totalFeedback ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.totalFeedback}
              positivePercentage={this.positiveFeedbackPercentage}
            ></Statistics>
          ) : (
            <Notification message="There is no feedback"></Notification>
          )}
        </Section>
      </Layout>
    );
  }
}

export { App };
