"use client";

import { Modal } from "@/components/03-mod/17-19-modal";
import { PhotoItem } from "@/components/03-mod/17-19-photoitem";
import { photoList } from "@/data/03-mod/17-19-photo-list";
import { useState } from "react";

const Page = () => {
  // Modal visibility state
  const [showModal, setShowModal] = useState(false);

  // Selected image state
  const [imageOfModal, setImageOfModal] = useState("");

  // Open modal with selected image
  const openModal = (id: number) => {
    const photo = photoList.find(
      (item) => item.id === id
    );

    if (photo) {
      setImageOfModal(photo.url);
      setShowModal(true);
    }
  };

  // Close modal
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="mx-2">
      <h1 className="my-10 text-center text-3xl font-bold">
        Photos
      </h1>

      {/* Gallery */}
      <section className="container mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {photoList.map((item) => (
          <PhotoItem
            key={item.id}
            photo={item}
            onClick={() => openModal(item.id)}
          />
        ))}
      </section>

      {/* Modal */}
      {showModal && (
        <Modal
          image={imageOfModal}
          closeModal={closeModal}
        />
      )}
    </div>
  );
};

export default Page;

/*
==========================================================
  CLASS 17 - 19: Gallery and Modal
==========================================================

This project introduces a more complete UI interaction
using React state.

Concepts covered:
- Modal components
- Conditional rendering
- State sharing between components
- Dynamic image selection
- Event handling
- Array search with find()
- Opening and closing modals

The selected image is stored in state and displayed
dynamically inside the modal.
*/