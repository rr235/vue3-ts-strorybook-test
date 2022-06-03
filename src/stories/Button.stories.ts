import Button from "./Button.vue";
import * as Storybook from "@/types/stories";

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: "Button",
  component: Button,
};

const template = `
  <Button v-bind="$props">
    Content
  </Button>
`;
interface Args {
  content: string;
}

const Factory = <Storybook.Factory<Args>>(
  function (
    _args,
    { argTypes }: { argTypes: Record<string, unknown> }
  ): Storybook.Story {
    return {
      components: {
        Button,
      },
      props: Object.keys(argTypes),
      template,
    };
  }
);

export const Default = Factory.bind({});

Default.args = {
  content: "Some text",
};
