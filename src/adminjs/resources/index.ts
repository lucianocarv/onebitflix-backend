import { ResourceWithOptions } from "adminjs";
import { Category, Episode } from "../../models";
import { Course } from "../../models/Course";
import { categoryResourceOptions } from "./category";
import { courseResourceOptions } from "./course";
import { episodeResourceFeatures, episodeResourceOptions } from "./episode";

export const adminJSResources: ResourceWithOptions[] = [
  {
    resource: Category,
    options: categoryResourceOptions,
  },

  {
    resource: Course,
    options: courseResourceOptions,
  },
  {
    resource: Episode,
    options: episodeResourceOptions,
    features: episodeResourceFeatures,
  },
];
