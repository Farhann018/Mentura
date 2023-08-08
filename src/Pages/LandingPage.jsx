import { useEffect } from "react";
import Header from "../components/Header";
import BodyMain from "../components/BodyMain";



export default function Summary() {
  return (
    <section>
            <Header className=""/>
            <section className="bg-primary h-screen w-full flex items-center justify-center">
                <div className="container mx-auto">
                    <BodyMain className=""/>
                </div>
            </section>
    </section>
  )
}
