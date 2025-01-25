import React from "react";
import { useState } from "react";
import SignIn from "./SignIn";

export default function Contact() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <h1 className="text-2xl">Contact</h1>
      <button onClick={() => setIsOpen(true)}>Open Popup</button>
      <SignIn
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        header={<p className="text-2xl text-red-700 font-bold">Hii</p>}
        footer={
          <div className="flex justify-end">
            <button onClick={() => setIsOpen(false)} className="bg-blue-800 text-white p-2 rounded ">Ok</button>
          </div>
        }
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
          distinctio doloribus ullam consequatur aut obcaecati iusto delectus
          asperiores, temporibus, magnam, voluptatibus eos? Cumque modi voluptas
          sequi nobis, eaque maiores, repellendus cum corporis laudantium ullam
          qui amet suscipit architecto earum vel!
        </p>
      </SignIn>
    </>
  );
}
