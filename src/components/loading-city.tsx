import SkeletonCard from '@/components/skeleton-card';

export default function LoadingCity() {
  return (
    <div className='flex flex-wrap justify-center max-w-[1100px] mx-auto py-24 px-[20px] gap-20'>
      {Array.from({ length: 6 }).map((item, index) => (
        <SkeletonCard key={index} />
      ))}
    </div>
  );
}
