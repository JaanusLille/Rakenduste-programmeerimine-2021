import { useContext, useState, useRef, useEffect } from "react"
import { Context } from "../store"
import { addPost, removePost, updatePosts } from "../store/actions"

function Posts() {

    const [title, setTitle] = useState("")
    const [state, dispatch] = useContext(Context)
    const inputRef = useRef(null)

    // Ilma tühja dependency massiivita [] 
    // Kutsub välja igal renderdusel
    // Tühja massiivi dependency-na esimest korda
    // Saab kutsuda välja ka teatud "state" muutuste puhul
    useEffect(() => {
        console.log("true or false? ")
        dispatch(updatePosts([
            {
                id: 1,
                title: "Test-prefetched-array-1"
            },
            {
                id: 2,
                title: "Test-prefetched-array-2"
            },
            {
                id: 3,
                title: "Test-prefetched-array-3"
            },
            {
                id: 4,
                title: "Test-prefetched-array-4"
            },
        ]))
    }, [])

    // Võib ka lisada eraldi nupu "get latest from database" või midagi sarnast (Synch)

    const handleSubmit = (e) => {
        e.preventDefault()  // ei luba formil teha refresh-i

        // const newPost = {
        //     id: Date.now(),
        //     title
        // }
        // dispatch(addPost(newPost))

        setTitle("")

        addNewPost()

        if(inputRef.current) inputRef.current.focus()
    }

    const addNewPost = () => {

        // Salvestame Andmebaasi
        // Ja kui see on edukas, 
        // Siis teeme dispatchi ja uuendame state lokaalselt

        const newPost = {
            id: Date.now(),
            title,
        };
        dispatch(addPost(newPost));
    };

    console.log({ state })
    console.log({ inputRef })

    return (
        <div style={{ textAlign: "center" }}>
            <h1>Posts</h1>
            <form onSubmit={handleSubmit}>
                <input ref={inputRef} type="text" value={title} onChange={e => setTitle(e.target.value)} autoFocus/>
                <button type="submit">Submit</button>
            </form>

            { state.posts.data.map((e) => (
                <li key={ e.id }> 
                    { e.id } { e.title } 
                    <span 
                        style={{ cursor: "pointer" }}
                        onClick={() => dispatch(removePost(e.id))}
                        >&#128540;
                    </span>
                </li>
            )) }
            {/* { index } { JSON.stringify(array) } */}

        </div>
    );
}

export default Posts;