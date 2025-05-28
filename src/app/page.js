import Navbar from "./Navbar";
import Link from "next/link";
export default function Homepage() {
  return (
    <>
      <div className="w-100 h-100 overflow-hidden rounded-lg hover:shadow-lg transition-shadow duration-300 mt-20 ml-10">
        <img
          src="/profile.jpg"
          alt="Profile"
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>
      <h1 className="justify-center ml-200 -mt-110 font-extrabold text-[25px]">
        INTRODUCTION
      </h1>
      <p className="max-w-[1000] ml-130 mt-10">
        A recent Electrical Engineering graduate with a strong inclination
        toward interdisciplinary learning and problem solving. Comfortable
        working across technical domains, with interests ranging from coding and
        system design to research, writing, and sustainable technologies. Driven
        by curiosity and a desire to explore complex ideas, with a focus on
        applying knowledge in thoughtful, adaptable ways within diverse
        professional settings. I consider myself an evolving learner with
        eagerness to prove myself.{" "}
      </p>
      <h1 className="justify-center ml-205 mt-10 font-extrabold text-[25px]">
        EDUCATION
      </h1>
      <ul className="flex ml-120 mt-5">
        <li className="font-bold px-10">Undergraduate</li>
        <li className="px-10">Electrical Engineering</li>
        <li className="px-10">Pulchowk Campus,Tribhuvan University</li>
        <li className="px-10">Lalitpur</li>
      </ul>
      <ul className="flex ml-120 mt-5">
        <li className="font-bold px-23">+2</li>
        <li className="px-10">Science(3.65 GPA)</li>
        <li className="px-15">Trinity International College</li>
        <li className="px-25">Kathmandu</li>
      </ul>
      <ul className="flex ml-120 mt-5">
        <li className="font-bold px-23">SEE</li>
        <li className="px-13">3.85 GPA</li>
        <li className="px-25">East-Pole Higher Secondary School</li>
        <li className="px-1">Kathmandu</li>
      </ul>
      <h1 className="ml-210 mt-10 font-extrabold text-[20px]">CONTACTS:</h1>
      <ul>
        <img src="/mailpic.png" className="ml-140 mt-10"></img>
        <li className="ml-145 -mt-5">simkhadarohan82@gmail.com</li>
        <img src="/phonepic.png" className="ml-210 -mt-5"></img>
        <li className="ml-215 -mt-5.5">+977-9869375874</li>
        <img src="/locpic.png" className="ml-260 -mt-5"></img>
        <li className="ml-265 -mt-5.5">Kathmandu,Nepal</li>
      </ul>
      <ul>
        <li className="ml-60 mt-22 font-bold">
          Github Profile
          <Link
            href="https://github.com/Rohan0075"
            className="text-blue-600 hover:underline"
          >
            :Rohan0075
          </Link>
        </li>
        <li className="ml-190 -mt-7 font-bold">
          CV
          <Link
            href="./CV_ROHAN_SIMKHADA.pdf"
            className="text-red-600 hover:underline"
          >
            :CV PDF
          </Link>
        </li>
        <li className="ml-300 font-bold -mt-5.5">
          Linkedin Profile
          <Link
            href="https://www.linkedin.com/in/rohan-simkhada-9a0b63213/"
            className="text-blue-600 hover:underline"
          >
            :Rohan Simkhada
          </Link>
        </li>
      </ul>
    </>
  );
}
