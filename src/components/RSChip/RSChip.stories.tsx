import { ComponentMeta, ComponentStory } from "@storybook/react";
import { RSChip } from "./RSChip";

export default {
  title: "RSChip",
  component: RSChip
} as ComponentMeta<typeof RSChip>


export const RSChipDefault: ComponentStory<typeof RSChip> = (args) =>  (<RSChip {...args}/>)


RSChipDefault.args = {
onClick: () => console.log("Hola"),
user: {
  name: "Hugo"
}
}