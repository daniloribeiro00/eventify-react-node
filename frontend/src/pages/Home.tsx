import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';

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

export const Home = () => {
  const [eventos, setEventos] = useState<EventosProps[]>([]);
  const [formEnviado, setFormEnviado] = useState(false);

  useEffect(() => {
    api.get('/events').then((res) => setEventos(res.data));
  }, []);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const { target } = e;

    const novoEvento = {
      nomeevento: target.nomeevento.value,
      local: target.local.value,
      diasemana: target.diasemana.value,
      horario: target.horario.value,
    }

    await api.post('/events', novoEvento);
    api.get('/events').then((res) => setEventos(res.data));

    setFormEnviado(true);
		setTimeout(() => {
      setFormEnviado(false);
		}, 5000);

		target.reset();
    scroll.scrollToBottom();
  }

  const handleDelete = async (id: string) => {
		await api.delete(`/events/${id}`);
		api.get('/events').then((res) => setEventos(res.data));
	};

  const handleLike = async (id: string) => {
    await api.post(`/events/like/${id}`);
    api.get('/events').then((res) => setEventos(res.data));
  }

  const handleDislike = async (id: string) => {
    await api.post(`/events/dislike/${id}`);
    api.get('/events').then((res) => setEventos(res.data));
  }

	return (
		<div id="container">
			<header>
				<div>
          <h1>Eventify</h1>
          <span>Cadastre seu evento</span>
        </div>
        <Link to='/total'>
          <button>Total de cadastros</button>
        </Link>
			</header>
			<div className='cadastro'>
				<form onSubmit={handleSubmit}>
					<h2>Insira os dados do seu evento abaixo</h2>
					<div>
						<label>Nome do evento</label>
						<input
              type='text'
              name='nomeevento'
              placeholder='Nome do Evento'
              required
            />
					</div>
					<div>
						<label>Local</label>
						<input
              type='text'
              name='local'
              placeholder='Local do Evento'
              required
            />
					</div>
					<div>
						<label>Dia da semana</label>
						<input
              type='text'
              name='diasemana'
              placeholder='Dia da Semana'
              required
            />
					</div>
					<div>
						<label>Horário</label>
						<input
              type='text'
              name='horario'
              placeholder='Horário'
              required
            />
					</div>
					<div className="button">
            <button type='submit'>
              <img src="images/save.png" alt="Salvar" />
              Salvar
            </button>
          </div>
          {!!formEnviado && (
            <span className='success'>Evento salvo com sucesso!</span>
          )}
				</form>
			</div>
      <div className="dados">
        <h2>Eventos Cadastrados</h2>
        {!eventos && (
					<span className='noData'>Não existem cadastros realizados!</span>
				)}
        {eventos.map((evento, indice) => (
          <main className="dadosEvento" key={indice} id={evento.id}>
            <div className="leftData">
              <div>
                <label>Nome do evento</label>
                <span>{evento.nomeevento}</span>
              </div>
              <div>
                <label>Local</label>
                <span>{evento.local}</span>
              </div>
              <div>
                <label>Dia da semana</label>
                <span>{evento.diasemana}</span>
              </div>
              <div>
                <label>Horário</label>
                <span>{evento.horario}</span>
              </div>
            </div>
            <div className="rightButtons">
              <button type="button" className="remove" onClick={() => handleDelete(evento.id)}>
                <img src="images/trash.png" alt="Salvar" />
                Remover
              </button>
              <button type="button" className="like" onClick={() => handleLike(evento.id)}>
                <img src="images/like.png" alt="Salvar" />
                {evento.like} Like(s)
              </button>
              <button type="button" className="dislike" onClick={() => handleDislike(evento.id)}>
                <img src="images/dislike.png" alt="Salvar" />
                {evento.dislike} Dislike(s)
              </button>
            </div>
          </main>
        ))}
      </div>
		</div>
	);
};
