import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Text, TextSize, TextTheme } from './Text';

export default {
  title: 'shared/Text',
  component: Text,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: 'Lorem ipsum dolor',
  text: 'Sit amet consectetur adipisicing elit',
};

export const Error = Template.bind({});
Error.args = {
  title: 'Lorem ipsum dolor',
  text: 'Sit amet consectetur adipisicing elit',
  theme: TextTheme.ERROR,
};

export const onlyTitle = Template.bind({});
onlyTitle.args = {
  title: 'Lorem ipsum dolor',
};

export const onlyText = Template.bind({});
onlyText.args = {
  text: 'Sit amet consectetur adipisicing elit',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  title: 'Lorem ipsum dolor',
  text: 'Sit amet consectetur adipisicing elit',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const onlyTitleDark = Template.bind({});
onlyTitleDark.args = {
  title: 'Lorem ipsum dolor',
};
onlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const onlyTextDark = Template.bind({});
onlyTextDark.args = {
  text: 'Sit amet consectetur adipisicing elit',
};
onlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SizeL = Template.bind({});
SizeL.args = {
  title: 'Lorem ipsum dolor',
  text: 'Sit amet consectetur adipisicing elit',
  size: TextSize.L,
};

export const SizeM = Template.bind({});
Primary.args = {
  title: 'Lorem ipsum dolor',
  text: 'Sit amet consectetur adipisicing elit',
  size: TextSize.M,
};
