const LandingLayout = ({ 
    children 
}:{
    children: React.ReactNode
}) => {
    return (
        <main className="  h-screen bg-[#1c2a48]" overflow-auto>
            <div className="mx-auto max-w-full-xl h-full w-full">
            {children}
            </div>
        </main>
    );
}

export default LandingLayout;
