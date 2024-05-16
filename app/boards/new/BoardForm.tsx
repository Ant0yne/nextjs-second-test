import { Button } from "~/src/components/form/Bouton";
import { Input } from "~/src/components/form/Input";

export default function BoardForm() {
	return (
		<form className="flex flex-col gap-4">
			<Input label="Title" name="title" />
			<Button type="submit">Create board</Button>
		</form>
	);
}
