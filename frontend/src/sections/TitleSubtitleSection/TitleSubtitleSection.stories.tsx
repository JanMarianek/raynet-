import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import { TitleSubtitleSection } from './TitleSubtitleSection';

const meta = {
  component: TitleSubtitleSection,
  tags: ['ai-generated'],
  decorators: [
    (Story) => (
      <div className="bg-bg-dark p-6 text-slate-100">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof TitleSubtitleSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TopTen: Story = {
  args: {
    totalPlayers: 10,
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByText('Žebříček nejlepších')).toBeVisible();
    await expect(canvas.getByText('TOP 10')).toBeVisible();
  },
};

export const TopFive: Story = {
  args: {
    totalPlayers: 5,
  },
};
