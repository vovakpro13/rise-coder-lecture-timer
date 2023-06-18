import {Modules} from "../modules";
import {GitLectures} from "./git";
import {JSLectures} from "./js";

export const Lectures = {
    [Modules.Git]: GitLectures,
    [Modules.JS]: JSLectures
}