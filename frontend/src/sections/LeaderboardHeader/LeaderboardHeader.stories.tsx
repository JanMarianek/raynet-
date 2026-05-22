import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import { LeaderboardHeader } from './LeaderboardHeader';

const meta = {
  component: LeaderboardHeader,
  tags: ['ai-generated'],
  decorators: [
    (Story) => (
      <div className="bg-slate-950 p-6 text-slate-100">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof LeaderboardHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TopTen: Story = {
  args: {
    totalPlayers: 10,
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByText('TOP 10')).toBeVisible();
  },
};

export const CompactRanking: Story = {
  args: {
    totalPlayers: 5,
  },
};
