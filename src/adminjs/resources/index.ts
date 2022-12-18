import { ResourceWithOptions } from "adminjs";
import { Category } from "../../models";
import { Course } from "../../models/Course";
import { categoryResourceOptions } from "./category";
import { courseResourceOptions } from "./course";

export const adminJSResources: ResourceWithOptions[] = [
  {
    resource: Category,
    options: categoryResourceOptions,
  },

  {
    resource: Course,
    options: courseResourceOptions,
  },
];
