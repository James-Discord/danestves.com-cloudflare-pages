// Dependencies
import * as React from 'react'
import { NextPage } from 'next'
import {
  IoBusinessOutline,
  GiFamilyTree,
  GiPencilRuler,
  GiPalette,
  SiGooglecalendar,
  FaLaptopCode,
} from 'react-icons/all'
import kwesforms from 'kwesforms'

// Components
import { SEO, Emoji } from '@/components'

const Contacto: NextPage = () => {
  React.useEffect(() => {
    kwesforms.init()
  }, [])

  return (
    <>
      <SEO
        title="Contacto"
        description="Hagamos esa idea realidad. Da el primer paso para tener tu producto o servicio en línea."
      />

      <section className="container">
        <div className="mx-auto my-20 text-center lg:w-3/4 xl:w-2/3">
          <h1 className="mb-10 text-4xl font-bold text-white sm:text-5xl md:text-6xl">
            Hagamos esa idea realidad
          </h1>
        </div>
      </section>

      <section className="container px-5">
        <div className="grid items-center max-w-lg gap-16 mx-auto my-16 lg:max-w-none lg:grid-cols-2 xl:my-32">
          <div>
            <h2 className="mb-4 text-3xl font-semibold text-white sm:text-4xl md:text-5xl">
              Da el primer paso <Emoji emoji="🚀" />
            </h2>

            <p className="mb-4 text-white">
              Todo inicia con un mensaje. Una sola idea para dominarlos a todos <Emoji emoji="😎" />
              haz crecer tu mercado o emerge con tu nuevo negocio.
            </p>

            <ul className="my-8">
              <li className="flex items-center my-4 space-x-4">
                <span className="p-4 rounded-full" style={{ background: '#C3009B' }}>
                  <IoBusinessOutline className="w-8 h-8 text-white" />
                </span>
                <span className="text-white">¿De qué se trata tu negocio?</span>
              </li>
              <li className="flex items-center my-4 space-x-4">
                <span className="p-4 rounded-full" style={{ background: '#8900C3' }}>
                  <GiFamilyTree className="w-8 h-8 text-white" />
                </span>
                <span className="text-white">¿A qué nicho va dirigido?</span>
              </li>
              <li className="flex items-center my-4 space-x-4">
                <span className="p-4 rounded-full" style={{ background: '#2700C3' }}>
                  <GiPencilRuler className="w-8 h-8 text-white" />
                </span>
                <span className="text-white">¿Es una reestructuración o creación desde cero?</span>
              </li>
              <li className="flex items-center my-4 space-x-4">
                <span className="p-4 rounded-full" style={{ background: '#003AC3' }}>
                  <GiPalette className="w-8 h-8 text-white" />
                </span>
                <span className="text-white">¿Qué tal si tomamos un poco de inspiración?</span>
              </li>
              <li className="flex items-center my-4 space-x-4">
                <span className="p-4 rounded-full" style={{ background: '#009BC3' }}>
                  <SiGooglecalendar className="w-8 h-8 text-secondary" />
                </span>
                <span className="text-white">Fijemos fechas de entrega</span>
              </li>
              <li className="flex items-center my-4 space-x-4">
                <span className="p-4 rounded-full" style={{ background: '#00C389' }}>
                  <FaLaptopCode className="w-8 h-8 text-secondary" />
                </span>
                <span className="text-white">Transformemos tu idea en un producto</span>
              </li>
            </ul>
          </div>

          <div>
            <form
              className="kwes-form"
              method="POST"
              action="https://kwes.io/api/foreign/forms/Mm2LUetuNurfSFDKUGRY"
              lang="es"
            >
              <div className="py-2">
                <label htmlFor="name" className="hidden">
                  Nombre
                </label>
                <input
                  id="name"
                  type="name"
                  name="name"
                  required
                  placeholder="Nombre"
                  className="w-full px-3 py-2 font-mono placeholder-gray-500 transition-all duration-150 bg-white rounded focus:outline-none focus:bg-white focus:shadow-outline"
                />
              </div>

              <div className="py-2">
                <label htmlFor="email" className="hidden">
                  Correo
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  placeholder="Correo"
                  className="w-full px-3 py-2 font-mono placeholder-gray-500 transition-all duration-150 bg-white rounded focus:outline-none focus:bg-white focus:shadow-outline"
                />
              </div>

              <div className="py-2">
                <label htmlFor="subject" className="hidden">
                  Asunto
                </label>
                <input
                  id="subject"
                  type="text"
                  name="subject"
                  required
                  placeholder="Asunto"
                  className="w-full px-3 py-2 font-mono placeholder-gray-500 transition-all duration-150 bg-white rounded focus:outline-none focus:bg-white focus:shadow-outline"
                />
              </div>

              <div className="py-2">
                <label htmlFor="message" className="hidden">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  placeholder="Mensaje"
                  className="w-full px-3 py-2 font-mono placeholder-gray-500 transition-all duration-150 bg-white rounded focus:outline-none focus:shadow-outline focus:bg-white"
                />
              </div>

              <div className="flex flex-wrap mt-4">
                <div className="w-full md:w-1/2 md:pr-2">
                  <button
                    type="reset"
                    className="block w-full py-3 font-bold capitalize border rounded text-primary border-primary"
                  >
                    limpiar
                  </button>
                </div>
                <div className="w-full mt-3 md:w-1/2 md:pl-2 md:mt-0">
                  <button
                    type="submit"
                    className="block w-full py-3 font-bold text-white capitalize transition-all duration-200 border rounded bg-primary border-primary"
                  >
                    Enviar
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contacto
