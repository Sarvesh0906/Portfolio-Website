import Link from "next/link";

const FixedButton = ({ children, href = '/' }) => (
	<Link
		href={href}
		className="absolute md:fixed top-20 md:top-5 left-8 sm:left-10 md:left-4 xl:left-10 flex justify-center items-center rounded-full p-2 transition duration-300 ease-in-out z-30 md:z-40 bg-white">
		{children}
	</Link>
);

export default FixedButton;
