import { useCallback, useReducer, useEffect, useState, } from "react";

const tarefasReducer = (state, action) => {
    switch (action.type) {
        case 'add_tarefa':
            return [...state, action.payload]

        case 'concluir_tarefa':
            const atualizarTarefa = [...state]
            atualizarTarefa[action.payload].completed = true
            return atualizarTarefa

        case 'excluir_tarefa':
            return state.filter((_,index/*pegando a posição*/) => index !== action.payload)
            default:
                return state;
    }
}

export default function Lista() {

    const [tarefa, setTarefa] = useState('')

    const [tarefaAtual, dispatch] = useReducer(tarefasReducer, [])

    const addTarefa = useCallback(() => {
        if (tarefa.trim() !== '') {
            dispatch({ type: 'add_tarefa', payload: { text: (tarefa), completed: false } })
        }
    }, [tarefa])

    const concluirTarefa = useCallback((index) =>{
        dispatch({type:'concluir_tarefa', payload:index})
    })

    const excluirTarefa = useCallback((index) =>{
        dispatch({type:'excluir_tarefa', payload:index})
    })

    return (

        <div className="center">

            <h1>Lista de Tarefas</h1>

            <div className="inputA">

                <input
                    type="text"
                    placeholder="Nova Tarefa"
                    value={tarefa}
                    onChange={(e) => setTarefa(e.target. value)}
                />
                <button onClick={addTarefa}>Add Tarefa</button>

            </div>
            <ul>
                {tarefaAtual.map((tarefas, index) => (
                    <li kay={index}>
                        <span style={{textDecoration: tarefas.completed ? 'line-through' : 'none'}}>
                        {tarefas.text}
                        </span>
                        {!tarefas.Completed &&(
                            <>
                            <button onClick={() => concluirTarefa(index)}>Concluir</button>
                            <button onClick={() => excluirTarefa(index)}>Excluir</button>
                            </>

                        )}
                    </li>

                ))}


            </ul>
        </div>
    )

}