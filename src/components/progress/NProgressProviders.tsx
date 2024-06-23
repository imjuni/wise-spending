'use client';

import { Next13ProgressBar } from 'next13-progressbar';
import React from 'react';

/**
 * NextJS 13, 14 App Router에서는 route change events가 제거되어 nprogress를 사용하기 더 어려워졌다
 * router 클래스의 함수(push, replace, etc)는 NProgress.start를 직접 호출해야 정상 동작한다
 * 아래 Providers는 NextLink를 사용할 때 NProgress.start가 자동 호출 되는 코드가 적용된 것
 *
 * @see https://github.com/ndungtse/next13-progressbar
 * @see https://github.com/vercel/next.js/discussions/41934
 */
export function NProgressProviders({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <Next13ProgressBar
        height="3px"
        color="#6F2CFF"
        options={{ showSpinner: false }}
        showOnShallow
      />
    </>
  );
}
