interface IPageLayoutProps {
  children: React.ReactNode;
}

const PageLayout: React.FC<IPageLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900">
      <header className="flex-none bg-blue-900">
        <nav className="flex justify-between items-center p-4">
          <div className="flex gap-4">
            <h1 className="text-2xl">Simple Swap DAPP</h1>
          </div>
        </nav>
      </header>

      <main className="flex-grow py-8 text-white">{children}</main>
    </div>
  );
};

export default PageLayout;
