import Head from 'next/head';

export default function Home() {
  return (
    <div className='container mx-auto text-gray-900'>
      <Head>
        <title>Tailwind CSS Portfolio</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='text-center'>
        <h1 className='text-4xl font-semibold mt-5 mb-1'>
          Tailwind Portfolio
        </h1>
        <header className='text-center mb-5'>
          <small>
            Designed by {' '}
            <a className='underline' href='https://github.com/michaeltelford'>Michael Telford</a>
          </small>
        </header>
        <p className='mb-4'>
          Click on a link to view the styled component:
        </p>
        <ul className='underline'>
          <li><a href='/shopify'>Shopify Registration</a></li>
        </ul>
      </main>
    </div>
  );
}
