import React from "react";

export default function MatchTable({ data }) { 
  return (
    <div>
      {data.length === 0 ? (
        <p className="text-center py-1 font-semibold">No Record Found</p> 
      ) : (
        data.map((item, index) => (
          <div className="flex items-center border-b-2 border-gray py-1">
            <div className="w-1/2 pl-4">
              <p className="font-semibold">{item.name}</p>
              <p className="text-[14px] text-[green] font-semibold">{item.type}</p>
            </div>
            <div className="flex gap-1 w-1/2 inplay-game-buttons gpa-2">
              <button>1.92</button>
              <button>1.92</button>
              <button>1.92</button>
              <button>1.92</button>
              <button>1.92</button>
              <button>1.92</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
