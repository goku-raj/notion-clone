const PublicLayout = ({
    children
}: {
    children: React.ReactNode;
}) => {
    return (
        <div className="dark:bg-[#1F1F1F] h-fit">
            {children}
        </div>
    );
}

export default PublicLayout; 