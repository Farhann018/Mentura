import Mobview from "../components/Mobview";
import Roundball from "../components/Roundball";
import Deisgn from "../components/Deisgn";
import Design2 from "../components/Design2";
import Ball from "../components/Ball";
import Waves2 from "../components/Waves2";
import Waves3 from "../components/Waves3";
import Waveslower2 from "../components/Waveslower2";
import Tri from "../components/Tri";
import Tri2 from "../components/Tri2";
import Rec1 from "../components/Rec1";
import Rec2 from "../components/Rec2";
import Image4 from "../components/Image4";
import Image5 from "../components/Image5";
import LogoF from "../components/LogoF";

export default function Aboutus() {
  return (
    <section>
      {/* Header */}
      <div className="h-[25rem] md:h-screen w-screen bg-gradient-to-b from-[#2C016C] via-[#5D21D6] to-[#2D026F]">
        <div className="p-8 md:p-8  md:mx-10 text-white">
          <div className="hidden md:flex justify-between items-center">
            <div className="hidden md:flex md:gap-x-10 text-xs md:text-lg font-bold">
              <div>About us</div>
              <div>Our Team</div>
            </div>
            <div className="text-xl md:text-5xl mr-16 tracking-normal md:tracking-wider font-bold shadow-2xl">
              Mentaura
            </div>
            <div className="hidden md:flex text-xs md:text-lg font-bold">
              Visit Website
            </div>
          </div>
          {/* header mob */}
          <div className="flex max-w-xs mx-auto items-center gap-x-[3.5rem]">
            <div className="block md:hidden">
              <Mobview className="" />
            </div>
            <div className="flex md:hidden justify-center text-3xl md:text-5xl tracking-wider font-bold shadow-2xl">
              Mentaura
            </div>
          </div>
          <div className="flex justify-center pt-14">
            <Ball className="block md:hidden" />
          </div>
          <div className="flex justify-center mt-32">
            <Design2 className="hidden md:block" />
            <Roundball className="hidden md:block" />
            <Deisgn className="hidden md:block" />
          </div>
          {/* Icons */}
          <div className="hidden md:flex gap-x-4 mt-20 ">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 320 512"
              >
                <path
                  fill="currentColor"
                  d="M80 299.3V512h116V299.3h86.5l18-97.8H196v-34.6c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4.4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8z"
                />
              </svg>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
              >
                <path
                  fill="currentColor"
                  d="M8.268 28H2.463V9.306h5.805zM5.362 6.756C3.506 6.756 2 5.218 2 3.362a3.362 3.362 0 0 1 6.724 0c0 1.856-1.506 3.394-3.362 3.394M29.994 28h-5.792v-9.1c0-2.169-.044-4.95-3.018-4.95c-3.018 0-3.481 2.356-3.481 4.794V28h-5.799V9.306h5.567v2.55h.081c.775-1.469 2.668-3.019 5.492-3.019c5.875 0 6.955 3.869 6.955 8.894V28z"
                />
              </svg>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 16 16"
              >
                <path
                  fill="currentColor"
                  d="M8 0C5.829 0 5.556.01 4.703.048C3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7C.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297c.04.852.174 1.433.372 1.942c.205.526.478.972.923 1.417c.444.445.89.719 1.416.923c.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417c.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046c.78.035 1.204.166 1.486.275c.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485c.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598c-.28.11-.704.24-1.485.276c-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598a2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485c-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486c.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276c.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92a.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217a4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334a2.667 2.667 0 0 1 0-5.334"
                />
              </svg>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 16 16"
              >
                <path
                  fill="currentColor"
                  d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07l-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Waves2 className="" />
      {/*Body*/}
      <div className="bg-[#E5E5E5]">
        <div className="max-w-xs md:max-w-md lg:max-w-[100rem] mx-auto pb-20">
          <div className="text-center text-xl md:text-5xl tracking-wide font-medium  mb-20">
            About us
          </div>
          <div className="flex flex-wrap justify-center gap-x-[9rem] gap-y-10">
            <div className="h-[20rem] w-[20rem] bg-gradient-to-b from-[#FE1D21] to-[#FF3433]/80 shadow-2xl">
              <div className="flex flex-col gap-y-5 px-1 py-1 ">
                <div className="flex justify-end">
                  <Tri className="" />
                </div>
                <div className="flex text-3xl font-bold leading-[3rem] text-center text-white  items-center">
                  Revolutionizing Mental Health Support
                </div>
                <div>
                  <Tri2 className="" />
                </div>
              </div>
            </div>
            <div className="h-fit md:h-[20rem] w-full md:w-[54rem] bg-[#906DD7] shadow-2xl py-10 px-10">
              <div className="flex flex-col gap-y-5">
                <div className="text-2xl md:text-4xl text-[#2C016C] font-bold ">
                  Who Are We
                </div>
                <div className="text-2xl md:text-4xl font-medium leading-[2.7rem] tracking-wider text-white">
                  Join Mentaura in revolutionizing mental health support through
                  AI. Empower emotional well-being for a happier, healthier
                  life.
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-x-[9rem] gap-y-10 mt-10 md:mt-20">
            <div className="hidden md:block md:h-[20rem] md:w-[54rem] ">
              <Image4 className="" />
            </div>
            <div className="h-[20rem] w-[20rem] bg-gradient-to-t from-[#FE1D21] to-[#FF3433]/80 shadow-2xl">
              <div className="flex flex-col gap-y-11 px-2 py-1 ">
                <div className="flex justify-end">
                  <Rec1 className="" />
                </div>
                <div className="flex text-3xl font-bold leading-[2rem] text-center text-white  items-center">
                  Acceccible Anytime, Anywhere, Any device
                </div>
                <div>
                  <Rec2 className="" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-x-[9rem] gap-y-10 mt-10 md:mt-20">
            <div className="h-[20rem] w-[20rem]">
              <Image5 className="" />
            </div>
            <div className="h-fit md:h-[20rem] w-full md:w-[54rem] bg-[#906DD7] shadow-2xl py-10 px-10">
              <div className="flex flex-col items-center">
                <div className="text-2xl md:text-4xl font-medium leading-[2rem] mt-10 tracking-wider text-white">
                  Never let you face mental health challenges alone, AI-powered
                  interventions and embrace emotional well-being for a
                  healthier, happier life
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#FFFFFF] ">
        <div className="max-w-[19rem] md:max-w-md lg:max-w-[84rem] mx-auto py-20">
          <div className="flex flex-col gap-y-20">
            <div className="w-full md:w-[45rem] text-2xl md:text-4xl md:leading-[3rem] font-base tracking-wide">
              Mentaura is a <b>Mental health</b> website Based in Pakistan.
            </div>
            <div className="h-[0.05rem] w-56 bg-black"></div>
            <div className="2-full md:w-[60rem] text-2xl md:text-4xl md:leading-[3rem] font-base tracking-wide">
              Join Mentaura in revolutionizing mental health with AI, tailored
              interventions, and for a happier, healthier life.
            </div>
            <div className="2-full md:w-[67rem] text-2xl md:text-3xl md:leading-[3rem] italic font-medium tracking-wide">
              “We are passionate about crafting spaces where minds can find
              their voice.”
            </div>
          </div>
        </div>
      </div>
      {/* LowerBody */}
      <div className="hidden md:block relative">
        <div className="absolute w-full">
          <div className="flex">
            <div className="bg-[#2B006B] h-[50rem] w-[57.9rem]">
              <div className="flex flex-col gap-y-32 text-center items-center py-20">
                <div className="text-white text-4xl">Follow</div>
                <div className="flex flex-col w-full gap-x-2 text-center text-white text-4xl ">
                  <div>Always nurturing your</div>
                  <div className="font-bold">mental well-being</div>
                </div>
                <div className="h-[0.05rem] w-32 bg-white"></div>
                <div className="hidden md:flex gap-x-4  ">
                  <div>
                    <svg
                      className="text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 320 512"
                    >
                      <path
                        fill="currentColor"
                        d="M80 299.3V512h116V299.3h86.5l18-97.8H196v-34.6c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4.4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8z"
                      />
                    </svg>
                  </div>
                  <div>
                    <svg
                      className="text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                    >
                      <path
                        fill="currentColor"
                        d="M8.268 28H2.463V9.306h5.805zM5.362 6.756C3.506 6.756 2 5.218 2 3.362a3.362 3.362 0 0 1 6.724 0c0 1.856-1.506 3.394-3.362 3.394M29.994 28h-5.792v-9.1c0-2.169-.044-4.95-3.018-4.95c-3.018 0-3.481 2.356-3.481 4.794V28h-5.799V9.306h5.567v2.55h.081c.775-1.469 2.668-3.019 5.492-3.019c5.875 0 6.955 3.869 6.955 8.894V28z"
                      />
                    </svg>
                  </div>
                  <div>
                    <svg
                      className="text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill="currentColor"
                        d="M8 0C5.829 0 5.556.01 4.703.048C3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7C.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297c.04.852.174 1.433.372 1.942c.205.526.478.972.923 1.417c.444.445.89.719 1.416.923c.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417c.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046c.78.035 1.204.166 1.486.275c.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485c.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598c-.28.11-.704.24-1.485.276c-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598a2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485c-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486c.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276c.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92a.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217a4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334a2.667 2.667 0 0 1 0-5.334"
                      />
                    </svg>
                  </div>
                  <div>
                    <svg
                      className="text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill="currentColor"
                        d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07l-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#5E21D8] h-[50rem] w-full">
              <div className="flex flex-col gap-y-32 text-start py-20 px-32">
                <div className="text-white text-4xl">Contact</div>
                <div className="text-white text-4xl">
                  Navigate towards better mental health on our site, and tell us
                  about it.
                </div>
                <div className="flex gap-x-[30rem]">
                  <div className="h-[0.05rem] w-32 bg-white"></div>
                  <div className="h-[0.05rem] w-32 bg-white"></div>
                </div>
                <div className="flex gap-x-[13rem]">
                  <div className="text-white text-3xl w-[25rem] leading-[2rem]">
                    NAStAP, Old airport Rd, Chaklala Cantt, Rawalpindi Punjab
                    4600
                  </div>
                  <div className="text-white text-3xl w-[25rem] leading-[2rem]">
                    mentaura.ai@gmail.com
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bottom-0">
            <Waveslower2 className="" />
          </div>
          <div className="bg-[#9E8CFF]">
            <div className="max-w-[19rem] md:max-w-md lg:max-w-[84rem] mx-auto py-20">
              <div className="flex gap-x-[15rem]">
                <div className="flex gap-x-4 items-center">
                  <LogoF className="" />
                  <div className="text-xl">
                    Mentaura
                  </div>
                </div>
                <div className="flex flex-col gap-y-5 text-xl pt-[6rem]">
                    <div>
                        Community
                    </div>
                    <div>
                        About
                    </div>
                    <div>
                        Submit an Issue
                    </div>
                </div>
                <div className="flex flex-col gap-y-5 text-xl pt-[6rem]">
                    <div>
                        Getting Started
                    </div>
                    <div>
                        Documentation
                    </div>
                </div>
                <div className="flex flex-col gap-y-5 text-xl pt-[6rem]">
                    <div>
                        Resources
                    </div>
                    <div>
                        API
                    </div>
                    <div>
                        Accessibility
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* lowerbody mob*/}
      <div className="block md:hidden bg-[#2B006B] ">
        <div className="max-w-[19rem] mx-auto py-20">
          <div className="flex flex-col items-center gap-y-14 text-white text-center">
            <div className="text-2xl font-medium">Follow</div>
            <div className="flex flex-col  w-full gap-x-2 text-center text-white text-2xl ">
              <div>Always nurturing your</div>
              <div className="font-bold">mental well-being</div>
            </div>
            <div className="h-[0.05rem] w-32 bg-white"></div>

            <div className="flex gap-x-4  ">
              <div>
                <svg
                  className="text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 320 512"
                >
                  <path
                    fill="currentColor"
                    d="M80 299.3V512h116V299.3h86.5l18-97.8H196v-34.6c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4.4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8z"
                  />
                </svg>
              </div>
              <div>
                <svg
                  className="text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                >
                  <path
                    fill="currentColor"
                    d="M8.268 28H2.463V9.306h5.805zM5.362 6.756C3.506 6.756 2 5.218 2 3.362a3.362 3.362 0 0 1 6.724 0c0 1.856-1.506 3.394-3.362 3.394M29.994 28h-5.792v-9.1c0-2.169-.044-4.95-3.018-4.95c-3.018 0-3.481 2.356-3.481 4.794V28h-5.799V9.306h5.567v2.55h.081c.775-1.469 2.668-3.019 5.492-3.019c5.875 0 6.955 3.869 6.955 8.894V28z"
                  />
                </svg>
              </div>
              <div>
                <svg
                  className="text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill="currentColor"
                    d="M8 0C5.829 0 5.556.01 4.703.048C3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7C.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297c.04.852.174 1.433.372 1.942c.205.526.478.972.923 1.417c.444.445.89.719 1.416.923c.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417c.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046c.78.035 1.204.166 1.486.275c.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485c.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598c-.28.11-.704.24-1.485.276c-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598a2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485c-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486c.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276c.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92a.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217a4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334a2.667 2.667 0 0 1 0-5.334"
                  />
                </svg>
              </div>
              <div>
                <svg
                  className="text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill="currentColor"
                    d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07l-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="block md:hidden relative bg-[#5E21D8] ">
        <div className="max-w-[19rem] mx-auto py-20">
          <div className="flex flex-col items-center gap-y-14 text-white text-center">
            <div className="text-2xl font-medium">Contact</div>
            <div className="flex flex-col  w-full gap-x-2 text-center text-white text-2xl ">
              Navigate towards better mental health on our site, and tell us
              about it.
            </div>
            <div className="h-[0.05rem] w-32 bg-white"></div>
            <div className="flex flex-col  w-full gap-x-2 text-center text-white text-2xl ">
              NAStAP, Old airport Rd, Chaklala Cantt, Rawalpindi Punjab 4600
            </div>
            <div className="h-[0.05rem] w-32 bg-white"></div>
            <div className="flex flex-col  w-full gap-x-2 text-center text-white text-2xl ">
              mentaura.ai@gmail.com
            </div>
          </div>
        </div>
        <div className="absolute bottom-0">
          <Waves3 className="" />
        </div>
      </div>
      {/* footer */}
      <div className="bg-[#9E8CFF]">
            <div className="block md:hidden max-w-[19rem] mx-auto py-20">
              <div className="flex flex-col gap-y-[1rem] text-center">
                <div className="flex gap-x-4 ml-10 items-center">
                  <LogoF className="" />
                  <div className="text-2xl">
                    Mentaura
                  </div>
                </div>
                <div className="flex flex-col gap-y-5 text-xl pt-[6rem]">
                    <div>
                        Community
                    </div>
                    <div>
                        About
                    </div>
                    <div>
                        Submit an Issue
                    </div>
                </div>
                <div className="flex flex-col gap-y-5 text-xl pt-[6rem]">
                    <div>
                        Getting Started
                    </div>
                    <div>
                        Documentation
                    </div>
                </div>
                <div className="flex flex-col gap-y-5 text-xl pt-[6rem]">
                    <div>
                        Resources
                    </div>
                    <div>
                        API
                    </div>
                    <div>
                        Accessibility
                    </div>
                </div>
              </div>
            </div>
          </div>
    </section>
  );
}
