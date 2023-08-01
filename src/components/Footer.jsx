import React from "react";
import LogoF from "./LogoF";

export default function Footer({ className }) {
    return (
        <section>
            <div className="flex">
                <div className="flex w-1/3 p-8">
                    <div className="flex">
                        <LogoF className="" />
                        <div className="text-center mt-3 ">Mentaura</div>
                    </div>
                </div>
                <div className="flex justify-between space-x-[20rem] p-9">
                    <div className="flex flex-col space-y-10">
                        <div>Community</div>
                        <div>About</div>
                        <div>Submit an issue</div>
                    </div>
                    <div className="flex flex-col space-y-10">
                        <div>Getting Started</div>
                        <div>Introduction</div>
                        <div>Documentation</div>
                        <div>Usage</div>
                    </div>
                    <div className="flex flex-col space-y-10">
                        <div>Resources</div>
                        <div>API</div>
                        <div>Accessibility</div>
                        <div>Community</div>
                    </div>
                </div>
            </div>
            <div className="flex p-8">
                <div className="flex w-1/3">
                    <div className="flex items-center text-center">
                        <svg
                            className="text-gray-500"
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 256 256"
                        >
                            <path
                                fill="currentColor"
                                d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24Zm0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88Zm-32-88a32 32 0 0 0 57.6 19.2a8 8 0 0 1 12.8 9.61a48 48 0 1 1 0-57.62a8 8 0 0 1-12.8 9.61A32 32 0 0 0 96 128Z"
                            />
                        </svg>
                        <div className="text-sm text-gray-600">
                            2023 Mentaura, All rights reserved.
                        </div>
                    </div>
                </div>
                <div className="flex justify-around w-full text-sm text-gray-600">
                    <div>Terms of service</div>
                    <div>Privacy Policy</div>
                    <div>Security</div>
                    <div>Community</div>
                    <div className="flex space-x-5">
                        <div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="25"
                                height="25"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill="currentColor"
                                    d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3Z"
                                />
                            </svg>
                        </div>
                        <div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="25"
                                height="25"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill="currentColor"
                                    d="M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23Z"
                                />
                            </svg>
                        </div>
                        <div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="25"
                                height="25"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill="currentColor"
                                    d="M9.198 21.5h4v-8.01h3.604l.396-3.98h-4V7.5a1 1 0 0 1 1-1h3v-4h-3a5 5 0 0 0-5 5v2.01h-2l-.396 3.98h2.396v8.01Z"
                                />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
