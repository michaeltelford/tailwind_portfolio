import Link from 'next/link';

export default function Nav({ inspiredByHref }) {
  return (
    <>
      <div className='flex my-3 ml-3 underline text-gray-900'>
        <Link href='/'>
          <a className='hover:text-blue-700'>{'<< Home'}</a>
        </Link>

        <a
          className='ml-auto mr-3 hover:text-blue-700'
          href={inspiredByHref || ''}
          target='_blank'>
            Inspired By >>
        </a>
      </div>
      <hr />
    </>
  );
}
