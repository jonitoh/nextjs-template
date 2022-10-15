import { ComponentMeta, ComponentStory } from "@storybook/react";
import DummyCard, { Props } from "./DummyCard";
import { mockProps } from "./DummyCard.mocks";

export default {
    title: "templates/DummyCard",
    component: DummyCard,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {},
} as ComponentMeta<typeof DummyCard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof DummyCard> = (args) => <DummyCard {...args} />;

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
    ...mockProps.base,
} as Props;
