export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex flex-col mx-auto min-h-screen max-w-7xl bg-white/[2%]'>
      {children}
    </div>
  );
}
