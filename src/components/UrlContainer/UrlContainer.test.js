import React from "react";
import UrlContainer from "./UrlContainer";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

describe("UrlContainer", () => {
	it("should render headings and anchor tags", () => {
		const urls = [
			{
				id: 1,
				long_url:
					"https://images.unsplash.com/photo-1531898418865-480b7090470f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
				short_url: "http://localhost:3001/useshorturl/1",
				title: "Awesome photo",
			},
			{
				id: 2,
				long_url:
					"blah",
				short_url: "http://localhost:3001/useshorturl/2",
				title: "Hello",
			},
		];

		const { getByRole } = render(<UrlContainer urls={urls} />);

		const heading1 = getByRole("heading", { name: "Awesome photo" });
		const heading2 = getByRole("heading", { name: "Hello" });

		const link1 = getByRole("link", {
			name: "http://localhost:3001/useshorturl/1",
		});
		const link2 = getByRole("link", {
			name: "http://localhost:3001/useshorturl/2",
		});

		expect(heading1).toBeInTheDocument();
		expect(heading2).toBeInTheDocument();
		expect(link1).toBeInTheDocument();
		expect(link2).toBeInTheDocument();
	});
});
