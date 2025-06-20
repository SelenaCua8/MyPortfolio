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
    '¡HOLA! I’m Selena.',
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
    ¡HOLA! I’m Selena.
  </h1>
  <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
    <p>
      I’m originally from Argentina and currently studying to become a Systems Analyst. Alongside my studies, I actively deepen my programming skills through hands-on practice and continuous learning.
    </p>
    <p>
      I gained professional experience as a Software Developer Trainee, where I worked with technologies such as C#, XML, SQL, and tools like JIRA and Slack. This role introduced me to real-world development processes including testing, validation, and documentation.
    </p>
    <p>
      Nowadays, I’m focusing on backend development using Java and SQL — the languages I work with most frequently. I also have experience with HTML, CSS, and JavaScript, and I’m planning to expand my backend knowledge by learning Node.js soon.
    </p>
    <p>
      In my free time, I explore game development with Unity and C# as a creative side project. I’m currently building a Mario Bros–style game and sharing the journey on LinkedIn — but my core focus remains on backend systems and scalable architecture.
    </p>
    <p>
      I’m passionate about clean code, backend logic, and solving real-world problems through software. I’m eager to grow professionally, contribute to impactful projects, and continue building a strong career in backend development.
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
