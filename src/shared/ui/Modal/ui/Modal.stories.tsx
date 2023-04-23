import type { Meta, StoryObj } from '@storybook/react';

import Modal from './Modal';

const meta: Meta<typeof Modal> = {
  title: 'shared/Modal',
  component: Modal,
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  args: {
    children: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita vero cum, exercitationem asperiores voluptas est maiores amet sequi dolor natus nam. Suscipit ut impedit et perspiciatis eum accusantium labore explicabo dolor nihil dolorem. Nobis esse deleniti provident eveniet sit dicta facilis. Eum odio porro architecto deserunt temporibus laborum provident unde vitae a expedita repudiandae molestias explicabo, quasi numquam eius voluptatem animi optio quod vero placeat blanditiis! Optio quis, alias tempore quasi quaerat earum magni, et asperiores placeat tempora amet consectetur quibusdam veritatis eius voluptates voluptate inventore, id minima maxime. Suscipit maxime libero autem et ullam mollitia quidem cum consequuntur rerum.',
    isOpen: true,
  }
};
