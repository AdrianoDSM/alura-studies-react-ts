import { ITarefa } from '../../types/tarefa'
import style from './List.module.scss'
import Item from "./item";

interface Props {
    tarefas: ITarefa[],
    selecionarTarefa: (tarefaSelecionada: ITarefa) => void
}

function List({tarefas, selecionarTarefa}: Props) {
    
    return (
        <aside className={style.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
                {tarefas.map((item) => (
                    <Item
                        selecionarTarefa={selecionarTarefa}
                        key={item.id}
                        {...item}
                    />
                ))}
            </ul>
        </aside>
    )
}

export default List;