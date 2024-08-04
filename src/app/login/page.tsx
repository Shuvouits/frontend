import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Login from "@/components/auth/Login";
import Register from "@/components/auth/Register";

function login() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <div className="hidden lg:flex h-screen justify-center">
        <img
          src="/auth_img.svg"
          width={500}
          height={500}
          className="w-full object-contain"
        />
      </div>

      <div className="flex  justify-center h-screen items-center flex-col ">

        <div className="">
            <img src="/logo.svg" width={150} height={150} alt="logo" />
            <h1 className="text-cabbage font-bold text-2xl md:text-2xl mt-2 ">Where developers suffer together</h1>

        </div>

        <Tabs defaultValue="login" className="w-full mt-7 px-4 md:w-[500px]">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="register">Register</TabsTrigger>
          </TabsList>

          <Login />
          <Register />
          
        </Tabs>

      </div>
    </div>
  );
}

export default login;
