import Nav from '../components/nav.js';

export default function Shopify() {
  return (
    <>
      <Nav />
      <main className='flex flex-col bg-yellow-100'>
        <div className='p-5 mb-4'>
          <h2 className='mb-6 text-green-900 text-4xl font-bold tracking-tighter leading-tight'>
            Build an online business—no matter what business you’re in
          </h2>

          <form className='mb-5' onSubmit={evt => evt.preventDefault()}>
            <input
              className='w-full border-gray-600 px-4 py-3 mb-2 rounded'
              style={{ borderWidth: 1 }}
              type='text'
              placeholder='Enter your email address' />
            <button className='w-full bg-green-700 text-white font-semibold rounded py-3'>
              Start free trail
            </button>
          </form>

          <small className='text-gray-800'>
            Try Shopify free for 14 days, no credit card required. By entering your email, you agree to receive marketing emails from Shopify.
          </small>
        </div>
        <img src='shopify.jpg' alt='Shopify Registration' />
      </main>
    </>
  );
}
