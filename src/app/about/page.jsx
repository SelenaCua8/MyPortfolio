import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
 
  LinkedInIcon,
 
} from '@/components/SocialIcons'
import portraitImage from '@/images/photos/portrait.png'


function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata = {
  title: 'About',
  description:
    '¡HOLA! I am Selena.',
    icons: {
      icon: '/favicon.ico', // Asegúrate de que la ruta sea correcta
    },
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
  <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
    ¡HOLA! I am Selena.
  </h1>
 <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
  <p>
    I’m **Selena**, a 26-year-old **Systems Analysis student** from Argentina. I have always been driven by a "how does this work?" mindset, which naturally led me to the world of software development. I do not just write code; I enjoy architecting solutions that make a difference for real people.
  </p>
  <p>
    Currently, I specialize in **Backend development**, working heavily with **PHP (Laravel) and Java**, backed by solid **SQL** management. On the frontend, I build with **JavaScript and TypeScript**, using **Tailwind CSS** to ensure everything I build is as intuitive as it is functional. I am also a big fan of the **Linux** ecosystem and the efficiency of **GitBash** for my daily workflow.
  </p>
  <p>
    As a **Freelance Developer**, I have had the chance to work directly with local businesses—from creating digital catalogs for distributors to building management platforms for sports facilities. These projects have taught me that software is about more than just syntax; it is about solving logistics and communication problems.
  </p>
  <p>
    When I am not in front of a screen, you will probably find me **practicing sports**. I believe the discipline, grit, and teamwork I've gained through athletics are the same qualities that make me a better developer. Whether it's on the field or in a codebase, I am always aiming for the next goal.
  </p>
  <p>
    I’m currently looking for new opportunities where I can contribute my technical skills and my proactive "get-it-done" attitude to an impactful team.
  </p>
</div>
</div>

        <div className="lg:pl-20">
          <ul role="list">
           
            <SocialLink href="https://github.com/SelenaCua8" icon={GitHubIcon} className="mt-4">
              Follow on GitHub
            </SocialLink>
            <SocialLink href="https://www.linkedin.com/in/selenacuadra/" icon={LinkedInIcon} className="mt-4">
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:selenac99@hotmail.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              selenac99@hotmail.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
