import React from "react";
import ReactDOM from "react-dom/client";
import { ModalProvider } from "./contexts/ModalContext";
import Page from "./layouts/Page";
import Home from "./pages/Home";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
	<ModalProvider>
		<React.StrictMode>
			<Page>
				<Home />
			</Page>
		</React.StrictMode>
	</ModalProvider>
);
