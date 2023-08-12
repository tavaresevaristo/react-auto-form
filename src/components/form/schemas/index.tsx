import { z } from 'zod'

export const schemaForm = z.object({

    address: z.object({
        bi: z.string().min(14, 'Informe um BI/NIF válido'),
        nome: z.string().min(1, 'Informe um nome válido'),
        nasc: z.string().min(1, 'Informe uma data válida'),
        morada: z.string().min(1, 'Informe uma morada válida'),
        pai: z.string().min(1, 'Informe um nome válido'),
        mae: z.string().min(1, 'Informe um nome válido')
    })
}).transform((field) => ({
    address: {
        bi: field.address.bi,
        nome: field.address.nome,
        nasc: field.address.nasc,
        morada: field.address.morada,
        pai: field.address.pai,
        mae: field.address.mae
    }
}))