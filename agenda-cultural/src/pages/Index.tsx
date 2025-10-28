import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Bem-vindo à Agenda Cultural do Recife
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Descubra e participe dos melhores eventos culturais da cidade. 
            Shows, feiras, teatro e muito mais!
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" onClick={() => navigate("/eventos")}>
              Ver Eventos
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => navigate("/cadastro-evento")}
            >
              Criar Evento
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;