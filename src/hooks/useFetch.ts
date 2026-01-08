import { useEffect, useState } from "react";
import type { UserType } from "../types/type";

export default function useFetch(url: string) {
	// const [data, setData] = useState([]);
	const [data, setData] = useState<UserType[]>([]);
	const [error, setError] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	useEffect(() => {
		setIsLoading(true);
		fetch(url)
			.then((res) => res.json())
			.then((data) => {
				setData(data);
				setError(null);
			})
			.catch((error) => setError(error))
			.finally(() => setIsLoading(false));
	}, [url]);
	return { data, error, isLoading };
}
