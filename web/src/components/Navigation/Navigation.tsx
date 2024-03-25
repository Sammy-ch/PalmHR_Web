import logo from './palmHR_logo.png'

const Navigation = () => {
  return (
    <section className="flex min-h-screen w-[250px] justify-center bg-[#040A04] p-5 ">
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
