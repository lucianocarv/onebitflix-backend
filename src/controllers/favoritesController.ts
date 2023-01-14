import { Response } from "express";
import { AuthenticatedRequest } from "../middlewares/auth";
import { Favorite } from "../models/Favorite";
import { favoriteService } from "../services/favoriteService";

export const favoritesController = {
	index: async (req: AuthenticatedRequest, res: Response) => {
		const userId = req.user!.id;
		try {
			const favorites = await favoriteService.findByUserId(userId);
			return res.json(favorites);
		} catch (error) {
			if (error instanceof Error) {
				return res.status(400).json({ message: error.message });
			}
		}
	},

	save: async (req: AuthenticatedRequest, res: Response) => {
		const userId = req.user!.id;
		const { courseId } = req.body;

		try {
			const favorite = await favoriteService.create(userId, courseId);
			return res.status(201).json(favorite);
		} catch (error) {
			if (error instanceof Error) {
				return res.status(400).json({ message: error.message });
			}
		}
	},

	delete: async (req: AuthenticatedRequest, res: Response) => {
		const userId = req.user!.id;
		const courseId = req.params.id;
		try {
			await favoriteService.delete(userId, Number(courseId));
			return res.status(204).send();
		} catch (error) {
			if (error instanceof Error) {
				return res.status(400).json({ message: error.message });
			}
		}
	},
};
