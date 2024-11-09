import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/route";

const Home = async () => {
  // console.log("Where am I???");
  const session = await auth();
  console.log(session);
  return (
    <>
      <h1 className="h1-bold">Welcome to JSMestery</h1>;
      <form
        className="px-10 pt-[100px]"
        action={async () => {
          "use server";
          await signOut({ redirectTo: ROUTES.LOGIN });
        }}
      >
        <Button type="submit">Logout</Button>
      </form>
    </>
  );
};

export default Home;
