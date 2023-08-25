import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import avatar from 'shared/assets/tests/avatarStorybook.jpg';
import { ProfileCard } from './ProfileCard';

export default {
  title: 'entities/ProfileCard',
  component: ProfileCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  data: {
    first: 'Aleksey',
    lastname: 'Kostin',
    age: 32,
    currency: Currency.USD,
    country: Country.Belarus,
    city: 'Moscow',
    username: 'admin',
    avatar,
  },
};

export const withError = Template.bind({});
withError.args = {
  error: 'true',
};

export const Loading = Template.bind({});
Loading.args = {
  isLoading: true,
};
