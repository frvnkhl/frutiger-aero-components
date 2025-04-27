import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { NavBar, VistaStartOrb } from "@app/components/NavBar";
import { Button } from "@app/components/Button";
import { navItems } from "@app/lib/testData.ts";

const meta = {
    title: 'Example/NavBar',
    component: NavBar,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
        layout: 'fullscreen',
    },
    argTypes: {
        variant: {
            control: 'radio',
            options: ['default', 'blue', 'black', 'silver'],
        },
        items: { // Add this to your argTypes
            control: 'object', // 'object' allows editing of arrays and objects
            description: 'Navigation items',
            table: {
                type: { summary: 'NavItem[]' },
            },
        },
    },
    args: {
        actions: <Button variant="success" onClick={ fn() }>Sign In</Button>,
        logo: <VistaStartOrb/>
    },
} satisfies Meta<typeof NavBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        variant: 'default',
        items: navItems
    },
};

export const Blue: Story = {
    args: {
        variant: 'blue',
        items: navItems
    },
};

export const Black: Story = {
    args: {
        variant: 'black',
        items: navItems
    },
};

export const Silver: Story = {
    args: {
        variant: 'silver',
        items: navItems
    },
};
