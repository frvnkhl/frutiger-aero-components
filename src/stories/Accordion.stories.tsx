import { Meta, type StoryObj } from "@storybook/react";
import { items } from "@app/lib/testData.ts";
import { Accordion } from "@app/components/Accordion";

const meta = {
    title: 'Example/Accordion',
    component: Accordion,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'padded',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    argTypes: {
        items: { // Add this to your argTypes
            control: 'object', // 'object' allows editing of arrays and objects
            description: 'Accordion items',
            table: {
                type: { summary: 'Item[]' },
            },
        },
    },
    args: {
        className: 'bg-white'
    }
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        items: items
    }
}