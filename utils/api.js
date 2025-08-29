const fetchUsers = async () => {
	const res = await fetch("https://jsonplaceholder.typicode.com/users", {
		cache: "no-store",
	});

	return res.json();
};

export default { fetchUsers };
