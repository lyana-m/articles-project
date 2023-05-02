import type { Meta, StoryObj } from '@storybook/react';

import Text from './Text';

const meta: Meta<typeof Text> = {
  title: 'shared/Text',
  component: Text,
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: {
    title: 'Lorem ipsum dolor sit amet',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi omnis temporibus consequatur asperiores soluta, repellendus minus voluptatem veniam corrupti mollitia impedit quibusdam consectetur? Aliquid sapiente veniam modi, vitae ex tenetur est nobis ullam sed laboriosam. Dolor perferendis iure, ullam omnis voluptate ipsam odio atque tenetur vitae! Cumque numquam unde nisi sunt laborum officia iste saepe et quia veritatis. Repudiandae alias architecto earum quas. Labore deleniti itaque quas a neque amet eum cum sunt exercitationem natus dolores laudantium, molestias enim deserunt ipsa dicta delectus. Debitis, quis. Nihil optio eveniet corrupti hic nobis in maxime provident, id nostrum. Voluptatibus expedita cumque facilis?',
  },
};

export const Error: Story = {
  args: {
    title: 'Lorem ipsum dolor sit amet',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi omnis temporibus consequatur asperiores soluta, repellendus minus voluptatem veniam corrupti mollitia impedit quibusdam consectetur? Aliquid sapiente veniam modi, vitae ex tenetur est nobis ullam sed laboriosam. Dolor perferendis iure, ullam omnis voluptate ipsam odio atque tenetur vitae! Cumque numquam unde nisi sunt laborum officia iste saepe et quia veritatis. Repudiandae alias architecto earum quas. Labore deleniti itaque quas a neque amet eum cum sunt exercitationem natus dolores laudantium, molestias enim deserunt ipsa dicta delectus. Debitis, quis. Nihil optio eveniet corrupti hic nobis in maxime provident, id nostrum. Voluptatibus expedita cumque facilis?',
    theme: 'error',
  },
};

export const OnlyTitle: Story = {
  args: {
    title: 'Lorem ipsum dolor sit amet',
  },
};

export const OnlyText: Story = {
  args: {
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi omnis temporibus consequatur asperiores soluta, repellendus minus voluptatem veniam corrupti mollitia impedit quibusdam consectetur? Aliquid sapiente veniam modi, vitae ex tenetur est nobis ullam sed laboriosam. Dolor perferendis iure, ullam omnis voluptate ipsam odio atque tenetur vitae! Cumque numquam unde nisi sunt laborum officia iste saepe et quia veritatis. Repudiandae alias architecto earum quas. Labore deleniti itaque quas a neque amet eum cum sunt exercitationem natus dolores laudantium, molestias enim deserunt ipsa dicta delectus. Debitis, quis. Nihil optio eveniet corrupti hic nobis in maxime provident, id nostrum. Voluptatibus expedita cumque facilis?',
  },
};
