import HeaderText from "@/components/ui/HeaderText";

export default function Contact() {
  return (
    <div className="flex min-h-screen items-center justify-center font-sans">
      <main className="flex min-h-screen w-full flex-col items-center justify-between py-32 px-16 sm:items-start">
        
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <HeaderText title="Contato" subtitle="Tela de Contato" />
        </div>
      </main>
    </div>
  );
}
