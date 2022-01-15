// Dependencies
import { NavLink } from 'remix';
import { v4 as uuid } from 'uuid';

// Internals
import type { DLink } from '~/types';

const LINKS: DLink[] = [
  {
    name: 'about me',
    to: '/about',
    prefetch: 'intent',
  },
  {
    name: 'open source',
    rel: 'noopener noreferrer',
    target: '_blank',
    to: 'https://github.com/danestves',
  },
  {
    name: 'resume',
    rel: 'noopener noreferrer',
    target: '_blank',
    to: 'https://read.cv/danestves',
  },
  {
    name: 'blog',
    to: '/posts',
    prefetch: 'intent',
  },
];

function LeftSidebar() {
  return (
    <aside className="hidden fixed top-0 left-0 z-10 px-12 h-full lg:block">
      <ul className="flex flex-col justify-center items-center space-y-4 h-full rotate-180">
        {LINKS.map(({ name, to, ...link }) => {
          if (to.toString().startsWith('http')) {
            return (
              <li key={uuid()}>
                <a
                  className="text-xs font-semibold leading-3 text-[#989898] hover:text-primary dark:text-[#B1B1B1] uppercase vertical-rl"
                  href={to.toString()}
                  {...link}
                >
                  {name}
                </a>
              </li>
            );
          }

          return (
            <li key={uuid()}>
              <NavLink
                className="text-xs font-semibold leading-3 text-[#989898] hover:text-primary dark:text-[#B1B1B1] uppercase vertical-rl"
                prefetch="intent"
                to={to}
              >
                {name}
              </NavLink>
            </li>
          );
        })}
      </ul>

      <div className="fixed bottom-8 left-12 z-10">
        <NavLink className="font-semibold text-primary uppercase" to="/posts">
          blog
        </NavLink>
      </div>
    </aside>
  );
}

export { LeftSidebar };
