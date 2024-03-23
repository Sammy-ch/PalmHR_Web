import logo from './palmHR_logo.png'

const Navigation = () => {
  return (
    <section className="min-h-screen w-[250px] bg-[#111010] p-5 flex justify-center ">
      <div>
        <img
          src={logo}
          alt={'Palm HR Logo'}
          height={150}
          width={150}
          className="h-auto"
        />
      </div>
    </section>
  )
}

export default Navigation
