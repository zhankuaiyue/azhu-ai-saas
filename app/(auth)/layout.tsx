

// 定义 AuthLayout 组件
const AuthLayout = ({
    children // 接受一个名为 children 的 props
}: {
    children: React.ReactNode // props 的类型为 React.ReactNode
}) => {
    return (
        <div className="flex items-center justify-center h-screen">
            {children};
        </div>
    );
}

// 导出 AuthLayout 组件
export default AuthLayout;