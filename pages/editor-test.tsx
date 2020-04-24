import React from 'react';
import { Box, Button, Checkbox, Code, Badge, Avatar, Card, Heading, Text } from '@modulz/radix';

import TitleAndMetaTags from '../components/TitleAndMetaTags';
import { Looper } from '../components/Looper';

const Editor = () => {
  return (
    <Box>
      <TitleAndMetaTags />

      <Looper>
        <Avatar alt="Modulz" src="https://avatars0.githubusercontent.com/u/28682402">
          M
        </Avatar>

        <Avatar size={1} alt="Modulz" src="https://avatars0.githubusercontent.com/u/28682402">
          M
        </Avatar>

        <Avatar alt="Modulz">PD</Avatar>

        <Avatar size={1} alt="Modulz">
          PD
        </Avatar>

        <Button>My button</Button>

        <Button size={1}>My button</Button>

        <Button variant="blue">My button</Button>

        <Button size={1} variant="blue">
          My button
        </Button>

        <Button variant="red">My button</Button>

        <Button size={1} variant="red">
          My button
        </Button>

        <Button variant="green">My button</Button>

        <Button size={1} variant="green">
          My button
        </Button>

        <Button isWaiting>My button</Button>

        <Button size={1} isWaiting>
          My button
        </Button>

        <Badge>Badge</Badge>

        <Badge variant="blue">Badge</Badge>

        <Badge variant="red">Badge</Badge>

        <Badge variant="green">Badge</Badge>

        <Card sx={{ width: 275 }}>
          <Heading size={1}>Card heading</Heading>
          <Text as="p" mt={2} mb={4} size={3}>
            Card copy
          </Text>
          <Button>Action</Button>
        </Card>

        <Card variant="shadow" sx={{ width: 275 }}>
          <Heading size={1}>Card heading</Heading>
          <Text as="p" mt={2} mb={4} size={3}>
            Card copy
          </Text>
          <Button>Action</Button>
        </Card>

        <Checkbox />

        <Checkbox defaultChecked />

        <Code>console.log('Radix')</Code>

        <Code variant="fade">console.log('Radix')</Code>
      </Looper>
    </Box>
  );
};

export default Editor;
