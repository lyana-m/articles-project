import React from 'react';
import Flex, { FlexProps } from '../Flex/Flex';

type HStackProps = Omit<FlexProps, 'flexDirection'>;

const HStack = (props: HStackProps) => {
  const { children, ...other } = props;

  return (
    <Flex flexDirection="row" {...other}>
      {children}
    </Flex>
  );
};

export default HStack;
