import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import { Sidebar } from './Sidebar';

const meta = {
  component: Sidebar,
  tags: ['ai-generated'],
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const CssCheck: Story = {
  play: async ({ canvas }) => {
    const searchButton = canvas.getByTitle('Search');
    await expect(getComputedStyle(searchButton).backgroundColor).toBe('rgba(255, 255, 255, 0.1)');
  },
};
