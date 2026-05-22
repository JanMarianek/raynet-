import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import { players } from '../../data/leaderboard';
import { RankingTableRow } from './RankingTableRow';

const meta = {
  component: RankingTableRow,
  tags: ['ai-generated'],
  decorators: [
    (Story) => (
      <div className="bg-bg-dark p-6 text-slate-100">
        <table className="w-full min-w-[980px] border-collapse text-left">
          <tbody className="divide-y divide-white/10">
            <Story />
          </tbody>
        </table>
      </div>
    ),
  ],
} satisfies Meta<typeof RankingTableRow>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Collapsed: Story = {
  args: {
    player: players[3],
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByText('Lucie Králová')).toBeVisible();
  },
};

export const Expanded: Story = {
  args: {
    player: players[3],
  },
  play: async ({ canvas, userEvent }) => {
    await userEvent.click(canvas.getByLabelText('Show Lucie Králová graph'));
    await expect(canvas.getByText('Progress graph')).toBeVisible();
    await expect(canvas.getByRole('button', { name: 'Last year' })).toBeVisible();
  },
};
