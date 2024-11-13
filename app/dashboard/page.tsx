import Link from "next/link"
import { ArrowRightIcon } from "@radix-ui/react-icons"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default async function DashboardHome() {
  return (
    <div className="flex flex-1 flex-grow flex-col gap-4 lg:gap-6">
      <div className="flex flex-1 items-center justify-center rounded-3xl border bg-field shadow-sm">
        <div className="flex max-w-[500px] flex-col items-center gap-1 text-center">
          <h3 className="text-2xl font-bold tracking-tight">
            Welcome to the MyCosta Portal
          </h3>
        </div>
        <Card className="mx-auto max-w-sm">
          <CardHeader>
            <CardTitle className="grid gap-2">
              <span>Settings</span>
            </CardTitle>
            <CardDescription>
              Manage your organization settings & members
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
        <Card className="mx-auto max-w-sm">
          <CardHeader>
            <CardTitle className="grid gap-2">
              <span>Settings</span>
            </CardTitle>
            <CardDescription>
              Manage your organization settings & members
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
        <Card className="mx-auto max-w-sm">
          <CardHeader>
            <CardTitle className="grid gap-2">
              <span>Settings</span>
            </CardTitle>
            <CardDescription>
              Manage your organization settings & members
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
  )
}
