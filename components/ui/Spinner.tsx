import {Spinner} from "@heroui/react";

export default function SpinnerSection() {

    return <>
      <div className="h-full min-h-64 w-full flex justify-center items-center">
          <Spinner classNames={{label: "text-foreground mt-1"}} label="Loading ..." variant="spinner"  />
      </div>
    </>
}
