const profilePicUrl = '/foto.jpg'; // Coloque uma foto sua na pasta `public` com este nome

const AboutMe = () => {
  return (
    <section id="about" className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Sobre Mim
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Coluna da Imagem */}
          <div className="md:w-1/3 flex-shrink-0">
            <img
              src={profilePicUrl}
              alt="FMtheus Antonio da Silva"
              className="rounded-full w-64 h-64 mx-auto object-cover shadow-lg"
            />
          </div>
          {/* Coluna do Texto */}
          <div className="md:w-2/3 text-gray-600 text-lg text-center md:text-left">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Olá, eu sou Matheus Antonio da Silva!</h3>
            <p className="mb-4">
              Sou um(a) desenvolvedor(a) apaixonado(a) por criar soluções digitais que sejam intuitivas, eficientes e bonitas. Com experiência em tecnologias como React, Node.js e Tailwind CSS, busco transformar ideias complexas em realidade.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;