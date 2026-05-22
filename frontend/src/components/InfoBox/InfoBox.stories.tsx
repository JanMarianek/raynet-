import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import { InfoBox } from './InfoBox';

const meta = {
  component: InfoBox,
  tags: ['ai-generated'],
  decorators: [
    (Story) => (
      <div className="max-w-48 bg-slate-950 p-4">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof InfoBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Deals: Story = {
  args: {
    label: 'Obchody',
    value: '42',
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByText('42')).toBeVisible();
  },
};

export const Revenue: Story = {
  args: {
    label: 'Revenue',
    value: '420 000 Kč',
  },
};
