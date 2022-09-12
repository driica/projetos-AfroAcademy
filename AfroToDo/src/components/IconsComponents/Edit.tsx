export const Edit = (props: { big?: boolean }) => {
	const { big } = props
	return (
		<svg
			style={big ? { width: 15, height: 18, fill: "#fff" } : {}}
			width="12"
			height="14"
			viewBox="0 0 12 14"
			fill="#4F4F4F"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M1.33334 12.3334H10.6667C10.8435 12.3334 11.0131 12.4036 11.1381 12.5286C11.2631 12.6537 11.3333 12.8232 11.3333 13C11.3333 13.1769 11.2631 13.3464 11.1381 13.4714C11.0131 13.5965 10.8435 13.6667 10.6667 13.6667H1.33334C1.15653 13.6667 0.986958 13.5965 0.861934 13.4714C0.73691 13.3464 0.666672 13.1769 0.666672 13C0.666672 12.8232 0.73691 12.6537 0.861934 12.5286C0.986958 12.4036 1.15653 12.3334 1.33334 12.3334ZM0.666672 9.00004L7.33334 2.33337L9.33334 4.33337L2.66667 11H0.666672V9.00004ZM8.00001 1.66671L9.33334 0.333374L11.3333 2.33337L9.99934 3.66737L8.00001 1.66671Z"
			/>
		</svg>
	)
}