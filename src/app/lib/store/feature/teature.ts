import { createSlice } from "@reduxjs/toolkit";

type Cell = {
  text: string;
  color: string;
};

type Face = {
  a: Cell;
  b: Cell;
  c: Cell;
  d: Cell;
  e: Cell;
  f: Cell;
  g: Cell;
  h: Cell;
  i: Cell;
};

type CubeState = {
  left: Face;
  center: Face;
  right: Face;
  back: Face;
  top: Face;
  bottom: Face;
};

type FaceKey = keyof Face;

type RotateSidesArgs = {
  state: CubeState,
  one: FaceKey,
  two: FaceKey,
  three: FaceKey,
  rotateBtn: 'left' | 'right' | 'top' | 'bottom'
}

const initialState: CubeState = {
  left: fillFace('w', 'bg-white'),
  center: fillFace('R', 'bg-red-800'),
  right: fillFace('B', 'bg-blue-800'),
  back: fillFace('Y', 'bg-yellow-300'),
  top: fillFace('G', 'bg-green-500'),
  bottom: fillFace('O', 'bg-orange-500')
};

// Reusable face filler
function fillFace(text:string, color:string) {
  return {
    a: { text, color },
    b: { text, color },
    c: { text, color },
    d: { text, color },
    e: { text, color },
    f: { text, color },
    g: { text, color },
    h: { text, color },
    i: { text, color }
  };
}

// rotate and change cells
const rotateSides = ({state,one,two,three,rotateBtn}:RotateSidesArgs)=>{

  const tempLeft = {
    [one]: { ...state.left[one] },
    [two]: { ...state.left[two] },
    [three]: { ...state.left[three] },
  };

  const tempCenter = {
    [one]: { ...state.center[one] },
    [two]: { ...state.center[two] },
    [three]: { ...state.center[three] },
  };

  const tempRight = {
    [one]: { ...state.right[one] },
    [two]: { ...state.right[two] },
    [three]: { ...state.right[three] },
  };

  const tempBack = {
    [one]: { ...state.back[one] },
    [two]: { ...state.back[two] },
    [three]: { ...state.back[three] },
  };

  const tempTop = {
    [one]: { ...state.top[one] },
    [two]: { ...state.top[two] },
    [three]: { ...state.top[three] },
  };

  const tempBottom = {
    [one]: { ...state.bottom[one] },
    [two]: { ...state.bottom[two] },
    [three]: { ...state.bottom[three] },
  };

  // left rotate
  if(rotateBtn === 'left'){
    state.left[one] = tempCenter[one];
    state.left[two] = tempCenter[two];
    state.left[three] = tempCenter[three];

    state.center[one] = tempRight[one];
    state.center[two] = tempRight[two];
    state.center[three] = tempRight[three];

    state.right[one] = tempBack[one];
    state.right[two] = tempBack[two];
    state.right[three] = tempBack[three];

    state.back[one] = tempLeft[one];
    state.back[two] = tempLeft[two];
    state.back[three] = tempLeft[three];

    // right rotate
  }else if(rotateBtn === 'right'){
    state.center[one] = tempLeft[one];
    state.center[two] = tempLeft[two];
    state.center[three] = tempLeft[three];

    state.right[one] = tempCenter[one];
    state.right[two] = tempCenter[two];
    state.right[three] = tempCenter[three];

    state.back[one] = tempRight[one];
    state.back[two] = tempRight[two];
    state.back[three] = tempRight[three];

    state.left[one] = tempBack[one];
    state.left[two] = tempBack[two];
    state.left[three] = tempBack[three];

    // top rotate
  } else if(rotateBtn === 'top'){
    state.center[one] = tempBottom[one];
    state.center[two] = tempBottom[two];
    state.center[three] = tempBottom[three];

    state.top[one] = tempCenter[one];
    state.top[two] = tempCenter[two];
    state.top[three] = tempCenter[three];

    state.back[one] = tempTop[one];
    state.back[two] = tempTop[two];
    state.back[three] = tempTop[three];

    state.bottom[one] = tempBack[one];
    state.bottom[two] = tempBack[two];
    state.bottom[three] = tempBack[three];

    // bottom rotate
  }else if(rotateBtn === 'bottom'){
    state.bottom[one] = tempCenter[one];
    state.bottom[two] = tempCenter[two];
    state.bottom[three] = tempCenter[three];

    state.center[one] = tempTop[one];
    state.center[two] = tempTop[two];
    state.center[three] = tempTop[three];

    state.top[one] = tempBack[one];
    state.top[two] = tempBack[two];
    state.top[three] = tempBack[three];

    state.back[one] = tempBottom[one];
    state.back[two] = tempBottom[two];
    state.back[three] = tempBottom[three];
  }

};

// create slice
const rubykSlice = createSlice({
  name:'rooby',
  initialState,
  reducers:{

    leftThreeButton (state,action){
      const { one, two, three } = action.payload;
      rotateSides({state,one,two,three,rotateBtn:'left'});
    },

    rightThreeButton (state,action){
      const { one, two, three } = action.payload;
      rotateSides({state,one,two,three,rotateBtn:'right'})
    },

    topThreeButton (state,action){
      const { one, two, three } = action.payload;
      rotateSides({state,one,two,three,rotateBtn:'top'});
    },

    bottomThreeButton (state,action){
      const { one, two, three } = action.payload;
      rotateSides({state,one,two,three,rotateBtn:'bottom'});
    },
  }
})

export default rubykSlice.reducer;
export const { leftThreeButton, rightThreeButton, topThreeButton, bottomThreeButton } = rubykSlice.actions;