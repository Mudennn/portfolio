import Head from "next/head";
// import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import logo from "../public/Logo.png";
import img1 from "../public/186.png";
import img2 from "../public/bnwdao.png";
import img3 from "../public/nftmarketplace.png";
import img4 from "../public/tzapac.jpg";
import img5 from "../public/mdec.png";
import img6 from "../public/Alchemy.png";
import img7 from "../public/Birdbird.jpg";
import img8 from "../public/Mixoman.jpg";
import img9 from "../public/Gamers1.png";
import img10 from "../public/Gamers2.png";
import img11 from "../public/Yoot2.png";
import img12 from "../public/Yoot3.png";
import img13 from "../public/Yoot4.png";
import img14 from "../public/lw3dao1.jpg";
import img15 from "../public/lw3dao2.jpg";
import img16 from "../public/Roachpunks.jpg";
import img17 from "../public/cs067.png";
import img18 from "../public/teztrack.png";
import Image from "next/image";
import {
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
} from "react-icons/si";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Najmuddin Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/icon.ico" />
      </Head>

      <main className="bg-black w-full">

      <div className="border-b-2 mb-7 pb-5 border-violet-400 px-5">
        <nav className="pt-5 flex justify-between max-w-5xl mx-auto">
            {/* <h1 className="text-3xl font-bold font-bungeeshade">Muden</h1> */}
            <Image src={logo} alt="Muhammad Najmuddin Bin Fakhrur Rozi" className="object-cover w-20 aspect-video scale-150"/>
            <ul className="flex items-center">
              {/* <li>
                <BsFillMoonStarsFill className="cursor-pointer text-2xl" />
              </li> */}
              <li>
                <a
                  href="Resume Muhammad Najmuddin.pdf" download="Resume Muhammad Najmuddin.pdf"
                  className="bg-gradient-to-r from-violet-400 via-[#FC82DD] to-[#FF89B0] hover:from-violet-400 hover:to-violet-400 px-4 py-2 ml-8 rounded-md font-bold"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          </div>
        <section className="h-full max-w-5xl mx-auto ">
          

          {/* Personal Data  */}
          <section className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 ">
            <div className="grid  row-gap-8 lg:grid-cols-2 gap-4 md:gap-12">
              <div className="flex flex-col justify-center text-center md:text-left">
                <div className="max-w-xl mb-6">
                  <h1 className="text-5xl font-bold leading-none sm:text-6xl">
                    Hi I&apos;m{" "}
                  </h1>
                  <h1 className="text-2xl md:text-5xl font-bold text-violet-400 ">
                    Muhammad Najmuddin
                  </h1>
                  <p className="mt-6 mb-8 text-lg sm:mb-12">
                    I'm frontend developer with a strong understanding of
                    blockchain technology and have experience in an incubator
                    program.
                  </p>
                  <div className="text-3xl flex items-center justify-center md:justify-start gap-4">
                    <a
                      href="https://twitter.com/Mudennn"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <AiFillTwitterCircle className="hover:text-violet-400" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/muhammad-najmuddin/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <AiFillLinkedin className="hover:text-violet-400" />
                    </a>
                    <a
                      href="https://github.com/Mudennn"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <AiFillGithub className="hover:text-violet-400" />
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <Image
                  className="object-contain w-full h-56 rounded shadow-md sm:h-96"
                  src={img1}
                  alt="Muhammad Najmuddin Bin Fakhrur Rozi"
                />
              </div>
            </div>
          </section>

          {/* Logo  */}
          <section className="px-5">
            <h2 className="text-center text-violet-400 text-xl mt-8 mb-3">
              My Skills
            </h2>
            <div className="max-w-xl rounded-xl mx-auto mb-10 border-violet-400 border-2  p-5">
              <div className="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1 text-4xl gap-5 ">
                <SiHtml5 className="h-12 fill-current text-white" />
                <SiCss3 className="h-12 fill-current text-white" />
                <SiJavascript className="h-12 fill-current text-white" />
                <SiReact className="h-12 fill-current text-white" />
                <SiTailwindcss className="h-12 fill-current text-white" />
              </div>
            </div>
          </section>

          {/* Web3 Project  */}

          <section>
            <div>
              <h3 className="text-3xl font-bold text-center">
                Web3 Project 🚀
              </h3>
              <p className="text-md py-2 leading-8 text-center ">
                Exploring the Power of Web3: Building a Decentralized
                Application
              </p>
              <hr className="mt-2 mx-auto w-48 h-1 bg-gray-100 rounded border-0"></hr>
            </div>

            <div className="px-4 py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
              <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
                <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
                  <Image
                    src={img18}
                    className="h-40 w-full rounded-md object-cover aspect-video"
                    alt="teztrack"
                  />
                  <div className="p-5 border border-t-0">
                    <p className="mb-3 font-bold text-black tracking-wide uppercase">
                      Teztrack
                    </p>
                    <p className="mb-3 text-gray-700 text-sm">
                      One stop center for Tezos ecosystem. Where users can
                      access to data and insight and explore the latest project
                      in Tezos ecosystem.
                    </p>
                    <div className="flex items-center justify-center gap-2 mt-2 ">
                      <a
                        href="https://teztrack.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className=" bg-violet-400 hover:bg-violet-700 p-1 rounded-sm w-full text-center"
                      >
                        Demo
                      </a>
                      <a
                        href="https://github.com/Mudennn/teztrack"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black p-1 rounded-sm bg-orange-300 hover:bg-orange-400 w-full text-center"
                      >
                        Github
                      </a>
                    </div>
                  </div>
                </div>

                <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
                  <Image
                    src={img2}
                    className="h-40 w-full rounded-md object-cover aspect-video"
                    alt="teztrack"
                  />
                  <div className="p-5 border border-t-0">
                    <p className="mb-3 font-bold text-black tracking-wide uppercase">
                      BNW DAO
                    </p>
                    <p className="mb-3 text-gray-700 text-sm">
                      BNW DAO is a DAO that only for people who love
                      black and white photo. Only people who have certain
                      NFT can enter this DAO.
                    </p>
                    <div className="flex items-center justify-center gap-2 mt-2 ">
                      <a
                        href="https://bnwdao.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className=" bg-violet-400 hover:bg-violet-700 p-1 rounded-sm w-full text-center"
                      >
                        Demo
                      </a>
                      <a
                        href="https://github.com/Mudennn/buildspace-dao-starter"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black p-1 rounded-sm bg-orange-300 hover:bg-orange-400 w-full text-center"
                      >
                        Github
                      </a>
                    </div>
                  </div>
                </div>

                <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
                  <Image
                    src={img3}
                    className="h-40 w-full rounded-md object-cover aspect-video"
                    alt="teztrack"
                  />
                  <div className="p-5 border border-t-0">
                    <p className="mb-3 font-bold text-black tracking-wide uppercase">
                      NFT Marketplace
                    </p>
                    <p className="mb-3 text-gray-700 text-sm">
                      Marketplace tha allows users to buy, sell and trade unique digital
                       items that represented by an NFT. Deployed
                       on georli testnet.
                    </p>
                    <div className="flex items-center justify-center gap-2 mt-2 ">
                      <a
                        href="https://muden-nftmarketplace.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className=" bg-violet-400 hover:bg-violet-700 p-1 rounded-sm w-full text-center"
                      >
                        Demo
                      </a>
                      <a
                        href="https://github.com/Mudennn/Personal-Project/tree/main/NFT-Marketplace"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black p-1 rounded-sm bg-orange-300 hover:bg-orange-400 w-full text-center"
                      >
                        Github
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Incubator Program and Hackathon  */}
          <section>
            {/* TZApac  */}
            <h3 className="text-3xl ml-3 font-bold text-center pt-4">
              Incubator Program 🎯
            </h3>
            <hr className="my-4 mx-auto w-48 h-1 bg-gray-100 rounded border-0 "></hr>
            <div className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 ">
              <div className="grid  row-gap-8 lg:grid-cols-2 gap-4 md:gap-12">
                <div className="flex flex-col justify-center text-center md:text-left">
                  <div className="max-w-xl mb-6">
                    <h2 className="max-w-lg  font-sans text-3xl font-bold tracking-tight text-violet-400 sm:text-4xl sm:leading-none">
                      TZAPAC
                    </h2>
                    <p className="text-base text-white font-semibold md:text-lg mb-6">
                      Egg Web3 Incubator Cohort #1
                    </p>
                    <p className="text-base text-gray-400 md:text-lg">
                      Teztrack is designed to provide users with an all-in-one
                      portfolio tracker, social network, and home base in the
                      Tezos ecosystem.
                    </p>
                    <button
                      href="https://teztrack.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-orange-300 hover:bg-orange-400 px-4 py-2 mt-6 rounded-md w-32"
                    >
                      Demo
                    </button>
                  </div>
                </div>
                <div>
                  <Image
                    className="object-contain w-full h-56 rounded shadow-lg sm:h-96"
                    src={img4}
                    alt=""
                  />
                </div>
              </div>
            </div>

            {/* MDEC  */}
            <div className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
              <div className="flex flex-col-reverse md:grid gap-4 md:gap-12 row-gap-8 lg:grid-cols-2  ">
                <div>
                  <Image
                    className="object-contain aspect-video w-full h-56 rounded shadow-lg sm:h-96"
                    src={img5}
                    alt="mdec ideakita"
                  />
                </div>
                <div className="flex flex-col justify-center text-center md:text-left">
                  <div className="max-w-xl mb-6">
                    <h2 className="max-w-lg  font-sans text-3xl font-bold tracking-tight text-violet-400 sm:text-4xl sm:leading-none">
                      MDEC
                    </h2>
                    <p className="text-base text-white font-semibold md:text-lg mb-6">
                      ideaKita
                    </p>
                    <p className="text-base  md:text-lg text-gray-400">
                      KiraKripto helps generate proper tax documentation
                      accepted by LHDN for digital currecy asset and helps to
                      track all your transaction in real-time.
                    </p>
                    <button
                      href="https://arimzjudin.wixsite.com/kirakripto"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-orange-300 hover:bg-orange-400 px-4 py-2 mt-6 rounded-md w-32"
                    >
                      Landing Page
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* NFT Gallery  */}
          <section>
            <h3 className="font-bold text-center text-3xl mb-4">
              NFT Gallery 📸
            </h3>
            <hr className="my-4 mx-auto w-48 h-1 bg-gray-100 rounded border-0 "></hr>
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              slidesPerGroup={3}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  slidesPerGroup: 1,
                },
                480: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                  slidesPerGroup: 3,
                },
              }}
              loop={true}
              loopFillGroupWithBlank={true}
              grabCursor={true}
              pagination={{
                clickable: true,
                dynamicBullets: true,
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <Image src={img6} alt="Alchemy University" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src={img14} alt="LearnWeb3 DAO" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src={img15} alt="LearnWeb3 DAO" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src={img16} alt="RoachPunks" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src={img9} alt="Gamers King" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src={img10} alt="Gamers King" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src={img11} alt="Prime Yooted" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src={img12} alt="Prime Yooted" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src={img13} alt="Prime Yooted" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src={img7} alt="BirdBird" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src={img8} alt="Mixoman" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src={img17} alt="Crime Scene" />
              </SwiperSlide>
            </Swiper>
          </section>

          {/* Form  */}
          <section className="container py-12 mx-auto">
            <div className="lg:w-full mx-5 md:mx-auto border-2 p-5 rounded-xl md:flex md:items-center md:justify-center gap-7 md:gap-20 grid">
              <div className="my-auto ">
                <h1 className="text-3xl font-semibold capitalize text-white lg:text-4xl">
                  Let’s talk
                </h1>

                <p className="mt-4 text-white border-b-2 pb-2 w-40">
                  Ask me anything!
                </p>
              </div>

              <form className="">
                <div className="-mx-2 md:items-center md:flex">
                  <div className="flex-1 px-2">
                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-white focus:border-blue-600 focus:outline-none focus:ring-0"
                    />
                  </div>

                  <div className="flex-1 px-2 mt-4 md:mt-0">
                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                      Email address
                    </label>
                    <input
                      type="email"
                      placeholder="johndoe@example.com"
                      className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-white focus:border-blue-600 focus:outline-none focus:ring-0"
                    />
                  </div>
                </div>

                <div className="w-full mt-4">
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    Message
                  </label>
                  <textarea
                    className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-white focus:border-blue-600 focus:outline-none focus:ring-0"
                    placeholder="Message"
                  ></textarea>
                </div>

                <button className="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                  get in touch
                </button>
              </form>
            </div>
          </section>
        </section>

        <footer className="py-4 border-t-2 bg-violet-400">
          <p className="text-center">
            Muden<span className="text-sm">©</span> 2022
          </p>
        </footer>
      </main>
      {/* im a developer but not just usual developer  */}
    </div>
  );
}
