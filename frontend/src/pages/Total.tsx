import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { api } from '../services/api';

import '../styles/home.scss';

interface EventosProps {
  id: string;
  nomeevento: string;
  local: string;
  diasemana: string;
  horario: string;
  like: number;
  dislike: number;
}

export const Total = () => {
  const [eventos, setEventos] = useState<EventosProps[]>([]);

  useEffect(() => {
    api.get('/events').then((res) => setEventos(res.data));
  }, []);

  return (
    <div id="container">
      <header>
				<div>
          <h1>Eventify</h1>
          <span>Cadastre seu evento</span>
        </div>
        <Link to='/'>
          <button>Voltar</button>
        </Link>
			</header>
      <div className="dados">
        <h2>Total de Eventos Cadastrados</h2>
        <span className="totalEventos">{eventos.length} eventos cadastrados</span>
      </div>
    </div>
  )
}
