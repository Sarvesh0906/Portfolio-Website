const Button = ({ children, variation, ...props }) => (
	<button
		{...props}
		className={`title rounded-2xl px-8 py-2 shadow-md transition duration-300 ease-in-out z-30 ${variation === "primary"
				? "bg-gradient-to-r from-blue-500 to-red-500 border-blue-500 border-2 text-white hover:from-red-500 hover:to-blue-500"
				: "transparent border-2 border-blue-500 text-blue-500 hover:bg-white "
			}`}>
		{children}
	</button>
);

export default Button;