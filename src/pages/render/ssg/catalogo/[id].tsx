import BotaoLink from "@/components/BotaoLink";
import Filme from "@/components/Filme";
import Pagina from "@/components/Pagina";
import filmes from "@/data/filmes";

export function getStaticPaths() { 
  const paths = filmes.slice(0, 5).map((filme) => ({ 
    params: { id: filme.id.toString() }
  }));
  return { paths, fallback: true };
}

export function getStaticProps({params}: any) {
  const i = filmes.findIndex((filme) => filme.id === params.id);
  console.log(params.id, i);
  return {
    props: {
      filme: filmes[i],
      numero: i + 1,
      total: filmes.length,
      idAnterior: filmes[i - 1]?.id ?? null,
      idProximo: filmes[i + 1]?.id ?? null
    }
  }
}

export default function PaginaCatalogo(props: any) {
  const { filme, numero, total, idAnterior, idProximo } = props;
  if(!filme) return null;
  return (
    <Pagina>
      <Filme
        id={filme.id}
        titulo={filme.titulo}
        subtitulo={filme.subtitulo}
        imagem={filme.img}
        descricao={filme.descricao}
      />
      <div className="flex gap-5 items-center justify-center p-5">
        {idAnterior && <BotaoLink href={`/render/ssg/catalogo/${idAnterior}`}>Anterior</BotaoLink>}
        <div className="flex gap-2 text-xl items-center">
          <span>{numero}</span>
          <span className="text-base text-zinc-500">De</span>
          <span>{total}</span>
        </div>
        {idProximo && <BotaoLink href={`/render/ssg/catalogo/${idProximo}`}>Próximo</BotaoLink>}
      </div>
    </Pagina>
  )
}