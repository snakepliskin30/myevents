import Skeleon from '@/components/skeleton';

export default function LoadingEvent() {
  return (
    <div className='flex flex-col items-center gap-y-4 py-28'>
      <Skeleon className='h-4 w-[550px]' />
      <Skeleon className='h-4 w-[400px]' />
      <Skeleon className='h-4 w-[430px]' />
    </div>
  );
}
