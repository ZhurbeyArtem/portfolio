import { FunctionComponent } from "react"
import { TClasses } from "./classes.type"

export type TSkillsCard = {
  Svg: FunctionComponent<TClasses>,
  text: string
}