import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    DropdownItem,
    DropdownTrigger,
    Dropdown,
    DropdownMenu,
    Avatar, Card, CardBody, Badge,
} from "@heroui/react";
import {signOut} from "next-auth/react";
import {LoggedUser} from "@/components/user-provider";
import Link from "next/link";
import {usePathname, useRouter} from "next/navigation";
import Image from "next/image";
import {cn} from "@/lib/utils";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger
} from "@/components/ui/drawer";
import {Button} from "@/components/ui/button";
import React from "react";
import {XIcon} from "lucide-react";

export default function Header({className}: { className: string }) {
    const router = useRouter()
    const pathname = usePathname();
    const {user} = LoggedUser();

    return (
        <>
            <Drawer>
                <Card className={className + ' rounded-none'}>
                    <CardBody className='py-0'>
                        <Navbar>
                            <NavbarBrand className="flex gap-1">
                                <Image
                                    src="/images/logo/lifesight-logo.png"
                                    alt="LifeSight logo"
                                    height={60}
                                    width={60}
                                    className="rounded-lg"
                                />
                            </NavbarBrand>

                            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                                <NavbarItem>
                                    <Link className={cn(
                                        {'text-blue-600 font-bold border-b-4 border-blue-600': (pathname === '/admin/protect/dashboard' || pathname === '/volunteer/protect/dashboard')}
                                    )}
                                          color="foreground"
                                          href={`${user.userType === "ADMIN" ? '/admin/protect/dashboard' : '/volunteer/protect/dashboard'}`}>
                                        Dashboard
                                    </Link>
                                </NavbarItem>
                                {user.userType === 'ADMIN' &&
                                    <div className="flex gap-4">
                                        <NavbarItem>
                                            <Link className={cn(
                                                {'text-blue-600 font-bold border-b-4 border-blue-600': pathname === '/admin/protect/admins'}
                                            )} color="foreground" href="/admin/protect/admins">
                                                Admins
                                            </Link>
                                        </NavbarItem>
                                        <NavbarItem>
                                            <Link className={cn(
                                                {'text-blue-600 font-bold border-b-4 border-blue-600': pathname === '/admin/protect/volunteers'}
                                            )} color="foreground" href="/admin/protect/volunteers">
                                                Volunteers
                                            </Link>
                                        </NavbarItem>
                                        <NavbarItem>
                                            <Link className={cn(
                                                {'text-blue-600 font-bold border-b-4 border-blue-600': pathname === '/admin/protect/mail/inbox'}
                                            )} color="foreground" href="/admin/protect/mail/inbox">
                                                <div className="flex gap-4 items-center">
                                                    <Badge color="warning" content="3" variant="faded" size="sm" shape="circle">
                                                        Mails
                                                    </Badge>
                                                </div>
                                            </Link>
                                        </NavbarItem>
                                    </div>
                                }
                                <NavbarItem>
                                    <Link className={cn(
                                        {'text-blue-600 font-bold border-b-4 border-blue-600': (pathname === '/admin/protect/profile' || pathname === '/volunteer/protect/profile')}
                                    )} color="foreground"
                                          href={`${user.userType === "ADMIN" ? '/admin/protect/profile' : '/volunteer/protect/profile'}`}>
                                        Profile
                                    </Link>
                                </NavbarItem>
                            </NavbarContent>

                            <NavbarContent as="div" justify="end">
                                <Dropdown placement="bottom-end">
                                    <DropdownTrigger>
                                        <div className="flex gap-4 items-center">
                                            <Badge color="danger" content="5" shape="circle">
                                                <Avatar
                                                    isBordered
                                                    as="button"
                                                    className="transition-transform"
                                                    color="secondary"
                                                    name="Jason Hughes"
                                                    size="sm"
                                                    src={user?.image}
                                                />
                                            </Badge>
                                        </div>
                                    </DropdownTrigger>
                                    <DropdownMenu aria-label="Profile Actions" variant="flat">
                                        <DropdownItem key="profile"
                                                      onClick={() => router.push(user.userType === "ADMIN" ? '/admin/protect/profile' : '/volunteer/protect/profile')}
                                                      className="h-14 gap-2">
                                            <p className="font-semibold">{user?.email}</p>
                                            <p>{user?.name}</p>
                                        </DropdownItem>
                                        <DropdownItem key="notification">
                                            <DrawerTrigger asChild>
                                                <p className="font-semibold my-2">Notifications</p>
                                            </DrawerTrigger>

                                        </DropdownItem>
                                        <DropdownItem key="logout" color="danger" className='text-red-900'
                                                      onClick={() => signOut()}>
                                            Log Out
                                        </DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
                            </NavbarContent>
                        </Navbar>
                    </CardBody>
                </Card>
                <DrawerContent className="right-0 left-auto h-full">
                    <div className="max-w-xs">
                        <DrawerHeader>
                            <DrawerTitle className="text-center text-yellow-500">Notification Center</DrawerTitle>
                        </DrawerHeader>
                        <div className="p-1 h-full flex flex-col gap-1 overflow-y-auto">
                            <Card className="p-2 space-y-2 hover:bg-muted/80 transition-colors">
                                <h3 className="text-sm font-semibold">Signup Message</h3>
                                <p className="text-xs">Your have signup at 12 of march 2025.</p>
                            </Card>

                            <Card className="p-2 space-y-2 hover:bg-muted/80 transition-colors">
                                <h3 className="text-sm font-semibold">Activation Message</h3>
                                <p className="text-xs">Your have activated on 20 of march 2025.</p>
                            </Card>

                        </div>
                        <DrawerFooter>
                            <DrawerClose asChild>
                                <Button className="w-fit px-3 !py-2 hover:bg-zinc-800" variant="outline"><XIcon/></Button>
                            </DrawerClose>
                        </DrawerFooter>
                    </div>
                </DrawerContent>
            </Drawer>
        </>

    );
}
