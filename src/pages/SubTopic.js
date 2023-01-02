import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
export function SubTopicPage() {
    const [subTopics, setSubTopics] = useState([]);
    const [topicId, setTopicId] = useState("");
    useEffect(() => {
        async function getSubTopics() {
            await axios.get("http://127.0.0.1:8000/api/sub_topics").then(res => {
                setSubTopics(res.data.sub_topics)
                
            })
            
        }
        
        getSubTopics();
        console.log(subTopics)
    },[]);
    return (
        <>
            <div className="main-side">
                <div style={{ border: "2px solid black", marginTop: "10px", marginBottom: "10px", width: "100%" }}><h5 className="center-auto">Sub Topic Table</h5></div>
                <div className="flex-custom flex-justify-content-start-custom flex-column-custom align-items-start-custom width-100">
                    <button className="btn-custom btn-custom-red margin-left-3 margin-bottom-1" onClick={() => window.location.replace("/subtopic/add") }>Add SubTopic</button>
                    <table className="table margin-left-3 width-80">
                        <thead className="thead">
                            <tr className="tr">
                                <th className="th">Sub Topic ID</th>
                                <th className="th">Sub Topic</th>
                                <th className="th">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                subTopics.map((data, index) => {
                                    return (
                                        <tr>
                                            <td key={index} className="td">
                                                {data.id}
                                            </td>
                                            <td className="td" key={index}>
                                                {data.sub_topic_title}
                                            </td>
                                            <td key={index}>
                                                <a href={`/subtopic/update/${data.sub_topic_slug}`} className="action-button">Update</a>/<button className="action-button">Delete</button>
                                            </td>
                                        </tr>
                                    )
                                }
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export function AddSubTopic() {
    const [topics, setTopics] = useState([])
    const [topicId, setTopicId] = useState("")
    const [subTopicTitle, setSubTopicTitle] = useState("")
    const SubmitSubTopic = async () => {
        let formdata = new FormData()
        formdata.append("sub_topic_title", subTopicTitle)
        formdata.append("topic_id", topicId)
        axios.post("http://127.0.0.1:8000/api/sub_topics",formdata).then(res =>{}) 
    }
    useEffect(() => {
        async function getTopics() {
           axios.get('http://127.0.0.1:8000/api/topics').then(res =>{setTopics(res.data.topics)}) 
        } 
        getTopics()
    },[])
    const navigate = useNavigate();
    return (
        <>
            <div className="main-side">
                <div style={{ border: "2px solid black", marginTop: "10px", marginBottom: "10px", width: "100%" }}><h5 className="center-auto">Add Sub Topic Form</h5></div>
                <form onSubmit={SubmitSubTopic } className="form-group-custom flex-custom flex-justify-content-around-custom flex-column-custom align-items-baseline-custom margin-top-5">
                    <div className="flex-custom flex-justify-content-start-custom flex-row-custom align-items-baseline-custom width-80 margin-left-2">
                        <label htmlFor="sub-topic">Sub Topic</label>
                        <input value={subTopicTitle} onChange={ (e)=>{setSubTopicTitle(e.target.value)}}type={"text"} className="form-control-custom width-75 margin-left-2" id="sub-topic" />
                    </div>
                    <div className="flex-custom flex-justify-start-custom flex-row-custom align-items-baseline-custom width-80 margin-left-2">
                        <label htmlFor="topic">Topic</label>
                        <select value={topicId} onChange={ (e)=>{setTopicId(e.target.value)}} type={"text"} className="form-control-custom width-75 margin-left-4" id="topic">
                            <option>Choose Topic</option>
                            {
                                topics.map((data, index) => {
                                    return <option value={data.id}key={index}>{data.topic_title}</option>
                                })
                            }
                        </select>

                    </div>
                    <button className="btn-custom btn-custom-sky margin-left-7" >Add Sub Topic</button>
                </form>
            </div>
        </>
    );

}

export function UpdateSubTopic() {
    const [topics, setTopics] = useState([]);
    const [subTopic, setSubTopic] = useState([]);
    const [topicId, setTopicId] = useState("");
    const [subTopicTitle, setSubTopicTitle] = useState("");
    const { sub_topic_slug } = useParams();
    const SubmitSubTopic = async () => {
        let formdata = new FormData()
        formdata.append("sub_topic_title", subTopicTitle);
        formdata.append("topic_id", topicId);
        axios.post("http://127.0.0.1:8000/api/sub_topics",formdata).then(res =>{}) 
    }
    useEffect(() => {
        async function getTopics() {
           await axios.get('http://127.0.0.1:8000/api/topics').then(res =>{setTopics(res.data.topics)}) 
        }
        async function getSubTopic() {
            await axios.get("http://127.0.0.1:8000/api/sub_topics/" + sub_topic_slug).then(response => { setSubTopic(response.data.sub_topics) });
            console.log(subTopic);
        }
        getTopics();
        getSubTopic();
    },[])
    return (
        <>
            <div className="main-side">
                <div style={{ border: "2px solid black", marginTop: "30px", marginBottom: "10px", width: "100%" }}><h5 className="center-auto">Update Sub Topic Form</h5></div>
                <form className="form-group-custom flex flex-justify-content-around flex-column width-100 margin-top-1">
                    {
                        subTopic.map((data, index) => {
                            return (
                                <>
                                    <div className="flex-custom flex-justify-content-start-custom flex-row-custom align-items-baseline-custom width-75 margin-left-3 margin-top-2">
                                        <label htmlFor="news-title">{data.sub_topic_title }</label>
                                        <input type={"text"} className="form-control-custom margin-left-3 width-80" id="news-title" />
                                    </div>
                                    <div className="flex-custom flex-justify-content-start-custom flex-row-custom align-items-baseline-custom width-100  margin-left-3" style={{ alignSelf: "center" }}>
                                        <label> Added At  </label>
                                        <p className="form-control-custom-no-border margin-left-3">{ new Date(data.added_at).toLocaleDateString()}</p>
                                    </div>
                                    <div className="flex-custom flex-justify-content-start-custom flex-row-custom align-items-baseline-custom width-100 margin-left-3" style={{ alignSelf: "center" }}>
                                        <label> Updated At  </label>
                                        <p className="form-control-custom-no-border margin-left-2">Joshua Theo Kurniawan Siregar</p>
                                    </div>
                                </>
                            )
                        })
                    }
                    <button className="btn-custom btn-custom-emerald center-auto color-white">Update Sub Topic</button>
                </form>
            </div>
        </>
    );

}