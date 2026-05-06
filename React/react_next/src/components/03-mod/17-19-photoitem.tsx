import { Photo } from "@/types/03-mod/17-19-photo";

export type Props = {
  photo: Photo;
  onClick: () => void;
};

export const PhotoItem = ({
  photo,
  onClick,
}: Props) => {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer hover:opacity-80"
    >
      <img
        src={`/assets/${photo.url}`}
        alt=""
        className="w-full"
      />
    </div>
  );
};