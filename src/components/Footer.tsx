const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        <p>&copy; {currentYear} [Seu Nome]. Todos os direitos reservados.</p>
        <div className="mt-4">
          {/* Adicione links para suas redes sociais aqui */}
          <a href="https://www.linkedin.com/in/matheus-a-silva-94793820/" target="_blank" rel="noopener noreferrer" className="mx-2 hover:text-blue-400 transition-colors">LinkedIn</a>
          <a href="https://github.com/matheusSilva750/" target="_blank" rel="noopener noreferrer" className="mx-2 hover:text-gray-400 transition-colors">GitHub</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;