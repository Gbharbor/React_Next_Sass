type PropsModal = {
    image: string;
    closeModal: () => void;
  };
  
  export const Modal = ({
    image,
    closeModal,
  }: PropsModal) => {
    return (
      <>
        {/* Overlay */}
        <div
          onClick={closeModal}
          className="fixed bottom-0 left-0 right-0 top-0 flex items-center justify-center bg-black/90"
        >
          <img
            src={`/assets/${image}`}
            alt=""
            className="max-h-screen max-w-screen"
          />
        </div>
  
        {/* Close button */}
        <div
          onClick={closeModal}
          className="fixed right-5 top-5 h-10 w-10 cursor-pointer text-5xl text-white"
        >
          X
        </div>
      </>
    );
  };