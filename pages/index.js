import Head from 'next/head';

export default function Home() {
  return (
    <div className="container mx-auto">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="text-center">
        <h1 className="text-5xl font-semibold my-5">
          Welcome to{' '}
          <a href="https://nextjs.org" className="text-blue-600">
            Next.js!
          </a>
        </h1>

        <p className="description">
          Get started by editing{' '}
          <code className="font-mono bg-gray-200 p-1 rounded">
            pages/index.js
          </code>
        </p>
      </main>
    </div>
  );
}
