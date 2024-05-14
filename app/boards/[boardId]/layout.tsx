import React, { PropsWithChildren } from "react";

export default function LayoutBoard({
	params,
	children,
}: PropsWithChildren<{
	params: { boardId: string };
}>) {
	// throw new Error("Invalid");

	return (
		<div>
			LayoutBoard
			<p>{params.boardId}</p>
			{children}
		</div>
	);
}
