import gsap from "gsap";
import React, { SyntheticEvent, useEffect, useState } from "react"
import Header from "../components/Header"
import SplitType from "split-type";
import toast, { Toaster } from "react-hot-toast";
import axios from "../../node_modules/axios/index";

const Start = () => {
    const url = import.meta.env.VITE_API_URL;
    const [regions, setRegions] = useState([]);
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
    const [region, setRegion] = useState("");
    useEffect(() => {
        const split = new SplitType(".gsap-word");
        gsap.to(".char", {
            y: 0,
            stagger: 0.03,
            delay: 0.035,
            duration: 0.05,
            onComplete: () => {
                gsap.to(".gsap-form", {
                    opacity: 1,
                    duration: 0.1,
                });
            }
        });
    }, []);

    useEffect(() => {
        const queryUrl = url + '/regions';
        axios.get(queryUrl, {
            headers: {
                "Content-type": "application/json",
                Accept: "application/json",
            }
        }).then((res: any) => {
            setRegions(res.data.regions);
        }).catch((error) => {
            toast.error("Couldn't get the regions, please refresh the page");
        });
    }, []);

    const submit = (e: SyntheticEvent) => {
        e.preventDefault();
        axios.post(url + '/register', {
                name,
                region_id: region,
                gender,
                age,
                device_name: "browser",
            }, {
            headers: {
                Accept: "application/json",
                "Content-type": "application/json",
            }
        })
        .then((response) => {
            localStorage.setItem("token", response.data.token);
            console.log(response);
        })
        .catch(({ response }) => {
            if (response.status === 422) {
                for (let errors in response.data.errors) {
                    for (let error of response.data.errors[errors]) {
                        toast.error(error);
                    }
                }
            }
        });
    }
    return (
        <div className="relative flex items-center justify-center min-h-screen">
            <Header />
            <div className="container mx-auto">
                <h1 className="text-4xl font-bold gsap-word">Hey There!</h1>
                <p className="text-2xl gsap-word">Before we begin, please tell us a little about yourself</p>
                <form onSubmit={submit} className="w-96 mt-3 gsap-form opacity-0 transition-opacity">
                    <div className="mb-3">
                        <label htmlFor="">Name</label>
                        <input value={name} onChange={(e) => setName(e.target.value)} type="text" className="w-full rounded border-2 py-1 px-2" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="">Age</label>
                        <input value={age} onChange={(e) => setAge(e.target.value)} type="number" min={0} max={125} className="w-full rounded border-2 py-1 px-2" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="">Gender</label>
                        <select required value={gender} onChange={e => setGender(e.target.value)} className="bg-white w-full rounded border-2 py-1 px-2">
                            <option value="" disabled>Choose</option>
                            <option value="1">Male</option>
                            <option value="2">Female</option>
                            <option value="3">Transgender</option>
                            <option value="4">Don't want to disclose</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="">Region</label>
                        <select value={region} onChange={e => setRegion(e.target.value)} className="bg-white w-full rounded border-2 py-1 px-2">
                            {regions.map((region, idx) => <option key={`region-${idx}`} value={region.id}>{region.name}</option>)}
                        </select>
                    </div>
                    <button className="rounded shadow inline-flex items-center justify-center w-64 bg-sky-200 text-sky-900 h-8 transition-colors hover:bg-sky-300">Lets get started</button>
                </form>
            </div>
            <Toaster />
        </div>
    )
}

export default Start
