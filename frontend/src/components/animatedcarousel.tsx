
import { CardStack } from "./ui/card-stack";

export function CardStackDemo() {
  return (
    <div className="w-1/2 flex items-center justify-center">
      <CardStack items={CARDS} />
    </div>
  );
}

// Small utility to highlight the content of specific section of a testimonial content

const CARDS = [
  {
    id: 0,
    content: (
      <img
        className="w-1/2"
        src="/thumbnails/template-1.png"
        alt="template-1"
      />
    ),
  },
  {
    id: 1,
    content: (
      <img
        className="w-1/2"
        src="/thumbnails/template-2.png"
        alt="template-2"
      />
    ),
  },
  {
    id: 2,
    content: (
      <img
        className="w-1/2"
        src="/thumbnails/template-3.png"
        alt="template-3"
      />
    ),
  },
  {
    id: 3,
    content: (
      <img
        className="w-1/2"
        src="/thumbnails/template-4.png"
        alt="template-4"
      />
    ),
  },

];
