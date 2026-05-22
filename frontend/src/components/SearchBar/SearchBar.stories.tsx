import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import { SearchBar } from './SearchBar';

const meta = {
  component: SearchBar,
  tags: ['ai-generated'],
  decorators: [
    (Story) => (
      <div className="max-w-md bg-bg p-6 text-slate-100">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof SearchBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Empty: Story = {
  args: {
    value: '',
    onChange: () => {},
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByPlaceholderText('Search by name')).toBeVisible();
  },
};

export const Filled: Story = {
  args: {
    value: 'Jan',
    onChange: () => {},
  },
  render: () => {
    const [value, setValue] = useState('Jan');

    return <SearchBar value={value} onChange={setValue} />;
  },
};
