import { Container } from "./styles.js"
import { useBI } from "./useBI";

export const Form = () => {

    const { errors, register, handleSubmit, handleFormSubmit } = useBI()

    return (
        <Container>

            <form onSubmit={handleSubmit(handleFormSubmit)}>

                <h1>REACT-HOOK-FORM + ZOD & TS</h1>

                <div className="input-box">
                    <input {...register('address.bi')}
                        type="text"
                        placeholder='NIF ou Bilhete de Identidade'
                        maxLength={14}
                    />
                    {errors.address?.bi?.message && (
                        <p> {errors.address?.bi?.message} </p>
                    )}
                </div>

                <div className="input-box">
                    <input {...register('address.nome')}
                        type="text"
                        placeholder='Nome Completo'
                    />
                    {errors.address?.nome?.message && (
                        <p> {errors.address?.nome?.message} </p>
                    )}
                </div>

                <div className="input-box">
                    <input {...register('address.nasc')}
                        type="text"
                        placeholder='Nascimento'
                    />
                    {errors.address?.nasc?.message && (
                        <p> {errors.address?.nasc?.message} </p>
                    )}
                </div>

                <div className="input-box">
                    <input {...register('address.morada')}
                        type="text"
                        placeholder='Morada'
                    />
                    {errors.address?.morada?.message && (
                        <p> {errors.address?.morada.message} </p>
                    )}
                </div>

                <div className="input-box">
                    <input {...register('address.pai')}
                        type="text"
                        placeholder='Nome do Pai'
                    />
                    {errors.address?.pai?.message && (
                        <p> {errors.address?.pai?.message} </p>
                    )}
                </div>

                <div className="input-box">
                    <input {...register('address.mae')}
                        type="text"
                        placeholder='Nome da Mãe'
                    />
                    {errors.address?.mae?.message && (
                        <p> {errors.address?.mae?.message} </p>
                    )}
                </div>

                <button className='btn'>Enviar</button>
            </form>
        </Container>
    );
}