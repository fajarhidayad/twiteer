import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import React, { useEffect } from "react";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "@/components/Button";
import { trpc } from "@/utils/trpc";
import { Session, getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]";
import { useAppSelector } from "@/store/hooks";
import { useRouter } from "next/router";

const settingsSchema = z.object({
  name: z.string().min(1, "Required").max(50, "Too long"),
  username: z
    .string()
    .min(1, "Required")
    .max(50, "Too long")
    .regex(/^\S+$/, "No spaces"),
  bio: z.string().max(160, "Too long"),
});

type FormSchema = z.infer<typeof settingsSchema>;

const SettingsPage: NextPage<{ session: Session }> = (props) => {
  const userEmail = useAppSelector((state) => state.auth.user?.email);
  const { data } = trpc.user.getProfile.useQuery({ email: userEmail! });

  const form = useForm<FormSchema>({
    resolver: zodResolver(settingsSchema),
    values: {
      name: data?.name ? data.name : "",
      username: data?.username ? data.username : "",
      bio: data?.bio ? data.bio : "",
    },
  });

  const updateProfile = trpc.user.updateProfile.useMutation();
  // const router = useRouter()

  // useEffect(() => {
  //   if(updateProfile.isSuccess) {

  //   }
  // }, [updateProfile.isSuccess])

  const handleSubmitForm = (data: FormSchema) => {
    updateProfile.mutate({ ...data, email: userEmail! });
  };

  return (
    <main className="container pt-24 min-h-screen">
      <Head>
        <title>Settings | Twiteer</title>
      </Head>

      <div className="bg-white rounded-xl px-7 py-6 shadow">
        <h1 className="font-bold text-2xl">Settings</h1>
        <form
          className="mt-5 flex flex-col"
          onSubmit={form.handleSubmit(handleSubmitForm)}
        >
          <div className="mb-3 flex flex-col">
            <h3 className="mb-1">Name</h3>
            <input
              {...form.register("name")}
              className="border border-gray-300 rounded p-2"
            />
            {form.formState.errors.name?.message && (
              <p className="text-sm text-red-400">
                {form.formState.errors.name.message}
              </p>
            )}
          </div>
          <div className="mb-3 flex flex-col">
            <h3 className="mb-1">Username</h3>
            <input
              {...form.register("username")}
              className="border border-gray-300 rounded p-2"
            />
            {form.formState.errors.username?.message && (
              <p className="text-sm text-red-400">
                {form.formState.errors.username.message}
              </p>
            )}
          </div>
          <div className="mb-3 flex flex-col">
            <h3 className="mb-1">Bio</h3>
            <input
              {...form.register("bio")}
              className="border border-gray-300 rounded p-2"
            />
            {form.formState.errors.bio?.message && (
              <p className="text-sm text-red-400">
                {form.formState.errors.bio.message}
              </p>
            )}
          </div>
          <Button
            classname="ml-auto"
            type="submit"
            disabled={updateProfile.isLoading}
          >
            Save
          </Button>
        </form>
      </div>
    </main>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getServerSession(
    context.req,
    context.res,
    authOptions()
  );

  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
    },
  };
};

export default SettingsPage;
