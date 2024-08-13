import Image from "next/image";

// root file of this next.js project
// all of the folders and files which are situated in the
// `app` folder get rendered in server side
// using hooks, states in server component (by default by next.js)
// isn't permissible ,this can only be accessible in clien components

export default function Home() {
  return (
    <main className="mt-10">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint,
        asperiores consequuntur! Laudantium quidem, iure esse fuga veritatis
        quae nobis? Eaque.
      </p>
    </main>
  );
}
