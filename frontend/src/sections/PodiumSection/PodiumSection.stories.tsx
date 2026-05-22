import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import { topThree } from '../../data/leaderboard';
import { PodiumSection } from './PodiumSection';

const meta = {
  component: PodiumSection,
  tags: ['ai-generated'],
  decorators: [
    (Story) => (
      <div className="bg-bg-dark p-6 text-slate-100">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof PodiumSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    players: topThree,
  },
  play: async ({ canvas }) => {
    await expect(canvas.getAllByText('Jan Zámostný').length).toBeGreaterThan(0);
    await expect(canvas.getAllByText('Tereza Nováková').length).toBeGreaterThan(0);
  },
};

export const MissingThirdPlace: Story = {
  args: {
    players: topThree.slice(0, 2),
  },
};
