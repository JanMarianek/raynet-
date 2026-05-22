import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import { NavbarSection } from './NavbarSection';

const meta = {
  component: NavbarSection,
  tags: ['ai-generated'],
  decorators: [
    (Story) => (
      <div className="bg-bg-dark p-6 text-slate-100">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof NavbarSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CurrentLeaderboard: Story = {
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('button', { name: 'Leaderboard' })).toHaveAttribute(
      'aria-current',
      'page',
    );
  },
};

export const WithUserPhoto: Story = {
  args: {
    user: {
      name: 'Tereza Nováková',
      avatarUrl: 'https://i.pravatar.cc/96?img=47',
    },
  },
};

export const ReportsCurrent: Story = {
  args: {
    currentPageId: 'reports',
  },
};
