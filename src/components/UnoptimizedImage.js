import Image from "next/image";
export default function UnoptimizedImage(props) {
  return <Image {...props} unoptimized />;
}
