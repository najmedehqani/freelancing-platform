import ProfileForm from "../features/authentication/ProfileForm";
import ProfileFormSkeleton from "../features/authentication/ProfileFormSkeleton";
import useUser from "../features/authentication/useUser";
function Profile() {
  const { isLoading, user } = useUser();
  if (isLoading) return <ProfileFormSkeleton />;
  return <ProfileForm user={user} />;
}

export default Profile;
