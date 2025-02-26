import Image from "next/image";

export interface FilmeProps { 
  id: string;
  titulo: string;
  subtitulo: string;
  descricao: string;
  imagem: string;
}

export default function Filme(props: FilmeProps) { 
  return (
    <div className="flex gap-5 p-5 w-3/5 bg-black border border-zinc-800 rounded-lg shadow-xl">
      <Image src={props.imagem} alt={props.titulo} width={150} height={150} className="self-start rounded-full"/>
      <div className="flex flex-col">
        <div className="text-2xl">{props.titulo}</div>
        <div className="text-lg text-zinc-500">{props.subtitulo}</div>
        <div className="text-sm font-light text-zinc-300">{props.descricao}</div>
      </div>
    </div>
  )
}