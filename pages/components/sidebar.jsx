
export default function Sidebar(){
    return(
        <div className={'bg-gray-100 h-full rounded-2xl shadow-2xl w-full grid   lg:w-1/4 lg:mx-10 p-5'}>

            <h1 className={'text-4xl'}>Categorias</h1>
            <div className={'bg-black h-1 w-full my-1 '}></div>
            <div className={'f-full grid grid-cols-2 gap-2 lg:grid-cols-1'}>
                <h1 className={'transition ease-in-out my-3  hover:-translate-y-1 hover:scale-400  duration-300'}>
                    <a href="http://localhost:8080/libros/categorias/historia">Historia</a></h1>
                <h1 className={'transition ease-in-out my-3  hover:-translate-y-1 hover:scale-400  duration-300'}>
                    <a href="http://localhost:8080/libros/categorias/matematica">Matematicas</a></h1>
                <h1 className={'transition ease-in-out my-3  hover:-translate-y-1 hover:scale-400  duration-300'}>
                    <a href="http://localhost:8080/libros/categorias/ciencia">Ciencia</a></h1>
                <h1 className={'transition ease-in-out my-3  hover:-translate-y-1 hover:scale-400  duration-300'}>
                    <a href="http://localhost:8080/libros/categorias/filosofia">Filosofia</a></h1>
                <h1 className={'transition ease-in-out my-3  hover:-translate-y-1 hover:scale-400  duration-300'}>
                    <a href="http://localhost:8080/libros/categorias/geografia">Geografia</a></h1>
                <h1 className={'transition ease-in-out my-3  hover:-translate-y-1 hover:scale-400  duration-300'}>
                    <a href="http://localhost:8080/libros/categorias/quimica">Quimica</a></h1>
                <h1 className={'transition ease-in-out my-3  hover:-translate-y-1 hover:scale-400  duration-300'}>
                    <a href="http://localhost:8080/libros/categorias/fisica">Fisica</a></h1>

            </div>


        </div>
    )

}