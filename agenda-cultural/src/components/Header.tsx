import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  
  const navItems = [
    { path: "/cadastro-usuario", label: "Cadastrar Usuário" },
    { path: "/cadastro-evento", label: "Cadastrar Evento" },
    { path: "/eventos", label: "Eventos" },
    { path: "/favoritos", label: "Meus Favoritos" },
    { path: "/acessibilidade", label: "Acessibilidade" },
  ];

  return (
    <header className="bg-primary text-primary-foreground shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center py-4">
          <Link to="/" className="text-2xl font-bold mb-2">
            Agenda Cultural Recife
          </Link>
          <p className="text-sm text-primary-foreground/80 mb-4">
            Descubra eventos criativos pra fazer com os Recife e Orinda
          </p>
          <nav className="flex flex-wrap justify-center gap-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm hover:underline transition-all ${
                  location.pathname === item.path ? "font-bold underline" : ""
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;