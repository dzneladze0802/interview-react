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
} from "./Quiz";

export default function App({ quizType }: { quizType: QUIZ_ENUM }) {
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
    default:
      return <>No quiz</>;
  }
}
