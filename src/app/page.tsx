import { redirect } from 'next/navigation';
import urlJoin from 'url-join';

export default function RootPage() {
  console.log(`aa: '${process.env.NEXT_PUBLIC_BASE_PATH}'`);
  redirect(urlJoin(process.env.NEXT_PUBLIC_BASE_PATH, 'ko'));
}
