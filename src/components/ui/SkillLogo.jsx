import { skillIcons } from '../../data/skillIcons'

const customIcons = {
  Flask: {
    hex: '000000',
    path: 'M9 2.5h6v2.1l-1.7 3.4v7.2A2.8 2.8 0 0 1 12 17.9a2.8 2.8 0 0 1-2.8-2.7V8l-1.7-3.4V2.5H9zm1 2.2.6 1.2h2.8l.6-1.2h-4zM10.4 8.4v6.8c0 .88.72 1.6 1.6 1.6s1.6-.72 1.6-1.6V8.4h-3.2z',
  },
  Azure: {
    hex: '0078D4',
    path: 'M13.05 2.2 2.8 21.8h5.2l1.62-3.92h6.16L17.4 21.8h5.8L13.05 2.2zm.15 5.4 2.28 5.5h-4.56l2.28-5.5z',
  },
  'REST APIs': {
    hex: '7C5CFF',
    path: 'M8.2 6.2 2.8 12l5.4 5.8 1.5-1.4L5.8 12l3.9-4.4-1.5-1.4zm7.6 0-1.5 1.4 3.9 4.4-3.9 4.4 1.5 1.4 5.4-5.8-5.4-5.8zM13.7 5.5h-1.8l-1.6 13h1.8l1.6-13z',
  },
  Microservices: {
    hex: '61E7E3',
    path: 'M10.2 3.2h3.6v3.6h-3.6V3.2zM3.4 10.2h3.6v3.6H3.4v-3.6zm13.6 0h3.6v3.6h-3.6v-3.6zM10.2 17.2h3.6v3.6h-3.6v-3.6zM11.4 6.8h1.2v3.4h-1.2V6.8zm-4.4 5.2h4.4v1.2H7V12zm6.8 0h4.4v1.2h-4.4V12zm-1.2 1.6h1.2v3.4h-1.2v-3.4z',
  },
  WebSockets: {
    hex: '9B6CFF',
    path: 'M13.4 2 6.2 13.1h5.1L9.6 22 17.8 10.9h-5.1L13.4 2z',
  },
  'LLMs & NLP': {
    hex: 'B995FF',
    path: 'M12 2.2 13.4 9l6.8 1.4-6.8 1.4L12 18.6 10.6 11.8 3.8 10.4 10.6 9 12 2.2zm6.6 11.2 1 3.2 3.2 1-3.2 1-1 3.2-1-3.2-3.2-1 3.2-1 1-3.2z',
  },
}

export default function SkillLogo({ name }) {
  const icon = skillIcons[name] ?? customIcons[name]
  const label = name.slice(0, 2)

  return (
    <span className="grid size-6 shrink-0 place-items-center rounded-md border border-(--line) bg-(--logo-bg) shadow-[0_0_0_1px_rgba(155,108,255,0.04)] transition duration-200 group-hover:scale-110 group-hover:shadow-[0_0_16px_rgba(155,108,255,0.22)]">
      {icon ? (
        <svg aria-hidden="true" className="size-3.5" fill={`#${icon.hex}`} viewBox="0 0 24 24">
          <path d={icon.path} />
        </svg>
      ) : (
        <span className="font-mono text-[0.46rem] font-medium text-(--violet-bright)">
          {label}
        </span>
      )}
    </span>
  )
}
