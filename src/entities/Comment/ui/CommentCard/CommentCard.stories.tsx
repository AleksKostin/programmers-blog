import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CommentCard } from './CommentCard';

export default {
  title: 'entities/Comment/CommentCard',
  component: CommentCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof CommentCard>;

const Template: ComponentStory<typeof CommentCard> = (args) => <CommentCard {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  comment: {
    id: '1',
    user: { username: 'alex', id: '1', avatar: 'https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg' },
    text: 'hello world',
  },
};

export const Loading = Template.bind({});
Loading.args = {
  comment: {
    id: '1',
    user: { username: 'alex', id: '1' },
    text: 'hello world',
  },
  isLoading: true,
};
