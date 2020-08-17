// Dependencies
import * as React from 'react';
import { graphql } from 'gatsby';

// Components
import { Layout, SEO, Emoji } from '../components';

// Hooks
import { usePlatziData } from '../hooks';

// Types
import { CurriculumItemType } from '../types';

type Props = {
  data: {
    allStrapiExperiences: {
      nodes?: [CurriculumItemType];
    };
    allStrapiEducations: {
      nodes?: [CurriculumItemType];
    };
  };
};

const AboutMe: React.FC<Props> = ({
  data: {
    allStrapiExperiences: { nodes: experience },
    allStrapiEducations: { nodes: education },
  },
}) => {
  // States
  const { careers } = usePlatziData();

  return (
    <Layout>
      <SEO title="Sobre Mí" />

      {/* Space for Header */}
      <div className="w-full min-h-20 bg-secondary"></div>

      {/* Hero */}
      <div className="bg-primary">
        <div className="max-w-4xl px-5 py-32 mx-auto">
          <h1 className="text-4xl font-bold md:text-7xl text-secondary">
            <span className="font-mono">{`<`}</span> Hola, soy <br /> Daniel <br /> Esteves{` `}
            <span className="font-mono">{`/>`}</span>
          </h1>
        </div>
      </div>

      {/* Biography */}
      <div className="w-full py-16 text-white bg-secondary">
        <div className="container px-5">
          <p className="max-w-4xl px-5 mx-auto font-mono text-xl">
            Desde muy niño he estado interesado en las computadoras comenzando desde los videojuegos, cada vez que
            jugaba sentía una necesidad de saber cómo eso está funcionando y cómo mi personaje hace cualquier
            movimiento; probando cada día más y más juegos me empezó a interesar cómo se pueden hacer las gráficas del
            juego y la interactividad contra el usuario.
          </p>

          <p className="max-w-4xl px-5 mx-auto mt-8 font-mono text-xl">
            Al llegar a la secundaria empecé a investigar sobre las computadoras y me empezó a interesar cómo las webs
            son construidas sobre todos las redes sociales, me gustaba la idea de que cuando un usuario le seleccionaba
            un menú se mostraban más opciones y animaciones, y eso fue lo que me enamoró del desarrollo web.
          </p>

          <p className="max-w-4xl px-5 mx-auto mt-8 font-mono text-xl">
            Comencé hace cinco años a trabajar y aprender desde el frontend, la parte visual de la web; hoy en día me
            considero un fullstack ya que gracias a el conocimiento que he obtenido puedo construir aplicaciones desde
            las vistas hasta las bases de datos y rutas. Me gusta aprender cada día más, integrar nuevas tecnologías y
            contribuir a nuevos proyectos para mejorar la productividad.
          </p>

          <p className="max-w-4xl px-5 mx-auto mt-8 font-mono text-xl text-right">
            - Los veo en el código <Emoji>👨‍💻</Emoji>
          </p>
        </div>
      </div>

      {/* Experience and Educations */}
      <div className="w-full px-5 py-12 bg-white">
        <h2 className="text-3xl font-bold text-center text-secondary">Experiencia laboral</h2>

        <div className="container mt-8 divide-y-2 divide-primary">
          {experience?.map(item => (
            <div
              key={item.id}
              className="max-w-4xl mx-auto first:border-t-2 first:border-primary last:border-b-2 last:border-primary"
            >
              <div className="max-w-3xl py-4 mx-auto">
                <h3 className="mb-3 font-mono text-2xl font-bold text-secondary">{item.title}</h3>
                <h4 className="mb-3 font-mono text-lg font-semibold text-secondary">
                  {item.subtitle} | {item.date}
                </h4>
                <p className="font-mono text-lg text-opacity-90 text-secondary">{item.content}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 className="mt-12 mb-6 text-3xl font-bold text-center text-secondary">Educación</h2>

        <div className="container">
          <div className="flex flex-wrap justify-center max-w-4xl mx-auto">
            {education
              ?.filter(item => item.title.includes(`TSU`))
              .map(item => (
                <div className="w-full px-2 my-2 md:w-1/2" key={item.id}>
                  <div className="block p-3 transition-all duration-200 bg-white border border-transparent rounded-lg shadow hover:shadow-lg hover:border-primary">
                    <div className="flex items-center justify-center">
                      <div className="w-full px-3">
                        <h3 className="mb-3 font-mono text-xl font-bold text-secondary">{item.title}</h3>
                        <h4 className="mb-3 font-mono font-semibold text-md text-secondary">{item.subtitle}</h4>
                        <p className="font-mono text-md text-opacity-90 text-secondary">{item.date}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>

          <div className="flex flex-wrap max-w-4xl mx-auto">
            {careers.map(career => (
              <div className="w-full px-2 my-2 md:w-1/3" key={career.id}>
                <a
                  href={`https://platzi.com${career.diploma_link}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-3 transition-all duration-200 bg-white border border-transparent rounded-lg shadow hover:shadow-lg hover:border-primary"
                >
                  <div className="flex items-center justify-center">
                    <div className="w-1/4">
                      <img
                        src={career.golden_achievement}
                        alt={`${career.title} | Daniel Esteves`}
                        height="75px"
                        width="75px"
                        className="block mx-auto"
                      />
                    </div>
                    <div className="w-3/4 px-3">
                      <h3 className="text-lg font-semibold text-secondary">{career.title}</h3>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full px-5 pt-12 bg-secondary">
        <div className="max-w-4xl pb-12 mx-auto border-b-2 border-primary">
          <h3 className="font-mono text-2xl text-center md:text-3xl text-primary">¿Tienes una idea?</h3>
          <h2 className="text-4xl font-bold text-center text-white md:text-5xl">¡Hagámosla realidad!</h2>
          <div className="mt-3 text-center">
            <button
              type="button"
              className="px-8 py-3 font-mono text-lg font-semibold rounded-full bg-primary text-secondary"
            >
              Escríbeme un mensaje
            </button>
          </div>
          <div className="mt-3 text-center">
            <a href="#!" className="font-mono text-primary">
              Revisa mis servicios
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query AboutMe {
    allStrapiEducations(sort: { order: [ASC, DESC, DESC], fields: [finished, date, title] }) {
      nodes {
        id
        title
        subtitle
        content
        date
        finished
      }
    }
    allStrapiExperiences(sort: { order: [ASC, DESC, DESC], fields: [finished, date, title] }) {
      nodes {
        id
        title
        subtitle
        content
        date
        finished
      }
    }
  }
`;

export default AboutMe;
