import Button from "./Button.vue";
import * as Options from './Button.options'
import { Meta, StoryFn } from "@storybook/vue3";

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: "Button",
  component: Button,
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: Options.variants,
      },
    },
    size: {
      control: {
        type: "select",
        options: Options.sizes,
      }
    },
    disabled: {
      control: {
        type: "boolean"
      }
    }
  },
} as Meta<typeof Button>;

const template = `
  <Button v-bind="args">
    {{ args.content }}
  </Button>
`;

const Template: StoryFn<typeof Button> = (args) => ({
  components: { Button },
  setup() {
    return { args };
  },
  template,
});

export const Dark = Template.bind({});
Dark.args = { content: "Dark Button", variant: Options.variants[0], size: Options.sizes[0] };

export const Light = Template.bind({});
Light.args = { content: "Light Button", variant: Options.variants[1], size: Options.sizes[1] };
