const paths = {
  arrow:
    'M5 12h14M13 6l6 6-6 6',
  external:
    'M14 5h5v5M10 14 19 5M19 13v6H5V5h6',
  github:
    'M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.3-.4 6.8-1.6 6.8-7A5.4 5.4 0 0 0 19.3 4 5 5 0 0 0 19.1.5S17.9.1 15 2a13.4 13.4 0 0 0-7 0C5.1.1 3.9.5 3.9.5A5 5 0 0 0 3.7 4a5.4 5.4 0 0 0-1.5 3.7c0 5.3 3.5 6.5 6.8 7A4.8 4.8 0 0 0 8 18v4M8 19c-3 .9-3-1.5-4-2',
  linkedin:
    'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z',
  mail:
    'M4 4h16v16H4zM4 6l8 7 8-7',
  menu:
    'M4 7h16M4 12h16M4 17h16',
  close:
    'M6 6l12 12M18 6 6 18',
  download:
    'M12 3v12M7 10l5 5 5-5M5 21h14',
  location:
    'M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0zM12 7a3 3 0 1 0 0 6 3 3 0 0 0 0-6z',
  sun:
    'M12 3v2M12 19v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M3 12h2M19 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z',
  moon:
    'M21 14.5A8.5 8.5 0 0 1 9.5 3 7 7 0 1 0 21 14.5z',
  certificate:
    'M8 3h7l5 5v13H7V4a1 1 0 0 1 1-1zM15 3v5h5M9 13h6M9 17h4',
}

export default function Icon({ name, size = 20, className = '' }) {
  const path = paths[name]

  if (!path) {
    return null
  }

  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      height={size}
      viewBox="0 0 24 24"
      width={size}
    >
      <path
        d={path}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.7"
      />
    </svg>
  )
}
