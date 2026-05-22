import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import { rest } from '../../data/leaderboard';
import { RankingTableSection } from './RankingTableSection';

const meta = {
  component: RankingTableSection,
  tags: ['ai-generated'],
  decorators: [
    (Story) => (
      <div className="bg-bg-dark p-6 text-slate-100">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof RankingTableSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    players: rest,
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByText('Pořadí 4.–10.')).toBeVisible();
    await expect(canvas.getByText('Lucie Králová')).toBeVisible();
  },
};

export const ShortList: Story = {
  args: {
    players: rest.slice(0, 3),
  },
};
