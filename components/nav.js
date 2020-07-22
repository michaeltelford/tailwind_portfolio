import Link from 'next/link'

export default function Nav() {
  return (
    <>
      <div className='my-3 ml-2 underline text-gray-900 hover:text-blue-700'>
        <Link href='/'>{'<< Home'}</Link>
      </div>
      <hr />
    </>
  );
}
