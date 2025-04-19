import {Card, CardBody} from "@heroui/react";

export default function Footer({className}: {className: string}) {
    return (
        <Card className={className + ' rounded-none'}>
            <CardBody className='py-1'>
                <p className='text-center text-xs '> ©2025 - FGS/MIT/2024 Batch Team 5</p>
            </CardBody>
        </Card>
    );
}
