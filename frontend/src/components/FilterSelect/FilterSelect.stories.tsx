import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import { FilterSelect } from './FilterSelect';

const meta = {
  component: FilterSelect,
  tags: ['ai-generated'],
  decorators: [
    (Story) => (
      <div className="max-w-xs bg-bg p-6 text-slate-100">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof FilterSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Team: Story = {
  args: {
    label: 'Team',
    value: 'Sales',
    options: [
      { value: 'all', label: 'All teams' },
      { value: 'Sales', label: 'Sales' },
      { value: 'Account', label: 'Account' },
    ],
    onChange: () => {},
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByLabelText('Team')).toHaveValue('Sales');
  },
};

export const Interactive: Story = {
  args: {
    label: 'Region',
    value: 'all',
    options: [
      { value: 'all', label: 'All regions' },
      { value: 'Prague', label: 'Prague' },
      { value: 'Brno', label: 'Brno' },
    ],
    onChange: () => {},
  },
  render: () => {
    const [value, setValue] = useState('all');

    return (
      <FilterSelect
        label="Region"
        value={value}
        onChange={setValue}
        options={[
          { value: 'all', label: 'All regions' },
          { value: 'Prague', label: 'Prague' },
          { value: 'Brno', label: 'Brno' },
        ]}
      />
    );
  },
};
