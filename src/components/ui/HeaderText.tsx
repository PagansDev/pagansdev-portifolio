export default function HeaderText({title, subtitle}: {title: string, subtitle: string}) {
    return (
        <div>
            <h1 className="text-4xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">{title}</h1>
            <p className="mt-4 text-lg leading-8 text-zinc-600 dark:text-zinc-400">{subtitle}</p>
        </div>
    )
}