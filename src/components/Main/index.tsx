const Main = ({
  title = 'SisCentral Boilerplate Next',
  description = 'TypeScript, ReactJS, NextJS e Tailwindcss'
}) => {
  return (
    <main className="flex flex-col justify-center items-center text-center text-4xl align-middle bg-sky-700 h-screen w-full text-white">
      <h1>{title}</h1>
      <h2>{description}</h2>
    </main>
  )
}

export default Main
