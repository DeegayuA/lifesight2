import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    Link,
    DropdownItem,
    DropdownTrigger,
    Dropdown,
    DropdownMenu,
    Avatar, Card, CardBody,
} from "@heroui/react";
import {signOut} from "next-auth/react";
import {LoggedUser} from "@/components/user-provider";

export const AcmeLogo = () => {
    return (
        <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
            <path
                clipRule="evenodd"
                d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
                fill="currentColor"
                fillRule="evenodd"
            />
        </svg>
    );
};

export default function Header({className}: {className: string}) {
    const { user } = LoggedUser();

    return (
        <Card className={className + ' rounded-none'}>
            <CardBody className='py-0'>
                <Navbar>
                    <NavbarBrand>
                        <AcmeLogo />
                        <p className="font-bold text-inherit">ACME</p>
                    </NavbarBrand>

                    <NavbarContent className="hidden sm:flex gap-4" justify="center">
                        <NavbarItem >
                            <Link color="foreground" href="#">
                                Dashboard
                            </Link>
                        </NavbarItem>
                        <NavbarItem isActive>
                            <Link aria-current="page" color="foreground" href="#">
                                Blinders
                            </Link>
                        </NavbarItem>
                        <NavbarItem>
                            <Link color="foreground" href="#">
                                profile
                            </Link>
                        </NavbarItem>
                    </NavbarContent>

                    <NavbarContent as="div" justify="end">
                        <Dropdown placement="bottom-end">
                            <DropdownTrigger>
                                <Avatar
                                    isBordered
                                    as="button"
                                    className="transition-transform"
                                    color="secondary"
                                    name="Jason Hughes"
                                    size="sm"
                                    src={user?.image}
                                />
                            </DropdownTrigger>
                            <DropdownMenu aria-label="Profile Actions" variant="flat">
                                <DropdownItem key="profile" className="h-14 gap-2">
                                    <p className="font-semibold">Signed in as</p>
                                    <p className="font-semibold">{user?.email}</p>
                                    <p>{user?.name}</p>
                                </DropdownItem>
                                <DropdownItem key="logout" color="danger" className='text-red-900' onClick={() => signOut()}>
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
