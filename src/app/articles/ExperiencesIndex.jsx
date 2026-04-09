import { SimpleLayout } from '@/components/SimpleLayout'
import { Experience } from '@/app/articles/page'

export const metadata = {
  title: 'Experience',
  description: 'My professional work experience across different roles and industries.',
}

export default function ExperienceIndex() {
  const experiences = [
   {
      role: 'Freelance Full Stack Developer',
      company: 'Independent Software Solutions',
      location: 'Remote',
      date: 'Mar 2026 – Present',
      responsibilities: [
        'Designed and developed end-to-end web applications for local businesses to streamline sales and operations.',
        'Built dynamic product catalogs with integrated real-time WhatsApp ordering systems.',
        'Implemented administrative dashboards for inventory management and booking control.',
        'Managed full software lifecycle: from requirements gathering to deployment and maintenance.',
      ],
      tools: ['Laravel', 'PHP', 'Tailwind CSS', 'JavaScript', 'MySQL'],
    },
    {
      role: 'Junior Software Developer - Full Time',
      company: 'TREND Ingeniería SRL',
      location: 'Campana',
      date: 'May 2023 – Aug 2023',
      responsibilities: [
        'Collaborated on software system updates for industrial operations',
        'Participated in requirements gathering and documentation',
        'Conducted software testing and validation processes',
      ],
      tools: ['SQL Server', 'C# (WPF)', 'Oracle Database'],
    },
    {
      role: 'Founder & Delivery Operator - Full Time',
      company: 'TusBebidas',
      location: 'Buenos Aires',
      date: 'Jan 2019 – Mar 2023',
      responsibilities: [
        'Founded and managed a beverage delivery business',
        'Oversaw inventory control, product purchasing, and logistics',
        'Sourced products at the best prices and handled transportation',
        'Managed social media presence and customer communication',
      ],
      tools: ['WhatsApp', 'Instagram', 'Excel'],
    },
    {
      role: 'Customer Service & Administrative Assistant - Full Time',
      company: 'Pampa Cable Park',
      location: 'Buenos Aires',
      date: 'Mar 2017 – Dec 2019',
      responsibilities: [
        'Provided customer service and administrative support',
        'Managed stock control and purchasing tasks',
      ],
      tools: ['Excel', 'Customer Service Tools'],
    },
  ]

  return (
    <SimpleLayout
      title="Professional Experience"
      intro="Here is a timeline of my work experience across different industries and roles."
    >
      <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
        <div className="flex max-w-3xl flex-col space-y-16">
          {experiences.map((exp, idx) => (
            <Experience key={idx} experience={exp} />
          ))}
        </div>
      </div>
    </SimpleLayout>
  )
}
