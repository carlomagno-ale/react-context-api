import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";


/*import { useContext } from "react";
import PostContext from '../context/PostContext.jsx';*/


export default function SinglePost() {

    //const { posts } = useContext(PostContext);

    const [post, setPost] = useState()

    const { id } = useParams()

    const navigate = useNavigate();

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res => res.json())
            .then(data => {

                setPost(data)
                console.log(data)

            })
            .catch(err => {
                console.log('ERROR', err);
            })

    }, [])

    console.log(post)

    return (
        <>


            <main>
                <div className="container text-center">

                    {post && (
                        <div className="single-post">
                            <h1 className="my-3">{post.title}</h1>
                            <img src={post.image} alt={post.title} />
                            <div className="mt-3">
                                <p className="my-4">{post.description}</p>
                            </div>
                        </div>
                    )}

                    <button className="my-5" onClick={() => navigate(-1)}>
                        Torna alla pagina precedente
                    </button>

                </div>
            </main>


        </>
    );
}