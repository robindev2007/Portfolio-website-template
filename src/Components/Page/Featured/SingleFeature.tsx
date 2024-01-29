import Image from "next/image";
import { FC } from "react";

type SingleFeatureProps = {
  project: {
    image: string;
    work: string;
    title: string;
  };
};

const SingleFeature: FC<SingleFeatureProps> = ({ project }) => {
  return (
    <div className="mx-auto flex h-fit w-fit flex-col gap-2 rounded-md border border-zinc-300 bg-white p-3 shadow-md">
      <div className="max-h-48 max-w-96 overflow-hidden rounded-md   md:h-56 md:w-96">
        <Image
          src={project.image}
          alt={project.title}
          height={1200}
          width={1000}
          className="h-full w-full"
        />
      </div>
      <div>
        <p className="text-lg font-medium">{project.title}</p>
        <span className="text-opacity-75">{project.work}</span>
      </div>
    </div>
  );
};

export default SingleFeature;
