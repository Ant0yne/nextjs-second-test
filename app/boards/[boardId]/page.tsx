import React from "react";

export default function BoardPage({
	params,
	searchParams,
}: {
	params: { boardId: string };
	searchParams: { [key: string]: string | string[] | undefined };
}) {
	// throw new Error("Invalid");
	return (
		<div>
			BoardPage
			<p>{params.boardId}</p>
			<p>{JSON.stringify(searchParams.test)}</p>
		</div>
	);
}
