import { QUIZ_ENUM } from "./constants";
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
} from "./Quiz";

const quizType: QUIZ_ENUM = QUIZ_ENUM.REMOVE_ELEM;

export default function App() {
  switch (quizType) {
    case QUIZ_ENUM.SUSPENSE:
      return <Suspense />;
    case QUIZ_ENUM.MEMO:
      return <Memo />;
    case QUIZ_ENUM.OBSERVER:
      return <Observer />;
    case QUIZ_ENUM.CALL_STACK:
      return <CallStack />;
    case QUIZ_ENUM.BATCHING:
      return <Batching />;
    case QUIZ_ENUM.REF:
      return <Ref />;
    case QUIZ_ENUM.REFERENCE:
      return <Reference />;
    case QUIZ_ENUM.SLOW_LIST:
      return <SlowList />;
    case QUIZ_ENUM.FILTERS:
      return <Filters />;
    case QUIZ_ENUM.ARRAY_STATE:
      return <ArrayState />;
    case QUIZ_ENUM.HEAVY_CALCULATION:
      return <HeavyCalculation />;
    case QUIZ_ENUM.SLOW_STATE:
      return <SlowState />;
    case QUIZ_ENUM.MANUAL_RENDER:
      return <ManualRender />;
    case QUIZ_ENUM.REMOVE_ELEM:
      return <RemoveElem />;
    default:
      return <>No quiz</>;
  }
}
