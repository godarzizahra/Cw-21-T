import useFetch from "../../hooks/useFetch";
import Loader from "../shared/loading/loading";

export default function Users() {
	const { data, error, isLoading } = useFetch(
		"https://jsonplaceholder.typicode.com/users"
	);
	if (error) {
		return (
			<div className="w-full h-screen flex items-center  justify-center">
				isError ...
			</div>
		);
	}

	return (
		<div>
			{isLoading ? (
				<Loader />
			) : (
				<div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-5">
					{data.map((user) => (
						<div
							key={user.id}
							className="flex flex-col gap-5 items-center  p-5 bg-[#0008] text-white rounded-md shadow-xl "
						>
							<div>{user.name}</div>
							<div>{user.address.city}</div>
							<div>{user.email}</div>
							<div>{user.address.geo.lat}</div>
						</div>
					))}
				</div>
			)}
		</div>
	);
}
