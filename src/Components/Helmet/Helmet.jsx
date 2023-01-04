import React from "react";

export default function Helmet(props) {
    document.title = `Mor Kurumsal Danışmanlık - ${props.title}`;
    return <main className="w-100">{props.children}</main>;
}