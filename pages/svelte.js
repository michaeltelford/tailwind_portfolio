import Nav from '../components/nav.js';

function QuickStart() {
  return (
    <>
      <code>
        npx degit sveltejs/template my-svelte-project
        # or download and extract

        cd my-svelte-project

        npm install
        npm run dev
      </code>
      <p>
        See the <a href='#'>quickstart guide</a> for more information.
      </p>
      <button>Learn Svelte</button>
    </>
  )
}

export default function Svelte() {
  return (
    <>
      <Nav inspiredByHref='https://svelte.dev/' />
      <main style={{ color: '#444' }}>
        <div className='my-24 mx-12'>
          <h1 className='uppercase tracking-widest leading-none text-5xl font-bold'>
            Svelte
          </h1>
          <p className='tracking-wider text-xl'>
            Cybernetically enhanced web apps
          </p>
        </div>
        <div>
          <div
            className='mx-8 mb-5 p-6 text-white rounded-md cursor-pointer'
            style={{ backgroundColor: '#ff3e00' }}>
              <h2 className='text-2xl tracking-wider font-bold pb-3'>
                Write less code
              </h2>
              <p className='pb-3'>
                Build boilerplate-free components using languages you already know — HTML, CSS and JavaScript
              </p>
              <a href='#' className='block text-right text-lg hover:underline'>
                learn more {'>'}
              </a>
          </div>
          <div
            className='mx-8 mb-6 p-6 text-white rounded-md cursor-pointer'
            style={{ backgroundColor: '#40b3ff' }}>
              <h2 className='text-2xl tracking-wider font-bold pb-3'>
                No virtual DOM
              </h2>
              <p className='pb-3'>
                Svelte compiles your code to tiny, framework-less vanilla JS — your app starts fast and stays fast
              </p>
              <a href='#' className='block text-right text-lg hover:underline'>
                learn more {'>'}
              </a>
          </div>
          <div
            className='mx-8 mb-6 p-6 text-white rounded-md cursor-pointer'
            style={{ backgroundColor: '#676778' }}>
              <h2 className='text-2xl tracking-wider font-bold pb-3'>
                Truly reactive
              </h2>
              <p className='pb-3'>
                No more complex state management libraries — Svelte brings reactivity to JavaScript itself
              </p>
              <a href='#' className='block text-right text-lg hover:underline'>
                learn more {'>'}
              </a>
          </div>
          <div className='hidden'>
            <QuickStart />
          </div>
        </div>
        <div>
          <div>
            <p>Svelte is a radical new approach to building user interfaces. Whereas traditional frameworks like React and Vue do the bulk of their work in the browser, Svelte shifts that work into a compile step that happens when you build your app.</p>
            <p>Instead of using techniques like virtual DOM diffing, Svelte writes code that surgically updates the DOM when the state of your app changes.</p>
            <p><a href='#'>Read the introductory blog post</a> to learn more.</p>
          </div>
          <div>
            <QuickStart />
          </div>
        </div>
      </main>
    </>
  );
}
