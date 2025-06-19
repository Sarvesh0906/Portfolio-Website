export default function Loading() {
	return (
		<div className="fixed top-0 left-0 flex flex-col justify-center items-center h-screen w-screen bg-gradient-to-b from-blue-100 to-red-100 z-[999]">
			<div className="w-16 h-16 border-4 border-gray-900 border-t-transparent rounded-full animate-spin mb-4"></div>
			<h1 className="text-4xl text-gray-900">Loading...</h1>
		</div>
	);
}
