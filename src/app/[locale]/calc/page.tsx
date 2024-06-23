import { Flex } from '@mantine/core';
import { unstable_setRequestLocale } from 'next-intl/server';

export default function Home({ params }: { params: { locale: string } }) {
  unstable_setRequestLocale(params.locale);

  return (
    <main>
      <Flex>
        <p>여기는 계산기 입니다</p>
      </Flex>
    </main>
  );
}
