import { MagnifyingGlassPlus } from "phosphor-react";

import logoImg from "./assets/logo.svg";

import "./styles/main.css";

function App() {
  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logoImg} />

      <h1 className="text-6xl text-white font-black mt-20">
        Your{" "}
        <span className="text-transparent bg-clip-text bg-duo-gradient">
          duo
        </span>{" "}
        is here.
      </h1>

      <div className="grid grid-cols-6 gap-6 mt-16">
        <a className="relative rounded-lg overflow-hidden" href="">
          <img src="/game-1.png" alt="" />

          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">
              League of Legends
            </strong>
            <span className="block text-zinc-300 text-sm mt-1">4 anúncios</span>
          </div>
        </a>
        <a className="relative rounded-lg overflow-hidden" href="">
          <img src="/game-1.png" alt="" />

          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">
              League of Legends
            </strong>
            <span className="block text-zinc-300 text-sm mt-1">4 anúncios</span>
          </div>
        </a>
        <a className="relative rounded-lg overflow-hidden" href="">
          <img src="/game-1.png" alt="" />

          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">
              League of Legends
            </strong>
            <span className="block text-zinc-300 text-sm mt-1">4 anúncios</span>
          </div>
        </a>
        <a className="relative rounded-lg overflow-hidden" href="">
          <img src="/game-1.png" alt="" />

          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">
              League of Legends
            </strong>
            <span className="block text-zinc-300 text-sm mt-1">4 anúncios</span>
          </div>
        </a>
        <a className="relative rounded-lg overflow-hidden" href="">
          <img src="/game-1.png" alt="" />

          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">
              League of Legends
            </strong>
            <span className="block text-zinc-300 text-sm mt-1">4 anúncios</span>
          </div>
        </a>
        <a className="relative rounded-lg overflow-hidden" href="">
          <img src="/game-1.png" alt="" />

          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">
              League of Legends
            </strong>
            <span className="block text-zinc-300 text-sm mt-1">4 anúncios</span>
          </div>
        </a>
      </div>

      <div className="pt-1 mt-8 bg-duo-gradient self-stretch rounded-lg">
        <div className="bg-[#2A2634] px-8 py-6 rounded-sm flex justify-between items-center">
          <div>
            <strong className="text-2xl text-white font-black">
              Hasn't found your duo?
            </strong>
            <p className="text-zinc-400 font-light">
              Create your ad and find new players!
            </p>
          </div>

          <button className="flex items-center gap-3 bg-violet-500 text-white px-4 py-3 rounded-md hover:bg-violet-600">
            <MagnifyingGlassPlus size={24} />
            Create new ad
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
