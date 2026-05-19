import LpNav from '@/app/components/LpNav';
import { requireViewer } from '@/lib/gate';

export default async function LpLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  await requireViewer('/lp');
  return (
    <>
      <LpNav />
      {children}
    </>
  );
}
