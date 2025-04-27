import { Meta, StoryObj } from "@storybook/react";
import { Card } from "@app/components/Card";

const meta = {
    title: 'Example/Card',
    component: Card,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    argTypes: {
        contentBackground: {
            control: 'radio',
            options: ['transparent', 'white'],
        }
    },
    args: {
        children: (<>
            <h2>Header</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore
                et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi
                ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                in
                culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </>)
    }
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Transparent: Story = {
    args: {
        contentBackground: 'transparent'
    }
}

export const White: Story = {
    args: {
        contentBackground: 'white'
    }
}