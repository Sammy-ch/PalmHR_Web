import logo from './palmHR_logo.png'

const Navigation = () => {
  return (
    <section className="min-h-screen w-[300px]  bg-[#1A2421] p-5">
      <img
        src={logo}
        alt={'Palm HR Logo'}
        height={200}
        width={200}
        className="h-auto"
      />
    </section>
  )
}

export default Navigation
