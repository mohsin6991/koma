import React from "react";
import Link from "next/link";

function Home() {
    return (
        <div className="font-roboto">
            <h1 className="text-3xl font-bold">This is First One</h1>
            <Link href="/about" className="text-blue-500 underline">About Link</Link>
        </div>
    );
}

export default Home;
