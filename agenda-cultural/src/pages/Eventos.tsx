import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

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

const fetchEvents = async (): Promise<Event[]> => {
  const res = await fetch(`${BASE_URL}/eventos`);
  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(text || `Erro ${res.status} ao buscar eventos`);
  }
  return res.json();
};

const Eventos: React.FC = () => {
  const {
    data: events,
    isLoading,
    isError,
    error,
  } = useQuery<Event[], Error>(["eventos"], fetchEvents, { retry: 1 });

  return (
    <main className="min-h-screen bg-background container mx-auto px-4 py-8">
      <header className="mb-6">
        <h1 className="text-2xl font-bold">Eventos</h1>
      </header>

      <Card className="w-full">
        <CardHeader>
          <CardTitle>Lista de eventos</CardTitle>
        </CardHeader>
        <CardContent>
          {isLoading ? (
            <p>Carregando eventos...</p>
          ) : isError ? (
            <p className="text-destructive">
              Erro ao carregar: {error?.message}
            </p>
          ) : events && events.length > 0 ? (
            <ul className="space-y-4">
              {events.map((ev) => (
                <li
                  key={ev.id}
                  className="flex items-center justify-between p-3 border rounded"
                >
                  <div>
                    <Link
                      to={`/eventos/${ev.id}`}
                      className="text-lg font-semibold hover:underline"
                    >
                      {ev.title}
                    </Link>
                    <div className="text-sm text-muted-foreground">
                      {ev.date} — {ev.local}
                    </div>
                  </div>
                  <div>
                    <Link to={`/eventos/${ev.id}`}>
                      <Button>Ver detalhes</Button>
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p>Nenhum evento encontrado.</p>
          )}
        </CardContent>
      </Card>
    </main>
  );
};

export default Eventos;
