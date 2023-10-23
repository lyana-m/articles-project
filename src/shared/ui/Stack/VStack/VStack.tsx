import React from 'react';
import Flex, { FlexProps } from '../Flex/Flex';

type VStackProps = Omit<FlexProps, 'flexDirection'>;

const VStack = (props: VStackProps) => {
  const { children, ...other } = props;

  return (
    <Flex flexDirection="column" {...other}>
      {children}
    </Flex>
  );
};

export default VStack;
