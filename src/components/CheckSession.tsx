import { signIn } from "@/store/features/authSlice";
import { useAppDispatch } from "@/store/hooks";
import { useSession } from "next-auth/react";
import React, { useEffect } from "react";
import { CgSpinner } from "react-icons/cg";

interface CheckSessionProps {
  children: React.ReactNode;
}

const CheckSession: React.FC<CheckSessionProps> = ({ children }) => {
  const { data: session, status } = useSession();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (session && session.user) {
      dispatch(
        signIn({
          user: {
            name: session.user.name,
            email: session.user.email,
            image: session.user.image,
          },
        })
      );
    }
  }, [session, dispatch]);

  if (status !== "loading") {
    return <>{children}</>;
  }

  return (
    <main className="h-screen bg-slate-200 flex justify-center items-center">
      <CgSpinner size={35} className="text-tblue animate-spin" />
    </main>
  );
};

export default CheckSession;
