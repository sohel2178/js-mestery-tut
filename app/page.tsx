// import Image from 'next/image';

import Hello from '@/app/components/hello';

export default function Home() {
  console.log('Where am I???');
  return (
    <h1 className="text-3xl">
      <Hello />
    </h1>
  );
}
