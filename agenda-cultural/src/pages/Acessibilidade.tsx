import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";

const Acessibilidade = () => {
  const { toast } = useToast();
  const [fontSize, setFontSize] = useState([16]);
  const [contrast, setContrast] = useState([100]);

  const handleSaveSettings = () => {
    toast({
      title: "Configurações salvas!",
      description: "Suas preferências de acessibilidade foram atualizadas.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <Card className="max-w-md mx-auto">
          <CardHeader>
            <CardTitle>Acessibilidade</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="font-size">
                  Aumentar o tamanho da fonte: {fontSize[0]}px
                </Label>
                <Slider
                  id="font-size"
                  value={fontSize}
                  onValueChange={setFontSize}
                  min={12}
                  max={24}
                  step={1}
                  className="w-full"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="contrast">
                  Ajustar o contraste: {contrast[0]}%
                </Label>
                <Slider
                  id="contrast"
                  value={contrast}
                  onValueChange={setContrast}
                  min={50}
                  max={150}
                  step={10}
                  className="w-full"
                />
              </div>
            </div>
            <Button onClick={handleSaveSettings} className="w-full">
              Salvar Alterações
            </Button>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Acessibilidade;