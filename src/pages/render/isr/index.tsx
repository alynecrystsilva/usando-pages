import Pagina from "@/components/Pagina";

export async function getStaticProps() {
  const resposta = await fetch('http://localhost:3000/api/produtos');
  const produtos = await resposta.json();
  const data = new Date().toLocaleTimeString('pt-BR');
  return { props : { produtos, data } }	
}

export default function PaginaISR({ produtos, data }: any) {
  return (
    <Pagina>
      <h1>Renderização Incremental (ISR)</h1>
      <h1>Gerado em  {data}</h1>
      <ul>
        {produtos.map((produto : any) => {
          return (
            <li key={produto.id} className="text-lg">
              {produto.id} - {produto.nome} - R$ {produto.preco}
            </li>)
        })}
      </ul>
    </Pagina>
  )
}