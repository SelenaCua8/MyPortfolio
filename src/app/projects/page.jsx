import Image from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'

import paint from '@/images/photos/paint.png'
import java from '@/images/photos/logoJava.png'
import periodicTable from '@/images/photos/periodicTable.png'

const projects = [
  {
    name: 'Paint.js',
    description:
       'A project where I learned JavaScript and worked with the HTML5 canvas element. The project includes tools like pencil, rectangle, ellipse, and color selection',
       
    link: { href: 'https://paint-canva.netlify.app/', label: 'Paint.js' },
 
    logo: paint,
  },
  {
    name: 'Periodic-Table.sql',
    description:
      'Periodic Table Project 🏆🛢️ This project, periodittable.sql, was created as part of the FreeCodeCamp Relational Database Certification. It involves practicing SQL queries, database design, and data manipulation related to a periodic table dataset. 📚⚽ The project helped me strengthen my understanding of relational databases and SQL commands.',
    link: { href: 'https://github.com/SelenaCua8/periodic-table.sql', label: 'GitHub' },
    logo: periodicTable,

  },
  {
    name: 'Exercises-Java',
    description:
      'A collection of Java exercises 🧠💻 created to practice and improve Java programming skills. This repository includes logic-based exercises, trivia games, and use of control structures like if-else, switch, and loops. Continuously updated with new challenges and solutions.',
    link: { href: 'https://github.com/SelenaCua8/Exercises-Java/tree/main', label: 'GitHub' },
    logo: java, // Asegurate de tener un logo llamado "java" o reemplazarlo por el correcto.
  },
   {
  name: 'Projects-Java',
  description:
    'A curated collection of Java projects ☕📁 ranging from beginner to advanced level. These include personal challenges, mini-games, logic-based exercises, and real-world applications developed both for practice and professional use. The repository evolves as I grow as a developer, continuously expanding with new concepts and improved solutions.',
  link: { href: 'https://github.com/SelenaCua8/Projects-Java', label: 'GitHub' },
  logo: java, // Make sure you have a "java" logo or replace this with the appropriate one.
}

]

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export const metadata = {
  title: 'Projects',
  description: 'Some of my personal and professional projects. Most of them are available on my GitHub.',
}

export default function Projects() {
  return (
    <SimpleLayout
      title="I'm always experimenting with new things"
      intro="— you'll find projects related to databases, JavaScript, Java, and more."
    >
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <Card as="li" key={project.name}>
            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md ring-1 shadow-zinc-800/5 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image
                src={project.logo}
                alt=""
                className="h-8 w-8"
                unoptimized
              />
            </div>
            <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
              <Card.Link href={project.link.href}>{project.name}</Card.Link>
            </h2>
            <Card.Description>{project.description}</Card.Description>
            <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
              <LinkIcon className="h-6 w-6 flex-none" />
              <span className="ml-2">{project.link.label}</span>
            </p>
          </Card>
        ))}
      </ul>
    </SimpleLayout>
  )
}
