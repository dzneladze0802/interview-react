import { type Quiz } from "./types";
import {
  Suspense,
  Memo,
  Observer,
  CallStack,
  Batching,
  Ref,
  Reference,
  SlowList,
  Filters,
  ArrayState,
  HeavyCalculation,
  SlowState,
  ManualRender,
  RemoveElem,
  Portal,
  SimplePortal,
  Hooks,
} from "./Quiz";

const quizType: Quiz = "HOOKS";

export default function App() {
  switch (quizType) {
    case "HOOKS":
      return <Hooks />;
    case "SUSPENSE":
      return <Suspense />;
    case "MEMO":
      return <Memo />;
    case "OBSERVER":
      return <Observer />;
    case "CALL_STACK":
      return <CallStack />;
    case "BATCHING":
      return <Batching />;
    case "REF":
      return <Ref />;
    case "REFERENCE":
      return <Reference />;
    case "SLOW_LIST":
      return <SlowList />;
    case "FILTERS":
      return <Filters />;
    case "ARRAY_STATE":
      return <ArrayState />;
    case "HEAVY_CALCULATION":
      return <HeavyCalculation />;
    case "SLOW_STATE":
      return <SlowState />;
    case "MANUAL_RENDER":
      return <ManualRender />;
    case "REMOVE_ELEM":
      return <RemoveElem />;
    case "PORTAL":
      return <Portal />;
    case "SIMPLE_PORTAL":
      return <SimplePortal />;

    default: {
      const never: never = quizType;

      return <>No quiz {never}</>;
    }
  }
}
