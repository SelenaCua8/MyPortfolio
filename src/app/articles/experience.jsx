
export function Experience({ experience }) {
    return (
      <div className="space-y-2">
        <div className="text-lg font-semibold text-zinc-800 dark:text-zinc-100">
          {experience.role}
        </div>
        <div className="text-sm text-zinc-500 dark:text-zinc-400">
          {experience.company} — {experience.location} | {experience.date}
        </div>
        <ul className="list-disc pl-5 text-zinc-600 dark:text-zinc-300">
          {experience.responsibilities.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
        <div className="text-sm text-zinc-500 dark:text-zinc-400">
          <strong>Tools:</strong> {experience.tools.join(', ')}
        </div>
      </div>
    )
  }
 
  