"use client";
import { addEntry } from "@/actions/addEntry";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

export default function New() {
  const { data } = useSession();
  const [error, setError] = useState<string>();
  const router = useRouter();
  const ref = useRef<HTMLFormElement>(null);

  const handleSubmit = async (formData: FormData) => {
    const r = await addEntry({
      subject: formData.get("subject"),
      description: formData.get("description") ?? "",
      released: formData.get("released") ?? "",
      mvdbid: formData.get("mvdbid") ?? "",
      entryBy: data?.user?.name,
    });
    ref.current?.reset();
    if (r?.error) {
      setError(r.error);
      return;
    } else {
      return router.push("/new");
    }
  };

  return (
    <>
      <section className="w-full h-screen flex items-center justify-center">
        <form
          ref={ref}
          action={handleSubmit}
          className="p-6 w-full max-w-[400px] flex flex-col justify-between items-center gap-2 
                border border-solid border-black bg-white rounded"
        >
          {error && <div className="">{error}</div>}
          <h1 className="mb-5 w-full text-2xl font-bold">Neuer Eintrag</h1>

          <label className="w-full text-sm">Titel</label>
          <input
            type="text"
            placeholder="Titel"
            className="w-full h-8 border border-solid border-black py-1 px-2.5 rounded text-[13px]"
            name="subject"
          />

          <label className="w-full text-sm">Beschreibung</label>
          <input
            type="text"
            placeholder="Beschreibung..."
            className="w-full h-8 border border-solid border-black py-1 px-2.5 rounded"
            name="description"
          />

          <label className="w-full text-sm">Veröffentlicht am:</label>
          <div className="flex w-full">
            <input
              type="text"
              placeholder="Veröffentlicht"
              className="w-full h-8 border border-solid border-black py-1 px-2.5 rounded inline-datepicker data-date"
              name="released"
            />
          </div>
          <label className="w-full text-sm">mvdbid:</label>
          <div className="flex w-full">
            <input
              type="text"
              placeholder="MVDB ID"
              className="w-full h-8 border border-solid border-black py-1 px-2.5 rounded"
              name="mvdbid"
            />
          </div>

          <button
            className="w-full border border-solid border-black py-1.5 mt-2.5 rounded
                transition duration-150 ease hover:bg-black"
          >
            Eintragen
          </button>
        </form>
      </section>
    </>
  );
}
