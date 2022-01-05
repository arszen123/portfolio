import React from 'react';
import { Container, Flex } from '@chakra-ui/react';
import { Menu } from './modules/menu/Menu';
import { Content } from './modules/content/Content';
import { ResumeProvider } from './resume.context';

const App = () => (
  <ResumeProvider>
    <Flex
      h="100vh"
      direction={{ base: 'column', xl: 'row' }}
      bgGradient={{
        base: 'initial',
        xl: 'linear(to-br, primary.500, white, white)',
      }}
    >
      <Menu />
      <Flex
        id="content"
        h="100%"
        w="100%"
        maxW="100%"
        overflow="auto"
      >
        <Container>
          <Content />
        </Container>
      </Flex>
    </Flex>
  </ResumeProvider>
);

export default App;
