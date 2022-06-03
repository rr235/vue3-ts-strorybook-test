import { defineComponent } from "vue";

export interface Story {
  components: { [Component: string]: ReturnType<typeof defineComponent> };
  props: string[];
  template: string;
  data?: () => Record<string, unknown>;
  methods?: Record<string, unknown>;
  computed?: Record<string, unknown>;
  created?: () => void;
  mounted?: () => void;
}

export interface Factory<Args> {
  (args: Args, { argTypes }: { argTypes: Record<string, unknown> }): Story;
  args: Args;
  parameters: Record<string, unknown>;
  storyName?: string;
}
