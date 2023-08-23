import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Avatar } from './Avatar';
import avatarStorybook from './avatarStorybook.jpg';

export default {
  title: 'shared/Avatar',
  component: Avatar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  size: 150,
  src: avatarStorybook,
};

export const Small = Template.bind({});
Small.args = {
  size: 50,
  src: avatarStorybook,
};
