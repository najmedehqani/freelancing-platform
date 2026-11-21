import AuthContainer from "../features/authentication/AuthContainer";

function Auth() {
  return (
    <div className="min-h-screen bg-secondary-0">
      <div className="container xl:max-w-screen-xl">
        <div className="flex justify-center pt-12">
          <AuthContainer />
        </div>
      </div>
    </div>
  );
}
export default Auth;
