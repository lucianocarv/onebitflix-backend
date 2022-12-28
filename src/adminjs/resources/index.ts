import { ResourceWithOptions } from "adminjs";
import { Category, Episode, User } from "../../models";
import { Course } from "../../models/Course";
import { categoryResourceOptions } from "./category";
import { courseResourceFeatures, courseResourceOptions } from "./course";
import { episodeResourceFeatures, episodeResourceOptions } from "./episode";
import { userResourceOptions } from "./user";

export const adminJSResources: ResourceWithOptions[] = [
  {
    resource: Category,
    options: categoryResourceOptions,
  },

  {
    resource: Course,
    options: courseResourceOptions,
    features: courseResourceFeatures,
  },
  {
    resource: Episode,
    options: episodeResourceOptions,
    features: episodeResourceFeatures,
  },
  {
    resource: User,
    options: userResourceOptions,
  },
];
