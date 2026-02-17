import { getTranslations } from "next-intl/server";
import HeaderText from "@/components/ui/HeaderText";

export default async function Admin() {
  const t = await getTranslations("admin");
  
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <HeaderText title={t("title")} subtitle={t("subtitle")} />
        </div>
      </main>
    </div>
  );
}
