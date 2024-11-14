"use client"

import Link from "next/link"
import { OpenInNewWindowIcon } from "@radix-ui/react-icons"
import { useUser } from '@auth0/nextjs-auth0/client';

import { Button } from "@/components/ui/button"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default async function DashboardHome() {
  const { user } = useUser()
  
  console.log(user);

  return (
    <div className="flex flex-1 flex-grow flex-col gap-4 lg:gap-6">
      <div className="flex flex-1 flex-col gap-4 items-center justify-center rounded-3xl border bg-field shadow-sm">
        <div className="flex max-w-[500px] flex-col items-center gap-1 text-center">
          <h3 className="text-2xl font-bold tracking-tight">
            Welcome to the MyCosta Portal
          </h3>
        </div>
        <div className="grid grid-flow-row-dense grid-cols-3 gap-12">
          <Card className="bg-[#6D1F37] text-white max-w-[300px]">
            <CardHeader>
              <CardTitle className="grid gap-2">
                <span>Reports</span>
              </CardTitle>
              <CardDescription>
                View your buying history and reports
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <Link target="_blank" href="https://okta.com" className="w-full">
                <Button className="w-full">
                  Navigate to Reports
                  <OpenInNewWindowIcon className="ml-2 size-4" />
                </Button>
              </Link>
            </CardFooter>
          </Card>
          <Card className="bg-[#6D1F37] text-white max-w-[300px]">
            <CardHeader>
              <CardTitle className="grid gap-2">
                <span>Profisee</span>
              </CardTitle>
              <CardDescription>
                Access your data in Profisee
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <Link target="_blank" href="https://profisee.com/platform/" className="w-full">
                <Button className="w-full">
                  Navigate to Profisee
                  <OpenInNewWindowIcon className="ml-2 size-4" />
                </Button>
              </Link>
            </CardFooter>
          </Card>
          <Card className="bg-[#6D1F37] text-white max-w-[300px]">
            <CardHeader>
              <CardTitle className="grid gap-2">
                <span>Settings</span>
              </CardTitle>
              <CardDescription>
                Manage your organization settings
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <Link href="/dashboard/organization/general" className="w-full">
                <Button className="w-full">
                  Navigate to Settings
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}
