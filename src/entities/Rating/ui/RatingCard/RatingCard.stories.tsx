import type { Meta, StoryObj } from '@storybook/react';

import RatingCard from './RatingCard';

const meta: Meta<typeof RatingCard> = {
  title: 'entities/RatingCard',
  component: RatingCard,
};

export default meta;
type Story = StoryObj<typeof RatingCard>;

export const Default: Story = {
  args: {
    title: 'Как вам статья?',
    hasFeedback: true,
    feedbackTitle: 'Оставьте отзыв о статье',
    onSubmit: (rate: number, feedback?: string) => alert(`Submitted rate: ${rate}, feedback: ${feedback || ''}`),
    onCancel: (rate: number) => alert(`Submitted rate: ${rate}`),
  },
};

export const WithoutFeedback: Story = {
  args: {
    title: 'Как вам статья?',
    onSubmit: (rate: number, feedback?: string) => alert(`Submitted rate: ${rate}, feedback: ${feedback || ''}`),
  },
};
