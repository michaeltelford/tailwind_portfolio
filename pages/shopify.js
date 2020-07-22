import Nav from '../components/nav.js';

export default function Shopify() {
  return (
    <>
      <Nav />
      <main className='flex flex-col bg-yellow-100'>
        <div className='p-8 mb-4 max-w-screen-md md:w-3/5 md:mx-5'>
          <h2 className='mb-6 text-green-900 text-4xl font-bold tracking-tighter leading-tight md:text-5xl md:mt-10'>
            Build an online business—no matter what business you’re in
          </h2>

          <form
            className='flex flex-col mb-5 xs:flex-row'
            onSubmit={evt => evt.preventDefault()}>
            <input
              className='w-full border-gray-600 px-4 py-3 mb-2 rounded xs:mr-4'
              style={{ borderWidth: 1 }}
              type='text'
              placeholder='Enter your email address' />
            <button className='w-full bg-green-700 hover:bg-green-800 text-white font-semibold rounded shadow-lg py-3 xs:w-64 xs:h-12'>
              Start free trail
            </button>
          </form>

          <small className='text-gray-800'>
            Try Shopify free for 14 days, no credit card required. By entering your email, you agree to receive marketing emails from Shopify.
          </small>
        </div>
        <img className='object-cover object-center' src='shopify.jpg' alt='Shopify Registration' />
      </main>
    </>
  );
}
