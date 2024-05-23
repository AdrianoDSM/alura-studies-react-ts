import { useState } from "react";
import Form from "../components/form";
import List from "../components/list";
import Stopwatch from "../components/stopwatch";
import style from './App.module.scss'
import { ITarefa } from "../types/tarefa";


function App() {
  const [tarefas, setTarefas] = useState<ITarefa[]>([]);
  const [selecionado, setSelecionado] = useState<ITarefa>();

  function selecionarTarefa(tarefaSelecionada: ITarefa) {
    setSelecionado(tarefaSelecionada);
    setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => ({
      ...tarefa,
      selecionado: tarefa.id === tarefaSelecionada.id ? true : false
    })))
  }

  function finalizarTarefa() {
    if (selecionado) {
      setSelecionado(undefined)
      setTarefas(tarefasAnteriores => 
        tarefasAnteriores.map(tarefa => {
        if (tarefa.id === selecionado.id) {
          return {
            ...tarefa,
            selecionado:false,
            completado: true
          }
        }
        return tarefa;
      }))
    }
  }
  return (
    <div className={style.AppStyle}>
      <Form setTarefas={setTarefas} />
      <List tarefas={tarefas} selecionarTarefa={selecionarTarefa} />
      <Stopwatch selecionado={selecionado} finalizarTarefa={finalizarTarefa}/>
    </div>
  );
}

export default App;
