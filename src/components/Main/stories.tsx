import { Main } from '.';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Main',
  component: Main,
  argTypes: {
    title: {
      description: 'Titulo do componente'
    },
    description: {
      description: 'Descrição do componente'
    }
  }
} as ComponentMeta<typeof Main>;

export const Basic: ComponentStory<typeof Main> = (args) => <Main {...args} />;
