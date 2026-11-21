import { ThreeDots } from "react-loader-spinner";

function Loading({ variant="white", width = "75", height = "40" }) {
  const colors = {
    primary: "rgb(var(--color-primary-500))",
    white: "white",
    success: "rgb(var(--color-success))",
     secondary: "rgb(var(--color-secondary-400))",
    danger: "rgb(var(--color-red-500))",
  };
  return (
    <ThreeDots
      height={height}
      width={width}
      radius={9}
      color={colors[variant]}
      wrapperStyle={{
        display: "flex",
        justifyContent: "center",
      }}
      visible={true}
    />
  );
}
export default Loading;
