import { useEffect } from "react";
import Header from "../components/Header";
import BodyMain from "../components/BodyMain";



export default function Summary() {
  return (
    <section>
            <Header className=""/>
            <section className="bg-primary h-screen w-full">
                <div className="max-w-[80rem] mx-auto">
                    <BodyMain className=""/>
                </div>
            </section>
    </section>
  )
}