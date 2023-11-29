import { createContext, useState } from "react";

export const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
	const [isModalOpened, setIsModalOpened] = useState(false);
	const [modalData, setModalData] = useState({});

	const showModal = (data) => {
		setModalData(data);
		setIsModalOpened(true);
	};

	const closeModal = () => {
		setIsModalOpened(false);
	};

	return <ModalContext.Provider value={{ isModalOpened, modalData, showModal, closeModal }}>{children}</ModalContext.Provider>;
};
