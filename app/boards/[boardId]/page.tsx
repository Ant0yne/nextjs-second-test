import { notFound } from "next/navigation";
import { Proposition } from "~/src/components/proposition/PropositionLine";
import { prisma } from "~/src/db/prisma";

export default async function BoardPage({
	params,
	searchParams,
}: {
	params: { boardId: string };
	searchParams: { [key: string]: string | string[] | undefined };
}) {
	const boardId = Number(params.boardId);

	const propositions = await prisma.proposition.findMany({
		where: {
			boardId: boardId,
		},
		select: {
			title: true,
			id: true,
			_count: {
				select: {
					vote: true,
				},
			},
		},
	});
	// throw new Error("Invalid");
	return (
		<ul>
			{propositions.map((propal) => (
				<Proposition
					key={propal.id}
					voteCount={propal._count.vote}
					{...propal}
				/>
			))}
		</ul>
	);
}
