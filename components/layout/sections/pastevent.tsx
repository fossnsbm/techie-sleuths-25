import Image from "next/image";

export default function PastEventSection() {
  return (
    <section id="pastevent" className="container w-full">
      <div className="flex flex-col gap-20">
        <div className="flex md:flex-row flex-col gap-10 justify-center">
          <div className="flex flex-row ">
            <Image
              src="/pastevent10.JPG"
              alt="Register for the Competition"
              width={500}
              height={500}
              className="rounded-lg opacity-80 hover:opacity-90"
            />
          </div>
          <div className="flex flex-row ">
            <Image
              src="/pastevent6.JPG"
              alt="Register for the Competition"
              width={500}
              height={500}
              className="rounded-lg opacity-80 hover:opacity-90"
            />
          </div>
        </div>

        <div className="flex md:flex-row flex-col gap-10 justify-center">
          <div className="flex flex-row ">
            <Image
              src="/pastevent7.JPG"
              alt="Register for the Competition"
              width={500}
              height={500}
              className="rounded-lg opacity-80 hover:opacity-90"
            />
          </div>
          <div className="flex flex-row ">
            <Image
              src="/pastevent9.JPG"
              alt="Register for the Competition"
              width={500}
              height={500}
              className="rounded-lg opacity-80 hover:opacity-90"
            />
          </div>
        </div>
        <div className="flex md:flex-row flex-col gap-10 justify-center">
          <div className="flex flex-row ">
            <Image
              src="/pastevent4.JPG"
              alt="Register for the Competition"
              width={500}
              height={500}
              className="rounded-lg opacity-80 hover:opacity-90"
            />
          </div>
          <div className="flex flex-row ">
            <Image
              src="/pastevent8.JPG"
              alt="Register for the Competition"
              width={500}
              height={500}
              className="rounded-lg opacity-80 hover:opacity-90"
            />
          </div>
        </div>
        <div className="flex md:flex-row flex-col gap-10 justify-center">
          <div className="flex flex-row ">
            <Image
              src="/pastevent5.JPG"
              alt="Register for the Competition"
              width={500}
              height={500}
              className="rounded-lg opacity-80 hover:opacity-90"
            />
          </div>
          <div className="flex flex-row ">
            <Image
              src="/pastevent11.JPG"
              alt="Register for the Competition"
              width={500}
              height={500}
              className="rounded-lg opacity-80 hover:opacity-90"
            />
          </div>
        </div>
        <div className="flex md:flex-row flex-col gap-10 justify-center">
          <div className="flex flex-row ">
            <Image
              src="/pastevent12.JPG"
              alt="Register for the Competition"
              width={500}
              height={500}
              className="rounded-lg opacity-80 hover:opacity-90"
            />
          </div>
          <div className="flex flex-row">
            <Image
              src="/pastevent13.JPG"
              alt="Register for the Competition"
              width={500}
              height={500}
              className="rounded-lg opacity-80 hover:opacity-90"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
