type TAuthLayout = {
  children: React.ReactNode;
};

const AuthLayout = ({ children }: TAuthLayout) => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold text-blue-600">SocialApp</h1>
          <p className="font-semibold py-6">
            Connect with friends and the world around you on SocialApp.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          {children}
        </div>
      </div>
    </div>
  );
};
export default AuthLayout;
