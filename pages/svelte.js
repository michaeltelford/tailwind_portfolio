import Nav from '../components/nav.js';

function QuickStart() {
  return (
    <>
      <div className='p-4 mb-3 bg-gray-100 overflow-x-auto whitespace-no-wrap rounded-md border-2 border-gray-300 text-sm text-gray-600 ml:mb-2'>
        <code>
          npx degit {' '}
          <a href='#' className='underline hover:font-semibold' style={{ color: '#ff3e00' }}>
            sveltejs/template
          </a> my-svelte-project<br />
          # or download and extract {' '}
          <a href='#' className='underline hover:font-semibold' style={{ color: '#ff3e00' }}>
            this .zip file
          </a><br />
          cd my-svelte-project<br /><br />

          npm install<br />
          npm run dev
        </code>
      </div>
      <p className='mb-5 ml:mb-3'>
        See the <a href='#' className='underline' style={{ color: '#ff3e00' }}>quickstart guide</a> for more information.
      </p>
      <button className='px-5 py-2 mb-5 text-white rounded-md shadow-lg hover:underline ml:mb-0' style={{ backgroundColor: '#ff3e00' }}>
        Learn Svelte
      </button>
    </>
  )
}

export default function Svelte() {
  return (
    <>
      <Nav inspiredByHref='https://svelte.dev/' />
      <main className='mx-8' style={{ color: '#444' }}>
        <div className='mx-4 my-24 ml:my-32'>
          <h1 className='uppercase tracking-widest leading-none font-bold text-5xl sm:text-6xl'>
            Svelte
          </h1>
          <p className='tracking-wider text-xl sm:text-2xl'>
            Cybernetically enhanced web apps
          </p>
        </div>
        <div className='mb-12 ml:flex ml:flex-wrap ml:items-stretch'>
          <div className='ml:w-1/2'>
            <div
              className='flex flex-col justify-between mb-5 p-6 text-white rounded-md cursor-pointer ml:mr-2 ml:h-64 ml:p-10'
              style={{ backgroundColor: '#ff3e00' }}>
                <h2 className='text-2xl tracking-wider font-bold pb-3 ml:text-3xl'>
                  Write less code
                </h2>
                <p className='pb-3'>
                  Build boilerplate-free components using languages you already know — HTML, CSS and JavaScript
                </p>
                <a href='#' className='block text-right text-lg hover:underline'>
                  learn more {'>'}
                </a>
            </div>
          </div>
          <div className='ml:w-1/2'>
            <div
              className='flex flex-col justify-between mb-5 p-6 text-white rounded-md cursor-pointer ml:ml-2 ml:h-64 ml:p-10'
              style={{ backgroundColor: '#40b3ff' }}>
                <h2 className='text-2xl tracking-wider font-bold pb-3 ml:text-3xl'>
                  No virtual DOM
                </h2>
                <p className='pb-3'>
                  Svelte compiles your code to tiny, framework-less vanilla JS — your app starts fast and stays fast
                </p>
                <a href='#' className='block text-right text-lg hover:underline'>
                  learn more {'>'}
                </a>
            </div>
          </div>
          <div className='ml:w-1/2'>
            <div
              className='flex flex-col justify-between p-6 text-white rounded-md cursor-pointer ml:mb-5 ml:mr-2 ml:h-64 ml:p-10'
              style={{ backgroundColor: '#676778' }}>
                <h2 className='text-2xl tracking-wider font-bold pb-3 ml:text-3xl'>
                  Truly reactive
                </h2>
                <p className='pb-3'>
                  No more complex state management libraries — Svelte brings reactivity to JavaScript itself
                </p>
                <a href='#' className='block text-right text-lg hover:underline'>
                  learn more {'>'}
                </a>
            </div>
          </div>
          <div className='ml:w-1/2'>
            <div className='hidden ml:block ml:ml-2'>
              <QuickStart />
            </div>
          </div>
        </div>
        <div>
          <p className='mb-5'>
            Svelte is a radical new approach to building user interfaces. Whereas traditional frameworks like React and Vue do the bulk of their work in the browser, Svelte shifts that work into a compile step that happens when you build your app.
          </p>
          <p className='mb-5'>
            Instead of using techniques like virtual DOM diffing, Svelte writes code that surgically updates the DOM when the state of your app changes.
          </p>
          <p className='mb-8'>
            <a href='#' className='underline' style={{ color: '#ff3e00' }}>
              Read the introductory blog post
            </a> to learn more.
          </p>
          <div className='ml:hidden'>
            <QuickStart />
          </div>
        </div>
      </main>
    </>
  );
}
