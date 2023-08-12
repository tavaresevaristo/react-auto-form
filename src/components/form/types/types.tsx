
import { z } from 'zod'
import { schemaForm } from '../schemas'

export type formProp = z.infer<typeof schemaForm>

export type AddressProp = {

    name: string;
    data_de_nascimento: string;
    morada: string;
    pai: string;
    mae: string;
}