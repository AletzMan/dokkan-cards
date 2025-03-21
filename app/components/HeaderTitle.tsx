interface Props {
    title: string;
}

export function HeaderTitle({ title }: Props) {

    return (
        <h2 className="relative flex items-center justify-center gap-4 py-4 my-12 w-full max-w-screen-xl text-center font-bold text-2xl ">
            {title}
            <span className="absolute text-white/5 text-[3em] leading-[1em] border-b-[1px] border-b-[--yellow-opacity-color] ">{title}</span>
        </h2>
    )
}