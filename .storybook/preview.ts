import type { Preview } from "@storybook/react";
import '../src/index.css';

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
        backgrounds: {
            values: [
                {
                    name: 'Windows Vista Aero',
                    value: 'linear-gradient(to bottom, var(--color-vista-dark) 0%, var(--color-vista-primary) 30%, var(--color-vista-light) 70%, var(--color-vista-lightest) 100%)'
                },
                {
                    name: "Light",
                    value: "#eaeaea"
                },
                {
                    name: "Dark",
                    value: "#2e2e2e"
                }
            ],
            default: "Windows Vista Aero"
        }
    },
};

export default preview;
