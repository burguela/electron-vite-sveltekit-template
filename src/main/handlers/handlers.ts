import { Prisma, PrismaClient } from '@prisma/client';

export async function getAtendentes() {
	const prisma = new PrismaClient();

	const atendentes = await prisma.tb_Atendente.findMany();

	return atendentes;
}

export type AllAtendentes = Prisma.PromiseReturnType<typeof getAtendentes>;
