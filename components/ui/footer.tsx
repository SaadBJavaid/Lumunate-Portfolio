import Image from "next/image";
import Logo from "./logo";

export default function Footer() {
  return (
    <footer className="mt-12">
      <div>

        <div className="relative mx-auto max-w-[1100px] px-4 sm:px-6">
          <div className="flex justify-between">
            <div>
              <Logo />
            </div>
            <ul className="inline-flex gap-1">
              <li>
                <a
                  className="flex items-center justify-center text-forest-500 transition hover:text-forest-400"
                  href="#0"
                  aria-label="Twitter"
                >
                  <svg className="h-8 w-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="m13.063 9 3.495 4.475L20.601 9h2.454l-5.359 5.931L24 23h-4.938l-3.866-4.893L10.771 23H8.316l5.735-6.342L8 9h5.063Zm-.74 1.347h-1.457l8.875 11.232h1.36l-8.778-11.232Z" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  className="flex items-center justify-center text-forest-500 transition hover:text-forest-400"
                  href="#0"
                  aria-label="Medium"
                >
                  <svg className="h-8 w-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23 8H9a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1Zm-1.708 3.791-.858.823a.251.251 0 0 0-.1.241V18.9a.251.251 0 0 0 .1.241l.838.823v.181h-4.215v-.181l.868-.843c.085-.085.085-.11.085-.241v-4.887l-2.41 6.131h-.329l-2.81-6.13V18.1a.567.567 0 0 0 .156.472l1.129 1.37v.181h-3.2v-.181l1.129-1.37a.547.547 0 0 0 .146-.472v-4.749a.416.416 0 0 0-.138-.351l-1-1.209v-.181H13.8l2.4 5.283 2.122-5.283h2.971l-.001.181Z" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  className="flex items-center justify-center text-forest-500 transition hover:text-forest-400"
                  href="#0"
                  aria-label="Github"
                >
                  <svg className="h-8 w-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z" />
                  </svg>
                </a>
              </li>
            </ul>

            <div>
              <p className="font-raleway text-xl text-white">Est 2021</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center my-4">
          <div>
            <p className="font-raleway text-xl text-white">Copyright  ® Lumunate 2024</p>
          </div>
        </div>
      </div>

      <div className="relative w-full overflow-hidden h-56">
        <Image
          src={'/footer-image.jpeg'}
          width={2000}
          height={32}
          alt="Footer Image"
          className="object-cover object-center h-full"
        />

        <div className="absolute bottom-0 left-0 w-full flex justify-center my-auto h-full">
          <Image src={'/logo.svg'} width={350} height={-1} alt="Footer logo" className="object-center" /> 
        </div>
      </div>
    </footer>
  );
}
