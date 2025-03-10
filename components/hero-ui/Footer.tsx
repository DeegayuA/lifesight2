import {Card, CardBody} from "@heroui/react";

export default function Footer({className}: {className: string}) {
    return (
        <Card className={className + ' rounded-none'}>
            <CardBody className='py-1'>
                <p className='text-center text-xs '>Hero UI Design ©2025</p>
            </CardBody>
        </Card>
    );
}
