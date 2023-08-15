import Head from 'next/head';
import { Button } from '@tourlane/fusion-you';
import { ComponentPropsWithoutRef, useState } from 'react';
import { css, cx, cva, RecipeVariantProps } from 'fusion-engine/css';
import { f, Code, Container, VStack } from 'fusion-engine/jsx';
import { code, container, image } from 'fusion-engine/patterns';
import Image from 'next/image';

const divStyle = cva({
  base: {
    padding: 4,
    textStyle: 'display.lg',
  },
  variants: {
    style: {
      primary: {
        backgroundColor: 'primary',
        color: 'on.primary',
      },
      secondary: {
        backgroundColor: 'secondary',
        color: 'on.secondary',
      },
    },
  },
  defaultVariants: {
    style: 'primary',
  },
});

type DivVariants = NonNullable<RecipeVariantProps<typeof divStyle>>['style'];

const Animate: React.FC<ComponentPropsWithoutRef<'div'>> = (props) => (
  <div {...props} />
);

const MyCustomDiv = f(Animate, divStyle);

export default function Home() {
  const [style, setStyle] = useState<DivVariants>('primary');

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Container>
        z
        <main className={container()}>
          <Button onClick={() => setStyle('primary')}>Primary</Button>
          <Button onClick={() => setStyle('secondary')}>secondary</Button>
          <Animate className={divStyle({ style })}>
            Hello <span>World!</span>
          </Animate>
          <MyCustomDiv style='secondary' textTransform={'uppercase'}>
            Hello !!
          </MyCustomDiv>
          <f.footer
            p={4}
            textStyle={'label.lg'}
            bgColor='error'
            color='on.error'
          >
            I'm a footer
          </f.footer>
          <Code>Hello</Code>
        </main>
        <VStack gap={4}>
          <Button onClick={() => setStyle('primary')}>Primary</Button>
          <Button onClick={() => setStyle('secondary')}>secondary</Button>
          <VStack gap={2}>
            <Button onClick={() => setStyle('primary')}>Primary</Button>
            <Button onClick={() => setStyle('secondary')}>secondary</Button>
          </VStack>
        </VStack>
      </Container>
    </>
  );
}
