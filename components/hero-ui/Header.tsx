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

export default function Header({className}: { className: string }) {
    const router = useRouter()
    const pathname = usePathname();
    const {user} = LoggedUser();

    return (
        <Card className={className + ' rounded-none'}>
            <CardBody className='py-0'>
                <Navbar>
                    <NavbarBrand className="flex gap-1">
                        <Image
                            src="/images/logo/lifesight-logo.jpeg"
                            alt="LifeSight logo"
                            height={35}
                            width={35}
                            className="rounded-lg"
                        />
                        <p className="font-bold text-xl text-inherit">LifeSight</p>
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
                                    <p className="font-semibold my-2">Notifications</p>
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

    );
}
