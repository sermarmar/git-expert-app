interface GitItemProps {
    title: string
    url: string
}

export const GitItem = ({ title, url }: GitItemProps) => {
    return (
        <div className="card">
            <img src={ url } alt={ title } />
            <p>{ title }</p>
        </div>
    )
}