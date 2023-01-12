import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export function AuthorPage() {
    const [authors, setAuthors] = useState([]);
    // const [authorId, setauthorId] = useState("");

    const getAuthors = async () => {
        await axios.get("http://127.0.0.1:8000/api/authors").then(res => {
            setAuthors(res.data)

        })
    };

    const DeleteAuthor = async (id) => {
        // let formdata = new FormData()
        // formdata.append("author_title", authorName)
        // formdata.append("author_id", authorId)
        await axios.delete("http://127.0.0.1:8000/api/deleteUser/" + id).then(res => { })
        alert('terhapus')
        getAuthors();
    }

    useEffect(() => {
        getAuthors();
    }, []);
    return (
        <>
            <div className="main-side">
                <div style={{ border: "2px solid black", marginTop: "10px", marginBottom: "10px", width: "100%" }}><h5 className="center-auto">Author Table</h5></div>
                <div className="flex-custom flex-justify-content-start-custom flex-column-custom align-items-start-custom width-100">
                    {/* <button className="btn-custom btn-custom-red margin-left-3 margin-bottom-1" onClick={() => window.location.replace("/author/add")}>Add Author</button> */}
                    <table className="table margin-left-3 width-80">
                        <thead className="thead">
                            <tr className="tr">
                                <th className="th">Author ID</th>
                                <th className="th">Author</th>
                                <th className="th">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                authors.map((data, key) => {
                                    return (
                                        <tr key={key}>
                                            <td className="td">
                                                {data.id}
                                            </td>
                                            <td className="td"  >
                                                {data.name}
                                            </td>
                                            <td  >
                                                <a href={`/author/update/${data.id}`} className="action-button">Update</a>/
                                                <button onClick={() => DeleteAuthor(data.id)} className="action-button">Delete</button>

                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export function AddAuthor() {
    const [authors, setAuthors] = useState([])
    const [authorId, setAuthorId] = useState("")
    const [authorName, setAuthorName] = useState("")
    const SubmitAuthor = async (event) => {
        event.preventDefault();
        let formdata = new FormData()
        formdata.append("author_title", authorName)

        axios.post("http://127.0.0.1:8000/api/authors", formdata,
            {
                headers: { "Content-type": "multipart/form-data" },
            }).then(res => {
                window.location.replace("/author")
            })
    }
    useEffect(() => {
        async function getAuthors() {
            axios.get('http://127.0.0.1:8000/api/authors').then(res => { setAuthors(res.data.authors) })
        }
        getAuthors()
    }, [])
    const navigate = useNavigate();
    return (
        <>
            <div className="main-side">

                <div style={{ border: "2px solid black", marginTop: "10px", marginBottom: "10px", width: "100%" }}><h5 className="center-auto">Add Author Form</h5></div>
                <form onSubmit={SubmitAuthor} className="form-group-custom flex-custom flex-justify-content-around-custom flex-column-custom align-items-baseline-custom margin-top-5">
                    <div className="flex-custom flex-justify-content-start-custom flex-row-custom align-items-baseline-custom width-80 margin-left-2">
                        <label htmlFor="author">Author</label>
                        <input value={authorName} onChange={(e) => { setAuthorName(e.target.value) }} type={"text"} className="form-control-custom width-75 margin-left-2" id="author" />
                    </div>

                    <button className="btn-custom btn-custom-sky margin-left-7" >Add Author</button>
                </form>
            </div>
        </>
    );

}


export function UpdateAuthor() {

    const [author, setAuthor] = useState([])
    const [authorName, setAuthorName] = useState("")
    const [authorEmail, setAuthorEmail] = useState("")
    const [authorDescription, setAuthorDescription] = useState("")
    const { author_slug } = useParams();

    const SubmitAuthor = async (event) => {
        event.preventDefault();

        let formdata = new FormData()
        // formdata.append("_method", "PUT")
        formdata.append("name", authorName)
        formdata.append("email", authorEmail)
        formdata.append("author_description", authorDescription)

        axios.post("http://127.0.0.1:8000/api/user/profile/" + author.id, formdata
        ).then(res => {
            window.location.replace("/author")
        }).catch(error => {
            //
        });
    }


    useEffect(() => {
        async function getAuthor() {
            axios.get("http://127.0.0.1:8000/api/userprofile/" + author_slug).then(response => {
                setAuthor(response.data.author[0])
                const data = response.data.author[0]
                console.log(response.data.author[0])
                setAuthorName(response.data.author[0].name)
                setAuthorDescription(response.data.author[0].author_description)
                setAuthorEmail(response.data.author[0].email)
            });

        }
        getAuthor();
    }, [])
    const navigate = useNavigate();
    return (
        <>
            {/* {author_slug} */}
            <div className="main-side">
                <div style={{ border: "2px solid black", marginTop: "10px", marginBottom: "10px", width: "100%" }}><h5 className="center-auto">Update Author Form</h5></div>
                <form onSubmit={SubmitAuthor} className="form-group-custom flex-custom flex-justify-content-around-custom flex-column-custom align-items-baseline-custom margin-top-5">
                    <div className="flex-custom flex-justify-content-start-custom flex-row-custom align-items-baseline-custom width-80 margin-left-2">
                        <label htmlFor="author">Author Name</label>
                        <input value={authorName} onChange={(e) => { setAuthorName(e.target.value) }} type={"text"} className="form-control-custom width-75 margin-left-2" id="author" />
                    </div>
                    <div className="flex-custom flex-justify-content-start-custom flex-row-custom align-items-baseline-custom width-80 margin-left-2">
                        <label htmlFor="author-desc">Author Description</label>
                        <input value={authorDescription} onChange={(e) => { setAuthorDescription(e.target.value) }} type={"text"} className="form-control-custom width-75 margin-left-2" id="author-desc" />
                    </div>
                    <div className="flex-custom flex-justify-content-start-custom flex-row-custom align-items-baseline-custom width-80 margin-left-2">
                        <label htmlFor="author-email">Author Email</label>
                        <input value={authorEmail} onChange={(e) => { setAuthorEmail(e.target.value) }} type={"text"} className="form-control-custom width-75 margin-left-2" id="author-email" />
                    </div>


                    <button className="btn-custom btn-custom-sky margin-left-7" >Update Author</button>
                </form>
            </div >
        </>
    );

}
