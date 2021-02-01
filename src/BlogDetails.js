import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {

    const {id} = useParams();  // use param will 'catch' the :id which is a dinamic part of the Link path
    const {data: blog, error, isPending} = useFetch('http://localhost:8000/blogs/'+id);
    const history = useHistory();

    const handleClick = () =>{
        fetch('http://localhost:8000/blogs/'+blog.id, {
            method: 'DELETE'
        })
        .then(()=>{
            history.push('/');
        })
    };


    return ( 
        <div className="blog-details">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>{blog.author}</p>
                    <div>{blog.body}</div>
                </article>
            )}
            <button onClick={handleClick}>Delete this blog</button>
        </div>
    );
}
 
export default BlogDetails;