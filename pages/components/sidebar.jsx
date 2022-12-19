
export default function Sidebar(){
    return(
        <div className={'bg-gray-100 h-full rounded-2xl shadow-2xl w-full grid   lg:w-1/4 lg:mx-10 p-5'}>

            <h1 className={'text-4xl'}>Categorias</h1>
            <div className={'bg-black h-1 w-full my-1 '}></div>
            <div className={'f-full grid grid-cols-2 gap-2 lg:grid-cols-1'}>
                <h1 className={'transition ease-in-out my-3  hover:-translate-y-1 hover:scale-400  duration-300'}>Historia</h1>
                <h1 className={'transition ease-in-out my-3  hover:-translate-y-1 hover:scale-400  duration-300'}>Matematicas</h1>
                <h1 className={'transition ease-in-out my-3  hover:-translate-y-1 hover:scale-400  duration-300'}>Ciencia</h1>
                <h1 className={'transition ease-in-out my-3  hover:-translate-y-1 hover:scale-400  duration-300'}>Filosofia</h1>
                <h1 className={'transition ease-in-out my-3  hover:-translate-y-1 hover:scale-400  duration-300'}>Geografia</h1>
                <h1 className={'transition ease-in-out my-3  hover:-translate-y-1 hover:scale-400  duration-300'}>Quimica</h1>
                <h1 className={'transition ease-in-out my-3  hover:-translate-y-1 hover:scale-400  duration-300'}>Fisica</h1>

            </div>


        </div>
    )

}