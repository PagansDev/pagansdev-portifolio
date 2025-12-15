import HeaderText from "@/components/ui/HeaderText";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center font-sans">
      <main className="flex min-h-screen w-dvw flex-col items-center justify-between py-32 px-16 sm:items-start">        
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <HeaderText title="Ei! Sejam bem vindos!" subtitle="Esse é meu portifólio, fique a vontade para explorar e conhecer meu trabalho." />
        </div>
      </main>
    </div>
  );
}
