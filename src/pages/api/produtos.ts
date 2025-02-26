import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json([
    { id: 1, nome: 'Caneta', preco: 2.99 },
    { id: 2, nome: 'Caderno', preco: 15.99 },
    { id: 3, nome: 'Borracha', preco: 0.99 },
    { id: 4, nome: 'Lápis', preco: 1.99 },
    { id: 5, nome: 'Apontador', preco: 1.99 },
    { id: 6, nome: 'Régua', preco: 2.99 },
    { id: 7, nome: 'Mochila', preco: 59.99 },
    { id: 8, nome: 'Estojo', preco: 5.99 },
    { id: 9, nome: 'Cola', preco: 3.99 },
    { id: 10, nome: 'Corretivo', preco: 4.99 }
  ])
}