"use client";

import { useParams } from "next/navigation";

export default function blog(){
    const params = useParams();
    const id = params.id;

    return(
        <>
        <h1>Blog Post ID: {id}</h1>
        </>
    )
}
