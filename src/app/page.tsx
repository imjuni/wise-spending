import { assetPrefix } from '#/constants/config';
import { redirect } from 'next/navigation';

export default function RootPage() {
  redirect(`/${assetPrefix}/ko`);
}
