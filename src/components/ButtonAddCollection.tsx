import { Button } from "@/styles/styles";
import { useState } from 'react'
import { isModalOpen } from "@/pages/data/nanostore";
import { useStore } from "@nanostores/react";

const ButtonAddCollection = () => {

    const $isModalOpen = useStore(isModalOpen)

    const handleOpenModal = () => {
        isModalOpen.set(!$isModalOpen)
    }

    return(
        <Button onClick={handleOpenModal}>Add Collection</Button>
    )
}

export default ButtonAddCollection;