import { useSession, signOut } from "next-auth/react";
import { Router, useRouter } from "next/router";
import Loading from "../../components/Loading";
import NavbarUser from "../../components/navbarUser"
import Sidebar from "../../components/sidebar";
import Slider from "../../components/slidebar";
import {useUser} from "@auth0/nextjs-auth0/client";
import {useEffect, useState} from "react";




export default function Home() {
    const [books, setBooks] = useState([]);
    const showBooks = async () => {
        const response = await fetch("http://localhost:8080/api/books/categories/historia");
        const data = await response.json();
        setBooks(data);
    };
    const router = useRouter();
    const { user, error, isLoading } = useUser();
    const [search, setSearch] = useState("");

    const searcher = (e) => {
        setSearch(e.target.value);
        console.log(e.target.value);
    };
    const results = !search
        ? books
        : books.filter((book) =>
            book.title.toLowerCase().includes(search.toLocaleLowerCase())
        );
    useEffect(() => {
        showBooks();
    }, []);
    if (isLoading) {
        return <Loading />;
    }
    if (user) {
        console.log("ingresaste con google");
        return (
            <div className=" h-full">
                <NavbarUser></NavbarUser>

                <Slider />
                <input
                    className={"h-20 text-5xl w-full text-center"}
                    type={"text"}
                    placeholder={"Buscar Libro"}
                    value={search}
                    onChange={searcher}
                />
                <div className={" grid lg:flex mt-5"}>
                    <Sidebar></Sidebar>
                    <div
                        className={
                            " rounded-2xl w-full lg:w-3/4  grid grid-cols-2 gap-2 lg:grid-cols-4 lg:gap-5  mr-1 mx-2 shadow-2xl"
                        }
                    >
                        {results.map((book) => (
                            <div
                                className={
                                    "my-4 mx-3 h-72 w-52  lg:w-52 rounded-2xl  px-2 shadow-2xl"
                                }
                                key={book._id}
                                onClick={() => router.push(`/libros/${book._id}`)}
                            >
                                <img
                                    className="w-full  h-40 mt-2"
                                    src={`http://localhost:3000/${book.path}`}
                                />
                                <h1
                                    className={
                                        "text-xl grid content-center text-end h-20 flex justify-center"
                                    }
                                >
                                    {book.title}
                                </h1>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    } else {
        router.push("/signin");
    }
}

