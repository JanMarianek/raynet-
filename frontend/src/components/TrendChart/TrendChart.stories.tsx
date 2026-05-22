import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import { TrendChart } from './TrendChart';

const meta = {
  component: TrendChart,
  tags: ['ai-generated'],
  decorators: [
    (Story) => (
      <div className="w-80 bg-bg-dark p-4">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof TrendChart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Improving: Story = {
  args: {
    history: [6, 5, 4, 3, 2, 1],
  },
  play: async ({ canvasElement }) => {
    const path = canvasElement.querySelector('path');
    await expect(path).toHaveAttribute('stroke', '#A3E635');
  },
};

export const Large: Story = {
  args: {
    history: [4, 3, 2, 2, 1, 1],
    large: true,
  },
};

export const Stable: Story = {
  args: {
    history: [5, 5, 5, 5, 5, 5],
  },
};
