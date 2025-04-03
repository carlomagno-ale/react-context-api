
import { useContext } from "react";
import PostContext from '../context/PostContext.jsx';
import { Link } from "react-router-dom";

export default function PostsList() {

    const { posts } = useContext(PostContext);

    console.log(posts)

    return (

        <>



            <main>
                <div className="container">
                    <div className="row mt-5 justify-content-center">

                        {posts.map(post => (
                            <div className="col-4 mb-4" key={post.id}>
                                <div className="card h-100">
                                    <div className="card-body d-flex flex-column">
                                        <Link to={`/post/${post.id}`} className="text-decoration-none">
                                            <img src={post.image} className="card-img-top" alt={post.title} />
                                            <h5 className="card-title fs-6 pt-3">{post.title}</h5>
                                            <span className="card-text mt-auto">Scopri</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>


        </>
    )
};