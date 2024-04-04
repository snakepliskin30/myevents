import { ArrowLeftIcon, ArrowRightIcon } from '@radix-ui/react-icons';
import Link from 'next/link';

const btnStyle =
  'flex items-center gap-x-2 py-3 px-5 bg-white/5 opacity-75 rounded-md text-xs hover:opacity-100';

type PaginationControlProps = {
  previousPath: string;
  nextPath: string;
};

export default function PaginationControl({
  previousPath,
  nextPath,
}: PaginationControlProps) {
  return (
    <section className='flex justify-between w-full'>
      {previousPath ? (
        <Link href={previousPath} className={btnStyle}>
          <ArrowLeftIcon />
          Previous
        </Link>
      ) : (
        <div />
      )}

      {nextPath && (
        <Link href={nextPath} className={btnStyle}>
          Next
          <ArrowRightIcon />
        </Link>
      )}
    </section>
  );
}
