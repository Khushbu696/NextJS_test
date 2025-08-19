"use client";

import { useParams } from "next/navigation";

export default function profile(){
    const params = useParams();
    const username = params.username;

    return(
        <>
        <h1>Profile page: {username}</h1>
        </>
    )
}
