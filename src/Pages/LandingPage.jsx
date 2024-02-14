import { useEffect } from "react";
import Header from "../components/Header";
import BodyMain from "../components/BodyMain";
import BodyPri from "../components/BodyPri";
import Footer from "../components/Footer";
import Element from "../components/Element";



export default function Summary() {
  return (
    <section>
            <Header className=""/>
            <section className="bg-primary h-screen w-full flex items-center justify-center">
                <div className="container mx-auto">
                    <BodyMain className=""/>
                </div>
            </section>
            <section className="bg-secondary h-[65rem] w-full">
                        <div className="max-w-[90rem] mx-auto">
                              <div className="flex justify-center text-center pt-20">
                                    <div className="text-4xl font-medium tracking-wider">
                                          Bounded by despair, unable to unlock the capability of myself
                                      </div>
                                </div>
                              <BodyPri className="" />
                          </div>
                  </section>
                  <section className="bg-primary h-[30rem] w-full">
                        <div className="relative ">
                              <div className="absolute -top-[7rem] m-auto left-0 right-0">
                                    <Element className="" />
                                </div>
                          </div>
                    </section>
                <Footer className="" />
    </section>
  )
}


