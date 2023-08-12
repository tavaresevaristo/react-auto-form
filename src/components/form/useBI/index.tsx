import axios from "axios";
import { useForm } from "react-hook-form";
import { useCallback, useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";

import { schemaForm } from "../schemas";
import { AddressProp, formProp } from "../types/types";


export const useBI = () => {

    const { handleSubmit, register, watch, setValue, formState: { errors } } = useForm<formProp>({

        criteriaMode: 'all',
        mode: 'all',
        resolver: zodResolver(schemaForm),
        defaultValues: {
            address: {
                bi: '',
                nome: '',
                nasc: '',
                morada: '',
                pai: '',
                mae: '',
            }
        }
    })


    

    const bi = watch('address.bi')

    const handleFormSubmit = (data: formProp) => {
        console.log(data.address)
        alert('Olá, abra o console ' + data.address.nome)
    }

    const handleSetData = useCallback((data: AddressProp) => {

        setValue('address.nome', data.name)
        setValue('address.nasc', data.data_de_nascimento)
        setValue('address.morada', data.morada)
        setValue('address.pai', data.pai)
        setValue('address.mae', data.mae)

    }, [setValue])


    const handleFetchAddress = useCallback(async (bi: string) => {
       
        const { data } = await axios.get(`https://consulta.edgarsingui.ao/consultar/${bi}`);
            
        handleSetData(data);

    }, [handleSetData]);
    



    useEffect(() => {

        setValue('address.bi', bi)

        if (bi.length !== 14) return;

        handleFetchAddress(bi)

    }, [handleFetchAddress, setValue, bi])


    return {

        errors,
        register,
        handleFormSubmit,
        handleSubmit
    }
}