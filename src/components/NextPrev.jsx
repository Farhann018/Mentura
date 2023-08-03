import React, { useState } from "react";

export default function NextPre({ className, question, setQuestion}) {
  return (
    <section>
      <div className="flex justify-between mt-[9.5rem] space-x-3">
        <div>
          <button className="button type1" onClick={() => {
                if(question <= 1 )
                return;
                setQuestion(question-1)
            }}>
            <span className="btn-txt " id="prev" >
              Back
            </span>
          </button>
        </div>
        <div>
          <button className="button type1" id="next" onClick={() => {
            setQuestion(question+1)
          }}>
            <span className="btn-txt">Next</span>
          </button>
        </div>
      </div>
    </section>
  );
}
