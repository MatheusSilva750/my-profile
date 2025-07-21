// Exemplo de dados dos serviços
const services = [
  {
    title: 'Desenvolvimento Web Front-End',
    description: 'Criação de interfaces de usuário interativas e responsivas com React, Vue.js e as mais recentes tecnologias do mercado.',
    icon: '💻' // Você pode usar SVGs ou outros ícones aqui
  },
  {
    title: 'Desenvolvimento Back-End',
    description: 'Construção de APIs RESTful robustas e escaláveis, e gerenciamento de bancos de dados com Node.js, Express e DynanoDB, ElasticSearch ou mongoDB.',
    icon: '⚙️'
  },
  {
    title: 'Deploy',
    description: 'Deploy de serviços em Containner as a Service (CaaS) e funções em provedores Cloud do Backend ao frontend 100% Severless até o banco de dados na AWS e Azure.',
    icon: '🚀'
  }
];

const ServicesOffered = () => {
  return (
    <section id="services" className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Serviços Oferecidos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOffered;