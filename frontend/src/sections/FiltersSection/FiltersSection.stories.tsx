import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import { defaultFilters, type LeaderboardFilters } from '../../utils/filters';
import { FiltersSection } from './FiltersSection';

const meta = {
  component: FiltersSection,
  tags: ['ai-generated'],
  decorators: [
    (Story) => (
      <div className="bg-bg-dark p-6 text-slate-100">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof FiltersSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    filters: defaultFilters,
    resultCount: 10,
    onFiltersChange: () => {},
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByText('Filters')).toBeVisible();
    await expect(canvas.getByText('10 results')).toBeVisible();
  },
};

export const Filtered: Story = {
  args: {
    filters: {
      ...defaultFilters,
      time: 'year',
      team: 'Sales',
      region: 'Prague',
      search: 'Jan',
    },
    resultCount: 1,
    onFiltersChange: () => {},
  },
};

export const Interactive: Story = {
  args: {
    filters: defaultFilters,
    resultCount: 4,
    onFiltersChange: () => {},
  },
  render: () => {
    const [filters, setFilters] = useState<LeaderboardFilters>(defaultFilters);

    return (
      <FiltersSection
        filters={filters}
        resultCount={4}
        onFiltersChange={setFilters}
      />
    );
  },
};
