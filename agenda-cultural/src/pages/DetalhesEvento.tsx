import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import { ArrowLeft } from "lucide-react";

type Event = {
  id: string;
  title: string;
  description?: string;
  date?: string;
  local?: string;
  neighborhood?: string;
  price?: string;
  imageUrl?: string;
};

const BASE_URL =
  (import.meta && (import.meta as any).env?.VITE_API_URL) ||
  "http://localhost:8080";

const fetchEvent = async (id: string, signal?: AbortSignal): Promise<Event> => {
  const res = await fetch(`${BASE_URL}/eventos/${id}`, { signal });
  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(text || `Erro ${res.status} ao buscar evento`);
  }
  return res.json();
};

const DetalhesEvento: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  if (!id) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-6">
              <p>ID do evento inválido.</p>
            </CardContent>
          </Card>
        </main>
      </div>
    );
  }

  const {
    data: event,
    isLoading,
    isError,
    error,
  } = useQuery<Event, Error>(
    ["evento", id],
    ({ signal }) => fetchEvent(id, signal),
    {
      enabled: !!id,
      retry: 1,
    }
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <Button variant="ghost" onClick={() => navigate(-1)} className="mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Voltar
        </Button>

        <Card className="max-w-2xl mx-auto">
          {isLoading ? (
            <CardContent className="p-6">
              <p>Carregando evento...</p>
            </CardContent>
          ) : isError ? (
            <CardContent className="p-6">
              <p className="text-destructive">
                Erro ao carregar evento: {error?.message}
              </p>
            </CardContent>
          ) : event ? (
            <>
              {event.imageUrl && (
                <div className="aspect-video overflow-hidden bg-muted rounded-t-lg">
                  <img
                    src={event.imageUrl}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-2xl">{event.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <span className="font-semibold">Descrição: </span>
                  <span className="text-muted-foreground">
                    {event.description}
                  </span>
                </div>
                <div>
                  <span className="font-semibold">Data: </span>
                  <span className="text-muted-foreground">{event.date}</span>
                </div>
                <div>
                  <span className="font-semibold">Local: </span>
                  <span className="text-muted-foreground">{event.local}</span>
                </div>
                <div>
                  <span className="font-semibold">Bairro: </span>
                  <span className="text-muted-foreground">
                    {event.neighborhood}
                  </span>
                </div>
                <div>
                  <span className="font-semibold">Preço: </span>
                  <span className="text-muted-foreground">{event.price}</span>
                </div>
              </CardContent>
            </>
          ) : (
            <CardContent className="p-6">
              <p>Evento não encontrado.</p>
            </CardContent>
          )}
        </Card>
      </main>
    </div>
  );
};

export default DetalhesEvento;
