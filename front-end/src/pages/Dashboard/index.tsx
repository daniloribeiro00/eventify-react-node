import React from 'react'

const Dashboard: React.FC = () => {
  return (
    <form>
      <input type='text' name='nomeevento' placeholder='Nome do Evento' />
      <input type='text' name='local' placeholder='Local do Evento' />
      <input type='text' name='diasemana' placeholder='Dia da Semana' />
      <input type='text' name="horario" placeholder="Horário" />
      <button type="submit">Salvar</button>
    </form>
  )
}

export default Dashboard



