import type {
  KeywordValue,
  LayerValueItem,
  UnitValue,
  FunctionValue,
  StyleProperty,
} from "@webstudio-is/css-engine";
import { animatableProperties } from "../__generated__/animatable-properties";

type AnimatableProperty = (typeof animatableProperties)[number];

export const transitionLongHandProperties = [
  "transitionProperty",
  "transitionTimingFunction",
  "transitionDelay",
  "transitionDuration",
  "transitionBehavior",
] as const satisfies StyleProperty[];

export const commonTransitionProperties = [
  "all",
  "opacity",
  "margin",
  "padding",
  "border",
  "transform",
  "filter",
  "flex",
  "background-color",
];

export const isAnimatableProperty = (
  property: string
): property is AnimatableProperty => {
  if (property === "all") {
    return true;
  }

  return [...commonTransitionProperties, ...animatableProperties].some(
    (item) => item === property
  );
};

export const isValidTransitionValue = (
  value: LayerValueItem
): value is KeywordValue | UnitValue | FunctionValue => {
  return (
    value.type === "keyword" ||
    value.type === "unit" ||
    value.type === "function" ||
    value.type === "unparsed"
  );
};
