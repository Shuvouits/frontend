"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {TabsContent} from "@/components/ui/tabs";

function login() {

  const [authState, setAuthState] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  return (
    <div>
      <TabsContent value="login">
        <Card>
          <CardHeader>
            <CardTitle>Account Login</CardTitle>
            <CardDescription>Welcome to Stack Dev.</CardDescription>
          </CardHeader>

          <form>

          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="email">Email</Label>

              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Type here.."
                value={authState.email}
                onChange={(e) =>
                  setAuthState({ ...authState, email: e.target.value })
                }
              />

            </div>
            <div className="space-y-1">

            <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                name="password"
                placeholder="Type here.."
                value={authState.password}
                onChange={(e) =>
                  setAuthState({ ...authState, password: e.target.value })
                }
              />

            </div>
          </CardContent>

          <div className="mt-4">
              <Button className="w-full" disabled={loading}>
                {loading ? "Processing.." : "Login"}
              </Button>
            </div>

          </form>
         
         
        </Card>
      </TabsContent>
    </div>
  );
}

export default login;
