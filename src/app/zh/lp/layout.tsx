import LpNav from '@/app/components/LpNav';
import { requireViewer } from '@/lib/gate';

export default async function LpLayoutZh({
  children,
}: {
  children: React.ReactNode;
}) {
  await requireViewer('/zh/lp');
  return (
    <>
      <LpNav />
      {children}
    </>
  );
}
