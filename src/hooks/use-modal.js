import { useState } from "react"

const useModal = () => {
    const [showModal, setShowModal] = useState(false)

    const openModalHandler = () => {
        setShowModal(true)
    }

    const closeModalHandler = () => {
        setShowModal(false)
    }

    return {
        showModal,
        openModalHandler,
        closeModalHandler,
    }
}

export default useModal