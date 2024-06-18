"use server";

import { db } from "@/db";
import {
	CaseColor,
	PhoneModel,
	CaseFinish,
	CaseMaterial,
} from "@prisma/client";

export type SaveConfigArgs = {
	model: PhoneModel;
	color: CaseColor;
	finish: CaseFinish;
	material: CaseMaterial;
	configId: string;
}

export async function saveConfig({
	model,
	color,
	finish,
	material,
	configId,
}: SaveConfigArgs) {
	await db.configuration.update({
		where: { id: configId },
		data: {color, finish, material, model},
	})
}
