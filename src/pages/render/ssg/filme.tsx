import Filme from "@/components/Filme";
import Pagina from "@/components/Pagina";
import filmes from "@/data/filmes";

export async function getStaticProps() {
  return {
    props: { filme: filmes[0] }
  }
}

export default function PaginaFilme(props: any) {
  return (
    <Pagina>
      <Filme
        id={props.filme.id}
        titulo={props.filme.titulo}
        subtitulo={props.filme.subtitulo}
        descricao={props.filme.descricao}
        imagem={props.filme.img}
      />
    </Pagina>
  )
}