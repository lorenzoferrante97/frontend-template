const fetchUsers = async () => {
	// simulazione ritardo fetch per Streaming
	await new Promise((resolve) => setTimeout(resolve, 3000));

	const res = await fetch("https://jsonplaceholder.typicode.com/users", {
		cache: "no-store", // non salva in cache, per contenutoc che cambia spesso
		// cache: "force-cache" (default) -> contenuto che una volta fetchato non cambia
		// next: { revalidate: 60 } -> rimane in cache per 60 secondi, poi viene rifechato
	});

	return res.json();
};

const fetchToDosComments = async () => {
	const promises = [
		fetch("https://jsonplaceholder.typicode.com/todos").then((res) =>
			res.json(),
		),
		fetch("https://jsonplaceholder.typicode.com/comments").then((res) =>
			res.json(),
		),
	];
	const [todos, comments] = await Promise.all(promises);

	return { todos, comments };
};

export default { fetchUsers, fetchToDosComments };
