import React from 'react';

const Swap: React.FC = () => {
  return (
    <div className="flex flex-col gap-2 border rounded-xl mx-auto max-w-lg p-4">
      <h1 className="text-2xl">Swap</h1>
      <div className="flex flex-col border rounded-xl p-4 gap-2 bg-gray-800">
        <div className="flex flex-row">
          <input
            className="grow text-2xl bg-transparent"
            type="text"
            pattern="^[0-9]*[.,]?[0-9]*$"
          />
          <button className="token px-2 py-1">MATIC</button>
        </div>

        <div className="text-xs">$10</div>
      </div>

      <button className="-my-4 border p-2 mx-auto rounded-xl active:scale-[99%]">
        s
      </button>

      <div className="flex flex-col border rounded-xl p-4 gap-2 bg-gray-800">
        <div className="flex flex-row">
          <input
            className="grow text-2xl bg-transparent"
            type="text"
            pattern="^[0-9]*[.,]?[0-9]*$"
          />
          <button className="token px-2 py-1">MATIC</button>
        </div>

        <div className="text-xs">$10</div>
      </div>

      <button className="bg-blue-900 h-12 rounded-xl mt-2 active:scale-[99%]">
        Swap
      </button>
    </div>
  );
};

export default Swap;
