"use client";
import { useEffect, useState } from "react";
import { createStore } from "../store/zustand";

export default function Home() {
  const [userData, setUserData] = useState(null);
  const {
    WorkName,
    count,
    decrement,
    increment,
    fetchUserData,
    user,
    usersName,
  } = createStore();
  useEffect(() => {
    fetchUserData();
  }, []);
  useEffect(() => {
    setUserData(user);
  }, [user]);
  return (
    <>
      <div>
        <p className="text-center mt-4"> {WorkName.name}</p>
        <div className="flex justify-center mt-2 gap-4">
          <button onClick={decrement} className="bg-gray-200 w-[85px]">
            Minus
          </button>
          <p>{count}</p>
          <button onClick={increment} className="bg-gray-200 w-[85px]">
            Plus
          </button>
        </div>
        <div className="flex flex-col justify-center items-center mt-6">
          <div className="font-bold ml-5 mb-2">{WorkName.usersName}</div>
          {userData?.map((el, index) => {
            return (
              <>
                <div className="">
                  <div key={index} className="flex justify-center  gap-2">
                    <p className="font-bold">{1 + index}.</p>
                    <p>{el.name}</p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
