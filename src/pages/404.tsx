import Link from "next/link";

export default function NotFound(){
    return (
        <>
            <h1>404</h1>
            <p>Alguma coisa deu errada!</p>
            <Link href="/">Voltar</Link>
        </>
    )
}