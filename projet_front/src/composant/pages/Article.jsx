import { useParams } from "react-router-dom"

export default function Article() {

    const { id } = useParams();

    return (
        <div>{id}</div>
    )
}