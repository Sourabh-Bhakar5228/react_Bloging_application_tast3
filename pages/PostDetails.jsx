import React from 'react'
import PostAuthor from '../components/PostAuthor'
import { Link } from 'react-router-dom'
import thumbnail22 from "../images/blog22.jpg"

const PostDetails = () => {
    return (
        <>
            <section className='post__details'>

                <div className="container post_details__container">
                    <div className="post__details__header">
                        <PostAuthor />
                        <div className="post__details_buttons">
                            <Link to={`/posts/werwer/edit`} className='btn sm primary' >Edit</Link>
                            <Link to={`/posts/werwer/delete`} className='btn sm danger' >Delete</Link>
                        </div>
                    </div>
                    <h1>This is the post title!</h1>
                    <div className="post_details_thumbnail">
                        <img src={thumbnail22} alt="" />
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos voluptates consequuntur magnam, reprehenderit eum deleniti saepe temporibus expedita? Ipsum iure maxime quae ullam error illo doloribus corrupti esse voluptatum quibusdam delectus nostrum tempora sunt, impedit alias consequuntur sed similique eius.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur illum sint voluptas officia. Inventore modi amet, eos saepe aspernatur nesciunt veniam eaque iste eius sed maxime vel, necessitatibus minima itaque magnam, nobis dolores ad fugiat ut in ex ipsa alias. Aliquam, dicta quaerat facilis minus numquam, impedit fuga nam libero vero, inventore asperiores ex eligendi!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro possimus ab laborum beatae tempore ad dolor totam, debitis magni atque sint! Dolorum, cum! Perspiciatis nam assumenda minus commodi nihil quidem quas expedita illo rerum consequuntur non vel impedit atque cupiditate maxime ab Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, beatae? nobis amet voluptas ducimus id voluptatem explicabo eligendi, facilis odit. Architecto culpa posam quisquam fugit qui id blanditiis ratione mollitia repellat nulla dolorum atque veniam sequi optio, in voluptatibus suscipit soluta pariatur tenetur consectetur eos! Et nemo natus labore aspernatur ut. Praesentium molestiae culpa nisi dolorum aspernatur.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae expedita possimus, maiores minus ad similique porro consectetur aliquam dolorem ab.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, saepe nemo. Dolore, expedita velit suscipit incidunt distinctio impedit quidem provident maiores sed asperiores eveniet! Maiores repudiandae obcaecati, praesentium, cupiditate possimus molestias laborum ad similique itaque ab quidem quasi et corporis? Corrupti, ipsam voluptatum cumque a fugit veniam. Architecto nisi facere nostrum aut cupiditate asperiores, nobis est minima! Pariatur excepturi harum inventore vel porro ut provident officiis nobis ad ducimus sed facere architecto, molestias id totam, et impedit. Libero aliquam placeat dolor incidunt a quibusdam iste quis ipsam error amet, molestias ullam expedita voluptatem eaque perspiciatis nihil eius, labore magni tenetur? Quos ab harum reprehenderit unde quas iure minima, architecto, aut quia excepturi veniam quo at et facilis laborum nobis cumque laboriosam aliquam voluptatem exercitationem! Assumenda natus veniam corrupti. Ut iusto debitis repellat delectus dolore corrupti officia nemo totam vitae, reiciendis itaque minus sapiente deleniti asperiores pariatur praesentium harum quas. Repudiandae, perferendis voluptates. Asperiores, necessitatibus atque. Veniam quo magni eligendi officiis, numquam maiores esse corporis quisquam excepturi, eveniet error laborum, fugiat quaerat voluptatum sint quia? Vero, laborum! Dolores soluta beatae libero expedita suscipit deserunt eligendi quae cumque modi maxime necessitatibus commodi minima autem, esse sequi! Repellat eveniet at recusandae accusamus eius!</p>
                </div>
            </section>
        </>
    )
}

export default PostDetails
