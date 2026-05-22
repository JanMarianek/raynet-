import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import { businessCaseRows } from '../../../.storybook/msw-handlers';
import { DataTable } from './DataTable';

const meta = {
  component: DataTable,
  tags: ['ai-generated'],
} satisfies Meta<typeof DataTable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithRows: Story = {
  args: {
    data: businessCaseRows,
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByText('BC-101')).toBeVisible();
  },
};

export const Empty: Story = {
  args: {
    data: [],
  },
};

export const SingleRow: Story = {
  args: {
    data: [businessCaseRows[0]],
  },
};
