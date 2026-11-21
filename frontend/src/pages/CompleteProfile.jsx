import CompleteProfileForm from "../features/authentication/CompleteProfileForm";

function CompleteProfile() {
  return (
    <div className="min-h-screen bg-secondary-0">
      <div className="container xl:max-w-screen-xl">
        <div className="flex justify-center pt-11">
          <CompleteProfileForm/>
        </div>
      </div>
    </div>
  );
}
export default CompleteProfile;
