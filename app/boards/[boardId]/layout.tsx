import { PropsWithChildren } from "react";
import { notFound } from "next/navigation";
import { prisma } from "~/src/db/prisma";

export default async function LayoutBoard({
	params,
	children,
}: PropsWithChildren<{
	params: { boardId: string };
}>) {
	const boardId = Number(params.boardId);

	if (isNaN(boardId)) {
		return notFound();
	}

	const board = await prisma.board.findUniqueOrThrow({
		where: {
			id: boardId,
		},
	});
	// throw new Error("Invalid");

	return (
		<div className="flex flex-col gap-6">
			<h2 className="text-4xl font-bold">{board.title}</h2>
			{children}
		</div>
	);
}
