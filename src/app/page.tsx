'use client';

import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './lib/store/hooks/hooks';
import { leftThreeButton, rightThreeButton, topThreeButton, bottomThreeButton } from './lib/store/feature/teature';

export default function Home() {

  // display a alert message
  useEffect(() => {
    const hasVisited = localStorage.getItem('hasVisited');
    if (!hasVisited) {
      alert("For the best experience, please set your browser zoom to 90%. This layout is optimized for laptop screens.");
      localStorage.setItem('hasVisited', 'true');
    }
  }, []);

  const dispatch = useAppDispatch();

  // get default color from store(using redux)
  const center = useAppSelector((state)=>state.ruby.center)
  const left = useAppSelector((state)=>state.ruby.left)
  const right = useAppSelector((state)=>state.ruby.right)
  const back = useAppSelector((state)=>state.ruby.back)
  const top = useAppSelector((state)=>state.ruby.top)
  const bottom = useAppSelector((state)=>state.ruby.bottom)

  // handle top scroll
  const handleTopRotate = (one:string, two:string, three:string)=>{
    dispatch(topThreeButton({one,two,three}));
  }

  // handle left scroll
  const handleLeftRotate = (one:string, two:string, three:string)=>{
    dispatch(leftThreeButton({one,two,three}));
  }

  // handle right scroll
  const handleRightRotate = (one:string, two:string, three:string)=>{
    dispatch(rightThreeButton({one,two,three}));
  }

  // handle right scroll
  const handleBottomRotate = (one:string, two:string, three:string)=>{
    dispatch(bottomThreeButton({one,two,three}));
  }

  return (
    <>
      {/* top */}
      <div className="mx-[30%]">
        <div>
          <button className="border-2 m-2 p-2" onClick={()=>handleTopRotate('a','d','g')}>↑</button>
          <button className="border-2 m-2 p-2" onClick={()=>handleTopRotate('b','e','h')}>↑</button>
          <button className="border-2 m-2 p-2" onClick={()=>handleTopRotate('c','f','i')}>↑</button>
        </div>
        <h2>TOP</h2>
        <div className="flex">
          <p className={`p-4 ${top.a.color} text-black border-2 border-black`}>{top.a.text}</p>
          <p className={`p-4 ${top.b.color} text-black border-2 border-black`}>{top.b.text}</p>
          <p className={`p-4 ${top.c.color} text-black border-2 border-black`}>{top.c.text}</p>
        </div>
        <div className="flex">
          <p className={`p-4 ${top.d.color} text-black border-2 border-black`}>{top.d.text}</p>
          <p className={`p-4 ${top.e.color} text-black border-2 border-black`}>{top.e.text}</p>
          <p className={`p-4 ${top.f.color} text-black border-2 border-black`}>{top.f.text}</p>
        </div>
        <div className="flex">
          <p className={`p-4 ${top.g.color} text-black border-2 border-black`}>{top.g.text}</p>
          <p className={`p-4 ${top.h.color} text-black border-2 border-black`}>{top.h.text}</p>
          <p className={`p-4 ${top.i.color} text-black border-2 border-black`}>{top.i.text}</p>
        </div>
      </div>

      {/* center row (left, center, right and bottom*/}
      <div className="flex items-center justify-between">

        {/* left */}
        <div>
          <h2 className='text-center'>LEFT</h2>
          <div className="flex">
            <button className="border-2 m-2 p-2" onClick={()=>handleLeftRotate('a','b','c')}>←</button>
            <p className={`p-4 ${left.a.color} text-black border-2 border-black`}>{left.a.text}</p>
            <p className={`p-4 ${left.b.color} text-black border-2 border-black`}>{left.b.text}</p>
            <p className={`p-4 ${left.c.color} text-black border-2 border-black`}>{left.c.text}</p>
          </div>
          <div className="flex">
            <button className="border-2 m-2 p-2" onClick={()=>handleLeftRotate('d','e','f')}>←</button>
            <p className={`p-4 ${left.d.color} text-black border-2 border-black`}>{left.d.text}</p>
            <p className={`p-4 ${left.e.color} text-black border-2 border-black`}>{left.e.text}</p>
            <p className={`p-4 ${left.f.color} text-black border-2 border-black`}>{left.f.text}</p>
          </div>
          <div className="flex">
            <button className="border-2 m-2 p-2" onClick={()=>handleLeftRotate('g','h','i')}>←</button>
            <p className={`p-4 ${left.g.color} text-black border-2 border-black`}>{left.g.text}</p>
            <p className={`p-4 ${left.h.color} text-black border-2 border-black`}>{left.h.text}</p>
            <p className={`p-4 ${left.i.color} text-black border-2 border-black`}>{left.i.text}</p>
          </div>
        </div>

        {/* center */}
        <div>
          <h2 className='text-center'>CENTER</h2>
          <div className="flex">
            <p className={`p-4 ${center.a.color} text-black border-2 border-black`}>{center.a.text}</p>
            <p className={`p-4 ${center.b.color} text-black border-2 border-black`}>{center.b.text}</p>
            <p className={`p-4 ${center.c.color} text-black border-2 border-black`}>{center.c.text}</p>
          </div>
          <div className="flex">
            <p className={`p-4 ${center.d.color} text-black border-2 border-black`}>{center.d.text}</p>
            <p className={`p-4 ${center.e.color} text-black border-2 border-black`}>{center.e.text}</p>
            <p className={`p-4 ${center.f.color} text-black border-2 border-black`}>{center.f.text}</p>
          </div>
          <div className="flex">
            <p className={`p-4 ${center.g.color} text-black border-2 border-black`}>{center.g.text}</p>
            <p className={`p-4 ${center.h.color} text-black border-2 border-black`}>{center.h.text}</p>
            <p className={`p-4 ${center.i.color} text-black border-2 border-black`}>{center.i.text}</p>
          </div>
        </div>

        {/* right */}
        <div>
          <h2 className='text-center'>RIGHT</h2>
          <div className="flex">
            <p className={`p-4 ${right.a.color} text-black border-2 border-black`}>{right.a.text}</p>
            <p className={`p-4 ${right.b.color} text-black border-2 border-black`}>{right.b.text}</p>
            <p className={`p-4 ${right.c.color} text-black border-2 border-black`}>{right.c.text}</p>
          </div>
          <div className="flex">
            <p className={`p-4 ${right.d.color} text-black border-2 border-black`}>{right.d.text}</p>
            <p className={`p-4 ${right.e.color} text-black border-2 border-black`}>{right.e.text}</p>
            <p className={`p-4 ${right.f.color} text-black border-2 border-black`}>{right.f.text}</p>
          </div>
          <div className="flex">
            <p className={`p-4 ${right.g.color} text-black border-2 border-black`}>{right.g.text}</p>
            <p className={`p-4 ${right.h.color} text-black border-2 border-black`}>{right.h.text}</p>
            <p className={`p-4 ${right.i.color} text-black border-2 border-black`}>{right.i.text}</p>
          </div>
        </div>

        {/* back */}
        <div>
          <h2 className='text-center'>BACK</h2>
          <div className="flex">
            <p className={`p-4 ${back.a.color} text-black border-2 border-black`}>{back.a.text}</p>
            <p className={`p-4 ${back.b.color} text-black border-2 border-black`}>{back.b.text}</p>
            <p className={`p-4 ${back.c.color} text-black border-2 border-black`}>{back.c.text}</p>
            <button className="border-2 m-2 p-2" onClick={()=>handleRightRotate('a','b','c')}>→</button>
          </div>
          <div className="flex">
            <p className={`p-4 ${back.d.color} text-black border-2 border-black`}>{back.d.text}</p>
            <p className={`p-4 ${back.e.color} text-black border-2 border-black`}>{back.e.text}</p>
            <p className={`p-4 ${back.f.color} text-black border-2 border-black`}>{back.f.text}</p>
            <button className="border-2 m-2 p-2" onClick={()=>handleRightRotate('d','e','f')}>→</button>
          </div>
          <div className="flex">
            <p className={`p-4 ${back.g.color} text-black border-2 border-black`}>{back.g.text}</p>
            <p className={`p-4 ${back.h.color} text-black border-2 border-black`}>{back.h.text}</p>
            <p className={`p-4 ${back.i.color} text-black border-2 border-black`}>{back.i.text}</p>
            <button className="border-2 m-2 p-2" onClick={()=>handleRightRotate('g','h','i')}>→</button>
          </div>
        </div>
      </div>

      {/* bottom */}
      <div className="mx-[30%]">
        <h2>BOTTOM</h2>
        <div className="flex">
          <p className={`p-4 ${bottom.a.color} text-black border-2 border-black`}>{bottom.a.text}</p>
          <p className={`p-4 ${bottom.b.color} text-black border-2 border-black`}>{bottom.b.text}</p>
          <p className={`p-4 ${bottom.c.color} text-black border-2 border-black`}>{bottom.c.text}</p>
        </div>
        <div className="flex">
          <p className={`p-4 ${bottom.d.color} text-black border-2 border-black`}>{bottom.d.text}</p>
          <p className={`p-4 ${bottom.e.color} text-black border-2 border-black`}>{bottom.e.text}</p>
          <p className={`p-4 ${bottom.f.color} text-black border-2 border-black`}>{bottom.f.text}</p>
        </div>
        <div className="flex">
          <p className={`p-4 ${bottom.g.color} text-black border-2 border-black`}>{bottom.g.text}</p>
          <p className={`p-4 ${bottom.h.color} text-black border-2 border-black`}>{bottom.h.text}</p>
          <p className={`p-4 ${bottom.i.color} text-black border-2 border-black`}>{bottom.i.text}</p>
        </div>
        <div>
          <button className="border-2 m-2 p-2" onClick={()=>handleBottomRotate('a','d','g')}>↓</button>
          <button className="border-2 m-2 p-2" onClick={()=>handleBottomRotate('b','e','h')}>↓</button>
          <button className="border-2 m-2 p-2" onClick={()=>handleBottomRotate('c','f','i')}>↓</button>
        </div>
      </div>
    </>
  );
}