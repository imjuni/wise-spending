'use client';

import { css } from '#/styled-system/css';
import { AppShell, Burger, Group, UnstyledButton } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { MantineLogo } from './MantineLogo';

const _burger_unstyled_button = css({
  display: 'block',
  padding: 'var(--mantine-spacing-xs) var(--mantine-spacing-md)',
  borderRadius: 'var(--mantine-radius-md)',
  fontWeight: 500,
});

/**
 * Wise Spending AppShell
 * mantine app-shell 예제에서 mobile only navBar를 참고
 *
 * @see https://mantine.dev/app-shell/?e=MobileNavbar&s=code
 * @param param0
 * @returns
 */
export function WsAppShell({ children }: { children: React.ReactNode }) {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 300, breakpoint: 'sm', collapsed: { desktop: true, mobile: !opened } }}
      padding="xs"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Group justify="flex-start" style={{ flex: 1 }}>
            <MantineLogo size={30} />
            <Group ml="xl" gap={0} visibleFrom="sm">
              <UnstyledButton className={_burger_unstyled_button}>Home</UnstyledButton>
              <UnstyledButton className={_burger_unstyled_button}>Blog</UnstyledButton>
              <UnstyledButton className={_burger_unstyled_button}>Contacts</UnstyledButton>
              <UnstyledButton className={_burger_unstyled_button}>Support</UnstyledButton>
            </Group>
          </Group>
        </Group>
      </AppShell.Header>

      <AppShell.Navbar py="md" px={4}>
        <UnstyledButton className={_burger_unstyled_button}>Home</UnstyledButton>
        <UnstyledButton className={_burger_unstyled_button}>Blog</UnstyledButton>
        <UnstyledButton className={_burger_unstyled_button}>Contacts</UnstyledButton>
        <UnstyledButton className={_burger_unstyled_button}>Support</UnstyledButton>
      </AppShell.Navbar>

      <AppShell.Main className="i-am-app-shell-main">{children}</AppShell.Main>
    </AppShell>
  );
}
