import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import App from './App';

const meta = {
  component: App,
  tags: ['ai-generated'],
} satisfies Meta<typeof App>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoadedData: Story = {
  play: async ({ canvas }) => {
    await expect(await canvas.findByText('Žebříček nejlepších')).toBeVisible();
  },
};
