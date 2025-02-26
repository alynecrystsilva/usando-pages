import Pagina from "@/components/Pagina";
import { useRouter } from "next/router";

export default function PaginaProdutoPorId() {
  const router = useRouter();
  return (
    <Pagina>
      <h1>Produto: {router.query.id}</h1>
    </Pagina>
  );
} 