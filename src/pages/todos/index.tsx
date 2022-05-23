import Link from "next/link"

export async function getStaticProps(){
    const data = await fetch('https://jsonplaceholder.typicode.com/todos')

    const tarefas = await data.json()
    
    return {
        props: { tarefas }
    }
}

export default function Todos({tarefas}){
    console.log(tarefas)
    return(
        <>
            <h1>Tarefas para fazer: </h1>
            <ul>
                {tarefas.map((tr) => (
                    <li key={tr.id}>{tr.title} - <Link href={`/todos/${tr.id}`}>Ver Todo</Link></li>
                ))}
            </ul>
        </>
    )
}