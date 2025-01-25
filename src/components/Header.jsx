import React, { useState } from "react";
import viteLogo from "/vite.svg";
import { NavLink } from "react-router-dom";
import SignIn from "./SignIn";

export default function Header() {
  const [isOpen, setIsOpen] = useState();
  return (
    <header className="flex justify-between py-4 px-4 md:px-8 shadow-md">
      <img src={viteLogo} alt="viteLogo" />
      <ul className="flex gap-4">
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-blue-700 underline" : ""
            }
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-blue-700 underline" : ""
            }
            to="/about"
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-blue-700 underline" : ""
            }
            to="/contact"
          >
            Contact
          </NavLink>
        </li>
        <li>
          {/* <NavLink className={({isActive}) => isActive ? 'text-blue-700 underline' : ""} to="/sign-in">Sign-in</NavLink> */}
          <button onClick={() => setIsOpen(true)}>Sign in</button>
          <SignIn
            header={<div className="text-xl font-bold">Sign In</div>}
            footer={
              <div className="flex justify-end gap-4">
                <button
                  onClick={() => setIsOpen(false)}
                  className="rounded-md bg-gray-300 px-6 py-2 font-semibold hover:bg-gray-400"
                >
                  Cancel
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="rounded-md bg-blue-300 px-6 py-2 font-semibold hover:bg-blue-400"
                >
                  Sign In
                </button>
              </div>
            }
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          >
            <input
              placeholder="Username"
              className="grow rounded border border-gray-600 px-2 py-1"
              type="text"
            />
            <input
              placeholder="Password"
              className="grow rounded border border-gray-600 px-2 py-1"
              type="password"
            />
          </SignIn>
        </li>
      </ul>
    </header>
  );
}
