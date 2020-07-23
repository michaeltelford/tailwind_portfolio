import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Tailwind CSS Portfolio</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='text-gray-900 text-center max-w-screen-sm mx-auto'>
        <h1 className='text-4xl font-semibold mt-5 mb-1'>
          Tailwind Portfolio
        </h1>

        <div className='mb-5'>
          <small>
            Designed by {' '}
            <a
              className='underline hover:text-blue-700'
              href='https://github.com/michaeltelford'
              target='_blank'>
                Michael Telford
            </a>
          </small>
          <br />
          <small>
            View the code on {' '}
            <a
              className='underline hover:text-blue-700'
              href='https://github.com/michaeltelford/tailwind_portfolio'
              target='_blank'>
                Github
            </a>
          </small>
        </div>

        <content>
          <p className='mb-4'>
            Click below to view a styled component.
          </p>

          <p className='mb-6'>
            All components are mobile first and fully responsive; so be sure to change the viewport and watch the UI respond accordingly.
          </p>

          <ul className='underline hover:text-blue-700 font-semibold'>
            <li><Link href='/shopify'><a>Shopify Registration</a></Link></li>
          </ul>
        </content>
      </main>
    </>
  );
}
