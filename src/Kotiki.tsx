import React, {  useEffect, useState } from "react";


export const Kotiki = () => {
    const[items, setItems] = useState([])
    const[status, setStatus] = useState("idle")
    const[error, setError] = useState(null)
    const[kotiks, setKotiks] = useState('')


useEffect (() => {
    setStatus("loading") // должен не забыть заняться статусом
    setError(null) // не забыть заняться ошибкой
    let promise = new Promise<void>((resolve, reject) => {
           resolve();
        });
        promise
           .then((message) => {
               return setKotiks("myay")
           })
           .catch((err) => {
               console.log('err: ', err)
           })
           .finally(() => { 
               console.log('Промис завершён. Остановить индикатор загрузки')
           })  
}, [])



return <div>
    {(status === 'loading') && <span>Loading...</span>}
    {!!error && <span>{error}</span>}  если error то тогда отрисуй span
    <ul>{!!kotiks && <span>{"KATYA BUSINKA"}</span>}
    </ul>
</div>
}